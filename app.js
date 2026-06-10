const DRUGS = window.PERIOP_DRUGS || [];
const $ = id => document.getElementById(id);
let currentCategory = 'common';
let visibleRows = [];

const CLASS_COLORS = {
  'Common': 'common',
  'Hypnotic': 'hypnotic',
  'Sedative': 'sedative',
  'Opioid': 'opioid',
  'Neuromuscular blocker': 'nmb',
  'Reversal/rescue': 'reversal',
  'Pressor/inotrope': 'pressor',
  'Antihypertensive/vasodilator': 'vasodilator',
  'Antiemetic/GI': 'antiemetic',
  'Analgesic adjunct': 'analgesic',
  'Local anesthetic': 'local',
  'Volatile/inhaled': 'volatile',
  'Antibiotic': 'antibiotic',
  'Coagulation/reversal': 'coag',
  'Electrolyte/metabolic': 'electrolyte',
  'OB uterotonic': 'ob',
  'Pulmonary': 'pulmonary',
  'Neuro/rescue': 'neuro',
  'Steroid/endocrine': 'steroid',
  'Fluid/blood adjunct': 'fluid',
  'Rescue/other': 'other'
};

function round(x) {
  if (!Number.isFinite(x)) return '';
  const ax = Math.abs(x);
  if (ax >= 1000) return Math.round(x).toString();
  if (ax >= 100) return Math.round(x).toString();
  if (ax >= 10) return (Math.round(x * 10) / 10).toString();
  if (ax >= 1) return (Math.round(x * 100) / 100).toString();
  return (Math.round(x * 1000) / 1000).toString();
}
function practical(x, unit) {
  if (!Number.isFinite(x)) return '';
  let step = 1;
  if (unit.includes('mcg')) {
    if (x >= 1000) step = 100;
    else if (x >= 100) step = 25;
    else if (x >= 10) step = 5;
    else step = 1;
  } else if (unit.includes('mg')) {
    if (x >= 500) step = 50;
    else if (x >= 100) step = 10;
    else if (x >= 20) step = 5;
    else if (x >= 5) step = 1;
    else step = 0.1;
  } else if (unit.includes('unit')) {
    step = x >= 10 ? 5 : 1;
  } else {
    step = x >= 10 ? 1 : 0.1;
  }
  return round(Math.round(x / step) * step);
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
function practicalRange(a,b,unit) { return (b === undefined || a === b) ? practical(a, unit) : `${practical(a, unit)}-${practical(b, unit)}`; }
function outUnit(unit) { return unit.split('/')[0].replace(' fixed',''); }
function macAge(mac40, age) { return mac40 * Math.pow(10, -0.00269 * (age - 40)); }
function calcOne(dose, p, override) {
  const scalar = override === 'asWritten' ? (dose.scalar || 'Titrated') : override;
  const unit = dose.unit || '';
  const wt = scalarWeight(p, scalar);
  const mn = Number(dose.min ?? 0), mx = Number(dose.max ?? mn);
  if (unit === 'MAC_age') {
    const mac = macAge(mn, p.age);
    const lo = mac * 0.7, hi = mac * 1.3;
    return {scalar:'Age MAC', text:`1.0 MAC: ${round(mac)}% ET\n0.7-1.3 MAC: ${round(lo)}-${round(hi)}% ET`, rounded:`${practical(mac, '%')}% ET`, math:`MAC_age = MAC40 ${round(mn)} x 10^(-0.00269 x (${round(p.age)} - 40))`};
  }
  if (unit === 'custom') return {scalar:'Custom', text:dose.label, rounded:'see protocol', math:'protocol/lab/indication dependent'};
  if (unit === 'titrated') return {scalar:'Titrated', text:dose.label, rounded:'titrate', math:'titrate to clinical effect'};
  if (['mg/kg','mcg/kg','g/kg','mEq/kg','units/kg','mL/kg'].includes(unit) && wt) {
    const a = mn * wt, b = mx * wt;
    return {scalar, text:`${rangeText(a,b)} ${outUnit(unit)}`, rounded:`${practicalRange(a,b,outUnit(unit))} ${outUnit(unit)}`, math:`${rangeText(mn,mx)} ${unit} x ${round(wt)} kg ${scalar}`};
  }
  if (['mcg/kg/min','mg/kg/min','units/kg/min'].includes(unit) && wt) {
    const u = unit.replace('/kg',''); const a = mn * wt, b = mx * wt;
    return {scalar, text:`${rangeText(a,b)} ${u}`, rounded:`${practicalRange(a,b,u)} ${u}`, math:`${rangeText(mn,mx)} ${unit} x ${round(wt)} kg ${scalar}`};
  }
  if (['mcg/kg/hr','mg/kg/hr','units/kg/hr'].includes(unit) && wt) {
    const u = unit.replace('/kg',''); const a = mn * wt, b = mx * wt;
    return {scalar, text:`${rangeText(a,b)} ${u}`, rounded:`${practicalRange(a,b,u)} ${u}`, math:`${rangeText(mn,mx)} ${unit} x ${round(wt)} kg ${scalar}`};
  }
  if (unit.includes('fixed') || ['Fixed'].includes(scalar)) {
    return {scalar:'Fixed', text:`${rangeText(mn,mx)} ${outUnit(unit)}`, rounded:`${practicalRange(mn,mx,outUnit(unit))} ${outUnit(unit)}`, math:'not weight based'};
  }
  if (['MAC %','% inspired','ppm','mg/hr'].includes(unit)) {
    return {scalar:'Titrated', text:dose.label, rounded:'titrate', math:'titrate to clinical effect'};
  }
  return {scalar, text:dose.label, rounded:'see note', math:'see dosing note'};
}
function calcDrug(drug, p) {
  const override = $('scalarOverride').value;
  const lines = [], rounded = [], maths = [], scalars = [];
  (drug.doses || []).forEach(d => {
    const c = calcOne(d, p, override);
    const label = d.name && d.name !== 'Adult' ? d.name : 'Dose';
    lines.push(`${label}: ${c.text}`);
    rounded.push(`${label}: ${c.rounded}`);
    maths.push(`${label}: ${c.math}`);
    scalars.push(c.scalar);
  });
  return {text: lines.join('\n'), rounded: rounded.join('\n'), math: maths.join('\n'), scalar: [...new Set(scalars)].join(', ')};
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
function categoryList() { return [...new Set(DRUGS.map(d => d.displayClass || d.category).filter(Boolean))].sort(); }
function badge(text, extraClass) { const cls = CLASS_COLORS[text] || CLASS_COLORS[extraClass] || 'other'; return `<span class="pill ${cls}">${esc(text)}</span>`; }
function renderMetrics(p) {
  const metrics = [['BMI', p.bmi], ['IBW kg', p.ibw], ['LBW kg', p.lbw], ['AdjBW kg', p.adjbw], ['BSA m2', p.bsa], ['CG CrCl', p.crcl]];
  $('metrics').innerHTML = metrics.map(([k,v]) => `<div class="metric">${esc(k)}<br><b>${round(v)}</b></div>`).join('');
  const warnings = [];
  if (p.bmi >= 30) warnings.push('Obesity flag: review each drug scalar. ABW, IBW, LBW, and AdjBW are not interchangeable.');
  if (p.crcl < 60 || p.renal !== 'normal') warnings.push('Renal flag: active metabolites, aminoglycosides, NMB duration, anticoagulants, and electrolytes require verification.');
  if (p.ef < 40 || p.shock) warnings.push('Cardiac/shock flag: induction dose and vasodilators should be titrated carefully.');
  if (p.qt) warnings.push('QT flag: review methadone, ondansetron, droperidol, haloperidol, amiodarone, and electrolyte strategy.');
  if (p.mh) warnings.push('MH flag: volatile agents and succinylcholine are highlighted.');
  $('caseWarnings').innerHTML = warnings.map(w => `<div class="case-warning">${esc(w)}</div>`).join('');
}
function renderTabs() {
  const tabs = ['common', 'pediatric', 'all', ...categoryList()];
  $('classTabs').innerHTML = tabs.map(c => `<button class="tab ${currentCategory===c?'active':''} ${CLASS_COLORS[c]||''}" data-cat="${esc(c)}">${esc(c === 'common' ? 'Common' : c === 'pediatric' ? 'Pediatric dosing' : c)}</button>`).join('');
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
  const pedsMode = currentCategory === 'pediatric';
  DRUGS.forEach((drug, idx) => {
    const calc = calcDrug(drug, p); const fl = flags(drug,p); if (fl.length) flagTotal++;
    const hay = JSON.stringify(drug).toLowerCase();
    const group = drug.displayClass || drug.category;
    if (currentCategory === 'common' && !drug.common) return;
    if (currentCategory !== 'all' && currentCategory !== 'common' && currentCategory !== 'pediatric' && group !== currentCategory) return;
    if (q && !hay.includes(q)) return;
    const scalars = (drug.doses || []).map(d => d.scalar || drug.defaultScalar || '').join(' ');
    if (mode === 'flagged' && fl.length === 0) return;
    if (mode === 'weight' && !/(ABW|IBW|LBW|AdjBW)/.test(scalars)) return;
    if (mode === 'fixed' && !/(Fixed)/.test(scalars)) return;
    if (mode === 'audit' && !/audit|placeholder|not verified|starter/i.test(`${drug.sourceStatus} ${drug.millerPage}`)) return;
    visibleRows.push({idx:idx+1, drug, calc, fl});
    const route = [...new Set((drug.doses||[]).map(d=>d.route||''))].join(', ');
    const general = (drug.doses||[]).map(d => `${d.name || 'Dose'}: ${d.label}`.replace(/^Adult: /,'')).join('\n');
    const tr = document.createElement('tr'); if (fl.length) tr.className = 'row-flagged';
    tr.innerHTML = `<td class="tbody-pin1">${idx+1}</td>
      <td class="tbody-pin2"><button class="drug-button" data-id="${esc(drug.id)}"><span class="drug-name">${esc(drug.name)}</span></button><div class="tagline">${drug.common ? badge('Common') : ''}</div></td>
      <td>${badge(group)}</td>
      <td>${esc(drug.moa)}</td>
      <td>${esc(route)}</td>
      <td class="dose">${esc(general)}</td>
      <td><b>${esc(calc.scalar)}</b></td>
      <td class="calc">${esc(calc.text)}</td>
      <td class="rounded">${esc(calc.rounded)}</td>
      <td class="math">${esc(calc.math)}</td>
      <td>${pedsMode ? `<div class="peds-dose">${esc(drug.pediatricDosing)}</div>` : esc(drug.pediatricDosing)}</td>
      <td>${esc(drug.metabolism)}</td>
      <td>${esc(drug.excretion)}</td>
      <td>${esc(drug.duration)}</td>
      <td>${esc(drug.obesityConsiderations)}</td>
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
  const p = patient(); const calc = calcDrug(drug,p); const fl=flags(drug,p); const group = drug.displayClass || drug.category;
  $('drawerContent').innerHTML = `<h2>${esc(drug.name)}</h2><div class="detail-grid">
    <div>Class</div><div>${badge(group)} ${drug.common ? badge('Common') : ''}</div>
    <div>MOA</div><div>${esc(drug.moa)}</div>
    <div>General adult dosing</div><div class="dose">${esc((drug.doses||[]).map(d=>`${d.name || 'Dose'}: ${d.label}`.replace(/^Adult: /,'')).join('\n'))}</div>
    <div>Patient dose</div><div class="calc">${esc(calc.text)}</div>
    <div>Rounded dose</div><div class="rounded">${esc(calc.rounded)}</div>
    <div>Dose math</div><div class="math">${esc(calc.math)}</div>
    <div>Pediatric dosing</div><div>${esc(drug.pediatricDosing)}</div>
    <div>Metabolism</div><div>${esc(drug.metabolism)}</div>
    <div>Excretion</div><div>${esc(drug.excretion)}</div>
    <div>Duration</div><div>${esc(drug.duration)}</div>
    <div>Obesity considerations</div><div>${esc(drug.obesityConsiderations)}</div>
    <div>Flags</div><div>${fl.length ? fl.map(x=>`<span class="flag">${esc(x)}</span>`).join('') : 'none'}</div>
    <div>Cautions</div><div>${esc(drug.cautions)}</div>
    <div>Contraindications</div><div>${esc(drug.contraindications)}</div>
    <div>Source</div><div>${esc(drug.millerRef)}<br>${esc(drug.millerPage)}<br>${esc(drug.sourceStatus)}</div>
  </div>`;
  $('drawer').classList.remove('hidden');
}
function exportCSV() {
  const rows = [['#','Drug','Class','MOA','Route','General dose','Scalar','Patient dose','Rounded dose','Math','Pediatric dosing','Metabolism','Excretion','Duration','Obesity considerations','Flags','Cautions','Contraindications','Source']];
  visibleRows.forEach(r => rows.push([r.idx,r.drug.name,r.drug.displayClass||r.drug.category,r.drug.moa,(r.drug.doses||[]).map(d=>d.route).join('; '),(r.drug.doses||[]).map(d=>d.label).join('; '),r.calc.scalar,r.calc.text,r.calc.rounded,r.calc.math,r.drug.pediatricDosing,r.drug.metabolism,r.drug.excretion,r.drug.duration,r.drug.obesityConsiderations,r.fl.join('; '),r.drug.cautions,r.drug.contraindications,r.drug.millerRef]));
  downloadText(rows.map(row => row.map(v => '"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\n'), 'periop_drug_grid_visible.csv', 'text/csv');
}
function downloadText(text, name, type) { const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([text],{type})); a.download=name; a.click(); URL.revokeObjectURL(a.href); }
function setDefaultPatient() {
  $('age').value=40; $('sex').value='male'; $('height').value=193; $('weight').value=100; $('scr').value=1.0; $('ef').value=60;
  $('renal').value='normal'; $('hepatic').value='normal'; ['frail','osa','pregnant','qt','mh','shock','neuraxial'].forEach(id=>$(id).checked=false);
}
function setup() {
  $('category').innerHTML = '<option value="common">Common</option><option value="pediatric">Pediatric dosing</option><option value="all">all classes</option>' + categoryList().map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
  $('category').value = 'common';
  document.querySelectorAll('input,select').forEach(el => el.addEventListener('input', render));
  $('clearFilters').addEventListener('click', () => {$('search').value=''; $('category').value='common'; $('displayMode').value='all'; $('scalarOverride').value='asWritten'; currentCategory='common'; render();});
  $('exportCsv').addEventListener('click', exportCSV);
  $('exportJson').addEventListener('click', () => downloadText(JSON.stringify(DRUGS,null,2),'periop_drug_database_v3.json','application/json'));
  $('resetCase').addEventListener('click', () => { setDefaultPatient(); render(); });
  $('closeDrawer').addEventListener('click', () => $('drawer').classList.add('hidden'));
  $('drawer').addEventListener('click', e => { if (e.target.id === 'drawer') $('drawer').classList.add('hidden'); });
  render();
}
setup();
