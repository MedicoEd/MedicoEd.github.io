const DRUGS = window.PERIOP_DRUGS || [];
const $ = id => document.getElementById(id);
let currentCategory = 'all';
let visibleRows = [];

function round(x) {
  if (!Number.isFinite(x)) return '';
  const ax = Math.abs(x);
  if (ax >= 1000) return Math.round(x).toString();
  if (ax >= 100) return Math.round(x).toString();
  if (ax >= 10) return (Math.round(x * 10) / 10).toString();
  if (ax >= 1) return (Math.round(x * 100) / 100).toString();
  return (Math.round(x * 1000) / 1000).toString();
}
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function patient() {
  const sex = $('sex').value;
  const age = Number($('age').value);
  const h = Number($('height').value);
  const w = Number($('weight').value);
  const scr = Number($('scr').value);
  const inches = h / 2.54;
  const over = Math.max(0, inches - 60);
  const ibw = Math.max(1, (sex === 'male' ? 50 : 45.5) + 2.3 * over);
  const bmi = w / ((h / 100) ** 2);
  const lbw = sex === 'male' ? (9270 * w) / (6680 + 216 * bmi) : (9270 * w) / (8780 + 244 * bmi);
  const adjbw = ibw + 0.4 * Math.max(0, w - ibw);
  const bsa = Math.sqrt(h * w / 3600);
  const crcl = ((140 - age) * w * (sex === 'female' ? 0.85 : 1)) / (72 * Math.max(scr, 0.1));
  return {sex, age, h, w, scr, ibw, lbw, adjbw, bsa, bmi, crcl, ef: Number($('ef').value), renal: $('renal').value, hepatic: $('hepatic').value, frail: $('frail').checked, osa: $('osa').checked, pregnant: $('pregnant').checked, qt: $('qt').checked, mh: $('mh').checked, shock: $('shock').checked, neuraxial: $('neuraxial').checked};
}
function scalarWeight(p, scalar) {
  if (scalar === 'ABW') return p.w;
  if (scalar === 'IBW') return p.ibw;
  if (scalar === 'LBW') return p.lbw;
  if (scalar === 'AdjBW') return p.adjbw;
  return null;
}
function rangeText(a,b) { return (b === undefined || a === b) ? round(a) : `${round(a)}-${round(b)}`; }
function outUnit(unit) { return unit.split('/')[0].replace(' fixed',''); }
function calcOne(dose, p, override) {
  const scalar = override === 'asWritten' ? (dose.scalar || 'Titrated') : override;
  const unit = dose.unit || '';
  const wt = scalarWeight(p, scalar);
  const mn = Number(dose.min ?? 0), mx = Number(dose.max ?? mn);
  if (unit === 'custom') return {scalar:'Custom', text:dose.label, math:'protocol/lab/indication dependent'};
  if (unit === 'titrated') return {scalar:'Titrated', text:dose.label, math:'titrate to clinical effect'};
  if (['mg/kg','mcg/kg','g/kg','mEq/kg','units/kg','mL/kg'].includes(unit) && wt) {
    return {scalar, text:`${rangeText(mn*wt,mx*wt)} ${outUnit(unit)}`, math:`${rangeText(mn,mx)} ${unit} x ${round(wt)} kg ${scalar}`};
  }
  if (['mcg/kg/min','mg/kg/min','units/kg/min'].includes(unit) && wt) {
    const u = unit.replace('/kg','');
    return {scalar, text:`${rangeText(mn*wt,mx*wt)} ${u}`, math:`${rangeText(mn,mx)} ${unit} x ${round(wt)} kg ${scalar}`};
  }
  if (['mcg/kg/hr','mg/kg/hr','units/kg/hr'].includes(unit) && wt) {
    const u = unit.replace('/kg','');
    return {scalar, text:`${rangeText(mn*wt,mx*wt)} ${u}`, math:`${rangeText(mn,mx)} ${unit} x ${round(wt)} kg ${scalar}`};
  }
  if (unit.includes('fixed') || ['Fixed'].includes(scalar)) {
    return {scalar:'Fixed', text:`${rangeText(mn,mx)} ${outUnit(unit)}`, math:'not weight based'};
  }
  if (['MAC %','% inspired','ppm','mg/hr'].includes(unit)) {
    return {scalar:'Titrated', text:dose.label, math:'titrate to clinical effect'};
  }
  return {scalar, text:dose.label, math:'see dosing note'};
}
function calcDrug(drug, p) {
  const override = $('scalarOverride').value;
  const lines = [], maths = [], scalars = [];
  (drug.doses || []).forEach(d => {
    const c = calcOne(d, p, override);
    lines.push(`${d.name || 'Dose'}: ${c.text}`);
    maths.push(`${d.name || 'Dose'}: ${c.math}`);
    scalars.push(c.scalar);
  });
  return {text: lines.join('\n'), math: maths.join('\n'), scalar: [...new Set(scalars)].join(', ')};
}
function flags(drug, p) {
  const f = [];
  const text = JSON.stringify(drug).toLowerCase();
  if ((p.age >= 70 || p.frail) && /(elderly|frail|delirium|sedation|respiratory|hypotension|opioid|benzodiazepine|anticholinergic)/.test(text)) f.push('frailty/elderly');
  if ((p.ef < 40 || p.shock) && /(hypotension|shock|cardiac|heart failure|lv|negative inotropy|bradycardia|tachycardia|ischemia|pressor|vasodilation)/.test(text)) f.push('cardiac/shock');
  if (p.osa && /(respiratory|osa|ohs|sedation|opioid|apnea|hypoventilation|airway)/.test(text)) f.push('OSA/OHS');
  if (p.qt && /(qt|ondansetron|droperidol|haloperidol|methadone|amiodarone|antiemetic)/.test(text)) f.push('QT');
  if (p.mh && /(sevoflurane|desflurane|isoflurane|succinylcholine|volatile|mh trigger|malignant hyperthermia)/.test(text)) f.push('MH');
  if ((p.renal !== 'normal' || p.crcl < 60) && /(renal|kidney|nephro|metabolite|clearance|esrd|ckd|dialysis)/.test(text)) f.push('renal');
  if (p.hepatic !== 'normal' && /(hepatic|liver|cyp|metabolism|failure)/.test(text)) f.push('hepatic');
  if (p.pregnant && /(pregnan|ob|uter|fetal|neonate|placenta|tocolysis)/.test(text)) f.push('pregnancy/OB');
  if (p.neuraxial && /(heparin|anticoag|antiplatelet|aspirin|cangrelor|bivalirudin|coagulation)/.test(text)) f.push('neuraxial anticoag');
  return [...new Set(f)];
}
function categoryList() { return [...new Set(DRUGS.map(d => d.category))].sort(); }
function renderMetrics(p) {
  const metrics = [['BMI', p.bmi], ['IBW kg', p.ibw], ['LBW kg', p.lbw], ['AdjBW kg', p.adjbw], ['BSA m2', p.bsa], ['CG CrCl', p.crcl]];
  $('metrics').innerHTML = metrics.map(([k,v]) => `<div class="metric">${esc(k)}<br><b>${round(v)}</b></div>`).join('');
  const warnings = [];
  if (p.bmi >= 35) warnings.push('Obesity flag: verify ABW vs IBW vs LBW vs AdjBW for each drug.');
  if (p.crcl < 60 || p.renal !== 'normal') warnings.push('Renal flag: active metabolites, aminoglycosides, NMB duration, anticoagulants, and electrolytes require verification.');
  if (p.ef < 40 || p.shock) warnings.push('Cardiac/shock flag: induction dose and vasodilators should be titrated carefully.');
  if (p.qt) warnings.push('QT flag: review methadone, ondansetron, droperidol, haloperidol, amiodarone, and electrolyte strategy.');
  if (p.mh) warnings.push('MH flag: volatile agents and succinylcholine are highlighted.');
  $('caseWarnings').innerHTML = warnings.map(w => `<div class="case-warning">${esc(w)}</div>`).join('');
}
function renderTabs() {
  const tabs = ['all', ...categoryList()];
  $('classTabs').innerHTML = tabs.map(c => `<button class="tab ${currentCategory===c?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
  document.querySelectorAll('.tab').forEach(b => b.addEventListener('click', () => { currentCategory = b.dataset.cat; $('category').value = currentCategory; render(); }));
}
function render() {
  const p = patient(); renderMetrics(p);
  const q = $('search').value.trim().toLowerCase();
  currentCategory = $('category').value;
  const mode = $('displayMode').value;
  const tbody = $('drugTable').querySelector('tbody');
  tbody.innerHTML = ''; visibleRows = [];
  let flagTotal = 0;
  DRUGS.forEach((drug, idx) => {
    const calc = calcDrug(drug, p); const fl = flags(drug,p); if (fl.length) flagTotal++;
    const hay = JSON.stringify(drug).toLowerCase();
    if (currentCategory !== 'all' && drug.category !== currentCategory) return;
    if (q && !hay.includes(q)) return;
    const scalars = (drug.doses || []).map(d => d.scalar || drug.defaultScalar || '').join(' ');
    if (mode === 'flagged' && fl.length === 0) return;
    if (mode === 'weight' && !/(ABW|IBW|LBW|AdjBW)/.test(scalars)) return;
    if (mode === 'fixed' && !/(Fixed)/.test(scalars)) return;
    if (mode === 'audit' && !/audit|placeholder|not verified|starter/i.test(`${drug.sourceStatus} ${drug.millerPage}`)) return;
    visibleRows.push({idx:idx+1, drug, calc, fl});
    const route = [...new Set((drug.doses||[]).map(d=>d.route||''))].join(', ');
    const general = (drug.doses||[]).map(d => `${d.name || 'Dose'}: ${d.label}`).join('\n');
    const tr = document.createElement('tr'); if (fl.length) tr.className = 'row-flagged';
    tr.innerHTML = `<td class="tbody-pin1">${idx+1}</td>
      <td class="tbody-pin2"><button class="drug-button" data-id="${esc(drug.id)}"><span class="drug-name">${esc(drug.name)}</span></button></td>
      <td>${esc(drug.class)}</td>
      <td><span class="pill">${esc(drug.category)}</span></td>
      <td>${esc(drug.moa)}</td>
      <td>${esc(route)}</td>
      <td class="dose">${esc(general)}</td>
      <td><b>${esc(calc.scalar)}</b></td>
      <td class="calc">${esc(calc.text)}</td>
      <td class="math">${esc(calc.math)}</td>
      <td>${fl.length ? fl.map(x=>`<span class="flag">${esc(x)}</span>`).join('') : '<span class="muted">none</span>'}</td>
      <td>${esc(drug.cautions)}</td>
      <td>${esc(drug.contraindications)}</td>
      <td>${esc(drug.millerRef)}<br><span class="muted small">${esc(drug.millerPage)}; ${esc(drug.sourceStatus)}</span></td>`;
    tbody.appendChild(tr);
  });
  $('visibleCount').textContent = visibleRows.length;
  $('totalCount').textContent = DRUGS.length;
  $('flagCount').textContent = flagTotal;
  document.querySelectorAll('.drug-button').forEach(b => b.addEventListener('click', () => openDrawer(b.dataset.id)));
  renderTabs();
}
function openDrawer(id) {
  const drug = DRUGS.find(d => d.id === id); if (!drug) return;
  const p = patient(); const calc = calcDrug(drug,p); const fl=flags(drug,p);
  $('drawerContent').innerHTML = `<h2>${esc(drug.name)}</h2><div class="detail-grid">
    <div>Class</div><div>${esc(drug.class)}</div>
    <div>MOA</div><div>${esc(drug.moa)}</div>
    <div>Use</div><div>${esc(drug.category)}</div>
    <div>General dosing</div><div class="dose">${esc((drug.doses||[]).map(d=>`${d.name || 'Dose'}: ${d.label}`).join('\n'))}</div>
    <div>Patient dose</div><div class="calc">${esc(calc.text)}</div>
    <div>Dose math</div><div class="math">${esc(calc.math)}</div>
    <div>Flags</div><div>${fl.length ? fl.map(x=>`<span class="flag">${esc(x)}</span>`).join('') : 'none'}</div>
    <div>Cautions</div><div>${esc(drug.cautions)}</div>
    <div>Contraindications</div><div>${esc(drug.contraindications)}</div>
    <div>Source</div><div>${esc(drug.millerRef)}<br>${esc(drug.millerPage)}<br>${esc(drug.sourceStatus)}</div>
  </div>`;
  $('drawer').classList.remove('hidden');
}
function exportCSV() {
  const rows = [['#','Drug','Class','Use','MOA','Route','General dose','Scalar','Patient dose','Math','Flags','Cautions','Contraindications','Source']];
  visibleRows.forEach(r => rows.push([r.idx,r.drug.name,r.drug.class,r.drug.category,r.drug.moa,(r.drug.doses||[]).map(d=>d.route).join('; '),(r.drug.doses||[]).map(d=>d.label).join('; '),r.calc.scalar,r.calc.text,r.calc.math,r.fl.join('; '),r.drug.cautions,r.drug.contraindications,r.drug.millerRef]));
  downloadText(rows.map(row => row.map(v => '"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\n'), 'periop_drug_grid_visible.csv', 'text/csv');
}
function downloadText(text, name, type) { const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([text],{type})); a.download=name; a.click(); URL.revokeObjectURL(a.href); }
function setup() {
  $('category').innerHTML = '<option value="all">all classes</option>' + categoryList().map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
  document.querySelectorAll('input,select').forEach(el => el.addEventListener('input', render));
  $('clearFilters').addEventListener('click', () => {$('search').value=''; $('category').value='all'; $('displayMode').value='all'; $('scalarOverride').value='asWritten'; currentCategory='all'; render();});
  $('exportCsv').addEventListener('click', exportCSV);
  $('exportJson').addEventListener('click', () => downloadText(JSON.stringify(DRUGS,null,2),'periop_drug_database.json','application/json'));
  $('resetCase').addEventListener('click', () => { $('age').value=60; $('sex').value='male'; $('height').value=178; $('weight').value=90; $('scr').value=1.0; $('ef').value=60; $('renal').value='normal'; $('hepatic').value='normal'; ['frail','osa','pregnant','qt','mh','shock','neuraxial'].forEach(id=>$(id).checked=false); render(); });
  $('closeDrawer').addEventListener('click', () => $('drawer').classList.add('hidden'));
  $('drawer').addEventListener('click', e => { if (e.target.id === 'drawer') $('drawer').classList.add('hidden'); });
  render();
}
setup();
