window.PERIOP_DRUGS = [
  {
    "name": "Propofol",
    "class": "Alkylphenol IV hypnotic",
    "moa": "GABA-A positive allosteric modulation; hypnotic-amnestic, no analgesia.",
    "category": "Hypnotic",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Induction 1.5-2.5 mg/kg; sedation 0.5-1 mg/kg; infusion 50-200 mcg/kg/min",
        "route": "IV",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 1.5,
        "max": 2.5,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension, respiratory depression; reduce dose in elderly, shock, severe LV dysfunction.",
    "contraindications": "Hemodynamic collapse without resuscitation plan; egg/soy allergy is not generally absolute but verify formulation/institution.",
    "id": "propofol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Alkylphenol IV hypnotic",
      "Common",
      "Hypnotic"
    ],
    "displayClass": "Hypnotic",
    "common": true,
    "metabolism": "Hepatic conjugation and extrahepatic clearance; inactive metabolites.",
    "excretion": "Renal excretion of inactive metabolites.",
    "duration": "Bolus hypnosis about 5-10 min; context-sensitive recovery increases with infusion duration.",
    "obesityConsiderations": "Dose on LBW or adjusted strategy in obesity; avoid ABW boluses in severe obesity. Titrate to effect, especially with low-flow states.",
    "pediatricDosing": "Peds: induction 2-3 mg/kg IV; sedation/infusion institution-specific, commonly titrated 50-200 mcg/kg/min. Reduce in hemodynamic instability."
  },
  {
    "name": "Etomidate",
    "class": "Imidazole IV hypnotic",
    "moa": "GABA-A positive allosteric modulation.",
    "category": "Hypnotic",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Induction 0.2-0.3 mg/kg",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 0.2,
        "max": 0.3,
        "name": "Adult"
      }
    ],
    "cautions": "Myoclonus, PONV, adrenal steroidogenesis suppression; minimal CV depression.",
    "contraindications": "Relative: sepsis/adrenal insufficiency when alternatives suitable.",
    "id": "etomidate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Hypnotic",
      "Imidazole IV hypnotic"
    ],
    "displayClass": "Hypnotic",
    "common": true,
    "metabolism": "Hepatic and plasma esterase hydrolysis.",
    "excretion": "Urinary and biliary inactive metabolites.",
    "duration": "Hypnosis about 3-5 min after induction dose.",
    "obesityConsiderations": "ABW often acceptable, but use small titrated boluses in severe obesity or shock.",
    "pediatricDosing": "Peds: induction 0.2-0.3 mg/kg IV. Audit adrenal-risk policy."
  },
  {
    "name": "Ketamine",
    "class": "Phencyclidine dissociative anesthetic",
    "moa": "NMDA receptor antagonism with sympathomimetic and analgesic effects.",
    "category": "Hypnotic",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Induction 1-2 mg/kg IV; analgesic 0.1-0.3 mg/kg; infusion 0.05-0.3 mg/kg/hr",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 1,
        "max": 2,
        "name": "Adult"
      }
    ],
    "cautions": "Increases secretions, emergence phenomena, tachycardia/HTN; useful in bronchospasm and shock with preserved catecholamines.",
    "contraindications": "Relative: severe uncontrolled CAD, aortic dissection, uncontrolled HTN, severe psychosis.",
    "id": "ketamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Hypnotic",
      "Hypnotic/analgesic",
      "Phencyclidine dissociative anesthetic"
    ],
    "displayClass": "Hypnotic",
    "common": true,
    "metabolism": "Hepatic CYP metabolism to norketamine.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "IV bolus dissociation about 5-10 min; analgesic effect may last longer.",
    "obesityConsiderations": "Prefer IBW or AdjBW for bolus in obesity; titrate because sympathetic response and emergence effects vary.",
    "pediatricDosing": "Peds: induction 1-2 mg/kg IV or 4-6 mg/kg IM; analgesia 0.1-0.3 mg/kg IV. Consider secretion management."
  },
  {
    "name": "Midazolam",
    "class": "Benzodiazepine",
    "moa": "GABA-A positive allosteric modulation; anxiolysis, amnesia, anticonvulsant.",
    "category": "Sedative",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Premed/sedation 0.01-0.05 mg/kg IV",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.01,
        "max": 0.05,
        "name": "Adult"
      }
    ],
    "cautions": "Synergistic respiratory depression with opioids/propofol; reduce in elderly, OSA, hepatic disease.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "midazolam",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Benzodiazepine",
      "Common",
      "Sedative"
    ],
    "displayClass": "Sedative",
    "common": true,
    "metabolism": "Hepatic CYP3A to active hydroxylated metabolites.",
    "excretion": "Renal excretion of conjugated metabolites; accumulation in renal dysfunction.",
    "duration": "IV anxiolysis/sedation about 15-60 min; longer after repeated dosing.",
    "obesityConsiderations": "Use reduced incremental dosing in obesity, OSA, frailty, and renal dysfunction.",
    "pediatricDosing": "Peds: 0.05-0.1 mg/kg IV titrated; common max single dose 2 mg for anxiolysis in many settings. PO premed often 0.25-0.5 mg/kg."
  },
  {
    "name": "Dexmedetomidine",
    "class": "Alpha-2 agonist sedative",
    "moa": "Central alpha-2 agonism reduces sympathetic outflow; sedation and opioid-sparing analgesia.",
    "category": "Sedative",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Infusion 0.2-0.7 mcg/kg/hr; optional load 0.5-1 mcg/kg over 10 min",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mcg/kg/hr",
        "min": 0.2,
        "max": 0.7,
        "name": "Adult"
      }
    ],
    "cautions": "Bradycardia, hypotension; avoid rapid loading in tenuous cardiac output.",
    "contraindications": "Advanced heart block without pacing; severe bradycardia.",
    "id": "dexmedetomidine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Alpha-2 agonist sedative",
      "Common",
      "Sedative",
      "Sedative adjunct"
    ],
    "displayClass": "Sedative",
    "common": true,
    "metabolism": "Extensive hepatic glucuronidation and CYP metabolism.",
    "excretion": "Urinary excretion of metabolites.",
    "duration": "Distribution half-life minutes; terminal half-life about 2 hr; sedative effect persists after infusion.",
    "obesityConsiderations": "Dose using IBW/AdjBW strategy in obesity; avoid large loading doses if bradycardic or low-flow.",
    "pediatricDosing": "Peds: infusion often 0.2-0.7 mcg/kg/hr titrated; loading dose varies and may cause bradycardia/hypotension."
  },
  {
    "name": "Thiopental",
    "class": "Barbiturate IV hypnotic",
    "moa": "GABA-A facilitation and CNS depression.",
    "category": "Hypnotic",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Induction 3-5 mg/kg",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 3,
        "max": 5,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension, myocardial depression, histamine release less common; rare in current practice.",
    "contraindications": "Acute intermittent porphyria.",
    "id": "thiopental",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Barbiturate IV hypnotic",
      "Hypnotic"
    ],
    "displayClass": "Hypnotic",
    "common": false,
    "metabolism": "Hepatic and/or extrahepatic metabolism depending on agent.",
    "excretion": "Mostly renal/biliary metabolites.",
    "duration": "Short bolus effect; longer after infusion or repeated dosing.",
    "obesityConsiderations": "Use LBW/IBW/AdjBW strategy and titrate to hemodynamics, age, and shock physiology.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Methohexital",
    "class": "Barbiturate IV hypnotic",
    "moa": "GABA-A facilitation; short-acting hypnotic.",
    "category": "Hypnotic",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Induction 1-1.5 mg/kg",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 1,
        "max": 1.5,
        "name": "Adult"
      }
    ],
    "cautions": "Myoclonus/seizure-like activity; commonly used for ECT.",
    "contraindications": "Acute intermittent porphyria.",
    "id": "methohexital",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Barbiturate IV hypnotic",
      "Hypnotic"
    ],
    "displayClass": "Hypnotic",
    "common": false,
    "metabolism": "Hepatic and/or extrahepatic metabolism depending on agent.",
    "excretion": "Mostly renal/biliary metabolites.",
    "duration": "Short bolus effect; longer after infusion or repeated dosing.",
    "obesityConsiderations": "Use LBW/IBW/AdjBW strategy and titrate to hemodynamics, age, and shock physiology.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Fentanyl",
    "class": "Phenylpiperidine opioid agonist",
    "moa": "Mu-opioid receptor agonism.",
    "category": "Opioid",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Analgesic 0.5-2 mcg/kg; high-dose cardiac 10-50 mcg/kg",
        "route": "IV",
        "scalar": "LBW",
        "unit": "mcg/kg",
        "min": 0.5,
        "max": 2,
        "name": "Adult"
      }
    ],
    "cautions": "Respiratory depression, chest wall rigidity with rapid high dose, bradycardia, PONV.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "fentanyl",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Opioid",
      "Phenylpiperidine opioid agonist"
    ],
    "displayClass": "Opioid",
    "common": true,
    "metabolism": "Hepatic CYP3A metabolism to inactive metabolites.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Analgesia about 30-60 min after small bolus; longer with repeated dosing.",
    "obesityConsiderations": "Highly lipophilic; repeated ABW dosing accumulates in adipose. Use LBW/IBW increments and titrate.",
    "pediatricDosing": "Peds: 1-2 mcg/kg IV bolus titrated; higher anesthetic doses are case-specific."
  },
  {
    "name": "Sufentanil",
    "class": "Potent phenylpiperidine opioid",
    "moa": "Mu-opioid receptor agonism.",
    "category": "Opioid",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Bolus 0.1-0.3 mcg/kg; infusion 0.2-1 mcg/kg/hr",
        "route": "IV",
        "scalar": "LBW",
        "unit": "mcg/kg",
        "min": 0.1,
        "max": 0.3,
        "name": "Adult"
      }
    ],
    "cautions": "Profound respiratory depression; high potency requires concentration vigilance.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "sufentanil",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid",
      "Potent phenylpiperidine opioid"
    ],
    "displayClass": "Opioid",
    "common": false,
    "metabolism": "Primarily hepatic metabolism except remifentanil by esterases.",
    "excretion": "Renal/biliary excretion of metabolites varies by agent.",
    "duration": "Minutes to hours depending on lipid solubility and context-sensitive half-time.",
    "obesityConsiderations": "Use conservative titrated dosing in obesity and OSA; avoid unbounded ABW escalation.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "name": "Remifentanil",
    "class": "Ultra-short acting opioid",
    "moa": "Mu agonist; ester hydrolysis by nonspecific tissue/blood esterases.",
    "category": "Opioid",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Infusion 0.05-0.2 mcg/kg/min typical; induction adjunct 0.5-1 mcg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mcg/kg/min",
        "min": 0.05,
        "max": 0.2,
        "name": "Adult"
      }
    ],
    "cautions": "Profound bradycardia/hypotension and apnea; hyperalgesia/acute tolerance possible.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "remifentanil",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Opioid",
      "Opioid infusion",
      "Ultra-short acting opioid"
    ],
    "displayClass": "Opioid",
    "common": true,
    "metabolism": "Rapid nonspecific plasma and tissue esterase metabolism.",
    "excretion": "Renal excretion of inactive metabolite.",
    "duration": "Offset 3-10 min, largely context independent.",
    "obesityConsiderations": "Often dosed to LBW or adjusted weight in obesity; titrate to respiratory/hemodynamic effect.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "name": "Alfentanil",
    "class": "Short-acting phenylpiperidine opioid",
    "moa": "Mu-opioid receptor agonism.",
    "category": "Opioid",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Bolus 5-20 mcg/kg",
        "route": "IV",
        "scalar": "LBW",
        "unit": "mcg/kg",
        "min": 5,
        "max": 20,
        "name": "Adult"
      }
    ],
    "cautions": "Respiratory depression; CYP3A metabolism; context-sensitive accumulation with infusion.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "alfentanil",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid",
      "Short-acting phenylpiperidine opioid"
    ],
    "displayClass": "Opioid",
    "common": false,
    "metabolism": "Primarily hepatic metabolism except remifentanil by esterases.",
    "excretion": "Renal/biliary excretion of metabolites varies by agent.",
    "duration": "Minutes to hours depending on lipid solubility and context-sensitive half-time.",
    "obesityConsiderations": "Use conservative titrated dosing in obesity and OSA; avoid unbounded ABW escalation.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "name": "Morphine",
    "class": "Phenanthrene opioid",
    "moa": "Mu-opioid receptor agonism; active metabolites.",
    "category": "Opioid",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Analgesia 0.05-0.1 mg/kg IV",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.05,
        "max": 0.1,
        "name": "Adult"
      }
    ],
    "cautions": "Histamine release, renal metabolite accumulation, nausea, respiratory depression.",
    "contraindications": "Severe respiratory depression; caution severe renal failure.",
    "id": "morphine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Opioid",
      "Phenanthrene opioid"
    ],
    "displayClass": "Opioid",
    "common": true,
    "metabolism": "Hepatic glucuronidation to active M6G and M3G.",
    "excretion": "Renal excretion; active metabolite accumulation in CKD.",
    "duration": "IV analgesia about 3-4 hr; longer in renal dysfunction.",
    "obesityConsiderations": "Use conservative dosing in obesity/OSA; avoid ABW loading without monitoring.",
    "pediatricDosing": "Peds: 0.05-0.1 mg/kg IV titrated; reduce with OSA, neonates, renal dysfunction."
  },
  {
    "name": "Hydromorphone",
    "class": "Semi-synthetic opioid",
    "moa": "Mu-opioid receptor agonism.",
    "category": "Opioid",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Analgesia 0.003-0.01 mg/kg IV, often 0.2-0.6 mg increments",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.003,
        "max": 0.01,
        "name": "Adult"
      }
    ],
    "cautions": "Respiratory depression; longer PACU tail than fentanyl.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "hydromorphone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Opioid",
      "Semi-synthetic opioid"
    ],
    "displayClass": "Opioid",
    "common": true,
    "metabolism": "Hepatic glucuronidation to H3G.",
    "excretion": "Renal excretion; neuroexcitatory metabolite accumulation possible in CKD.",
    "duration": "IV analgesia about 2-4 hr.",
    "obesityConsiderations": "Use conservative titrated dosing in obesity and OSA.",
    "pediatricDosing": "Peds: 0.005-0.015 mg/kg IV titrated; institution-specific."
  },
  {
    "name": "Methadone",
    "class": "Long-acting opioid",
    "moa": "Mu agonist; NMDA antagonism; serotonin/norepinephrine reuptake effects.",
    "category": "Opioid",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intraop analgesia 0.1-0.2 mg/kg IV",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.1,
        "max": 0.2,
        "name": "Adult"
      }
    ],
    "cautions": "Long and variable half-life, QT prolongation, respiratory depression.",
    "contraindications": "Significant QT prolongation, severe respiratory depression.",
    "id": "methadone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Long-acting opioid",
      "Opioid"
    ],
    "displayClass": "Opioid",
    "common": false,
    "metabolism": "Hepatic CYP metabolism; variable half-life.",
    "excretion": "Fecal and renal excretion.",
    "duration": "Analgesia 4-8 hr, but elimination half-life much longer.",
    "obesityConsiderations": "Dose conservatively in obesity/OSA; QT and delayed respiratory depression require caution.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "name": "Meperidine",
    "class": "Phenylpiperidine opioid",
    "moa": "Mu agonist; antishivering effect; normeperidine metabolite.",
    "category": "Opioid",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Shivering 12.5-25 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 12.5,
        "max": 25,
        "name": "Adult"
      }
    ],
    "cautions": "Avoid repeated dosing in renal failure due neurotoxic metabolite; serotonergic interactions.",
    "contraindications": "MAOI use, significant renal failure if repeated dosing.",
    "id": "meperidine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid",
      "Opioid/antishivering",
      "Phenylpiperidine opioid"
    ],
    "displayClass": "Opioid",
    "common": false,
    "metabolism": "Primarily hepatic metabolism except remifentanil by esterases.",
    "excretion": "Renal/biliary excretion of metabolites varies by agent.",
    "duration": "Minutes to hours depending on lipid solubility and context-sensitive half-time.",
    "obesityConsiderations": "Use conservative titrated dosing in obesity and OSA; avoid unbounded ABW escalation.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "name": "Oxycodone",
    "class": "Oral opioid",
    "moa": "Mu-opioid receptor agonism.",
    "category": "Opioid",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "PO 5-10 mg adult initial",
        "route": "PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 10,
        "name": "Adult"
      }
    ],
    "cautions": "Respiratory depression, constipation, nausea; adjust for frailty.",
    "contraindications": "Severe respiratory depression.",
    "id": "oxycodone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 77 Acute Postoperative Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid",
      "Oral opioid",
      "Postop analgesic"
    ],
    "displayClass": "Opioid",
    "common": false,
    "metabolism": "Primarily hepatic metabolism except remifentanil by esterases.",
    "excretion": "Renal/biliary excretion of metabolites varies by agent.",
    "duration": "Minutes to hours depending on lipid solubility and context-sensitive half-time.",
    "obesityConsiderations": "Use conservative titrated dosing in obesity and OSA; avoid unbounded ABW escalation.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "name": "Tramadol",
    "class": "Atypical opioid analgesic",
    "moa": "Weak mu agonism plus serotonin/norepinephrine reuptake inhibition.",
    "category": "Opioid",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "PO/IV 50-100 mg q6h where used",
        "route": "PO/IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 50,
        "max": 100,
        "name": "Adult"
      }
    ],
    "cautions": "Serotonin syndrome, seizures, variable CYP2D6 activation.",
    "contraindications": "MAOI use, seizure disorder poorly controlled.",
    "id": "tramadol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 77 Acute Postoperative Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Atypical opioid analgesic",
      "Opioid",
      "Postop analgesic"
    ],
    "displayClass": "Opioid",
    "common": false,
    "metabolism": "Primarily hepatic metabolism except remifentanil by esterases.",
    "excretion": "Renal/biliary excretion of metabolites varies by agent.",
    "duration": "Minutes to hours depending on lipid solubility and context-sensitive half-time.",
    "obesityConsiderations": "Use conservative titrated dosing in obesity and OSA; avoid unbounded ABW escalation.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "name": "Acetaminophen",
    "class": "Nonopioid analgesic/antipyretic",
    "moa": "Central COX inhibition and descending serotonergic modulation.",
    "category": "Analgesic adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "650-1000 mg PO/IV q6h; max 3-4 g/day depending risk",
        "route": "PO/IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 650,
        "max": 1000,
        "name": "Adult"
      }
    ],
    "cautions": "Reduce max daily dose in hepatic disease, heavy alcohol use, low body weight.",
    "contraindications": "Severe active hepatic failure.",
    "id": "acetaminophen",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 77 Acute Postoperative Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Analgesic adjunct",
      "Common",
      "Nonopioid analgesic/antipyretic"
    ],
    "displayClass": "Analgesic adjunct",
    "common": true,
    "metabolism": "Hepatic glucuronidation/sulfation; minor CYP to NAPQI.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Analgesia/antipyresis about 4-6 hr.",
    "obesityConsiderations": "Use capped total daily dose; consider lower max with liver disease, chronic alcohol use, low body weight.",
    "pediatricDosing": "Peds: 10-15 mg/kg PO/IV q6h, max daily dose per age/weight and institutional policy."
  },
  {
    "name": "Ketorolac",
    "class": "NSAID",
    "moa": "COX-1/COX-2 inhibition decreases prostaglandin synthesis.",
    "category": "Analgesic adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "15-30 mg IV q6h; lower dose elderly/renal risk",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 15,
        "max": 30,
        "name": "Adult"
      }
    ],
    "cautions": "Bleeding, renal injury, GI ulceration; avoid in high-risk fusion/bleeding contexts per surgeon.",
    "contraindications": "Advanced renal disease, active bleeding, high-risk GI bleed.",
    "id": "ketorolac",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 77 Acute Postoperative Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Analgesic adjunct",
      "Common",
      "NSAID"
    ],
    "displayClass": "Analgesic adjunct",
    "common": true,
    "metabolism": "Hepatic metabolism.",
    "excretion": "Renal excretion; avoid/significantly reduce in renal dysfunction.",
    "duration": "Analgesia about 4-6 hr.",
    "obesityConsiderations": "Use capped fixed dosing; avoid ABW escalation in obesity.",
    "pediatricDosing": "Peds: 0.5 mg/kg IV q6h, common max 15-30 mg; avoid renal dysfunction/bleeding risk."
  },
  {
    "name": "Ibuprofen",
    "class": "NSAID",
    "moa": "COX inhibition decreases prostaglandin synthesis.",
    "category": "Analgesic adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "400-800 mg PO q6-8h",
        "route": "PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 400,
        "max": 800,
        "name": "Adult"
      }
    ],
    "cautions": "Renal injury, platelet dysfunction, GI toxicity.",
    "contraindications": "Advanced renal disease, active bleeding, NSAID hypersensitivity.",
    "id": "ibuprofen",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 77 Acute Postoperative Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Analgesic adjunct",
      "Common",
      "NSAID"
    ],
    "displayClass": "Analgesic adjunct",
    "common": true,
    "metabolism": "Agent-specific hepatic or renal handling.",
    "excretion": "Renal excretion important for several agents.",
    "duration": "Hours depending on agent.",
    "obesityConsiderations": "Use capped dosing and renal adjustment; avoid ABW escalation for toxicity-prone drugs.",
    "pediatricDosing": "Peds: 10 mg/kg PO q6-8h, max per protocol."
  },
  {
    "name": "Gabapentin",
    "class": "Gabapentinoid",
    "moa": "Alpha-2-delta calcium channel ligand.",
    "category": "Analgesic adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "100-300 mg PO preop typical; renal adjust",
        "route": "PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 100,
        "max": 300,
        "name": "Adult"
      }
    ],
    "cautions": "Sedation, dizziness, respiratory depression synergy with opioids; renal adjustment.",
    "contraindications": "Severe oversedation/respiratory compromise.",
    "id": "gabapentin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 77 Acute Postoperative Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Analgesic adjunct",
      "Gabapentinoid"
    ],
    "displayClass": "Analgesic adjunct",
    "common": false,
    "metabolism": "Agent-specific hepatic or renal handling.",
    "excretion": "Renal excretion important for several agents.",
    "duration": "Hours depending on agent.",
    "obesityConsiderations": "Use capped dosing and renal adjustment; avoid ABW escalation for toxicity-prone drugs.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Lidocaine IV",
    "class": "Amide local anesthetic / antiarrhythmic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Analgesic adjunct",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Analgesic load 1-1.5 mg/kg then 1-2 mg/kg/hr; antiarrhythmic 1-1.5 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 1,
        "max": 1.5,
        "name": "Adult"
      }
    ],
    "cautions": "LAST, perioral numbness, seizures, arrhythmia; reduce hepatic/low CO states.",
    "contraindications": "High-grade heart block without pacing, severe sodium-channel disease.",
    "id": "lidocaine-iv",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Amide local anesthetic / antiarrhythmic",
      "Analgesic adjunct",
      "Analgesic/antiarrhythmic"
    ],
    "displayClass": "Analgesic adjunct",
    "common": false,
    "metabolism": "Agent-specific hepatic or renal handling.",
    "excretion": "Renal excretion important for several agents.",
    "duration": "Hours depending on agent.",
    "obesityConsiderations": "Use capped dosing and renal adjustment; avoid ABW escalation for toxicity-prone drugs.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Succinylcholine",
    "class": "Depolarizing neuromuscular blocker",
    "moa": "Nicotinic ACh receptor agonist causing phase I depolarizing block.",
    "category": "Neuromuscular blocker",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "RSI 1-1.5 mg/kg IV; IM 3-4 mg/kg",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 1,
        "max": 1.5,
        "name": "Adult"
      }
    ],
    "cautions": "Hyperkalemia, myalgia, bradycardia, MH trigger, increased IOP/ICP/IGP.",
    "contraindications": "MH susceptibility, major burns/crush/denervation after risk window, hyperkalemia, pseudocholinesterase deficiency.",
    "id": "succinylcholine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Depolarizing neuromuscular blocker",
      "Neuromuscular blocker",
      "Neuromuscular/reversal"
    ],
    "displayClass": "Neuromuscular blocker",
    "common": true,
    "metabolism": "Rapid pseudocholinesterase hydrolysis in plasma.",
    "excretion": "Minimal renal excretion of parent drug.",
    "duration": "Paralysis usually 5-10 min if normal pseudocholinesterase.",
    "obesityConsiderations": "Often dosed on TBW/ABW for RSI in obesity to ensure intubating conditions; verify local practice.",
    "pediatricDosing": "Peds: 1-2 mg/kg IV; IM 3-4 mg/kg for emergency airway when IV unavailable. Avoid in myopathy/burn/denervation/MH risk."
  },
  {
    "name": "Rocuronium",
    "class": "Aminosteroid nondepolarizing NMBA",
    "moa": "Competitive antagonism at nicotinic ACh receptor.",
    "category": "Neuromuscular blocker",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.6-1.2 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.6,
        "max": 1.2,
        "name": "Adult"
      }
    ],
    "cautions": "Hepatic/biliary elimination; prolonged with liver disease; can be reversed by sugammadex.",
    "contraindications": "Inability to ventilate/intubate when paralysis unsafe.",
    "id": "rocuronium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Aminosteroid nondepolarizing NMBA",
      "Common",
      "Neuromuscular blocker",
      "Neuromuscular/reversal"
    ],
    "displayClass": "Neuromuscular blocker",
    "common": true,
    "metabolism": "Hepatic uptake and biliary excretion; limited metabolism.",
    "excretion": "Some renal excretion; duration prolonged in hepatic/renal dysfunction.",
    "duration": "Intermediate duration about 30-60 min, dose dependent.",
    "obesityConsiderations": "Intubating dose often IBW/AdjBW or ABW depending RSI goal; maintenance should be TOF-guided.",
    "pediatricDosing": "Peds: 0.6-1.2 mg/kg IV for intubation depending on urgency."
  },
  {
    "name": "Vecuronium",
    "class": "Aminosteroid nondepolarizing NMBA",
    "moa": "Competitive nicotinic ACh receptor antagonism.",
    "category": "Neuromuscular blocker",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.08-0.1 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.08,
        "max": 0.1,
        "name": "Adult"
      }
    ],
    "cautions": "Hepatic and renal elimination; active metabolite; prolonged in renal/hepatic dysfunction.",
    "contraindications": "Inability to ventilate/intubate when paralysis unsafe.",
    "id": "vecuronium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Aminosteroid nondepolarizing NMBA",
      "Neuromuscular blocker",
      "Neuromuscular/reversal"
    ],
    "displayClass": "Neuromuscular blocker",
    "common": false,
    "metabolism": "Hepatic metabolism to active metabolite.",
    "excretion": "Biliary and renal excretion; prolonged in hepatic/renal disease.",
    "duration": "Intermediate duration about 30-45 min; may prolong with accumulation.",
    "obesityConsiderations": "Dose to IBW/AdjBW and TOF; avoid repeated unguided dosing in obesity/CKD.",
    "pediatricDosing": "Peds: 0.1 mg/kg IV; monitor TOF."
  },
  {
    "name": "Cisatracurium",
    "class": "Benzylisoquinolinium nondepolarizing NMBA",
    "moa": "Competitive nicotinic ACh receptor antagonism.",
    "category": "Neuromuscular blocker",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.15-0.2 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.15,
        "max": 0.2,
        "name": "Adult"
      }
    ],
    "cautions": "Hofmann elimination; useful in renal/hepatic failure; minimal histamine.",
    "contraindications": "Inability to ventilate/intubate when paralysis unsafe.",
    "id": "cisatracurium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Benzylisoquinolinium nondepolarizing NMBA",
      "Common",
      "Neuromuscular blocker",
      "Neuromuscular/reversal"
    ],
    "displayClass": "Neuromuscular blocker",
    "common": true,
    "metabolism": "Organ-independent Hofmann elimination and ester hydrolysis.",
    "excretion": "Metabolites renally/hepatically cleared but parent largely organ independent.",
    "duration": "Intermediate duration about 30-45 min.",
    "obesityConsiderations": "Useful in obesity with organ dysfunction; dose to IBW/AdjBW and monitor TOF.",
    "pediatricDosing": "Peds: 0.1-0.2 mg/kg IV; monitor TOF."
  },
  {
    "name": "Atracurium",
    "class": "Benzylisoquinolinium nondepolarizing NMBA",
    "moa": "Competitive nicotinic ACh receptor antagonism.",
    "category": "Neuromuscular blocker",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.4-0.5 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.4,
        "max": 0.5,
        "name": "Adult"
      }
    ],
    "cautions": "Hofmann/ester hydrolysis; histamine release; laudanosine with prolonged infusion.",
    "contraindications": "Inability to ventilate/intubate when paralysis unsafe.",
    "id": "atracurium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Benzylisoquinolinium nondepolarizing NMBA",
      "Neuromuscular blocker",
      "Neuromuscular/reversal"
    ],
    "displayClass": "Neuromuscular blocker",
    "common": false,
    "metabolism": "Agent-specific: plasma cholinesterase, hepatic/biliary, renal, or Hofmann elimination.",
    "excretion": "Agent-specific renal/biliary/metabolite excretion.",
    "duration": "Succinylcholine short; nondepolarizers intermediate to long, TOF dependent.",
    "obesityConsiderations": "Use intubating-dose strategy deliberately; maintenance and redosing should be neuromuscular-monitor guided.",
    "pediatricDosing": "Peds: weight-based dosing with TOF monitoring; neonates/infants may differ. Verify pediatric reference."
  },
  {
    "name": "Pancuronium",
    "class": "Aminosteroid nondepolarizing NMBA",
    "moa": "Competitive nicotinic ACh receptor antagonism.",
    "category": "Neuromuscular blocker",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.06-0.1 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.06,
        "max": 0.1,
        "name": "Adult"
      }
    ],
    "cautions": "Tachycardia, vagolysis; renal elimination and prolonged duration.",
    "contraindications": "Severe tachyarrhythmia when alternatives available.",
    "id": "pancuronium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Aminosteroid nondepolarizing NMBA",
      "Neuromuscular blocker",
      "Neuromuscular/reversal"
    ],
    "displayClass": "Neuromuscular blocker",
    "common": false,
    "metabolism": "Agent-specific: plasma cholinesterase, hepatic/biliary, renal, or Hofmann elimination.",
    "excretion": "Agent-specific renal/biliary/metabolite excretion.",
    "duration": "Succinylcholine short; nondepolarizers intermediate to long, TOF dependent.",
    "obesityConsiderations": "Use intubating-dose strategy deliberately; maintenance and redosing should be neuromuscular-monitor guided.",
    "pediatricDosing": "Peds: weight-based dosing with TOF monitoring; neonates/infants may differ. Verify pediatric reference."
  },
  {
    "name": "Neostigmine",
    "class": "Acetylcholinesterase inhibitor",
    "moa": "Increases ACh at NMJ to antagonize nondepolarizing block.",
    "category": "Reversal/rescue",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Reversal 0.03-0.07 mg/kg with antimuscarinic",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.03,
        "max": 0.07,
        "name": "Adult"
      }
    ],
    "cautions": "Bradycardia, bronchospasm, secretions; ceiling effect, avoid deep block reversal.",
    "contraindications": "Mechanical obstruction urinary/GI; inadequate spontaneous recovery.",
    "id": "neostigmine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Acetylcholinesterase inhibitor",
      "Common",
      "Neuromuscular/reversal",
      "Reversal/rescue"
    ],
    "displayClass": "Reversal/rescue",
    "common": true,
    "metabolism": "Partly hepatic metabolism.",
    "excretion": "Renal excretion; duration prolonged in renal dysfunction.",
    "duration": "Reversal effect about 30-60 min.",
    "obesityConsiderations": "Dose to actual or adjusted weight per institutional practice; ceiling dose commonly applied.",
    "pediatricDosing": "Peds: 0.03-0.07 mg/kg IV with anticholinergic; ceiling dose per institution."
  },
  {
    "name": "Glycopyrrolate",
    "class": "Quaternary antimuscarinic",
    "moa": "Muscarinic receptor antagonism.",
    "category": "Reversal/rescue",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "With neostigmine 0.005-0.015 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.005,
        "max": 0.015,
        "name": "Adult"
      }
    ],
    "cautions": "Tachycardia, dry mouth; does not cross BBB.",
    "contraindications": "Tachyarrhythmia where vagolysis harmful.",
    "id": "glycopyrrolate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Neuromuscular/reversal",
      "Quaternary antimuscarinic",
      "Reversal/rescue"
    ],
    "displayClass": "Reversal/rescue",
    "common": true,
    "metabolism": "Minimal CNS penetration; partly hepatic metabolism.",
    "excretion": "Renal excretion contributes to clearance.",
    "duration": "Anticholinergic effect about 2-4 hr.",
    "obesityConsiderations": "Use with caution in obesity if tachycardia/ischemia risk; dose with neostigmine ratio.",
    "pediatricDosing": "Peds: 0.004-0.01 mg/kg IV, often paired with neostigmine."
  },
  {
    "name": "Sugammadex",
    "class": "Selective relaxant binding agent",
    "moa": "Encapsulates rocuronium/vecuronium.",
    "category": "Reversal/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "2 mg/kg for TOF count 2; 4 mg/kg deep block; 16 mg/kg immediate rescue",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 2,
        "max": 4,
        "name": "Adult"
      }
    ],
    "cautions": "Bradycardia/asystole rare, hypersensitivity; may reduce hormonal contraceptive efficacy; renal clearance.",
    "contraindications": "Known hypersensitivity; caution severe renal failure depending institutional policy.",
    "id": "sugammadex",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Neuromuscular/reversal",
      "Reversal/rescue",
      "Selective relaxant binding agent"
    ],
    "displayClass": "Reversal/rescue",
    "common": true,
    "metabolism": "Encapsulates aminosteroid NMBs; not metabolized significantly.",
    "excretion": "Renal excretion of sugammadex-NMBA complex.",
    "duration": "Reversal usually within minutes.",
    "obesityConsiderations": "Dose based on actual body weight in many protocols, especially urgent reversal; renal dysfunction requires caution.",
    "pediatricDosing": "Peds: 2 mg/kg for moderate block, 4 mg/kg for deep block, 16 mg/kg for immediate reversal after high-dose rocuronium; verify age approval/policy."
  },
  {
    "name": "Phenylephrine",
    "class": "Alpha-1 agonist vasopressor",
    "moa": "Alpha-1 agonism increases SVR.",
    "category": "Pressor/inotrope",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Bolus 50-200 mcg; infusion 0.1-1 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg fixed",
        "min": 50,
        "max": 200,
        "name": "Adult"
      }
    ],
    "cautions": "Reflex bradycardia, reduced CO in poor LV/RV function.",
    "contraindications": "Severe bradycardia/low-output state when pure afterload increase harmful.",
    "id": "phenylephrine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Alpha-1 agonist vasopressor",
      "Common",
      "Pressor/inotrope",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": true,
    "metabolism": "MAO and sulfotransferase metabolism.",
    "excretion": "Urinary excretion of metabolites.",
    "duration": "Bolus effect minutes; infusion titratable.",
    "obesityConsiderations": "Use titrated boluses; fixed boluses may overshoot in small/frail patients but obesity does not require proportional ABW scaling.",
    "pediatricDosing": "Peds: 1-5 mcg/kg IV bolus or infusion titrated; institutional concentration critical."
  },
  {
    "name": "Ephedrine",
    "class": "Indirect/direct sympathomimetic",
    "moa": "Norepinephrine release plus alpha/beta agonism.",
    "category": "Pressor/inotrope",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 5-10 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 10,
        "name": "Adult"
      }
    ],
    "cautions": "Tachycardia, tachyphylaxis, myocardial oxygen demand.",
    "contraindications": "Severe tachyarrhythmia.",
    "id": "ephedrine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Indirect/direct sympathomimetic",
      "Pressor/inotrope",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": true,
    "metabolism": "Rapid enzymatic metabolism or organ clearance depending on agent.",
    "excretion": "Metabolite excretion varies.",
    "duration": "Generally immediate onset and short titratable duration.",
    "obesityConsiderations": "Avoid blind ABW extrapolation for boluses; titrate to arterial pressure and perfusion endpoint.",
    "pediatricDosing": "Peds: 0.1 mg/kg IV titrated."
  },
  {
    "name": "Norepinephrine",
    "class": "Alpha > beta-1 agonist vasopressor",
    "moa": "Alpha-1 vasoconstriction with beta-1 inotropy.",
    "category": "Pressor/inotrope",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.02-0.5 mcg/kg/min; bolus 4-16 mcg institution-specific",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.02,
        "max": 0.5,
        "name": "Adult"
      }
    ],
    "cautions": "Extravasation injury, ischemia at high dose; central access preferred for prolonged use.",
    "contraindications": "Uncorrected hypovolemia as sole therapy.",
    "id": "norepinephrine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Alpha > beta-1 agonist vasopressor",
      "Common",
      "Pressor/inotrope",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": true,
    "metabolism": "COMT and MAO metabolism.",
    "excretion": "Urinary excretion of metabolites.",
    "duration": "Immediate titratable effect; offset within minutes.",
    "obesityConsiderations": "Infusions often ordered mcg/kg/min but clinical titration and institutional concentration matter more than exact obesity scalar.",
    "pediatricDosing": "Peds: infusion commonly 0.02-1 mcg/kg/min titrated to perfusion target."
  },
  {
    "name": "Epinephrine",
    "class": "Alpha and beta agonist",
    "moa": "Beta-1/beta-2 and alpha agonism dose-dependent.",
    "category": "Pressor/inotrope",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.01-0.5 mcg/kg/min; anaphylaxis small IV boluses titrated",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.01,
        "max": 0.5,
        "name": "Adult"
      }
    ],
    "cautions": "Tachyarrhythmia, hyperlactatemia, myocardial ischemia.",
    "contraindications": "No absolute in arrest/anaphylaxis; caution severe ischemia.",
    "id": "epinephrine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Alpha and beta agonist",
      "Common",
      "Pressor/inotrope",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": true,
    "metabolism": "COMT and MAO metabolism.",
    "excretion": "Urinary excretion of metabolites.",
    "duration": "Immediate titratable effect; bolus duration minutes.",
    "obesityConsiderations": "Use indication-specific dosing; avoid simple ABW extrapolation for bolus rescue outside protocols.",
    "pediatricDosing": "Peds: arrest dose 0.01 mg/kg IV of 0.1 mg/mL solution; pressor/inotrope infusion titrated per protocol."
  },
  {
    "name": "Vasopressin",
    "class": "V1 vasopressor",
    "moa": "V1 receptor mediated vasoconstriction.",
    "category": "Pressor/inotrope",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 0.5-2 units; infusion 0.01-0.06 units/min",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "units fixed",
        "min": 0.5,
        "max": 2,
        "name": "Adult"
      }
    ],
    "cautions": "Ischemia, hyponatremia with longer use; useful in vasoplegia.",
    "contraindications": "Severe coronary/mesenteric ischemia relative.",
    "id": "vasopressin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Pressor/inotrope",
      "V1 vasopressor",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": true,
    "metabolism": "Peptidase metabolism in liver/kidney and other tissues.",
    "excretion": "Limited renal excretion of intact drug.",
    "duration": "Pressor effect minutes; half-life about 10-20 min.",
    "obesityConsiderations": "Usually fixed-unit dosing; no obesity scalar required.",
    "pediatricDosing": "Peds: use institutional critical-care/anesthesia protocol; less standardized."
  },
  {
    "name": "Dopamine",
    "class": "Dopaminergic/beta/alpha agonist",
    "moa": "Dose-dependent D1, beta-1, alpha effects.",
    "category": "Pressor/inotrope",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 2-20 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 2,
        "max": 20,
        "name": "Adult"
      }
    ],
    "cautions": "Arrhythmogenic; less favored than norepi for shock.",
    "contraindications": "Pheochromocytoma, ventricular arrhythmias.",
    "id": "dopamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Dopaminergic/beta/alpha agonist",
      "Pressor/inotrope",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": false,
    "metabolism": "Rapid enzymatic metabolism or organ clearance depending on agent.",
    "excretion": "Metabolite excretion varies.",
    "duration": "Generally immediate onset and short titratable duration.",
    "obesityConsiderations": "Avoid blind ABW extrapolation for boluses; titrate to arterial pressure and perfusion endpoint.",
    "pediatricDosing": "Peds: use weight-based bolus/infusion per institutional concentration and titrate to perfusion target."
  },
  {
    "name": "Dobutamine",
    "class": "Beta-1 agonist inotrope",
    "moa": "Beta-1 predominant inotropy with beta-2 vasodilation.",
    "category": "Pressor/inotrope",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 2-20 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 2,
        "max": 20,
        "name": "Adult"
      }
    ],
    "cautions": "Tachyarrhythmia, hypotension if vasodilatory.",
    "contraindications": "Idiopathic hypertrophic subaortic stenosis relative.",
    "id": "dobutamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Beta-1 agonist inotrope",
      "Pressor/inotrope",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": false,
    "metabolism": "Rapid enzymatic metabolism or organ clearance depending on agent.",
    "excretion": "Metabolite excretion varies.",
    "duration": "Generally immediate onset and short titratable duration.",
    "obesityConsiderations": "Avoid blind ABW extrapolation for boluses; titrate to arterial pressure and perfusion endpoint.",
    "pediatricDosing": "Peds: use weight-based bolus/infusion per institutional concentration and titrate to perfusion target."
  },
  {
    "name": "Milrinone",
    "class": "PDE-3 inhibitor inodilator",
    "moa": "Increases cAMP causing inotropy and vasodilation.",
    "category": "Pressor/inotrope",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Load 25-50 mcg/kg; infusion 0.25-0.75 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.25,
        "max": 0.75,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension, arrhythmias; renal clearance, adjust in CKD.",
    "contraindications": "Severe hypotension without vasopressor support.",
    "id": "milrinone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "PDE-3 inhibitor inodilator",
      "Pressor/inotrope",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": false,
    "metabolism": "Rapid enzymatic metabolism or organ clearance depending on agent.",
    "excretion": "Metabolite excretion varies.",
    "duration": "Generally immediate onset and short titratable duration.",
    "obesityConsiderations": "Avoid blind ABW extrapolation for boluses; titrate to arterial pressure and perfusion endpoint.",
    "pediatricDosing": "Peds: use weight-based bolus/infusion per institutional concentration and titrate to perfusion target."
  },
  {
    "name": "Isoproterenol",
    "class": "Nonselective beta agonist",
    "moa": "Beta-1 chronotropy/inotropy and beta-2 vasodilation.",
    "category": "Pressor/inotrope",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.01-0.1 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.01,
        "max": 0.1,
        "name": "Adult"
      }
    ],
    "cautions": "Tachyarrhythmia, ischemia.",
    "contraindications": "Tachyarrhythmias.",
    "id": "isoproterenol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Nonselective beta agonist",
      "Pressor/inotrope",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Pressor/inotrope",
    "common": false,
    "metabolism": "Rapid enzymatic metabolism or organ clearance depending on agent.",
    "excretion": "Metabolite excretion varies.",
    "duration": "Generally immediate onset and short titratable duration.",
    "obesityConsiderations": "Avoid blind ABW extrapolation for boluses; titrate to arterial pressure and perfusion endpoint.",
    "pediatricDosing": "Peds: use weight-based bolus/infusion per institutional concentration and titrate to perfusion target."
  },
  {
    "name": "Esmolol",
    "class": "Ultra-short beta-1 blocker",
    "moa": "Beta-1 antagonism; esterase metabolism.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Bolus 0.25-1 mg/kg; infusion 50-200 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 0.25,
        "max": 1,
        "name": "Adult"
      }
    ],
    "cautions": "Bradycardia, hypotension, bronchospasm less than nonselective agents.",
    "contraindications": "Severe bradycardia, high-grade AV block, cardiogenic shock.",
    "id": "esmolol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Common",
      "Ultra-short beta-1 blocker",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": true,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Labetalol",
    "class": "Alpha/beta blocker",
    "moa": "Beta blockade with alpha-1 blockade.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 5-20 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 20,
        "name": "Adult"
      }
    ],
    "cautions": "Bradycardia, hypotension, bronchospasm.",
    "contraindications": "Asthma exacerbation, heart block, decompensated HF.",
    "id": "labetalol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Alpha/beta blocker",
      "Antihypertensive/vasodilator",
      "Common",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": true,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Metoprolol",
    "class": "Beta-1 blocker",
    "moa": "Selective beta-1 antagonism.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 1-5 mg IV titrated",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 1,
        "max": 5,
        "name": "Adult"
      }
    ],
    "cautions": "Bradycardia, hypotension, bronchospasm at higher dose.",
    "contraindications": "Severe bradycardia, high-grade AV block, decompensated HF.",
    "id": "metoprolol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Beta-1 blocker",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Propranolol",
    "class": "Nonselective beta blocker",
    "moa": "Beta-1/beta-2 antagonism.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 0.5-1 mg IV titrated",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 1,
        "name": "Adult"
      }
    ],
    "cautions": "Bronchospasm, bradycardia.",
    "contraindications": "Asthma/bronchospasm, severe bradycardia, heart block.",
    "id": "propranolol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Nonselective beta blocker",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Nicardipine",
    "class": "Dihydropyridine calcium channel blocker",
    "moa": "Arterial vasodilation via L-type calcium channel blockade.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 0.25-0.5 mg; infusion 5-15 mg/hr",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.25,
        "max": 0.5,
        "name": "Adult"
      }
    ],
    "cautions": "Reflex tachycardia, hypotension.",
    "contraindications": "Severe aortic stenosis relative.",
    "id": "nicardipine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Common",
      "Dihydropyridine calcium channel blocker",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": true,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Clevidipine",
    "class": "Ultra-short DHP calcium channel blocker",
    "moa": "Arterial vasodilation; esterase metabolism.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Infusion 1-2 mg/hr start, titrate; usual 4-16 mg/hr",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg/hr",
        "min": 1,
        "max": 16,
        "name": "Adult"
      }
    ],
    "cautions": "Lipid emulsion load, reflex tachycardia.",
    "contraindications": "Soy/egg allergy per label, defective lipid metabolism.",
    "id": "clevidipine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Ultra-short DHP calcium channel blocker",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Nitroglycerin",
    "class": "Organic nitrate vasodilator",
    "moa": "NO-mediated venodilation > arterial dilation.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.5-5 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.5,
        "max": 5,
        "name": "Adult"
      }
    ],
    "cautions": "Headache, hypotension, tachyphylaxis, methemoglobinemia rare.",
    "contraindications": "PDE-5 inhibitor recent use, severe hypotension.",
    "id": "nitroglycerin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Common",
      "Organic nitrate vasodilator",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": true,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Nitroprusside",
    "class": "Direct NO donor vasodilator",
    "moa": "Arterial and venous vasodilation via NO.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.3-5 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.3,
        "max": 5,
        "name": "Adult"
      }
    ],
    "cautions": "Cyanide/thiocyanate toxicity, increased ICP, coronary steal.",
    "contraindications": "Severe hepatic/renal failure for prolonged high-dose use.",
    "id": "nitroprusside",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Direct NO donor vasodilator",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Hydralazine",
    "class": "Direct arteriolar vasodilator",
    "moa": "Smooth muscle relaxation, likely NO/cGMP related.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 2.5-10 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2.5,
        "max": 10,
        "name": "Adult"
      }
    ],
    "cautions": "Unpredictable duration, reflex tachycardia.",
    "contraindications": "Tachycardia/ischemia relative.",
    "id": "hydralazine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Direct arteriolar vasodilator",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Adenosine",
    "class": "AV nodal blocker",
    "moa": "A1 receptor activation hyperpolarizes AV node.",
    "category": "Rescue/other",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "6 mg rapid IV push, then 12 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 6,
        "max": 12,
        "name": "Adult"
      }
    ],
    "cautions": "Transient asystole, bronchospasm, flushing; reduce with central line/transplant, increase with methylxanthines.",
    "contraindications": "Second/third degree AV block or sick sinus without pacer; bronchospasm relative.",
    "id": "adenosine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "AV nodal blocker",
      "Rescue/other",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Amiodarone",
    "class": "Class III antiarrhythmic",
    "moa": "Potassium channel blockade plus sodium, calcium, beta effects.",
    "category": "Rescue/other",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "150 mg over 10 min; arrest 300 mg then 150 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 150,
        "max": 300,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension, bradycardia, QT prolongation; chronic pulmonary/hepatic/thyroid toxicity.",
    "contraindications": "Severe sinus node dysfunction/AV block without pacer.",
    "id": "amiodarone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Class III antiarrhythmic",
      "Rescue/other",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Diltiazem",
    "class": "Non-DHP calcium channel blocker",
    "moa": "L-type calcium channel blockade slows AV node.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "0.25 mg/kg IV then 0.35 mg/kg; infusion 5-15 mg/hr",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 0.25,
        "max": 0.35,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension, bradycardia; negative inotropy.",
    "contraindications": "HFrEF/decompensated HF, WPW with AF, heart block.",
    "id": "diltiazem",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Non-DHP calcium channel blocker",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Verapamil",
    "class": "Non-DHP calcium channel blocker",
    "moa": "L-type calcium channel blockade slows AV node.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "2.5-5 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2.5,
        "max": 5,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension, bradycardia, negative inotropy.",
    "contraindications": "HFrEF/decompensated HF, WPW with AF, heart block.",
    "id": "verapamil",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antihypertensive/vasodilator",
      "Non-DHP calcium channel blocker",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Atropine",
    "class": "Tertiary antimuscarinic",
    "moa": "Muscarinic receptor antagonism increases SA/AV nodal activity.",
    "category": "Rescue/other",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bradycardia 0.5-1 mg IV; ACLS 1 mg q3-5 min max 3 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 1,
        "name": "Adult"
      }
    ],
    "cautions": "Tachycardia, delirium, urinary retention.",
    "contraindications": "Narrow angle glaucoma relative; tachyarrhythmia relative.",
    "id": "atropine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/other",
      "Tertiary antimuscarinic",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: 0.02 mg/kg IV, minimum 0.1 mg, max single dose 0.5 mg child or 1 mg adolescent in many PALS-style protocols."
  },
  {
    "name": "Ondansetron",
    "class": "5-HT3 antagonist",
    "moa": "Serotonin 5-HT3 receptor antagonism.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "4 mg IV near end of case",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 4,
        "max": 4,
        "name": "Adult"
      }
    ],
    "cautions": "QT prolongation, constipation, headache.",
    "contraindications": "Congenital long QT or high-risk QT stack relative.",
    "id": "ondansetron",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "5-HT3 antagonist",
      "Antiemetic/GI",
      "Common"
    ],
    "displayClass": "Antiemetic/GI",
    "common": true,
    "metabolism": "Hepatic CYP metabolism.",
    "excretion": "Renal and fecal metabolites.",
    "duration": "Antiemetic effect several hours.",
    "obesityConsiderations": "Fixed adult dose; no obesity adjustment. QT caution.",
    "pediatricDosing": "Peds: 0.1 mg/kg IV, common max 4 mg."
  },
  {
    "name": "Dexamethasone",
    "class": "Corticosteroid antiemetic",
    "moa": "Glucocorticoid receptor agonism; antiinflammatory/antiemetic.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "4-8 mg IV after induction",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 4,
        "max": 8,
        "name": "Adult"
      }
    ],
    "cautions": "Hyperglycemia, perineal burning with rapid injection.",
    "contraindications": "Systemic fungal infection; caution poorly controlled diabetes.",
    "id": "dexamethasone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Common",
      "Corticosteroid antiemetic"
    ],
    "displayClass": "Antiemetic/GI",
    "common": true,
    "metabolism": "Hepatic metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Biologic duration 36-72 hr.",
    "obesityConsiderations": "Fixed antiemetic dose; consider hyperglycemia and infection risk rather than obesity scalar.",
    "pediatricDosing": "Peds: PONV 0.15 mg/kg IV, common max 4-8 mg depending protocol; airway edema doses differ."
  },
  {
    "name": "Droperidol",
    "class": "Butyrophenone dopamine antagonist",
    "moa": "D2 antagonism in chemoreceptor trigger zone.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "0.625-1.25 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.625,
        "max": 1.25,
        "name": "Adult"
      }
    ],
    "cautions": "QT prolongation, sedation, extrapyramidal symptoms.",
    "contraindications": "Marked QT prolongation.",
    "id": "droperidol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Butyrophenone dopamine antagonist",
      "Common"
    ],
    "displayClass": "Antiemetic/GI",
    "common": true,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Haloperidol",
    "class": "Butyrophenone antipsychotic/antiemetic",
    "moa": "D2 receptor antagonism.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "0.5-1 mg IV for PONV/delirium dosing varies",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 1,
        "name": "Adult"
      }
    ],
    "cautions": "QT prolongation, EPS, sedation.",
    "contraindications": "Marked QT prolongation, Parkinson disease relative.",
    "id": "haloperidol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Butyrophenone antipsychotic/antiemetic"
    ],
    "displayClass": "Antiemetic/GI",
    "common": false,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Metoclopramide",
    "class": "D2 antagonist/prokinetic",
    "moa": "D2 antagonism; increases gastric emptying and LES tone.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "10 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 10,
        "max": 10,
        "name": "Adult"
      }
    ],
    "cautions": "Akathisia/EPS, diarrhea; renal adjust repeated doses.",
    "contraindications": "Bowel obstruction/perforation, Parkinson disease, pheochromocytoma.",
    "id": "metoclopramide",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Common",
      "D2 antagonist/prokinetic"
    ],
    "displayClass": "Antiemetic/GI",
    "common": true,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: 0.1-0.15 mg/kg IV; avoid in high EPS risk."
  },
  {
    "name": "Prochlorperazine",
    "class": "Phenothiazine antiemetic",
    "moa": "D2 antagonism.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "5-10 mg IV/IM",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 10,
        "name": "Adult"
      }
    ],
    "cautions": "Sedation, hypotension, EPS, QT.",
    "contraindications": "Parkinson disease, marked QT prolongation.",
    "id": "prochlorperazine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Phenothiazine antiemetic"
    ],
    "displayClass": "Antiemetic/GI",
    "common": false,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Promethazine",
    "class": "Phenothiazine antihistamine/antiemetic",
    "moa": "H1 antagonism plus anticholinergic and antidopaminergic effects.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "6.25-12.5 mg IV/IM",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 6.25,
        "max": 12.5,
        "name": "Adult"
      }
    ],
    "cautions": "Sedation, tissue injury with IV extravasation; prefer deep IM or diluted slow IV per policy.",
    "contraindications": "Children <2 years; intraarterial/subcutaneous administration.",
    "id": "promethazine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Phenothiazine antihistamine/antiemetic"
    ],
    "displayClass": "Antiemetic/GI",
    "common": false,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Scopolamine",
    "class": "Antimuscarinic antiemetic",
    "moa": "Central muscarinic antagonism.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1.5 mg transdermal patch",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 1.5,
        "max": 1.5,
        "name": "Adult"
      }
    ],
    "cautions": "Dry mouth, blurry vision, urinary retention, delirium elderly.",
    "contraindications": "Narrow angle glaucoma.",
    "id": "scopolamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Antimuscarinic antiemetic"
    ],
    "displayClass": "Antiemetic/GI",
    "common": false,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Famotidine",
    "class": "H2 blocker",
    "moa": "Histamine H2 receptor antagonism reduces gastric acid secretion.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "20 mg IV/PO",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 20,
        "max": 20,
        "name": "Adult"
      }
    ],
    "cautions": "Renal adjust repeated dosing; rare QT/CNS effects in severe renal failure.",
    "contraindications": "Hypersensitivity.",
    "id": "famotidine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Common",
      "H2 blocker"
    ],
    "displayClass": "Antiemetic/GI",
    "common": true,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Pantoprazole",
    "class": "Proton pump inhibitor",
    "moa": "Irreversible H/K ATPase inhibition in gastric parietal cells.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "40 mg IV/PO",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 40,
        "max": 40,
        "name": "Adult"
      }
    ],
    "cautions": "Long-term risks not relevant to single dose; C. diff association chronic.",
    "contraindications": "Hypersensitivity.",
    "id": "pantoprazole",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Proton pump inhibitor"
    ],
    "displayClass": "Antiemetic/GI",
    "common": false,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Sodium citrate",
    "class": "Nonparticulate antacid",
    "moa": "Raises gastric pH.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "30 mL PO preop",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mL fixed",
        "min": 30,
        "max": 30,
        "name": "Adult"
      }
    ],
    "cautions": "Nausea, aspiration still possible; short duration.",
    "contraindications": "Inability to protect airway if administration unsafe.",
    "id": "sodium-citrate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "Common",
      "Nonparticulate antacid"
    ],
    "displayClass": "Antiemetic/GI",
    "common": true,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Diphenhydramine",
    "class": "H1 antihistamine",
    "moa": "H1 receptor antagonism; anticholinergic effects.",
    "category": "Antiemetic/GI",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "25-50 mg IV/PO",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 25,
        "max": 50,
        "name": "Adult"
      }
    ],
    "cautions": "Sedation, delirium, anticholinergic effects.",
    "contraindications": "Neonates; narrow-angle glaucoma relative.",
    "id": "diphenhydramine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "H1 antihistamine",
      "Rescue/adjunct"
    ],
    "displayClass": "Antiemetic/GI",
    "common": false,
    "metabolism": "Mostly hepatic metabolism with agent-specific exceptions.",
    "excretion": "Renal/fecal metabolites.",
    "duration": "Several hours for most perioperative antiemetics.",
    "obesityConsiderations": "Usually fixed adult dosing; obesity rarely mandates dose escalation.",
    "pediatricDosing": "Peds: use age/weight-specific dosing and max dose; verify QT/EPS warnings."
  },
  {
    "name": "Albuterol",
    "class": "Beta-2 agonist bronchodilator",
    "moa": "Beta-2 agonism relaxes bronchial smooth muscle.",
    "category": "Pulmonary",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "2.5 mg nebulized; MDI 4-8 puffs",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2.5,
        "max": 2.5,
        "name": "Adult"
      }
    ],
    "cautions": "Tachycardia, hypokalemia, tremor.",
    "contraindications": "None absolute in bronchospasm.",
    "id": "albuterol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Beta-2 agonist bronchodilator",
      "Common",
      "Pulmonary",
      "Rescue/adjunct"
    ],
    "displayClass": "Pulmonary",
    "common": true,
    "metabolism": "Agent-specific pulmonary/systemic metabolism.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on route.",
    "obesityConsiderations": "Nebulized/inhaled doses usually fixed; systemic beta-agonists require caution.",
    "pediatricDosing": "Peds: nebulized 2.5 mg typical, smaller infants/children may use 1.25 mg; titrate to bronchospasm."
  },
  {
    "name": "Ipratropium",
    "class": "Inhaled antimuscarinic bronchodilator",
    "moa": "Muscarinic antagonism reduces bronchoconstriction.",
    "category": "Pulmonary",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "0.5 mg nebulized",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 0.5,
        "name": "Adult"
      }
    ],
    "cautions": "Dry mouth, urinary retention rare.",
    "contraindications": "Hypersensitivity to atropine derivatives.",
    "id": "ipratropium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Inhaled antimuscarinic bronchodilator",
      "Pulmonary",
      "Rescue/adjunct"
    ],
    "displayClass": "Pulmonary",
    "common": false,
    "metabolism": "Agent-specific pulmonary/systemic metabolism.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on route.",
    "obesityConsiderations": "Nebulized/inhaled doses usually fixed; systemic beta-agonists require caution.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Magnesium sulfate",
    "class": "Divalent cation/antiarrhythmic/bronchodilator",
    "moa": "Calcium antagonism, NMDA antagonism, stabilizes myocardium.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1-2 g IV for torsades/bronchospasm; 30-50 mg/kg load where indicated",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "g fixed",
        "min": 1,
        "max": 2,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension, weakness, potentiates NMB; renal excretion.",
    "contraindications": "Heart block, severe renal failure without monitoring.",
    "id": "magnesium-sulfate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Divalent cation/antiarrhythmic/bronchodilator",
      "Electrolyte/metabolic",
      "Rescue/adjunct"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": true,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: 25-50 mg/kg IV for torsades/status asthmaticus/eclampsia-type indications, max varies."
  },
  {
    "name": "Calcium chloride",
    "class": "Calcium salt",
    "moa": "Raises ionized calcium; membrane stabilization in hyperkalemia.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "500-1000 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 500,
        "max": 1000,
        "name": "Adult"
      }
    ],
    "cautions": "Tissue necrosis with extravasation; more elemental calcium than gluconate.",
    "contraindications": "Digoxin toxicity relative; avoid extravasation.",
    "id": "calcium-chloride",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Calcium salt",
      "Common",
      "Electrolyte/metabolic",
      "Rescue/adjunct"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": true,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: 10-20 mg/kg IV for severe hypocalcemia/hyperkalemia/arrest protocol; central line preferred."
  },
  {
    "name": "Calcium gluconate",
    "class": "Calcium salt",
    "moa": "Raises ionized calcium; membrane stabilization in hyperkalemia.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1-3 g IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "g fixed",
        "min": 1,
        "max": 3,
        "name": "Adult"
      }
    ],
    "cautions": "Less caustic than CaCl; slower elemental calcium delivery.",
    "contraindications": "Digoxin toxicity relative.",
    "id": "calcium-gluconate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Calcium salt",
      "Common",
      "Electrolyte/metabolic",
      "Rescue/adjunct"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": true,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: 30-60 mg/kg IV depending indication; verify elemental calcium/protocol."
  },
  {
    "name": "Sodium bicarbonate",
    "class": "Buffer/alkalinizing agent",
    "moa": "Increases serum bicarbonate and pH; shifts potassium intracellularly.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "0.5-1 mEq/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mEq/kg",
        "min": 0.5,
        "max": 1,
        "name": "Adult"
      }
    ],
    "cautions": "Hypernatremia, alkalosis, CO2 generation, hypocalcemia.",
    "contraindications": "Metabolic/respiratory alkalosis.",
    "id": "sodium-bicarbonate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Buffer/alkalinizing agent",
      "Common",
      "Electrolyte/metabolic",
      "Rescue/adjunct"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": true,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: 1 mEq/kg IV for selected severe acidosis/hyperkalemia protocols."
  },
  {
    "name": "Dextrose 50%",
    "class": "Carbohydrate",
    "moa": "Provides glucose.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "25 g IV hypoglycemia; with insulin for hyperK often 25 g",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "g fixed",
        "min": 25,
        "max": 25,
        "name": "Adult"
      }
    ],
    "cautions": "Hyperglycemia, extravasation injury.",
    "contraindications": "None in severe hypoglycemia.",
    "id": "dextrose-50",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Carbohydrate",
      "Common",
      "Electrolyte/metabolic",
      "Rescue/adjunct"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": true,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: avoid D50 in small children; use age-appropriate dextrose concentration. Dose dextrose 0.25-0.5 g/kg."
  },
  {
    "name": "Regular insulin",
    "class": "Short-acting insulin",
    "moa": "Insulin receptor activation shifts K intracellularly and lowers glucose.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Hyperkalemia 5-10 units IV with dextrose",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "units fixed",
        "min": 5,
        "max": 10,
        "name": "Adult"
      }
    ],
    "cautions": "Hypoglycemia, hypokalemia; monitor glucose.",
    "contraindications": "Hypoglycemia unless dextrose strategy present.",
    "id": "regular-insulin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Electrolyte/metabolic",
      "Rescue/adjunct",
      "Short-acting insulin"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": true,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: hyperkalemia often 0.1 units/kg IV with dextrose per protocol; glucose monitoring mandatory."
  },
  {
    "name": "Glucagon",
    "class": "Counter-regulatory hormone",
    "moa": "Increases cAMP independent of beta receptors; inotropy/chronotropy in beta-blocker toxicity.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1-5 mg IV bolus then infusion as needed",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 1,
        "max": 5,
        "name": "Adult"
      }
    ],
    "cautions": "Vomiting, hyperglycemia; airway risk if obtunded.",
    "contraindications": "Pheochromocytoma, insulinoma relative.",
    "id": "glucagon",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Counter-regulatory hormone",
      "Electrolyte/metabolic",
      "Rescue/adjunct"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": false,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Mannitol",
    "class": "Osmotic diuretic",
    "moa": "Increases plasma osmolality; reduces brain water.",
    "category": "Rescue/other",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "0.25-1 g/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "g/kg",
        "min": 0.25,
        "max": 1,
        "name": "Adult"
      }
    ],
    "cautions": "Hypovolemia, hyperosmolality, renal stress.",
    "contraindications": "Anuria, severe pulmonary edema/CHF.",
    "id": "mannitol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Osmotic diuretic",
      "Rescue/adjunct",
      "Rescue/other"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Hypertonic saline 3%",
    "class": "Hyperosmolar therapy",
    "moa": "Raises serum sodium/osmolality to reduce cerebral edema.",
    "category": "Rescue/other",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "2-5 mL/kg bolus or institution protocol",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mL/kg",
        "min": 2,
        "max": 5,
        "name": "Adult"
      }
    ],
    "cautions": "Hypernatremia, osmotic demyelination if chronic hyponatremia corrected too fast.",
    "contraindications": "Severe hypernatremia.",
    "id": "hypertonic-saline-3",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Hyperosmolar therapy",
      "Rescue/adjunct",
      "Rescue/other"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Furosemide",
    "class": "Loop diuretic",
    "moa": "Inhibits NKCC2 in thick ascending limb.",
    "category": "Rescue/other",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "10-40 mg IV typical; higher if chronic use/renal dysfunction",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 10,
        "max": 40,
        "name": "Adult"
      }
    ],
    "cautions": "Hypokalemia, hypovolemia, ototoxicity high dose.",
    "contraindications": "Severe dehydration/anuria not responsive.",
    "id": "furosemide",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Loop diuretic",
      "Rescue/adjunct",
      "Rescue/other"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Desmopressin",
    "class": "V2 agonist",
    "moa": "Increases vWF/FVIII release; antidiuretic effect.",
    "category": "Coagulation/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "0.3 mcg/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg",
        "min": 0.3,
        "max": 0.3,
        "name": "Adult"
      }
    ],
    "cautions": "Hyponatremia, thrombosis rare, tachyphylaxis.",
    "contraindications": "Hyponatremia.",
    "id": "desmopressin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Coagulation/reversal",
      "Rescue/adjunct",
      "V2 agonist"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Heparin",
    "class": "Unfractionated anticoagulant",
    "moa": "Potentiates antithrombin inhibition of thrombin/Xa.",
    "category": "Coagulation/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Bolus 50-100 units/kg depending procedure; infusion 12-18 units/kg/hr",
        "route": "IV",
        "scalar": "ABW",
        "unit": "units/kg",
        "min": 50,
        "max": 100,
        "name": "Adult"
      }
    ],
    "cautions": "Bleeding, HIT, osteoporosis long term.",
    "contraindications": "Active major bleeding, HIT history.",
    "id": "heparin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Coagulation/reversal",
      "Common",
      "Rescue/adjunct",
      "Unfractionated anticoagulant"
    ],
    "displayClass": "Coagulation/reversal",
    "common": true,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Protamine",
    "class": "Heparin reversal protein",
    "moa": "Cationic protein complexes with heparin.",
    "category": "Coagulation/reversal",
    "defaultScalar": "Custom",
    "doses": [
      {
        "label": "1 mg per 100 units heparin remaining",
        "route": "IV",
        "scalar": "Custom",
        "unit": "mg per 100 units",
        "min": 1,
        "max": 1,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension, pulmonary HTN, anaphylactoid reaction; give slowly.",
    "contraindications": "Fish/protamine insulin allergy relative, prior vasectomy relative.",
    "id": "protamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Coagulation/reversal",
      "Common",
      "Heparin reversal protein",
      "Rescue/adjunct"
    ],
    "displayClass": "Coagulation/reversal",
    "common": true,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Tranexamic acid",
    "class": "Antifibrinolytic",
    "moa": "Lysine analog inhibits plasminogen activation.",
    "category": "Coagulation/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "10-15 mg/kg IV load; infusion 1 mg/kg/hr or procedure protocol",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 10,
        "max": 15,
        "name": "Adult"
      }
    ],
    "cautions": "Seizure risk high dose, thrombosis concern context-dependent; renal adjust.",
    "contraindications": "Active intravascular clotting, SAH in many protocols.",
    "id": "tranexamic-acid",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antifibrinolytic",
      "Coagulation/reversal",
      "Common",
      "Rescue/adjunct"
    ],
    "displayClass": "Coagulation/reversal",
    "common": true,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: commonly 10-15 mg/kg IV loading, infusion varies by procedure and protocol."
  },
  {
    "name": "Aminocaproic acid",
    "class": "Antifibrinolytic",
    "moa": "Lysine analog inhibits plasminogen activation.",
    "category": "Coagulation/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "75-150 mg/kg load then 10-15 mg/kg/hr",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 75,
        "max": 150,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension if rapid, thrombosis concern, renal adjust.",
    "contraindications": "Active intravascular clotting.",
    "id": "aminocaproic-acid",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antifibrinolytic",
      "Coagulation/reversal",
      "Rescue/adjunct"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Dantrolene",
    "class": "RyR1 antagonist",
    "moa": "Reduces skeletal muscle calcium release.",
    "category": "Rescue/other",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "MH 2.5 mg/kg IV repeat until controlled",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 2.5,
        "max": 10,
        "name": "Adult"
      }
    ],
    "cautions": "Weakness, hepatotoxicity with chronic use, large reconstitution burden.",
    "contraindications": "No contraindication in MH crisis.",
    "id": "dantrolene",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Rescue/other",
      "RyR1 antagonist"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Lipid emulsion 20%",
    "class": "Lipid sink/rescue therapy",
    "moa": "Sequesters lipophilic toxins; supports fatty-acid substrate.",
    "category": "Rescue/other",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "LAST 1.5 mL/kg bolus then 0.25 mL/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mL/kg",
        "min": 1.5,
        "max": 1.5,
        "name": "Adult"
      }
    ],
    "cautions": "Pancreatitis/lab interference after large dose; use LAST protocol.",
    "contraindications": "None in severe LAST.",
    "id": "lipid-emulsion-20",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Lipid sink/rescue therapy",
      "Rescue/adjunct",
      "Rescue/other"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Methylene blue",
    "class": "Guanylate cyclase inhibitor",
    "moa": "Inhibits NO-cGMP vasodilation; treats methemoglobinemia.",
    "category": "Rescue/other",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "1-2 mg/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 1,
        "max": 2,
        "name": "Adult"
      }
    ],
    "cautions": "Serotonin syndrome, hemolysis in G6PD deficiency, pulse ox artifact.",
    "contraindications": "G6PD deficiency relative, serotonergic toxicity risk.",
    "id": "methylene-blue",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Guanylate cyclase inhibitor",
      "Rescue/adjunct",
      "Rescue/other"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Oxytocin",
    "class": "Uterotonic peptide hormone",
    "moa": "Oxytocin receptor agonism increases uterine contraction.",
    "category": "OB uterotonic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1-3 units slow IV bolus then 10-40 units infusion/bag per protocol",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "units fixed",
        "min": 1,
        "max": 3,
        "name": "Adult"
      }
    ],
    "cautions": "Hypotension with rapid bolus, tachycardia, water intoxication high dose.",
    "contraindications": "None for uterine atony; caution severe cardiac disease.",
    "id": "oxytocin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "OB uterotonic",
      "Rescue/adjunct",
      "Uterotonic peptide hormone"
    ],
    "displayClass": "OB uterotonic",
    "common": true,
    "metabolism": "Hepatic/renal metabolism varies.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on drug.",
    "obesityConsiderations": "Usually fixed dosing; obesity does not generally change initial dose.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Methylergonovine",
    "class": "Ergot uterotonic",
    "moa": "Serotonergic/alpha agonist causes sustained uterine contraction.",
    "category": "OB uterotonic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "0.2 mg IM",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.2,
        "max": 0.2,
        "name": "Adult"
      }
    ],
    "cautions": "Severe hypertension, coronary vasospasm.",
    "contraindications": "Hypertension, preeclampsia, CAD.",
    "id": "methylergonovine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Ergot uterotonic",
      "OB uterotonic",
      "Rescue/adjunct"
    ],
    "displayClass": "OB uterotonic",
    "common": false,
    "metabolism": "Hepatic/renal metabolism varies.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on drug.",
    "obesityConsiderations": "Usually fixed dosing; obesity does not generally change initial dose.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Carboprost",
    "class": "PGF2-alpha analog uterotonic",
    "moa": "Prostaglandin receptor agonism contracts uterus.",
    "category": "OB uterotonic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "250 mcg IM q15-90 min; max 2 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mcg fixed",
        "min": 250,
        "max": 250,
        "name": "Adult"
      }
    ],
    "cautions": "Bronchospasm, diarrhea, fever.",
    "contraindications": "Asthma/active bronchospasm.",
    "id": "carboprost",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "OB uterotonic",
      "PGF2-alpha analog uterotonic",
      "Rescue/adjunct"
    ],
    "displayClass": "OB uterotonic",
    "common": false,
    "metabolism": "Hepatic/renal metabolism varies.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on drug.",
    "obesityConsiderations": "Usually fixed dosing; obesity does not generally change initial dose.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Terbutaline",
    "class": "Beta-2 agonist tocolytic/bronchodilator",
    "moa": "Beta-2 agonism relaxes uterine/bronchial smooth muscle.",
    "category": "OB uterotonic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "0.25 mg SC",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.25,
        "max": 0.25,
        "name": "Adult"
      }
    ],
    "cautions": "Tachycardia, hypokalemia, hyperglycemia.",
    "contraindications": "Tachyarrhythmia, significant cardiac disease relative.",
    "id": "terbutaline",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Beta-2 agonist tocolytic/bronchodilator",
      "OB uterotonic",
      "Rescue/adjunct"
    ],
    "displayClass": "OB uterotonic",
    "common": false,
    "metabolism": "Hepatic/renal metabolism varies.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on drug.",
    "obesityConsiderations": "Usually fixed dosing; obesity does not generally change initial dose.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "name": "Lidocaine local",
    "class": "Amide local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local anesthetic",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max 4.5 mg/kg plain; 7 mg/kg with epinephrine",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 4.5,
        "max": 7,
        "name": "Adult"
      }
    ],
    "cautions": "LAST; reduce total dose for frailty, pregnancy, hepatic disease, low CO.",
    "contraindications": "True amide allergy rare; severe heart block relative.",
    "id": "lidocaine-local",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Amide local anesthetic",
      "Common",
      "Local anesthetic",
      "Local/Inhaled"
    ],
    "displayClass": "Local anesthetic",
    "common": true,
    "metabolism": "Hepatic amide metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Depends on block site; infiltration often 1-2 hr, longer with epinephrine.",
    "obesityConsiderations": "Calculate max dose using LBW/IBW or capped institutional max in obesity.",
    "pediatricDosing": "Peds: max local anesthetic dose should be weight-based and lower in infants; verify block-specific dose and institutional max."
  },
  {
    "name": "Bupivacaine",
    "class": "Amide local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local anesthetic",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max 2.5-3 mg/kg; use lower end for truncal/vascular sites",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 2.5,
        "max": 3,
        "name": "Adult"
      }
    ],
    "cautions": "Higher cardiotoxicity; LAST with refractory arrhythmias.",
    "contraindications": "IV regional anesthesia/Bier block generally avoided.",
    "id": "bupivacaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Amide local anesthetic",
      "Common",
      "Local anesthetic",
      "Local/Inhaled"
    ],
    "displayClass": "Local anesthetic",
    "common": true,
    "metabolism": "Hepatic amide metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Peripheral block often 6-12 hr, neuraxial shorter; dose/site dependent.",
    "obesityConsiderations": "Use conservative max dose in obesity; high cardiotoxicity risk.",
    "pediatricDosing": "Peds: use conservative mg/kg max, especially infants; regional dosing is block and age specific."
  },
  {
    "name": "Ropivacaine",
    "class": "Amide local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local anesthetic",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max about 3 mg/kg",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 3,
        "max": 3,
        "name": "Adult"
      }
    ],
    "cautions": "Less cardiotoxic than bupivacaine but LAST still possible.",
    "contraindications": "True amide allergy rare.",
    "id": "ropivacaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Amide local anesthetic",
      "Common",
      "Local anesthetic",
      "Local/Inhaled"
    ],
    "displayClass": "Local anesthetic",
    "common": true,
    "metabolism": "Hepatic CYP metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Peripheral block often 5-8 hr, dose/site dependent.",
    "obesityConsiderations": "Use conservative max dose in obesity; less cardiotoxic than bupivacaine but not benign.",
    "pediatricDosing": "Peds: regional dosing is block and age specific; use institutional pediatric regional reference."
  },
  {
    "name": "Mepivacaine",
    "class": "Amide local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local anesthetic",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max 4.5 mg/kg plain; 7 mg/kg with epinephrine",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 4.5,
        "max": 7,
        "name": "Adult"
      }
    ],
    "cautions": "LAST; avoid large obstetric paracervical doses.",
    "contraindications": "True amide allergy rare.",
    "id": "mepivacaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Amide local anesthetic",
      "Local anesthetic",
      "Local/Inhaled"
    ],
    "displayClass": "Local anesthetic",
    "common": false,
    "metabolism": "Ester local anesthetics: plasma cholinesterase. Amide local anesthetics: hepatic metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Site and agent dependent, minutes to many hours.",
    "obesityConsiderations": "Calculate max dose conservatively, often not full ABW in severe obesity.",
    "pediatricDosing": "Peds: local anesthetic max dose is age, weight, site, and additive dependent; infants require lower dosing."
  },
  {
    "name": "Chloroprocaine",
    "class": "Ester local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local anesthetic",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max 11-12 mg/kg",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 11,
        "max": 12,
        "name": "Adult"
      }
    ],
    "cautions": "PABA metabolite allergy possible; rapid metabolism.",
    "contraindications": "Ester/PABA allergy.",
    "id": "chloroprocaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Ester local anesthetic",
      "Local anesthetic",
      "Local/Inhaled"
    ],
    "displayClass": "Local anesthetic",
    "common": false,
    "metabolism": "Ester local anesthetics: plasma cholinesterase. Amide local anesthetics: hepatic metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Site and agent dependent, minutes to many hours.",
    "obesityConsiderations": "Calculate max dose conservatively, often not full ABW in severe obesity.",
    "pediatricDosing": "Peds: local anesthetic max dose is age, weight, site, and additive dependent; infants require lower dosing."
  },
  {
    "name": "Tetracaine",
    "class": "Ester local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local anesthetic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Spinal 5-15 mg typical, not weight-based",
        "route": "Regional/Inhaled",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 15,
        "name": "Adult"
      }
    ],
    "cautions": "Long duration spinal; hypotension/urinary retention.",
    "contraindications": "Ester/PABA allergy.",
    "id": "tetracaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Ester local anesthetic",
      "Local anesthetic",
      "Local/Inhaled"
    ],
    "displayClass": "Local anesthetic",
    "common": false,
    "metabolism": "Ester local anesthetics: plasma cholinesterase. Amide local anesthetics: hepatic metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Site and agent dependent, minutes to many hours.",
    "obesityConsiderations": "Calculate max dose conservatively, often not full ABW in severe obesity.",
    "pediatricDosing": "Peds: local anesthetic max dose is age, weight, site, and additive dependent; infants require lower dosing."
  },
  {
    "name": "Sevoflurane",
    "class": "Volatile anesthetic",
    "moa": "Multiple CNS targets including GABA/glycine/two-pore K channels; immobility via spinal effects.",
    "category": "Volatile/inhaled",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "label": "Age-adjusted MAC from MAC40 2.0%; display shows 0.7, 1.0, and 1.3 MAC targets",
        "route": "Inhaled",
        "scalar": "AgeMAC",
        "unit": "MAC_age",
        "min": 2.0,
        "max": 2.0,
        "name": "Age MAC"
      }
    ],
    "cautions": "MH trigger, hypotension, compound A concern low-flow historical.",
    "contraindications": "MH susceptibility.",
    "id": "sevoflurane",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Local/Inhaled",
      "Volatile anesthetic",
      "Volatile/inhaled"
    ],
    "displayClass": "Volatile/inhaled",
    "common": true,
    "metabolism": "Primarily eliminated unchanged via exhalation; limited agent-specific metabolism.",
    "excretion": "Exhaled through lungs; minimal renal excretion of metabolites.",
    "duration": "Offset depends on blood-gas solubility, ventilation, duration, and uptake; desflurane/nitrous fastest, sevoflurane intermediate, isoflurane slower.",
    "obesityConsiderations": "MAC is reduced by age and coadministered agents; obesity mainly affects uptake/recovery kinetics rather than MAC calculation.",
    "pediatricDosing": "Peds: MAC is age dependent and higher in infants/children than adults; titrate end-tidal concentration to effect.",
    "mac40": 2.0
  },
  {
    "name": "Desflurane",
    "class": "Volatile anesthetic",
    "moa": "Volatile anesthetic CNS/spinal effects.",
    "category": "Volatile/inhaled",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "label": "Age-adjusted MAC from MAC40 6.0%; display shows 0.7, 1.0, and 1.3 MAC targets",
        "route": "Inhaled",
        "scalar": "AgeMAC",
        "unit": "MAC_age",
        "min": 6.0,
        "max": 6.0,
        "name": "Age MAC"
      }
    ],
    "cautions": "Airway irritant, sympathetic stimulation with rapid increases, high GWP.",
    "contraindications": "MH susceptibility; avoid induction in reactive airway.",
    "id": "desflurane",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Local/Inhaled",
      "Volatile anesthetic",
      "Volatile/inhaled"
    ],
    "displayClass": "Volatile/inhaled",
    "common": true,
    "metabolism": "Primarily eliminated unchanged via exhalation; limited agent-specific metabolism.",
    "excretion": "Exhaled through lungs; minimal renal excretion of metabolites.",
    "duration": "Offset depends on blood-gas solubility, ventilation, duration, and uptake; desflurane/nitrous fastest, sevoflurane intermediate, isoflurane slower.",
    "obesityConsiderations": "MAC is reduced by age and coadministered agents; obesity mainly affects uptake/recovery kinetics rather than MAC calculation.",
    "pediatricDosing": "Peds: MAC is age dependent; airway irritation limits use for inhalation induction.",
    "mac40": 6.0
  },
  {
    "name": "Isoflurane",
    "class": "Volatile anesthetic",
    "moa": "Volatile anesthetic CNS/spinal effects.",
    "category": "Volatile/inhaled",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "label": "Age-adjusted MAC from MAC40 1.2%; display shows 0.7, 1.0, and 1.3 MAC targets",
        "route": "Inhaled",
        "scalar": "AgeMAC",
        "unit": "MAC_age",
        "min": 1.2,
        "max": 1.2,
        "name": "Age MAC"
      }
    ],
    "cautions": "Hypotension, pungent, coronary steal theoretical.",
    "contraindications": "MH susceptibility.",
    "id": "isoflurane",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Common",
      "Local/Inhaled",
      "Volatile anesthetic",
      "Volatile/inhaled"
    ],
    "displayClass": "Volatile/inhaled",
    "common": true,
    "metabolism": "Primarily eliminated unchanged via exhalation; limited agent-specific metabolism.",
    "excretion": "Exhaled through lungs; minimal renal excretion of metabolites.",
    "duration": "Offset depends on blood-gas solubility, ventilation, duration, and uptake; desflurane/nitrous fastest, sevoflurane intermediate, isoflurane slower.",
    "obesityConsiderations": "MAC is reduced by age and coadministered agents; obesity mainly affects uptake/recovery kinetics rather than MAC calculation.",
    "pediatricDosing": "Peds: MAC is age dependent; titrate end-tidal concentration to effect.",
    "mac40": 1.2
  },
  {
    "name": "Nitrous oxide",
    "class": "Inhaled anesthetic gas",
    "moa": "NMDA antagonism; weak anesthetic, analgesic.",
    "category": "Volatile/inhaled",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "label": "Age-adjusted MAC from MAC40 105%; display shows 0.7, 1.0, and 1.3 MAC targets",
        "route": "Inhaled",
        "scalar": "AgeMAC",
        "unit": "MAC_age",
        "min": 105,
        "max": 105,
        "name": "Age MAC"
      }
    ],
    "cautions": "Expands closed gas spaces, PONV, diffusion hypoxia, B12 inhibition.",
    "contraindications": "Pneumothorax, bowel obstruction, middle ear surgery, recent intraocular gas, B12 deficiency risk.",
    "id": "nitrous-oxide",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Inhaled anesthetic gas",
      "Local/Inhaled",
      "Volatile/inhaled"
    ],
    "displayClass": "Volatile/inhaled",
    "common": false,
    "metabolism": "Eliminated essentially unchanged via exhalation.",
    "excretion": "Exhaled through lungs; minimal renal excretion of metabolites.",
    "duration": "Offset depends on blood-gas solubility, ventilation, duration, and uptake; desflurane/nitrous fastest, sevoflurane intermediate, isoflurane slower.",
    "obesityConsiderations": "MAC is reduced by age and coadministered agents; obesity mainly affects uptake/recovery kinetics rather than MAC calculation.",
    "pediatricDosing": "Peds: adjunct concentration commonly up to 50-70% with oxygen depending setting; avoid contraindications.",
    "mac40": 105
  },
  {
    "id": "lorazepam",
    "name": "Lorazepam",
    "class": "Benzodiazepine",
    "moa": "GABA-A positive allosteric modulation; anxiolytic, amnestic, anticonvulsant.",
    "category": "Sedative",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "0.5-2 mg IV/PO titrated",
        "route": "IV/PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 2
      }
    ],
    "cautions": "Prolonged sedation, delirium, respiratory depression with opioids.",
    "contraindications": "Severe respiratory depression without airway support.",
    "millerRef": "Miller 10e, Ch 21 Intravenous Anesthetics; Ch 77 Acute Postoperative Pain",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Benzodiazepine",
      "Sedative"
    ],
    "displayClass": "Sedative",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "diazepam",
    "name": "Diazepam",
    "class": "Benzodiazepine",
    "moa": "GABA-A positive allosteric modulation.",
    "category": "Sedative",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "2-5 mg IV/PO titrated",
        "route": "IV/PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2,
        "max": 5
      }
    ],
    "cautions": "Long half-life and active metabolites; venous irritation IV.",
    "contraindications": "Severe respiratory depression without airway support.",
    "millerRef": "Miller 10e, Ch 21 Intravenous Anesthetics",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Benzodiazepine",
      "Sedative"
    ],
    "displayClass": "Sedative",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "clonidine",
    "name": "Clonidine",
    "class": "Alpha-2 agonist",
    "moa": "Central alpha-2 agonism reducing sympathetic outflow.",
    "category": "Sedative",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "PO premed commonly 0.1-0.2 mg adult",
        "route": "PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.1,
        "max": 0.2
      }
    ],
    "cautions": "Hypotension, bradycardia, sedation; rebound HTN if chronic use stopped.",
    "contraindications": "Severe bradycardia or advanced heart block without pacing.",
    "millerRef": "Miller 10e, Ch 16 Basic Principles of Pharmacology",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Alpha-2 agonist",
      "Sedative",
      "Sedative adjunct"
    ],
    "displayClass": "Sedative",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "naloxone",
    "name": "Naloxone",
    "class": "Opioid antagonist",
    "moa": "Competitive mu-opioid receptor antagonism.",
    "category": "Reversal/rescue",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "0.04-0.4 mg IV increments; infusion may be needed",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.04,
        "max": 0.4
      }
    ],
    "cautions": "Abrupt pain, sympathetic surge, pulmonary edema; duration may be shorter than opioid.",
    "contraindications": "Use caution in opioid dependence.",
    "millerRef": "Miller 10e, Ch 22 Opioids",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Opioid antagonist",
      "Reversal/rescue"
    ],
    "displayClass": "Reversal/rescue",
    "common": false,
    "metabolism": "Agent-specific metabolism or binding mechanism.",
    "excretion": "Often renal excretion or organ-independent redistribution.",
    "duration": "Usually minutes to hours depending on agent and target.",
    "obesityConsiderations": "Use capped or indication-specific dosing; obesity scalar varies by drug and urgency.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "flumazenil",
    "name": "Flumazenil",
    "class": "Benzodiazepine antagonist",
    "moa": "Competitive antagonist at benzodiazepine site of GABA-A receptor.",
    "category": "Reversal/rescue",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "0.2 mg IV q60 sec to effect, usual max 1 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.2,
        "max": 1
      }
    ],
    "cautions": "Can precipitate seizures in chronic benzodiazepine use or mixed overdose.",
    "contraindications": "TCA overdose, seizure disorder, chronic benzodiazepine dependence.",
    "millerRef": "Miller 10e, Ch 21 Intravenous Anesthetics",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Benzodiazepine antagonist",
      "Reversal/rescue"
    ],
    "displayClass": "Reversal/rescue",
    "common": false,
    "metabolism": "Agent-specific metabolism or binding mechanism.",
    "excretion": "Often renal excretion or organ-independent redistribution.",
    "duration": "Usually minutes to hours depending on agent and target.",
    "obesityConsiderations": "Use capped or indication-specific dosing; obesity scalar varies by drug and urgency.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "nalmefene",
    "name": "Nalmefene",
    "class": "Opioid antagonist",
    "moa": "Longer-acting opioid receptor antagonist.",
    "category": "Reversal/rescue",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "0.25-1 mcg/kg IV titrated or small adult increments",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mcg/kg",
        "min": 0.25,
        "max": 1
      }
    ],
    "cautions": "Longer reversal may cause prolonged pain or withdrawal.",
    "contraindications": "Opioid dependence: risk of acute withdrawal.",
    "millerRef": "Miller 10e, Ch 22 Opioids",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Opioid antagonist",
      "Reversal/rescue"
    ],
    "displayClass": "Reversal/rescue",
    "common": false,
    "metabolism": "Agent-specific metabolism or binding mechanism.",
    "excretion": "Often renal excretion or organ-independent redistribution.",
    "duration": "Usually minutes to hours depending on agent and target.",
    "obesityConsiderations": "Use capped or indication-specific dosing; obesity scalar varies by drug and urgency.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "nalbuphine",
    "name": "Nalbuphine",
    "class": "Kappa agonist, mu antagonist opioid",
    "moa": "Kappa agonism with partial mu antagonism.",
    "category": "Opioid",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "2.5-5 mg IV increments for pruritus or analgesia",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2.5,
        "max": 5
      }
    ],
    "cautions": "Ceiling respiratory depression but can precipitate withdrawal.",
    "contraindications": "Opioid dependence or high-dose mu agonist therapy.",
    "millerRef": "Miller 10e, Ch 22 Opioids",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Kappa agonist, mu antagonist opioid",
      "Opioid"
    ],
    "displayClass": "Opioid",
    "common": false,
    "metabolism": "Primarily hepatic metabolism except remifentanil by esterases.",
    "excretion": "Renal/biliary excretion of metabolites varies by agent.",
    "duration": "Minutes to hours depending on lipid solubility and context-sensitive half-time.",
    "obesityConsiderations": "Use conservative titrated dosing in obesity and OSA; avoid unbounded ABW escalation.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "id": "butorphanol",
    "name": "Butorphanol",
    "class": "Mixed opioid agonist-antagonist",
    "moa": "Kappa agonist and partial mu antagonist activity.",
    "category": "Opioid",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "0.5-2 mg IV/IM",
        "route": "IV/IM",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 2
      }
    ],
    "cautions": "Sedation, dysphoria; may precipitate withdrawal.",
    "contraindications": "Opioid dependence.",
    "millerRef": "Miller 10e, Ch 22 Opioids",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Mixed opioid agonist-antagonist",
      "Opioid"
    ],
    "displayClass": "Opioid",
    "common": false,
    "metabolism": "Primarily hepatic metabolism except remifentanil by esterases.",
    "excretion": "Renal/biliary excretion of metabolites varies by agent.",
    "duration": "Minutes to hours depending on lipid solubility and context-sensitive half-time.",
    "obesityConsiderations": "Use conservative titrated dosing in obesity and OSA; avoid unbounded ABW escalation.",
    "pediatricDosing": "Peds: opioid dosing is weight-based, age-sensitive, and OSA-sensitive; use pediatric pain/anesthesia reference and titrate."
  },
  {
    "id": "remimazolam",
    "name": "Remimazolam",
    "class": "Ultra-short benzodiazepine",
    "moa": "Ester-metabolized benzodiazepine acting at GABA-A receptor.",
    "category": "Hypnotic",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "Procedural sedation 2.5-5 mg IV bolus; titrate per label",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg fixed",
        "min": 2.5,
        "max": 5
      }
    ],
    "cautions": "Respiratory depression with opioids; hypotension less than propofol in some settings.",
    "contraindications": "Severe respiratory depression without airway support.",
    "millerRef": "Miller 10e, Ch 21 Intravenous Anesthetics",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Hypnotic",
      "Sedative",
      "Ultra-short benzodiazepine"
    ],
    "displayClass": "Hypnotic",
    "common": false,
    "metabolism": "Hepatic and/or extrahepatic metabolism depending on agent.",
    "excretion": "Mostly renal/biliary metabolites.",
    "duration": "Short bolus effect; longer after infusion or repeated dosing.",
    "obesityConsiderations": "Use LBW/IBW/AdjBW strategy and titrate to hemodynamics, age, and shock physiology.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "cefazolin",
    "name": "Cefazolin",
    "class": "First-generation cephalosporin",
    "moa": "Beta-lactam inhibition of bacterial cell wall synthesis.",
    "category": "Antibiotic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "2 g IV; 3 g IV if >=120 kg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2000,
        "max": 3000
      }
    ],
    "cautions": "Adjust redosing interval for case duration and blood loss; allergy assessment matters.",
    "contraindications": "Severe cephalosporin allergy; evaluate beta-lactam history.",
    "millerRef": "Miller 10e, Ch 28 Preoperative Evaluation; Ch 84 Infection Control",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antibiotic",
      "Antibiotic prophylaxis",
      "Common",
      "First-generation cephalosporin"
    ],
    "displayClass": "Antibiotic",
    "common": true,
    "metabolism": "Agent-specific hepatic/renal handling.",
    "excretion": "Renal excretion common, but varies by agent.",
    "duration": "Prophylaxis redosing interval depends on half-life and blood loss.",
    "obesityConsiderations": "Commonly ABW-based with caps; cefazolin often 3 g if weight >=120 kg per many protocols.",
    "pediatricDosing": "Peds: 30 mg/kg IV, common max 2 g or 3 g by weight/protocol."
  },
  {
    "id": "vancomycin",
    "name": "Vancomycin",
    "class": "Glycopeptide antibiotic",
    "moa": "Inhibits bacterial cell wall synthesis via D-Ala-D-Ala binding.",
    "category": "Antibiotic",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "15 mg/kg IV, start early due infusion time",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 15,
        "max": 15
      }
    ],
    "cautions": "Infusion reaction, nephrotoxicity; dose by ABW and renal function.",
    "contraindications": "Prior severe vancomycin reaction.",
    "millerRef": "Miller 10e, Ch 84 Occupational Safety, Infection Control, and Substance Use Disorders",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antibiotic",
      "Antibiotic prophylaxis",
      "Common",
      "Glycopeptide antibiotic"
    ],
    "displayClass": "Antibiotic",
    "common": true,
    "metabolism": "Agent-specific hepatic/renal handling.",
    "excretion": "Renal excretion common, but varies by agent.",
    "duration": "Prophylaxis redosing interval depends on half-life and blood loss.",
    "obesityConsiderations": "Commonly ABW-based with caps; cefazolin often 3 g if weight >=120 kg per many protocols.",
    "pediatricDosing": "Peds: 15 mg/kg IV, timing and levels per protocol."
  },
  {
    "id": "clindamycin",
    "name": "Clindamycin",
    "class": "Lincosamide antibiotic",
    "moa": "Inhibits 50S ribosomal protein synthesis.",
    "category": "Antibiotic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "900 mg IV adult prophylaxis",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 900,
        "max": 900
      }
    ],
    "cautions": "C. difficile risk; bacteriostatic.",
    "contraindications": "Prior severe clindamycin reaction.",
    "millerRef": "Miller 10e, Ch 84 Infection Control",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antibiotic",
      "Antibiotic prophylaxis",
      "Common",
      "Lincosamide antibiotic"
    ],
    "displayClass": "Antibiotic",
    "common": true,
    "metabolism": "Agent-specific hepatic/renal handling.",
    "excretion": "Renal excretion common, but varies by agent.",
    "duration": "Prophylaxis redosing interval depends on half-life and blood loss.",
    "obesityConsiderations": "Commonly ABW-based with caps; cefazolin often 3 g if weight >=120 kg per many protocols.",
    "pediatricDosing": "Peds: 10 mg/kg IV, max commonly 900 mg."
  },
  {
    "id": "gentamicin",
    "name": "Gentamicin",
    "class": "Aminoglycoside antibiotic",
    "moa": "30S ribosomal inhibition; concentration-dependent killing.",
    "category": "Antibiotic",
    "defaultScalar": "AdjBW",
    "doses": [
      {
        "name": "Adult",
        "label": "3-5 mg/kg IV depending indication and renal function",
        "route": "IV",
        "scalar": "AdjBW",
        "unit": "mg/kg",
        "min": 3,
        "max": 5
      }
    ],
    "cautions": "Nephrotoxicity, ototoxicity; use adjusted weight in obesity and adjust renal dysfunction.",
    "contraindications": "Avoid or verify in severe renal failure unless clear indication.",
    "millerRef": "Miller 10e, Ch 38 Renal Pathophysiology and Treatment",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Aminoglycoside antibiotic",
      "Antibiotic",
      "Antibiotic prophylaxis"
    ],
    "displayClass": "Antibiotic",
    "common": false,
    "metabolism": "Agent-specific hepatic/renal handling.",
    "excretion": "Renal excretion common, but varies by agent.",
    "duration": "Prophylaxis redosing interval depends on half-life and blood loss.",
    "obesityConsiderations": "Commonly ABW-based with caps; cefazolin often 3 g if weight >=120 kg per many protocols.",
    "pediatricDosing": "Peds: 2.5 mg/kg traditional or extended-interval dosing per age/renal function; levels required."
  },
  {
    "id": "metronidazole",
    "name": "Metronidazole",
    "class": "Nitroimidazole antibiotic",
    "moa": "DNA strand disruption in anaerobes and protozoa.",
    "category": "Antibiotic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "500 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 500,
        "max": 500
      }
    ],
    "cautions": "Disulfiram-like reaction; neuropathy with prolonged therapy.",
    "contraindications": "Severe prior reaction.",
    "millerRef": "Miller 10e, Ch 84 Infection Control",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antibiotic",
      "Antibiotic prophylaxis",
      "Nitroimidazole antibiotic"
    ],
    "displayClass": "Antibiotic",
    "common": false,
    "metabolism": "Agent-specific hepatic/renal handling.",
    "excretion": "Renal excretion common, but varies by agent.",
    "duration": "Prophylaxis redosing interval depends on half-life and blood loss.",
    "obesityConsiderations": "Commonly ABW-based with caps; cefazolin often 3 g if weight >=120 kg per many protocols.",
    "pediatricDosing": "Peds: weight-based prophylaxis required; use pediatric antimicrobial reference, renal function, and max adult dose cap."
  },
  {
    "id": "cefoxitin",
    "name": "Cefoxitin",
    "class": "Second-generation cephalosporin",
    "moa": "Beta-lactam cell wall inhibition with anaerobic coverage.",
    "category": "Antibiotic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "2 g IV adult prophylaxis",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2000,
        "max": 2000
      }
    ],
    "cautions": "Redose for duration/blood loss; renal considerations for repeated dosing.",
    "contraindications": "Severe cephalosporin allergy.",
    "millerRef": "Miller 10e, Ch 84 Infection Control",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antibiotic",
      "Antibiotic prophylaxis",
      "Second-generation cephalosporin"
    ],
    "displayClass": "Antibiotic",
    "common": false,
    "metabolism": "Agent-specific hepatic/renal handling.",
    "excretion": "Renal excretion common, but varies by agent.",
    "duration": "Prophylaxis redosing interval depends on half-life and blood loss.",
    "obesityConsiderations": "Commonly ABW-based with caps; cefazolin often 3 g if weight >=120 kg per many protocols.",
    "pediatricDosing": "Peds: weight-based prophylaxis required; use pediatric antimicrobial reference, renal function, and max adult dose cap."
  },
  {
    "id": "ceftriaxone",
    "name": "Ceftriaxone",
    "class": "Third-generation cephalosporin",
    "moa": "Beta-lactam cell wall inhibition.",
    "category": "Antibiotic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "1-2 g IV depending indication",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 1000,
        "max": 2000
      }
    ],
    "cautions": "Biliary sludging; not ideal for frequent redosing strategy.",
    "contraindications": "Severe cephalosporin allergy.",
    "millerRef": "Miller 10e, Ch 84 Infection Control",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antibiotic",
      "Antibiotic prophylaxis",
      "Third-generation cephalosporin"
    ],
    "displayClass": "Antibiotic",
    "common": false,
    "metabolism": "Agent-specific hepatic/renal handling.",
    "excretion": "Renal excretion common, but varies by agent.",
    "duration": "Prophylaxis redosing interval depends on half-life and blood loss.",
    "obesityConsiderations": "Commonly ABW-based with caps; cefazolin often 3 g if weight >=120 kg per many protocols.",
    "pediatricDosing": "Peds: weight-based prophylaxis required; use pediatric antimicrobial reference, renal function, and max adult dose cap."
  },
  {
    "id": "aztreonam",
    "name": "Aztreonam",
    "class": "Monobactam antibiotic",
    "moa": "Beta-lactam active against gram-negative aerobes.",
    "category": "Antibiotic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "1-2 g IV adult dose",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 1000,
        "max": 2000
      }
    ],
    "cautions": "Renal adjustment for repeated dosing; limited gram-positive/anaerobe coverage.",
    "contraindications": "Prior severe aztreonam reaction.",
    "millerRef": "Miller 10e, Ch 84 Infection Control",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antibiotic",
      "Antibiotic prophylaxis",
      "Monobactam antibiotic"
    ],
    "displayClass": "Antibiotic",
    "common": false,
    "metabolism": "Agent-specific hepatic/renal handling.",
    "excretion": "Renal excretion common, but varies by agent.",
    "duration": "Prophylaxis redosing interval depends on half-life and blood loss.",
    "obesityConsiderations": "Commonly ABW-based with caps; cefazolin often 3 g if weight >=120 kg per many protocols.",
    "pediatricDosing": "Peds: weight-based prophylaxis required; use pediatric antimicrobial reference, renal function, and max adult dose cap."
  },
  {
    "id": "hydrocortisone",
    "name": "Hydrocortisone",
    "class": "Glucocorticoid",
    "moa": "Glucocorticoid receptor agonism; mineralocorticoid activity.",
    "category": "Steroid/endocrine",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "Stress dose often 50-100 mg IV depending surgical stress",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 50,
        "max": 100
      }
    ],
    "cautions": "Hyperglycemia, infection risk; tailor to chronic steroid exposure.",
    "contraindications": "No absolute contraindication in adrenal crisis.",
    "millerRef": "Miller 10e, Ch 29 Concurrent Diseases; Ch 61 Geriatric Anesthesia",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Glucocorticoid",
      "Steroid/endocrine"
    ],
    "displayClass": "Steroid/endocrine",
    "common": false,
    "metabolism": "Hepatic metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Biologic effect often much longer than plasma half-life.",
    "obesityConsiderations": "Fixed stress or antiemetic dosing; obesity dosing is indication-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "methylprednisolone",
    "name": "Methylprednisolone",
    "class": "Glucocorticoid",
    "moa": "Glucocorticoid receptor agonism.",
    "category": "Steroid/endocrine",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "40-125 mg IV depending indication",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 40,
        "max": 125
      }
    ],
    "cautions": "Hyperglycemia, immunosuppression; neuro/airway edema indications vary.",
    "contraindications": "Systemic fungal infection unless life-threatening indication.",
    "millerRef": "Miller 10e, Ch 29 Concurrent Diseases",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Glucocorticoid",
      "Steroid/endocrine"
    ],
    "displayClass": "Steroid/endocrine",
    "common": false,
    "metabolism": "Hepatic metabolism.",
    "excretion": "Renal excretion of metabolites.",
    "duration": "Biologic effect often much longer than plasma half-life.",
    "obesityConsiderations": "Fixed stress or antiemetic dosing; obesity dosing is indication-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "vitamin-k",
    "name": "Vitamin K",
    "class": "Vitamin K derivative",
    "moa": "Cofactor replacement for hepatic synthesis of factors II, VII, IX, X.",
    "category": "Coagulation/reversal",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "1-10 mg IV/PO depending urgency and INR",
        "route": "IV/PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 1,
        "max": 10
      }
    ],
    "cautions": "IV administration can rarely cause anaphylactoid reaction; slow infusion.",
    "contraindications": "Use caution when rapid re-anticoagulation is needed.",
    "millerRef": "Miller 10e, Ch 46 Patient Blood Management: Coagulation",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Coagulation/reversal",
      "Vitamin K derivative"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "4-factor-pcc",
    "name": "4-factor PCC",
    "class": "Prothrombin complex concentrate",
    "moa": "Concentrated vitamin K-dependent coagulation factors.",
    "category": "Coagulation/reversal",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "Dose by INR, weight, product, and institutional protocol",
        "route": "IV",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Thrombosis risk; use protocol for warfarin reversal.",
    "contraindications": "DIC or thrombosis risk requires risk-benefit decision.",
    "millerRef": "Miller 10e, Ch 46 Patient Blood Management: Coagulation",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Coagulation/reversal",
      "Prothrombin complex concentrate"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "andexanet-alfa",
    "name": "Andexanet alfa",
    "class": "Factor Xa inhibitor reversal",
    "moa": "Decoy modified factor Xa protein binds factor Xa inhibitors.",
    "category": "Coagulation/reversal",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "Low- or high-dose regimen per agent, dose, and timing",
        "route": "IV",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Thrombosis risk; rebound anticoagulation possible; formulary restrictions.",
    "contraindications": "Use only for life-threatening/critical bleeding per protocol.",
    "millerRef": "Miller 10e, Ch 46 Patient Blood Management: Coagulation",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Coagulation/reversal",
      "Factor Xa inhibitor reversal"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "idarucizumab",
    "name": "Idarucizumab",
    "class": "Dabigatran reversal antibody fragment",
    "moa": "Monoclonal antibody fragment binds dabigatran.",
    "category": "Coagulation/reversal",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "5 g IV total, usually two 2.5 g doses",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "g fixed",
        "min": 5,
        "max": 5
      }
    ],
    "cautions": "Monitor for recurrent anticoagulation in renal failure.",
    "contraindications": "Hypersensitivity.",
    "millerRef": "Miller 10e, Ch 46 Patient Blood Management: Coagulation",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Coagulation/reversal",
      "Dabigatran reversal antibody fragment"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "fibrinogen-concentrate",
    "name": "Fibrinogen concentrate",
    "class": "Fibrinogen replacement",
    "moa": "Concentrated fibrinogen substrate for clot formation.",
    "category": "Coagulation/reversal",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "Dose by fibrinogen level/viscoelastic testing/product protocol",
        "route": "IV",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Thrombosis risk; use lab or TEG/ROTEM guidance.",
    "contraindications": "Thrombosis risk requires individualized decision.",
    "millerRef": "Miller 10e, Ch 46 Patient Blood Management: Coagulation",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Coagulation/reversal",
      "Fibrinogen replacement"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "bivalirudin",
    "name": "Bivalirudin",
    "class": "Direct thrombin inhibitor",
    "moa": "Direct reversible thrombin inhibition.",
    "category": "Coagulation/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "Protocol dependent bolus/infusion; renal adjustment needed",
        "route": "IV",
        "scalar": "ABW",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "No specific reversal; monitor ACT/aPTT; renal clearance component.",
    "contraindications": "Active major bleeding unless indicated for anticoagulation.",
    "millerRef": "Miller 10e, Ch 46 Patient Blood Management: Coagulation",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Coagulation/reversal",
      "Direct thrombin inhibitor"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "aspirin",
    "name": "Aspirin",
    "class": "Antiplatelet",
    "moa": "Irreversible COX-1 platelet inhibition reducing thromboxane A2.",
    "category": "Coagulation/reversal",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "81-325 mg PO depending indication",
        "route": "PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 81,
        "max": 325
      }
    ],
    "cautions": "Bleeding risk; continuation depends stent/thrombotic risk and procedure.",
    "contraindications": "Active major bleeding or true aspirin allergy.",
    "millerRef": "Miller 10e, Ch 46 Patient Blood Management: Coagulation",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antiplatelet",
      "Cardiac/antiplatelet",
      "Coagulation/reversal"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "cangrelor",
    "name": "Cangrelor",
    "class": "IV P2Y12 inhibitor",
    "moa": "Reversible platelet P2Y12 ADP receptor antagonist.",
    "category": "Coagulation/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "PCI dosing 30 mcg/kg bolus then 4 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 4,
        "max": 4
      }
    ],
    "cautions": "Very short acting; bleeding risk.",
    "contraindications": "Active significant bleeding.",
    "millerRef": "Miller 10e, Ch 46 Patient Blood Management: Coagulation",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Cardiac/antiplatelet",
      "Coagulation/reversal",
      "IV P2Y12 inhibitor"
    ],
    "displayClass": "Coagulation/reversal",
    "common": false,
    "metabolism": "Agent-specific enzymatic or reticuloendothelial clearance.",
    "excretion": "Renal/hepatic clearance varies.",
    "duration": "Depends on coagulation endpoint and underlying anticoagulant.",
    "obesityConsiderations": "Use protocolized dosing, lab guidance, and caps rather than simple obesity scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "levetiracetam",
    "name": "Levetiracetam",
    "class": "Antiseizure medication",
    "moa": "SV2A binding modulates neurotransmitter release.",
    "category": "Neuro/rescue",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "500-1500 mg IV/PO adult load/maintenance varies",
        "route": "IV/PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 500,
        "max": 1500
      }
    ],
    "cautions": "Renal dose adjustment for maintenance; somnolence.",
    "contraindications": "Hypersensitivity.",
    "millerRef": "Miller 10e, Ch 80 Neurocritical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antiseizure medication",
      "Neuro/rescue"
    ],
    "displayClass": "Neuro/rescue",
    "common": false,
    "metabolism": "Hepatic or renal metabolism varies.",
    "excretion": "Renal excretion important for several antiepileptics.",
    "duration": "Hours to days depending on agent.",
    "obesityConsiderations": "Weight-based loading usually capped and adjusted for organ dysfunction.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "fosphenytoin",
    "name": "Fosphenytoin",
    "class": "Antiseizure prodrug",
    "moa": "Voltage-gated sodium channel inactivation via phenytoin.",
    "category": "Neuro/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "15-20 mg PE/kg IV load",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 15,
        "max": 20
      }
    ],
    "cautions": "Hypotension, arrhythmia; rate limits; protein binding altered in hypoalbuminemia.",
    "contraindications": "Sinus bradycardia, SA block, AV block, Adams-Stokes.",
    "millerRef": "Miller 10e, Ch 80 Neurocritical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antiseizure prodrug",
      "Neuro/rescue"
    ],
    "displayClass": "Neuro/rescue",
    "common": false,
    "metabolism": "Hepatic or renal metabolism varies.",
    "excretion": "Renal excretion important for several antiepileptics.",
    "duration": "Hours to days depending on agent.",
    "obesityConsiderations": "Weight-based loading usually capped and adjusted for organ dysfunction.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "phenytoin",
    "name": "Phenytoin",
    "class": "Antiseizure medication",
    "moa": "Voltage-gated sodium channel inactivation.",
    "category": "Neuro/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "10-20 mg/kg IV load",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 10,
        "max": 20
      }
    ],
    "cautions": "Extravasation injury, hypotension, arrhythmia; infusion rate limits.",
    "contraindications": "Sinus bradycardia, SA block, AV block, Adams-Stokes.",
    "millerRef": "Miller 10e, Ch 80 Neurocritical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antiseizure medication",
      "Neuro/rescue"
    ],
    "displayClass": "Neuro/rescue",
    "common": false,
    "metabolism": "Hepatic or renal metabolism varies.",
    "excretion": "Renal excretion important for several antiepileptics.",
    "duration": "Hours to days depending on agent.",
    "obesityConsiderations": "Weight-based loading usually capped and adjusted for organ dysfunction.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "phenobarbital",
    "name": "Phenobarbital",
    "class": "Barbiturate anticonvulsant",
    "moa": "GABA-A positive modulation; CNS depression.",
    "category": "Neuro/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "10-20 mg/kg IV load",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 10,
        "max": 20
      }
    ],
    "cautions": "Respiratory depression, hypotension, long sedation.",
    "contraindications": "Severe respiratory depression without airway support; porphyria.",
    "millerRef": "Miller 10e, Ch 80 Neurocritical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Barbiturate anticonvulsant",
      "Neuro/rescue"
    ],
    "displayClass": "Neuro/rescue",
    "common": false,
    "metabolism": "Hepatic or renal metabolism varies.",
    "excretion": "Renal excretion important for several antiepileptics.",
    "duration": "Hours to days depending on agent.",
    "obesityConsiderations": "Weight-based loading usually capped and adjusted for organ dysfunction.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "caffeine-citrate",
    "name": "Caffeine citrate",
    "class": "Methylxanthine",
    "moa": "Adenosine receptor antagonism; respiratory/CNS stimulant.",
    "category": "Neuro/rescue",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "PDPH adjunct dosing varies; neonatal apnea dosing separate",
        "route": "IV/PO",
        "scalar": "Fixed",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Tachycardia, anxiety; evidence/availability variable.",
    "contraindications": "Uncontrolled tachyarrhythmia.",
    "millerRef": "Miller 10e, Ch 41 Spinal, Epidural, and Caudal Anesthesia",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Methylxanthine",
      "Neuro/rescue"
    ],
    "displayClass": "Neuro/rescue",
    "common": false,
    "metabolism": "Hepatic or renal metabolism varies.",
    "excretion": "Renal excretion important for several antiepileptics.",
    "duration": "Hours to days depending on agent.",
    "obesityConsiderations": "Weight-based loading usually capped and adjusted for organ dysfunction.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "racemic-epinephrine",
    "name": "Racemic epinephrine",
    "class": "Alpha/beta agonist aerosol",
    "moa": "Airway mucosal vasoconstriction and bronchodilation.",
    "category": "Pulmonary",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "0.5 mL of 2.25% nebulized, dilute per protocol",
        "route": "Neb",
        "scalar": "Fixed",
        "unit": "mL fixed",
        "min": 0.5,
        "max": 0.5
      }
    ],
    "cautions": "Tachycardia, rebound symptoms; monitor airway.",
    "contraindications": "Use caution in severe tachyarrhythmias.",
    "millerRef": "Miller 10e, Ch 76 PACU",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Airway/bronchospasm",
      "Alpha/beta agonist aerosol",
      "Pulmonary"
    ],
    "displayClass": "Pulmonary",
    "common": false,
    "metabolism": "Agent-specific pulmonary/systemic metabolism.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on route.",
    "obesityConsiderations": "Nebulized/inhaled doses usually fixed; systemic beta-agonists require caution.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "aminophylline",
    "name": "Aminophylline",
    "class": "Methylxanthine bronchodilator",
    "moa": "PDE inhibition and adenosine antagonism.",
    "category": "Pulmonary",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "Load 5-6 mg/kg IV where used; monitor levels",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 5,
        "max": 6
      }
    ],
    "cautions": "Narrow therapeutic index, tachyarrhythmias, seizures; many interactions.",
    "contraindications": "Uncontrolled arrhythmias or seizures.",
    "millerRef": "Miller 10e, Ch 29 Concurrent Diseases",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Airway/bronchospasm",
      "Methylxanthine bronchodilator",
      "Pulmonary"
    ],
    "displayClass": "Pulmonary",
    "common": false,
    "metabolism": "Agent-specific pulmonary/systemic metabolism.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on route.",
    "obesityConsiderations": "Nebulized/inhaled doses usually fixed; systemic beta-agonists require caution.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "epoprostenol-inhaled",
    "name": "Epoprostenol inhaled",
    "class": "Prostacyclin analog",
    "moa": "Pulmonary vasodilation via prostacyclin receptor/cAMP.",
    "category": "Pulmonary",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "name": "Adult",
        "label": "Inhaled dose per institutional protocol",
        "route": "Inhaled",
        "scalar": "Titrated",
        "unit": "titrated",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Hypotension, platelet inhibition; delivery system dependent.",
    "contraindications": "Severe left-sided pulmonary edema physiology may worsen oxygenation.",
    "millerRef": "Miller 10e, Ch 49 Thoracic; Ch 79 Critical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Prostacyclin analog",
      "Pulmonary",
      "Pulmonary vasodilator"
    ],
    "displayClass": "Pulmonary",
    "common": false,
    "metabolism": "Agent-specific pulmonary/systemic metabolism.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on route.",
    "obesityConsiderations": "Nebulized/inhaled doses usually fixed; systemic beta-agonists require caution.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "iloprost-inhaled",
    "name": "Iloprost inhaled",
    "class": "Prostacyclin analog",
    "moa": "Pulmonary vasodilation via prostacyclin receptor/cAMP.",
    "category": "Pulmonary",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "name": "Adult",
        "label": "Inhaled intermittent dose per protocol",
        "route": "Inhaled",
        "scalar": "Titrated",
        "unit": "titrated",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Hypotension, bronchospasm rare; delivery logistics.",
    "contraindications": "Hypersensitivity.",
    "millerRef": "Miller 10e, Ch 49 Thoracic; Ch 79 Critical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Prostacyclin analog",
      "Pulmonary",
      "Pulmonary vasodilator"
    ],
    "displayClass": "Pulmonary",
    "common": false,
    "metabolism": "Agent-specific pulmonary/systemic metabolism.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on route.",
    "obesityConsiderations": "Nebulized/inhaled doses usually fixed; systemic beta-agonists require caution.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "nitric-oxide-inhaled",
    "name": "Nitric oxide inhaled",
    "class": "Selective pulmonary vasodilator",
    "moa": "Activates soluble guanylate cyclase, increases cGMP.",
    "category": "Pulmonary",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "name": "Adult",
        "label": "2-40 ppm typical range, titrate to effect",
        "route": "Inhaled",
        "scalar": "Titrated",
        "unit": "ppm",
        "min": 2,
        "max": 40
      }
    ],
    "cautions": "Methemoglobinemia, NO2 toxicity, rebound PH if stopped abruptly.",
    "contraindications": "Use with monitoring; caution LV failure/pulmonary edema.",
    "millerRef": "Miller 10e, Ch 19 Pulmonary Pharmacology; Ch 79 Critical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Pulmonary",
      "Pulmonary vasodilator",
      "Selective pulmonary vasodilator"
    ],
    "displayClass": "Pulmonary",
    "common": false,
    "metabolism": "Agent-specific pulmonary/systemic metabolism.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on route.",
    "obesityConsiderations": "Nebulized/inhaled doses usually fixed; systemic beta-agonists require caution.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "nifedipine",
    "name": "Nifedipine",
    "class": "Dihydropyridine calcium channel blocker",
    "moa": "L-type calcium channel blockade; vasodilation and tocolysis.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "10-20 mg PO for tocolysis/HTN depending protocol",
        "route": "PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 10,
        "max": 20
      }
    ],
    "cautions": "Hypotension, reflex tachycardia; avoid sublingual use for emergencies.",
    "contraindications": "Severe hypotension.",
    "millerRef": "Miller 10e, Ch 58 Obstetrics",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antihypertensive/vasodilator",
      "Dihydropyridine calcium channel blocker",
      "OB/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "misoprostol",
    "name": "Misoprostol",
    "class": "Prostaglandin E1 analog",
    "moa": "Uterotonic via prostaglandin receptor activation.",
    "category": "OB uterotonic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "600-1000 mcg PR/SL/PO depending PPH protocol",
        "route": "PR/SL/PO",
        "scalar": "Fixed",
        "unit": "mcg fixed",
        "min": 600,
        "max": 1000
      }
    ],
    "cautions": "Fever, shivering, GI upset.",
    "contraindications": "Hypersensitivity; use depends obstetric protocol.",
    "millerRef": "Miller 10e, Ch 58 Obstetrics",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "OB uterotonic",
      "Prostaglandin E1 analog"
    ],
    "displayClass": "OB uterotonic",
    "common": false,
    "metabolism": "Hepatic/renal metabolism varies.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on drug.",
    "obesityConsiderations": "Usually fixed dosing; obesity does not generally change initial dose.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "dinoprostone",
    "name": "Dinoprostone",
    "class": "Prostaglandin E2",
    "moa": "Cervical ripening and uterotonic activity.",
    "category": "OB uterotonic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "Dose by formulation/protocol",
        "route": "Vaginal",
        "scalar": "Fixed",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Uterine tachysystole, fetal distress.",
    "contraindications": "Contraindications to labor/vaginal delivery.",
    "millerRef": "Miller 10e, Ch 58 Obstetrics",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "OB uterotonic",
      "Prostaglandin E2"
    ],
    "displayClass": "OB uterotonic",
    "common": false,
    "metabolism": "Hepatic/renal metabolism varies.",
    "excretion": "Renal/fecal excretion varies.",
    "duration": "Minutes to hours depending on drug.",
    "obesityConsiderations": "Usually fixed dosing; obesity does not generally change initial dose.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "phenobarbital-neonatal",
    "name": "Phenobarbital neonatal",
    "class": "Barbiturate anticonvulsant",
    "moa": "GABA-A positive modulation.",
    "category": "Neuro/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "Neonatal seizure load 20 mg/kg IV typical",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 20,
        "max": 20
      }
    ],
    "cautions": "Respiratory depression, hypotension; neonatal-specific use.",
    "contraindications": "Severe respiratory depression without airway support.",
    "millerRef": "Miller 10e, Ch 72 Pediatric Anesthesia; Ch 75 Pediatric Critical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Barbiturate anticonvulsant",
      "Neuro/rescue",
      "Pediatric/neonatal"
    ],
    "displayClass": "Neuro/rescue",
    "common": false,
    "metabolism": "Hepatic or renal metabolism varies.",
    "excretion": "Renal excretion important for several antiepileptics.",
    "duration": "Hours to days depending on agent.",
    "obesityConsiderations": "Weight-based loading usually capped and adjusted for organ dysfunction.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "atipamezole",
    "name": "Atipamezole",
    "class": "Alpha-2 antagonist",
    "moa": "Reverses alpha-2 agonist effects.",
    "category": "Reversal/rescue",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "Not routine human anesthesia drug; include only if institutional use",
        "route": "IM/IV",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Not standard human periop medication in most US ORs.",
    "contraindications": "Do not use outside protocol.",
    "millerRef": "Miller 10e, Ch 16 Basic Pharmacology",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Alpha-2 antagonist",
      "Reversal/rescue"
    ],
    "displayClass": "Reversal/rescue",
    "common": false,
    "metabolism": "Agent-specific metabolism or binding mechanism.",
    "excretion": "Often renal excretion or organ-independent redistribution.",
    "duration": "Usually minutes to hours depending on agent and target.",
    "obesityConsiderations": "Use capped or indication-specific dosing; obesity scalar varies by drug and urgency.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "sugammadex-16-mg-kg",
    "name": "Sugammadex 16 mg/kg",
    "class": "Selective relaxant binding agent",
    "moa": "Encapsulates rocuronium/vecuronium.",
    "category": "Reversal/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "16 mg/kg for immediate reversal after high-dose rocuronium",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 16,
        "max": 16
      }
    ],
    "cautions": "Bradycardia/anaphylaxis rare; renal failure considerations; may bind hormonal contraceptives.",
    "contraindications": "Hypersensitivity; caution severe renal failure per labeling/institution.",
    "millerRef": "Miller 10e, Ch 24 Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Neuromuscular/reversal",
      "Reversal/rescue",
      "Selective relaxant binding agent"
    ],
    "displayClass": "Reversal/rescue",
    "common": false,
    "metabolism": "Agent-specific metabolism or binding mechanism.",
    "excretion": "Often renal excretion or organ-independent redistribution.",
    "duration": "Usually minutes to hours depending on agent and target.",
    "obesityConsiderations": "Use capped or indication-specific dosing; obesity scalar varies by drug and urgency.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "sugammadex-4-mg-kg",
    "name": "Sugammadex 4 mg/kg",
    "class": "Selective relaxant binding agent",
    "moa": "Encapsulates rocuronium/vecuronium.",
    "category": "Reversal/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "4 mg/kg for deep block reversal when indicated",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 4,
        "max": 4
      }
    ],
    "cautions": "Use quantitative monitoring.",
    "contraindications": "Hypersensitivity; caution severe renal failure per labeling/institution.",
    "millerRef": "Miller 10e, Ch 24 Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Neuromuscular/reversal",
      "Reversal/rescue",
      "Selective relaxant binding agent"
    ],
    "displayClass": "Reversal/rescue",
    "common": false,
    "metabolism": "Agent-specific metabolism or binding mechanism.",
    "excretion": "Often renal excretion or organ-independent redistribution.",
    "duration": "Usually minutes to hours depending on agent and target.",
    "obesityConsiderations": "Use capped or indication-specific dosing; obesity scalar varies by drug and urgency.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "sugammadex-2-mg-kg",
    "name": "Sugammadex 2 mg/kg",
    "class": "Selective relaxant binding agent",
    "moa": "Encapsulates rocuronium/vecuronium.",
    "category": "Reversal/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "2 mg/kg for moderate block reversal when indicated",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 2,
        "max": 2
      }
    ],
    "cautions": "Use quantitative monitoring.",
    "contraindications": "Hypersensitivity; caution severe renal failure per labeling/institution.",
    "millerRef": "Miller 10e, Ch 24 Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Neuromuscular/reversal",
      "Reversal/rescue",
      "Selective relaxant binding agent"
    ],
    "displayClass": "Reversal/rescue",
    "common": false,
    "metabolism": "Agent-specific metabolism or binding mechanism.",
    "excretion": "Often renal excretion or organ-independent redistribution.",
    "duration": "Usually minutes to hours depending on agent and target.",
    "obesityConsiderations": "Use capped or indication-specific dosing; obesity scalar varies by drug and urgency.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "albumin-5",
    "name": "Albumin 5%",
    "class": "Colloid volume expander",
    "moa": "Oncotic plasma volume expansion.",
    "category": "Fluid/blood adjunct",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "Bolus volume by hemodynamics; not weight-based drug dose",
        "route": "IV",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Cost, volume status, allergic reaction rare; not oxygen-carrying.",
    "contraindications": "Severe anemia requiring oxygen-carrying capacity needs RBCs, not albumin.",
    "millerRef": "Miller 10e, Ch 43 Fluid and Electrolyte Therapy",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Colloid volume expander",
      "Fluid/blood adjunct"
    ],
    "displayClass": "Fluid/blood adjunct",
    "common": false,
    "metabolism": "Intravascular distribution and reticuloendothelial/renal handling.",
    "excretion": "Not applicable or renal handling varies.",
    "duration": "Volume effect depends on capillary leak and albumin concentration.",
    "obesityConsiderations": "Dose to volume status and hemodynamic endpoint, not ABW alone.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "albumin-25",
    "name": "Albumin 25%",
    "class": "Hyperoncotic albumin",
    "moa": "Increases oncotic pressure; plasma expansion with less volume.",
    "category": "Fluid/blood adjunct",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "Dose by indication and volume status",
        "route": "IV",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Can worsen dehydration if not paired with volume; pulmonary edema risk.",
    "contraindications": "Use caution in decompensated heart failure.",
    "millerRef": "Miller 10e, Ch 43 Fluid and Electrolyte Therapy",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Fluid/blood adjunct",
      "Hyperoncotic albumin"
    ],
    "displayClass": "Fluid/blood adjunct",
    "common": false,
    "metabolism": "Intravascular distribution and reticuloendothelial/renal handling.",
    "excretion": "Not applicable or renal handling varies.",
    "duration": "Volume effect depends on capillary leak and albumin concentration.",
    "obesityConsiderations": "Dose to volume status and hemodynamic endpoint, not ABW alone.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "potassium-chloride",
    "name": "Potassium chloride",
    "class": "Electrolyte",
    "moa": "Potassium replacement.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "mEq dose/rate by K level, renal function, access, ECG",
        "route": "IV/PO",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Fatal if rapid IV push; central vs peripheral limits; renal failure.",
    "contraindications": "Hyperkalemia, severe renal failure without monitoring.",
    "millerRef": "Miller 10e, Ch 43 Fluid/Electrolyte; Ch 44 Acid-Base",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Electrolyte",
      "Electrolyte/metabolic"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": false,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "sodium-phosphate",
    "name": "Sodium phosphate",
    "class": "Electrolyte",
    "moa": "Phosphate replacement.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "Dose by phosphate level and renal function",
        "route": "IV/PO",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Hypocalcemia, metastatic calcification, renal adjustment.",
    "contraindications": "Severe renal failure or hyperphosphatemia.",
    "millerRef": "Miller 10e, Ch 43 Fluid/Electrolyte",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Electrolyte",
      "Electrolyte/metabolic"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": false,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "potassium-phosphate",
    "name": "Potassium phosphate",
    "class": "Electrolyte",
    "moa": "Phosphate and potassium replacement.",
    "category": "Electrolyte/metabolic",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Adult",
        "label": "Dose by phosphate/K level and renal function",
        "route": "IV",
        "scalar": "Custom",
        "unit": "custom",
        "min": 0,
        "max": 0
      }
    ],
    "cautions": "Adds potassium load; hypocalcemia risk.",
    "contraindications": "Hyperkalemia or severe renal failure without monitoring.",
    "millerRef": "Miller 10e, Ch 43 Fluid/Electrolyte",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Electrolyte",
      "Electrolyte/metabolic"
    ],
    "displayClass": "Electrolyte/metabolic",
    "common": false,
    "metabolism": "Physiologic distribution and renal/endocrine handling.",
    "excretion": "Renal handling central for many agents.",
    "duration": "Effect depends on deficit, redistribution, and ongoing losses.",
    "obesityConsiderations": "Dose to labs and protocol; obesity scalar usually secondary.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "acetazolamide",
    "name": "Acetazolamide",
    "class": "Carbonic anhydrase inhibitor",
    "moa": "Inhibits carbonic anhydrase, bicarbonaturia, lowers IOP/CSF production.",
    "category": "Rescue/other",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "250-500 mg IV/PO depending indication",
        "route": "IV/PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 250,
        "max": 500
      }
    ],
    "cautions": "Metabolic acidosis, hypokalemia, sulfonamide allergy issues, renal adjustment.",
    "contraindications": "Severe hepatic disease, marked renal disease, sulfonamide hypersensitivity.",
    "millerRef": "Miller 10e, Ch 65 Ophthalmic Surgery; Ch 43 Fluid/Electrolyte",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Carbonic anhydrase inhibitor",
      "Diuretic/other",
      "Rescue/other"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "mannitol-20",
    "name": "Mannitol 20%",
    "class": "Osmotic diuretic",
    "moa": "Raises plasma osmolality, reduces brain bulk/IOP.",
    "category": "Rescue/other",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Adult",
        "label": "0.25-1 g/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "g/kg",
        "min": 0.25,
        "max": 1
      }
    ],
    "cautions": "Hypovolemia, electrolyte shifts, renal failure, pulmonary edema.",
    "contraindications": "Anuria, severe pulmonary edema, active intracranial bleeding except craniotomy context.",
    "millerRef": "Miller 10e, Ch 53 Neuroanesthesia; Ch 80 Neurocritical Care",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Neuro/rescue",
      "Osmotic diuretic",
      "Rescue/other"
    ],
    "displayClass": "Rescue/other",
    "common": false,
    "metabolism": "Agent-specific metabolism.",
    "excretion": "Agent-specific excretion.",
    "duration": "Indication dependent.",
    "obesityConsiderations": "Use protocol or toxicology guidance; obesity scalar may be irrelevant or drug-specific.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  },
  {
    "id": "clevidipine-infusion",
    "name": "Clevidipine infusion",
    "class": "Dihydropyridine calcium channel blocker",
    "moa": "Ultra-short L-type calcium channel blockade; arterial vasodilation.",
    "category": "Antihypertensive/vasodilator",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Adult",
        "label": "1-2 mg/hr initial, titrate; max per label/protocol",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg/hr",
        "min": 1,
        "max": 2
      }
    ],
    "cautions": "Lipid emulsion load, reflex tachycardia; no venodilation.",
    "contraindications": "Soy/egg allergy per formulation label, defective lipid metabolism.",
    "millerRef": "Miller 10e, Ch 50 Cardiac; Ch 52 Vascular",
    "millerPage": "page not verified",
    "sourceStatus": "starter database; verify before use",
    "tags": [
      "Antihypertensive/vasodilator",
      "Dihydropyridine calcium channel blocker",
      "Vasoactive/cardiac"
    ],
    "displayClass": "Antihypertensive/vasodilator",
    "common": false,
    "metabolism": "Hepatic, plasma esterase, or RBC metabolism depending on agent.",
    "excretion": "Metabolite excretion varies; some accumulate in renal/hepatic dysfunction.",
    "duration": "Usually minutes for IV titratable agents.",
    "obesityConsiderations": "Fixed or titrated dosing generally preferred over ABW scaling.",
    "pediatricDosing": "Peds: pediatric dosing not yet curated. Requires source audit before use."
  }
];
