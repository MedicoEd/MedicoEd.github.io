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
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, respiratory depression; reduce dose in elderly, shock, severe LV dysfunction.",
    "contraindications": "Hemodynamic collapse without resuscitation plan; egg/soy allergy is not generally absolute but verify formulation/institution.",
    "id": "propofol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Hypnotic",
      "Alkylphenol IV hypnotic"
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "Myoclonus, PONV, adrenal steroidogenesis suppression; minimal CV depression.",
    "contraindications": "Relative: sepsis/adrenal insufficiency when alternatives suitable.",
    "id": "etomidate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Hypnotic",
      "Imidazole IV hypnotic"
    ]
  },
  {
    "name": "Ketamine",
    "class": "Phencyclidine dissociative anesthetic",
    "moa": "NMDA receptor antagonism with sympathomimetic and analgesic effects.",
    "category": "Hypnotic/analgesic",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Induction 1-2 mg/kg IV; analgesic 0.1-0.3 mg/kg; infusion 0.05-0.3 mg/kg/hr",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 1,
        "max": 2,
        "name": "Primary"
      }
    ],
    "cautions": "Increases secretions, emergence phenomena, tachycardia/HTN; useful in bronchospasm and shock with preserved catecholamines.",
    "contraindications": "Relative: severe uncontrolled CAD, aortic dissection, uncontrolled HTN, severe psychosis.",
    "id": "ketamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Hypnotic/analgesic",
      "Phencyclidine dissociative anesthetic"
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "Synergistic respiratory depression with opioids/propofol; reduce in elderly, OSA, hepatic disease.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "midazolam",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Sedative",
      "Benzodiazepine"
    ]
  },
  {
    "name": "Dexmedetomidine",
    "class": "Alpha-2 agonist sedative",
    "moa": "Central alpha-2 agonism reduces sympathetic outflow; sedation and opioid-sparing analgesia.",
    "category": "Sedative adjunct",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Infusion 0.2-0.7 mcg/kg/hr; optional load 0.5-1 mcg/kg over 10 min",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mcg/kg/hr",
        "min": 0.2,
        "max": 0.7,
        "name": "Primary"
      }
    ],
    "cautions": "Bradycardia, hypotension; avoid rapid loading in tenuous cardiac output.",
    "contraindications": "Advanced heart block without pacing; severe bradycardia.",
    "id": "dexmedetomidine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Sedative adjunct",
      "Alpha-2 agonist sedative"
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, myocardial depression, histamine release less common; rare in current practice.",
    "contraindications": "Acute intermittent porphyria.",
    "id": "thiopental",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Hypnotic",
      "Barbiturate IV hypnotic"
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "Myoclonus/seizure-like activity; commonly used for ECT.",
    "contraindications": "Acute intermittent porphyria.",
    "id": "methohexital",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 21 Intravenous Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Hypnotic",
      "Barbiturate IV hypnotic"
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "Respiratory depression, chest wall rigidity with rapid high dose, bradycardia, PONV.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "fentanyl",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid",
      "Phenylpiperidine opioid agonist"
    ]
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
        "name": "Primary"
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
    ]
  },
  {
    "name": "Remifentanil",
    "class": "Ultra-short acting opioid",
    "moa": "Mu agonist; ester hydrolysis by nonspecific tissue/blood esterases.",
    "category": "Opioid infusion",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Infusion 0.05-0.2 mcg/kg/min typical; induction adjunct 0.5-1 mcg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mcg/kg/min",
        "min": 0.05,
        "max": 0.2,
        "name": "Primary"
      }
    ],
    "cautions": "Profound bradycardia/hypotension and apnea; hyperalgesia/acute tolerance possible.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "remifentanil",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid infusion",
      "Ultra-short acting opioid"
    ]
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
        "name": "Primary"
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
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "Histamine release, renal metabolite accumulation, nausea, respiratory depression.",
    "contraindications": "Severe respiratory depression; caution severe renal failure.",
    "id": "morphine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid",
      "Phenanthrene opioid"
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "Respiratory depression; longer PACU tail than fentanyl.",
    "contraindications": "Severe respiratory depression without airway support.",
    "id": "hydromorphone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid",
      "Semi-synthetic opioid"
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "Long and variable half-life, QT prolongation, respiratory depression.",
    "contraindications": "Significant QT prolongation, severe respiratory depression.",
    "id": "methadone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid",
      "Long-acting opioid"
    ]
  },
  {
    "name": "Meperidine",
    "class": "Phenylpiperidine opioid",
    "moa": "Mu agonist; antishivering effect; normeperidine metabolite.",
    "category": "Opioid/antishivering",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Shivering 12.5-25 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 12.5,
        "max": 25,
        "name": "Primary"
      }
    ],
    "cautions": "Avoid repeated dosing in renal failure due neurotoxic metabolite; serotonergic interactions.",
    "contraindications": "MAOI use, significant renal failure if repeated dosing.",
    "id": "meperidine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 22 Opioids",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Opioid/antishivering",
      "Phenylpiperidine opioid"
    ]
  },
  {
    "name": "Oxycodone",
    "class": "Oral opioid",
    "moa": "Mu-opioid receptor agonism.",
    "category": "Postop analgesic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "PO 5-10 mg adult initial",
        "route": "PO",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 10,
        "name": "Primary"
      }
    ],
    "cautions": "Respiratory depression, constipation, nausea; adjust for frailty.",
    "contraindications": "Severe respiratory depression.",
    "id": "oxycodone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 77 Acute Postoperative Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Postop analgesic",
      "Oral opioid"
    ]
  },
  {
    "name": "Tramadol",
    "class": "Atypical opioid analgesic",
    "moa": "Weak mu agonism plus serotonin/norepinephrine reuptake inhibition.",
    "category": "Postop analgesic",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "PO/IV 50-100 mg q6h where used",
        "route": "PO/IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 50,
        "max": 100,
        "name": "Primary"
      }
    ],
    "cautions": "Serotonin syndrome, seizures, variable CYP2D6 activation.",
    "contraindications": "MAOI use, seizure disorder poorly controlled.",
    "id": "tramadol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 77 Acute Postoperative Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Postop analgesic",
      "Atypical opioid analgesic"
    ]
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
        "name": "Primary"
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
      "Nonopioid analgesic/antipyretic"
    ]
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
        "name": "Primary"
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
      "NSAID"
    ]
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
        "name": "Primary"
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
      "NSAID"
    ]
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
        "name": "Primary"
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
    ]
  },
  {
    "name": "Lidocaine IV",
    "class": "Amide local anesthetic / antiarrhythmic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Analgesic/antiarrhythmic",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Analgesic load 1-1.5 mg/kg then 1-2 mg/kg/hr; antiarrhythmic 1-1.5 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 1,
        "max": 1.5,
        "name": "Primary"
      }
    ],
    "cautions": "LAST, perioral numbness, seizures, arrhythmia; reduce hepatic/low CO states.",
    "contraindications": "High-grade heart block without pacing, severe sodium-channel disease.",
    "id": "lidocaine-iv",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Analgesic/antiarrhythmic",
      "Amide local anesthetic / antiarrhythmic"
    ]
  },
  {
    "name": "Succinylcholine",
    "class": "Depolarizing neuromuscular blocker",
    "moa": "Nicotinic ACh receptor agonist causing phase I depolarizing block.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "RSI 1-1.5 mg/kg IV; IM 3-4 mg/kg",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 1,
        "max": 1.5,
        "name": "Primary"
      }
    ],
    "cautions": "Hyperkalemia, myalgia, bradycardia, MH trigger, increased IOP/ICP/IGP.",
    "contraindications": "MH susceptibility, major burns/crush/denervation after risk window, hyperkalemia, pseudocholinesterase deficiency.",
    "id": "succinylcholine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Depolarizing neuromuscular blocker"
    ]
  },
  {
    "name": "Rocuronium",
    "class": "Aminosteroid nondepolarizing NMBA",
    "moa": "Competitive antagonism at nicotinic ACh receptor.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.6-1.2 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.6,
        "max": 1.2,
        "name": "Primary"
      }
    ],
    "cautions": "Hepatic/biliary elimination; prolonged with liver disease; can be reversed by sugammadex.",
    "contraindications": "Inability to ventilate/intubate when paralysis unsafe.",
    "id": "rocuronium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Aminosteroid nondepolarizing NMBA"
    ]
  },
  {
    "name": "Vecuronium",
    "class": "Aminosteroid nondepolarizing NMBA",
    "moa": "Competitive nicotinic ACh receptor antagonism.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.08-0.1 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.08,
        "max": 0.1,
        "name": "Primary"
      }
    ],
    "cautions": "Hepatic and renal elimination; active metabolite; prolonged in renal/hepatic dysfunction.",
    "contraindications": "Inability to ventilate/intubate when paralysis unsafe.",
    "id": "vecuronium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Aminosteroid nondepolarizing NMBA"
    ]
  },
  {
    "name": "Cisatracurium",
    "class": "Benzylisoquinolinium nondepolarizing NMBA",
    "moa": "Competitive nicotinic ACh receptor antagonism.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.15-0.2 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.15,
        "max": 0.2,
        "name": "Primary"
      }
    ],
    "cautions": "Hofmann elimination; useful in renal/hepatic failure; minimal histamine.",
    "contraindications": "Inability to ventilate/intubate when paralysis unsafe.",
    "id": "cisatracurium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Benzylisoquinolinium nondepolarizing NMBA"
    ]
  },
  {
    "name": "Atracurium",
    "class": "Benzylisoquinolinium nondepolarizing NMBA",
    "moa": "Competitive nicotinic ACh receptor antagonism.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.4-0.5 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.4,
        "max": 0.5,
        "name": "Primary"
      }
    ],
    "cautions": "Hofmann/ester hydrolysis; histamine release; laudanosine with prolonged infusion.",
    "contraindications": "Inability to ventilate/intubate when paralysis unsafe.",
    "id": "atracurium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Benzylisoquinolinium nondepolarizing NMBA"
    ]
  },
  {
    "name": "Pancuronium",
    "class": "Aminosteroid nondepolarizing NMBA",
    "moa": "Competitive nicotinic ACh receptor antagonism.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Intubation 0.06-0.1 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.06,
        "max": 0.1,
        "name": "Primary"
      }
    ],
    "cautions": "Tachycardia, vagolysis; renal elimination and prolonged duration.",
    "contraindications": "Severe tachyarrhythmia when alternatives available.",
    "id": "pancuronium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Aminosteroid nondepolarizing NMBA"
    ]
  },
  {
    "name": "Neostigmine",
    "class": "Acetylcholinesterase inhibitor",
    "moa": "Increases ACh at NMJ to antagonize nondepolarizing block.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "Reversal 0.03-0.07 mg/kg with antimuscarinic",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.03,
        "max": 0.07,
        "name": "Primary"
      }
    ],
    "cautions": "Bradycardia, bronchospasm, secretions; ceiling effect, avoid deep block reversal.",
    "contraindications": "Mechanical obstruction urinary/GI; inadequate spontaneous recovery.",
    "id": "neostigmine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Acetylcholinesterase inhibitor"
    ]
  },
  {
    "name": "Glycopyrrolate",
    "class": "Quaternary antimuscarinic",
    "moa": "Muscarinic receptor antagonism.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "IBW",
    "doses": [
      {
        "label": "With neostigmine 0.005-0.015 mg/kg",
        "route": "IV",
        "scalar": "IBW",
        "unit": "mg/kg",
        "min": 0.005,
        "max": 0.015,
        "name": "Primary"
      }
    ],
    "cautions": "Tachycardia, dry mouth; does not cross BBB.",
    "contraindications": "Tachyarrhythmia where vagolysis harmful.",
    "id": "glycopyrrolate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Quaternary antimuscarinic"
    ]
  },
  {
    "name": "Sugammadex",
    "class": "Selective relaxant binding agent",
    "moa": "Encapsulates rocuronium/vecuronium.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "2 mg/kg for TOF count 2; 4 mg/kg deep block; 16 mg/kg immediate rescue",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 2,
        "max": 4,
        "name": "Primary"
      }
    ],
    "cautions": "Bradycardia/asystole rare, hypersensitivity; may reduce hormonal contraceptive efficacy; renal clearance.",
    "contraindications": "Known hypersensitivity; caution severe renal failure depending institutional policy.",
    "id": "sugammadex",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 24 Pharmacology of Neuromuscular Blocking Drugs and Antagonists",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Neuromuscular/reversal",
      "Selective relaxant binding agent"
    ]
  },
  {
    "name": "Phenylephrine",
    "class": "Alpha-1 agonist vasopressor",
    "moa": "Alpha-1 agonism increases SVR.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Bolus 50-200 mcg; infusion 0.1-1 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg fixed",
        "min": 50,
        "max": 200,
        "name": "Primary"
      }
    ],
    "cautions": "Reflex bradycardia, reduced CO in poor LV/RV function.",
    "contraindications": "Severe bradycardia/low-output state when pure afterload increase harmful.",
    "id": "phenylephrine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Alpha-1 agonist vasopressor"
    ]
  },
  {
    "name": "Ephedrine",
    "class": "Indirect/direct sympathomimetic",
    "moa": "Norepinephrine release plus alpha/beta agonism.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 5-10 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 10,
        "name": "Primary"
      }
    ],
    "cautions": "Tachycardia, tachyphylaxis, myocardial oxygen demand.",
    "contraindications": "Severe tachyarrhythmia.",
    "id": "ephedrine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Indirect/direct sympathomimetic"
    ]
  },
  {
    "name": "Norepinephrine",
    "class": "Alpha > beta-1 agonist vasopressor",
    "moa": "Alpha-1 vasoconstriction with beta-1 inotropy.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.02-0.5 mcg/kg/min; bolus 4-16 mcg institution-specific",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.02,
        "max": 0.5,
        "name": "Primary"
      }
    ],
    "cautions": "Extravasation injury, ischemia at high dose; central access preferred for prolonged use.",
    "contraindications": "Uncorrected hypovolemia as sole therapy.",
    "id": "norepinephrine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Alpha > beta-1 agonist vasopressor"
    ]
  },
  {
    "name": "Epinephrine",
    "class": "Alpha and beta agonist",
    "moa": "Beta-1/beta-2 and alpha agonism dose-dependent.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.01-0.5 mcg/kg/min; anaphylaxis small IV boluses titrated",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.01,
        "max": 0.5,
        "name": "Primary"
      }
    ],
    "cautions": "Tachyarrhythmia, hyperlactatemia, myocardial ischemia.",
    "contraindications": "No absolute in arrest/anaphylaxis; caution severe ischemia.",
    "id": "epinephrine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Alpha and beta agonist"
    ]
  },
  {
    "name": "Vasopressin",
    "class": "V1 vasopressor",
    "moa": "V1 receptor mediated vasoconstriction.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 0.5-2 units; infusion 0.01-0.06 units/min",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "units fixed",
        "min": 0.5,
        "max": 2,
        "name": "Primary"
      }
    ],
    "cautions": "Ischemia, hyponatremia with longer use; useful in vasoplegia.",
    "contraindications": "Severe coronary/mesenteric ischemia relative.",
    "id": "vasopressin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "V1 vasopressor"
    ]
  },
  {
    "name": "Dopamine",
    "class": "Dopaminergic/beta/alpha agonist",
    "moa": "Dose-dependent D1, beta-1, alpha effects.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 2-20 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 2,
        "max": 20,
        "name": "Primary"
      }
    ],
    "cautions": "Arrhythmogenic; less favored than norepi for shock.",
    "contraindications": "Pheochromocytoma, ventricular arrhythmias.",
    "id": "dopamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Dopaminergic/beta/alpha agonist"
    ]
  },
  {
    "name": "Dobutamine",
    "class": "Beta-1 agonist inotrope",
    "moa": "Beta-1 predominant inotropy with beta-2 vasodilation.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 2-20 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 2,
        "max": 20,
        "name": "Primary"
      }
    ],
    "cautions": "Tachyarrhythmia, hypotension if vasodilatory.",
    "contraindications": "Idiopathic hypertrophic subaortic stenosis relative.",
    "id": "dobutamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Beta-1 agonist inotrope"
    ]
  },
  {
    "name": "Milrinone",
    "class": "PDE-3 inhibitor inodilator",
    "moa": "Increases cAMP causing inotropy and vasodilation.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Load 25-50 mcg/kg; infusion 0.25-0.75 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.25,
        "max": 0.75,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, arrhythmias; renal clearance, adjust in CKD.",
    "contraindications": "Severe hypotension without vasopressor support.",
    "id": "milrinone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "PDE-3 inhibitor inodilator"
    ]
  },
  {
    "name": "Isoproterenol",
    "class": "Nonselective beta agonist",
    "moa": "Beta-1 chronotropy/inotropy and beta-2 vasodilation.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.01-0.1 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.01,
        "max": 0.1,
        "name": "Primary"
      }
    ],
    "cautions": "Tachyarrhythmia, ischemia.",
    "contraindications": "Tachyarrhythmias.",
    "id": "isoproterenol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Nonselective beta agonist"
    ]
  },
  {
    "name": "Esmolol",
    "class": "Ultra-short beta-1 blocker",
    "moa": "Beta-1 antagonism; esterase metabolism.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Bolus 0.25-1 mg/kg; infusion 50-200 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 0.25,
        "max": 1,
        "name": "Primary"
      }
    ],
    "cautions": "Bradycardia, hypotension, bronchospasm less than nonselective agents.",
    "contraindications": "Severe bradycardia, high-grade AV block, cardiogenic shock.",
    "id": "esmolol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Ultra-short beta-1 blocker"
    ]
  },
  {
    "name": "Labetalol",
    "class": "Alpha/beta blocker",
    "moa": "Beta blockade with alpha-1 blockade.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 5-20 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 20,
        "name": "Primary"
      }
    ],
    "cautions": "Bradycardia, hypotension, bronchospasm.",
    "contraindications": "Asthma exacerbation, heart block, decompensated HF.",
    "id": "labetalol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Alpha/beta blocker"
    ]
  },
  {
    "name": "Metoprolol",
    "class": "Beta-1 blocker",
    "moa": "Selective beta-1 antagonism.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 1-5 mg IV titrated",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 1,
        "max": 5,
        "name": "Primary"
      }
    ],
    "cautions": "Bradycardia, hypotension, bronchospasm at higher dose.",
    "contraindications": "Severe bradycardia, high-grade AV block, decompensated HF.",
    "id": "metoprolol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Beta-1 blocker"
    ]
  },
  {
    "name": "Propranolol",
    "class": "Nonselective beta blocker",
    "moa": "Beta-1/beta-2 antagonism.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 0.5-1 mg IV titrated",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 1,
        "name": "Primary"
      }
    ],
    "cautions": "Bronchospasm, bradycardia.",
    "contraindications": "Asthma/bronchospasm, severe bradycardia, heart block.",
    "id": "propranolol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Nonselective beta blocker"
    ]
  },
  {
    "name": "Nicardipine",
    "class": "Dihydropyridine calcium channel blocker",
    "moa": "Arterial vasodilation via L-type calcium channel blockade.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 0.25-0.5 mg; infusion 5-15 mg/hr",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.25,
        "max": 0.5,
        "name": "Primary"
      }
    ],
    "cautions": "Reflex tachycardia, hypotension.",
    "contraindications": "Severe aortic stenosis relative.",
    "id": "nicardipine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Dihydropyridine calcium channel blocker"
    ]
  },
  {
    "name": "Clevidipine",
    "class": "Ultra-short DHP calcium channel blocker",
    "moa": "Arterial vasodilation; esterase metabolism.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Infusion 1-2 mg/hr start, titrate; usual 4-16 mg/hr",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg/hr",
        "min": 1,
        "max": 16,
        "name": "Primary"
      }
    ],
    "cautions": "Lipid emulsion load, reflex tachycardia.",
    "contraindications": "Soy/egg allergy per label, defective lipid metabolism.",
    "id": "clevidipine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Ultra-short DHP calcium channel blocker"
    ]
  },
  {
    "name": "Nitroglycerin",
    "class": "Organic nitrate vasodilator",
    "moa": "NO-mediated venodilation > arterial dilation.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.5-5 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.5,
        "max": 5,
        "name": "Primary"
      }
    ],
    "cautions": "Headache, hypotension, tachyphylaxis, methemoglobinemia rare.",
    "contraindications": "PDE-5 inhibitor recent use, severe hypotension.",
    "id": "nitroglycerin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Organic nitrate vasodilator"
    ]
  },
  {
    "name": "Nitroprusside",
    "class": "Direct NO donor vasodilator",
    "moa": "Arterial and venous vasodilation via NO.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Infusion 0.3-5 mcg/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg/min",
        "min": 0.3,
        "max": 5,
        "name": "Primary"
      }
    ],
    "cautions": "Cyanide/thiocyanate toxicity, increased ICP, coronary steal.",
    "contraindications": "Severe hepatic/renal failure for prolonged high-dose use.",
    "id": "nitroprusside",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Direct NO donor vasodilator"
    ]
  },
  {
    "name": "Hydralazine",
    "class": "Direct arteriolar vasodilator",
    "moa": "Smooth muscle relaxation, likely NO/cGMP related.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bolus 2.5-10 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2.5,
        "max": 10,
        "name": "Primary"
      }
    ],
    "cautions": "Unpredictable duration, reflex tachycardia.",
    "contraindications": "Tachycardia/ischemia relative.",
    "id": "hydralazine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Direct arteriolar vasodilator"
    ]
  },
  {
    "name": "Adenosine",
    "class": "AV nodal blocker",
    "moa": "A1 receptor activation hyperpolarizes AV node.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "6 mg rapid IV push, then 12 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 6,
        "max": 12,
        "name": "Primary"
      }
    ],
    "cautions": "Transient asystole, bronchospasm, flushing; reduce with central line/transplant, increase with methylxanthines.",
    "contraindications": "Second/third degree AV block or sick sinus without pacer; bronchospasm relative.",
    "id": "adenosine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "AV nodal blocker"
    ]
  },
  {
    "name": "Amiodarone",
    "class": "Class III antiarrhythmic",
    "moa": "Potassium channel blockade plus sodium, calcium, beta effects.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "150 mg over 10 min; arrest 300 mg then 150 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 150,
        "max": 300,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, bradycardia, QT prolongation; chronic pulmonary/hepatic/thyroid toxicity.",
    "contraindications": "Severe sinus node dysfunction/AV block without pacer.",
    "id": "amiodarone",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Class III antiarrhythmic"
    ]
  },
  {
    "name": "Diltiazem",
    "class": "Non-DHP calcium channel blocker",
    "moa": "L-type calcium channel blockade slows AV node.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "0.25 mg/kg IV then 0.35 mg/kg; infusion 5-15 mg/hr",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 0.25,
        "max": 0.35,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, bradycardia; negative inotropy.",
    "contraindications": "HFrEF/decompensated HF, WPW with AF, heart block.",
    "id": "diltiazem",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Non-DHP calcium channel blocker"
    ]
  },
  {
    "name": "Verapamil",
    "class": "Non-DHP calcium channel blocker",
    "moa": "L-type calcium channel blockade slows AV node.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "2.5-5 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2.5,
        "max": 5,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, bradycardia, negative inotropy.",
    "contraindications": "HFrEF/decompensated HF, WPW with AF, heart block.",
    "id": "verapamil",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Non-DHP calcium channel blocker"
    ]
  },
  {
    "name": "Atropine",
    "class": "Tertiary antimuscarinic",
    "moa": "Muscarinic receptor antagonism increases SA/AV nodal activity.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Bradycardia 0.5-1 mg IV; ACLS 1 mg q3-5 min max 3 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 1,
        "name": "Primary"
      }
    ],
    "cautions": "Tachycardia, delirium, urinary retention.",
    "contraindications": "Narrow angle glaucoma relative; tachyarrhythmia relative.",
    "id": "atropine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 13 Cardiac Physiology; Ch 79 Critical Care; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Vasoactive/cardiac",
      "Tertiary antimuscarinic"
    ]
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
        "name": "Primary"
      }
    ],
    "cautions": "QT prolongation, constipation, headache.",
    "contraindications": "Congenital long QT or high-risk QT stack relative.",
    "id": "ondansetron",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 68 Ambulatory; Ch 76 PACU; Ch 77 Pain",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Antiemetic/GI",
      "5-HT3 antagonist"
    ]
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
        "name": "Primary"
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
      "Corticosteroid antiemetic"
    ]
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
        "name": "Primary"
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
      "Butyrophenone dopamine antagonist"
    ]
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
        "name": "Primary"
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
    ]
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
        "name": "Primary"
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
      "D2 antagonist/prokinetic"
    ]
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
        "name": "Primary"
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
    ]
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
        "name": "Primary"
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
    ]
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
        "name": "Primary"
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
    ]
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
        "name": "Primary"
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
      "H2 blocker"
    ]
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
        "name": "Primary"
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
    ]
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
        "name": "Primary"
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
      "Nonparticulate antacid"
    ]
  },
  {
    "name": "Diphenhydramine",
    "class": "H1 antihistamine",
    "moa": "H1 receptor antagonism; anticholinergic effects.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "25-50 mg IV/PO",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 25,
        "max": 50,
        "name": "Primary"
      }
    ],
    "cautions": "Sedation, delirium, anticholinergic effects.",
    "contraindications": "Neonates; narrow-angle glaucoma relative.",
    "id": "diphenhydramine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "H1 antihistamine"
    ]
  },
  {
    "name": "Albuterol",
    "class": "Beta-2 agonist bronchodilator",
    "moa": "Beta-2 agonism relaxes bronchial smooth muscle.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "2.5 mg nebulized; MDI 4-8 puffs",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 2.5,
        "max": 2.5,
        "name": "Primary"
      }
    ],
    "cautions": "Tachycardia, hypokalemia, tremor.",
    "contraindications": "None absolute in bronchospasm.",
    "id": "albuterol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Beta-2 agonist bronchodilator"
    ]
  },
  {
    "name": "Ipratropium",
    "class": "Inhaled antimuscarinic bronchodilator",
    "moa": "Muscarinic antagonism reduces bronchoconstriction.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "0.5 mg nebulized",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.5,
        "max": 0.5,
        "name": "Primary"
      }
    ],
    "cautions": "Dry mouth, urinary retention rare.",
    "contraindications": "Hypersensitivity to atropine derivatives.",
    "id": "ipratropium",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Inhaled antimuscarinic bronchodilator"
    ]
  },
  {
    "name": "Magnesium sulfate",
    "class": "Divalent cation/antiarrhythmic/bronchodilator",
    "moa": "Calcium antagonism, NMDA antagonism, stabilizes myocardium.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1-2 g IV for torsades/bronchospasm; 30-50 mg/kg load where indicated",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "g fixed",
        "min": 1,
        "max": 2,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, weakness, potentiates NMB; renal excretion.",
    "contraindications": "Heart block, severe renal failure without monitoring.",
    "id": "magnesium-sulfate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Divalent cation/antiarrhythmic/bronchodilator"
    ]
  },
  {
    "name": "Calcium chloride",
    "class": "Calcium salt",
    "moa": "Raises ionized calcium; membrane stabilization in hyperkalemia.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "500-1000 mg IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 500,
        "max": 1000,
        "name": "Primary"
      }
    ],
    "cautions": "Tissue necrosis with extravasation; more elemental calcium than gluconate.",
    "contraindications": "Digoxin toxicity relative; avoid extravasation.",
    "id": "calcium-chloride",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Calcium salt"
    ]
  },
  {
    "name": "Calcium gluconate",
    "class": "Calcium salt",
    "moa": "Raises ionized calcium; membrane stabilization in hyperkalemia.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1-3 g IV",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "g fixed",
        "min": 1,
        "max": 3,
        "name": "Primary"
      }
    ],
    "cautions": "Less caustic than CaCl; slower elemental calcium delivery.",
    "contraindications": "Digoxin toxicity relative.",
    "id": "calcium-gluconate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Calcium salt"
    ]
  },
  {
    "name": "Sodium bicarbonate",
    "class": "Buffer/alkalinizing agent",
    "moa": "Increases serum bicarbonate and pH; shifts potassium intracellularly.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "0.5-1 mEq/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mEq/kg",
        "min": 0.5,
        "max": 1,
        "name": "Primary"
      }
    ],
    "cautions": "Hypernatremia, alkalosis, CO2 generation, hypocalcemia.",
    "contraindications": "Metabolic/respiratory alkalosis.",
    "id": "sodium-bicarbonate",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Buffer/alkalinizing agent"
    ]
  },
  {
    "name": "Dextrose 50%",
    "class": "Carbohydrate",
    "moa": "Provides glucose.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "25 g IV hypoglycemia; with insulin for hyperK often 25 g",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "g fixed",
        "min": 25,
        "max": 25,
        "name": "Primary"
      }
    ],
    "cautions": "Hyperglycemia, extravasation injury.",
    "contraindications": "None in severe hypoglycemia.",
    "id": "dextrose-50",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Carbohydrate"
    ]
  },
  {
    "name": "Regular insulin",
    "class": "Short-acting insulin",
    "moa": "Insulin receptor activation shifts K intracellularly and lowers glucose.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Hyperkalemia 5-10 units IV with dextrose",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "units fixed",
        "min": 5,
        "max": 10,
        "name": "Primary"
      }
    ],
    "cautions": "Hypoglycemia, hypokalemia; monitor glucose.",
    "contraindications": "Hypoglycemia unless dextrose strategy present.",
    "id": "regular-insulin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Short-acting insulin"
    ]
  },
  {
    "name": "Glucagon",
    "class": "Counter-regulatory hormone",
    "moa": "Increases cAMP independent of beta receptors; inotropy/chronotropy in beta-blocker toxicity.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1-5 mg IV bolus then infusion as needed",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 1,
        "max": 5,
        "name": "Primary"
      }
    ],
    "cautions": "Vomiting, hyperglycemia; airway risk if obtunded.",
    "contraindications": "Pheochromocytoma, insulinoma relative.",
    "id": "glucagon",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Counter-regulatory hormone"
    ]
  },
  {
    "name": "Mannitol",
    "class": "Osmotic diuretic",
    "moa": "Increases plasma osmolality; reduces brain water.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "0.25-1 g/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "g/kg",
        "min": 0.25,
        "max": 1,
        "name": "Primary"
      }
    ],
    "cautions": "Hypovolemia, hyperosmolality, renal stress.",
    "contraindications": "Anuria, severe pulmonary edema/CHF.",
    "id": "mannitol",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Osmotic diuretic"
    ]
  },
  {
    "name": "Hypertonic saline 3%",
    "class": "Hyperosmolar therapy",
    "moa": "Raises serum sodium/osmolality to reduce cerebral edema.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "2-5 mL/kg bolus or institution protocol",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mL/kg",
        "min": 2,
        "max": 5,
        "name": "Primary"
      }
    ],
    "cautions": "Hypernatremia, osmotic demyelination if chronic hyponatremia corrected too fast.",
    "contraindications": "Severe hypernatremia.",
    "id": "hypertonic-saline-3",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Hyperosmolar therapy"
    ]
  },
  {
    "name": "Furosemide",
    "class": "Loop diuretic",
    "moa": "Inhibits NKCC2 in thick ascending limb.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "10-40 mg IV typical; higher if chronic use/renal dysfunction",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 10,
        "max": 40,
        "name": "Primary"
      }
    ],
    "cautions": "Hypokalemia, hypovolemia, ototoxicity high dose.",
    "contraindications": "Severe dehydration/anuria not responsive.",
    "id": "furosemide",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Loop diuretic"
    ]
  },
  {
    "name": "Desmopressin",
    "class": "V2 agonist",
    "moa": "Increases vWF/FVIII release; antidiuretic effect.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "0.3 mcg/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mcg/kg",
        "min": 0.3,
        "max": 0.3,
        "name": "Primary"
      }
    ],
    "cautions": "Hyponatremia, thrombosis rare, tachyphylaxis.",
    "contraindications": "Hyponatremia.",
    "id": "desmopressin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "V2 agonist"
    ]
  },
  {
    "name": "Heparin",
    "class": "Unfractionated anticoagulant",
    "moa": "Potentiates antithrombin inhibition of thrombin/Xa.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "Bolus 50-100 units/kg depending procedure; infusion 12-18 units/kg/hr",
        "route": "IV",
        "scalar": "ABW",
        "unit": "units/kg",
        "min": 50,
        "max": 100,
        "name": "Primary"
      }
    ],
    "cautions": "Bleeding, HIT, osteoporosis long term.",
    "contraindications": "Active major bleeding, HIT history.",
    "id": "heparin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Unfractionated anticoagulant"
    ]
  },
  {
    "name": "Protamine",
    "class": "Heparin reversal protein",
    "moa": "Cationic protein complexes with heparin.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Custom",
    "doses": [
      {
        "label": "1 mg per 100 units heparin remaining",
        "route": "IV",
        "scalar": "Custom",
        "unit": "mg per 100 units",
        "min": 1,
        "max": 1,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, pulmonary HTN, anaphylactoid reaction; give slowly.",
    "contraindications": "Fish/protamine insulin allergy relative, prior vasectomy relative.",
    "id": "protamine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Heparin reversal protein"
    ]
  },
  {
    "name": "Tranexamic acid",
    "class": "Antifibrinolytic",
    "moa": "Lysine analog inhibits plasminogen activation.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "10-15 mg/kg IV load; infusion 1 mg/kg/hr or procedure protocol",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 10,
        "max": 15,
        "name": "Primary"
      }
    ],
    "cautions": "Seizure risk high dose, thrombosis concern context-dependent; renal adjust.",
    "contraindications": "Active intravascular clotting, SAH in many protocols.",
    "id": "tranexamic-acid",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Antifibrinolytic"
    ]
  },
  {
    "name": "Aminocaproic acid",
    "class": "Antifibrinolytic",
    "moa": "Lysine analog inhibits plasminogen activation.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "75-150 mg/kg load then 10-15 mg/kg/hr",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 75,
        "max": 150,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension if rapid, thrombosis concern, renal adjust.",
    "contraindications": "Active intravascular clotting.",
    "id": "aminocaproic-acid",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Antifibrinolytic"
    ]
  },
  {
    "name": "Dantrolene",
    "class": "RyR1 antagonist",
    "moa": "Reduces skeletal muscle calcium release.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "MH 2.5 mg/kg IV repeat until controlled",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 2.5,
        "max": 10,
        "name": "Primary"
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
      "RyR1 antagonist"
    ]
  },
  {
    "name": "Lipid emulsion 20%",
    "class": "Lipid sink/rescue therapy",
    "moa": "Sequesters lipophilic toxins; supports fatty-acid substrate.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "LAST 1.5 mL/kg bolus then 0.25 mL/kg/min",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mL/kg",
        "min": 1.5,
        "max": 1.5,
        "name": "Primary"
      }
    ],
    "cautions": "Pancreatitis/lab interference after large dose; use LAST protocol.",
    "contraindications": "None in severe LAST.",
    "id": "lipid-emulsion-20",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Lipid sink/rescue therapy"
    ]
  },
  {
    "name": "Methylene blue",
    "class": "Guanylate cyclase inhibitor",
    "moa": "Inhibits NO-cGMP vasodilation; treats methemoglobinemia.",
    "category": "Rescue/adjunct",
    "defaultScalar": "ABW",
    "doses": [
      {
        "label": "1-2 mg/kg IV",
        "route": "IV",
        "scalar": "ABW",
        "unit": "mg/kg",
        "min": 1,
        "max": 2,
        "name": "Primary"
      }
    ],
    "cautions": "Serotonin syndrome, hemolysis in G6PD deficiency, pulse ox artifact.",
    "contraindications": "G6PD deficiency relative, serotonergic toxicity risk.",
    "id": "methylene-blue",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Guanylate cyclase inhibitor"
    ]
  },
  {
    "name": "Oxytocin",
    "class": "Uterotonic peptide hormone",
    "moa": "Oxytocin receptor agonism increases uterine contraction.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "1-3 units slow IV bolus then 10-40 units infusion/bag per protocol",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "units fixed",
        "min": 1,
        "max": 3,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension with rapid bolus, tachycardia, water intoxication high dose.",
    "contraindications": "None for uterine atony; caution severe cardiac disease.",
    "id": "oxytocin",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Uterotonic peptide hormone"
    ]
  },
  {
    "name": "Methylergonovine",
    "class": "Ergot uterotonic",
    "moa": "Serotonergic/alpha agonist causes sustained uterine contraction.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "0.2 mg IM",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.2,
        "max": 0.2,
        "name": "Primary"
      }
    ],
    "cautions": "Severe hypertension, coronary vasospasm.",
    "contraindications": "Hypertension, preeclampsia, CAD.",
    "id": "methylergonovine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Ergot uterotonic"
    ]
  },
  {
    "name": "Carboprost",
    "class": "PGF2-alpha analog uterotonic",
    "moa": "Prostaglandin receptor agonism contracts uterus.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "250 mcg IM q15-90 min; max 2 mg",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mcg fixed",
        "min": 250,
        "max": 250,
        "name": "Primary"
      }
    ],
    "cautions": "Bronchospasm, diarrhea, fever.",
    "contraindications": "Asthma/active bronchospasm.",
    "id": "carboprost",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "PGF2-alpha analog uterotonic"
    ]
  },
  {
    "name": "Terbutaline",
    "class": "Beta-2 agonist tocolytic/bronchodilator",
    "moa": "Beta-2 agonism relaxes uterine/bronchial smooth muscle.",
    "category": "Rescue/adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "0.25 mg SC",
        "route": "IV",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 0.25,
        "max": 0.25,
        "name": "Primary"
      }
    ],
    "cautions": "Tachycardia, hypokalemia, hyperglycemia.",
    "contraindications": "Tachyarrhythmia, significant cardiac disease relative.",
    "id": "terbutaline",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 29 Coexisting Disease; Ch 43 Fluids; Ch 46 Coagulation; Ch 58 Obstetrics; Ch 82 ACLS",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Rescue/adjunct",
      "Beta-2 agonist tocolytic/bronchodilator"
    ]
  },
  {
    "name": "Lidocaine local",
    "class": "Amide local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local/Inhaled",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max 4.5 mg/kg plain; 7 mg/kg with epinephrine",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 4.5,
        "max": 7,
        "name": "Primary"
      }
    ],
    "cautions": "LAST; reduce total dose for frailty, pregnancy, hepatic disease, low CO.",
    "contraindications": "True amide allergy rare; severe heart block relative.",
    "id": "lidocaine-local",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Amide local anesthetic"
    ]
  },
  {
    "name": "Bupivacaine",
    "class": "Amide local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local/Inhaled",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max 2.5-3 mg/kg; use lower end for truncal/vascular sites",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 2.5,
        "max": 3,
        "name": "Primary"
      }
    ],
    "cautions": "Higher cardiotoxicity; LAST with refractory arrhythmias.",
    "contraindications": "IV regional anesthesia/Bier block generally avoided.",
    "id": "bupivacaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Amide local anesthetic"
    ]
  },
  {
    "name": "Ropivacaine",
    "class": "Amide local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local/Inhaled",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max about 3 mg/kg",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 3,
        "max": 3,
        "name": "Primary"
      }
    ],
    "cautions": "Less cardiotoxic than bupivacaine but LAST still possible.",
    "contraindications": "True amide allergy rare.",
    "id": "ropivacaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Amide local anesthetic"
    ]
  },
  {
    "name": "Mepivacaine",
    "class": "Amide local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local/Inhaled",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max 4.5 mg/kg plain; 7 mg/kg with epinephrine",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 4.5,
        "max": 7,
        "name": "Primary"
      }
    ],
    "cautions": "LAST; avoid large obstetric paracervical doses.",
    "contraindications": "True amide allergy rare.",
    "id": "mepivacaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Amide local anesthetic"
    ]
  },
  {
    "name": "Chloroprocaine",
    "class": "Ester local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local/Inhaled",
    "defaultScalar": "LBW",
    "doses": [
      {
        "label": "Max 11-12 mg/kg",
        "route": "Regional/Inhaled",
        "scalar": "LBW",
        "unit": "mg/kg",
        "min": 11,
        "max": 12,
        "name": "Primary"
      }
    ],
    "cautions": "PABA metabolite allergy possible; rapid metabolism.",
    "contraindications": "Ester/PABA allergy.",
    "id": "chloroprocaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Ester local anesthetic"
    ]
  },
  {
    "name": "Tetracaine",
    "class": "Ester local anesthetic",
    "moa": "Voltage-gated sodium channel blockade.",
    "category": "Local/Inhaled",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "label": "Spinal 5-15 mg typical, not weight-based",
        "route": "Regional/Inhaled",
        "scalar": "Fixed",
        "unit": "mg fixed",
        "min": 5,
        "max": 15,
        "name": "Primary"
      }
    ],
    "cautions": "Long duration spinal; hypotension/urinary retention.",
    "contraindications": "Ester/PABA allergy.",
    "id": "tetracaine",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Ester local anesthetic"
    ]
  },
  {
    "name": "Sevoflurane",
    "class": "Volatile anesthetic",
    "moa": "Multiple CNS targets including GABA/glycine/two-pore K channels; immobility via spinal effects.",
    "category": "Local/Inhaled",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "label": "Adult MAC about 2%; titrate age-adjusted ET concentration",
        "route": "Regional/Inhaled",
        "scalar": "Titrated",
        "unit": "MAC %",
        "min": 2,
        "max": 2,
        "name": "Primary"
      }
    ],
    "cautions": "MH trigger, hypotension, compound A concern low-flow historical.",
    "contraindications": "MH susceptibility.",
    "id": "sevoflurane",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Volatile anesthetic"
    ]
  },
  {
    "name": "Desflurane",
    "class": "Volatile anesthetic",
    "moa": "Volatile anesthetic CNS/spinal effects.",
    "category": "Local/Inhaled",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "label": "Adult MAC about 6%; titrate age-adjusted ET concentration",
        "route": "Regional/Inhaled",
        "scalar": "Titrated",
        "unit": "MAC %",
        "min": 6,
        "max": 6,
        "name": "Primary"
      }
    ],
    "cautions": "Airway irritant, sympathetic stimulation with rapid increases, high GWP.",
    "contraindications": "MH susceptibility; avoid induction in reactive airway.",
    "id": "desflurane",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Volatile anesthetic"
    ]
  },
  {
    "name": "Isoflurane",
    "class": "Volatile anesthetic",
    "moa": "Volatile anesthetic CNS/spinal effects.",
    "category": "Local/Inhaled",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "label": "Adult MAC about 1.2%; titrate age-adjusted ET concentration",
        "route": "Regional/Inhaled",
        "scalar": "Titrated",
        "unit": "MAC %",
        "min": 1.2,
        "max": 1.2,
        "name": "Primary"
      }
    ],
    "cautions": "Hypotension, pungent, coronary steal theoretical.",
    "contraindications": "MH susceptibility.",
    "id": "isoflurane",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Volatile anesthetic"
    ]
  },
  {
    "name": "Nitrous oxide",
    "class": "Inhaled anesthetic gas",
    "moa": "NMDA antagonism; weak anesthetic, analgesic.",
    "category": "Local/Inhaled",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "label": "MAC 104%; usually 30-70% adjunct",
        "route": "Regional/Inhaled",
        "scalar": "Titrated",
        "unit": "% inspired",
        "min": 30,
        "max": 70,
        "name": "Primary"
      }
    ],
    "cautions": "Expands closed gas spaces, PONV, diffusion hypoxia, B12 inhibition.",
    "contraindications": "Pneumothorax, bowel obstruction, middle ear surgery, recent intraocular gas, B12 deficiency risk.",
    "id": "nitrous-oxide",
    "sourceStatus": "chapter-level placeholder; dose requires audit",
    "millerRef": "Ch 17-19 Inhaled Anesthetics; Ch 25 Local Anesthetics",
    "millerPage": "chapter ref only, page not verified",
    "tags": [
      "Local/Inhaled",
      "Inhaled anesthetic gas"
    ]
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
        "name": "Primary",
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
      "Sedative",
      "Benzodiazepine"
    ]
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
        "name": "Primary",
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
      "Sedative",
      "Benzodiazepine"
    ]
  },
  {
    "id": "clonidine",
    "name": "Clonidine",
    "class": "Alpha-2 agonist",
    "moa": "Central alpha-2 agonism reducing sympathetic outflow.",
    "category": "Sedative adjunct",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Sedative adjunct",
      "Alpha-2 agonist"
    ]
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
        "name": "Primary",
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
      "Reversal/rescue",
      "Opioid antagonist"
    ]
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
        "name": "Primary",
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
      "Reversal/rescue",
      "Benzodiazepine antagonist"
    ]
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
        "name": "Primary",
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
      "Reversal/rescue",
      "Opioid antagonist"
    ]
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
        "name": "Primary",
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
      "Opioid",
      "Kappa agonist, mu antagonist opioid"
    ]
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
        "name": "Primary",
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
      "Opioid",
      "Mixed opioid agonist-antagonist"
    ]
  },
  {
    "id": "remimazolam",
    "name": "Remimazolam",
    "class": "Ultra-short benzodiazepine",
    "moa": "Ester-metabolized benzodiazepine acting at GABA-A receptor.",
    "category": "Sedative",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "Sedative",
      "Ultra-short benzodiazepine"
    ]
  },
  {
    "id": "cefazolin",
    "name": "Cefazolin",
    "class": "First-generation cephalosporin",
    "moa": "Beta-lactam inhibition of bacterial cell wall synthesis.",
    "category": "Antibiotic prophylaxis",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Antibiotic prophylaxis",
      "First-generation cephalosporin"
    ]
  },
  {
    "id": "vancomycin",
    "name": "Vancomycin",
    "class": "Glycopeptide antibiotic",
    "moa": "Inhibits bacterial cell wall synthesis via D-Ala-D-Ala binding.",
    "category": "Antibiotic prophylaxis",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "Antibiotic prophylaxis",
      "Glycopeptide antibiotic"
    ]
  },
  {
    "id": "clindamycin",
    "name": "Clindamycin",
    "class": "Lincosamide antibiotic",
    "moa": "Inhibits 50S ribosomal protein synthesis.",
    "category": "Antibiotic prophylaxis",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Antibiotic prophylaxis",
      "Lincosamide antibiotic"
    ]
  },
  {
    "id": "gentamicin",
    "name": "Gentamicin",
    "class": "Aminoglycoside antibiotic",
    "moa": "30S ribosomal inhibition; concentration-dependent killing.",
    "category": "Antibiotic prophylaxis",
    "defaultScalar": "AdjBW",
    "doses": [
      {
        "name": "Primary",
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
      "Antibiotic prophylaxis",
      "Aminoglycoside antibiotic"
    ]
  },
  {
    "id": "metronidazole",
    "name": "Metronidazole",
    "class": "Nitroimidazole antibiotic",
    "moa": "DNA strand disruption in anaerobes and protozoa.",
    "category": "Antibiotic prophylaxis",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Antibiotic prophylaxis",
      "Nitroimidazole antibiotic"
    ]
  },
  {
    "id": "cefoxitin",
    "name": "Cefoxitin",
    "class": "Second-generation cephalosporin",
    "moa": "Beta-lactam cell wall inhibition with anaerobic coverage.",
    "category": "Antibiotic prophylaxis",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Antibiotic prophylaxis",
      "Second-generation cephalosporin"
    ]
  },
  {
    "id": "ceftriaxone",
    "name": "Ceftriaxone",
    "class": "Third-generation cephalosporin",
    "moa": "Beta-lactam cell wall inhibition.",
    "category": "Antibiotic prophylaxis",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Antibiotic prophylaxis",
      "Third-generation cephalosporin"
    ]
  },
  {
    "id": "aztreonam",
    "name": "Aztreonam",
    "class": "Monobactam antibiotic",
    "moa": "Beta-lactam active against gram-negative aerobes.",
    "category": "Antibiotic prophylaxis",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Antibiotic prophylaxis",
      "Monobactam antibiotic"
    ]
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
        "name": "Primary",
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
      "Steroid/endocrine",
      "Glucocorticoid"
    ]
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
        "name": "Primary",
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
      "Steroid/endocrine",
      "Glucocorticoid"
    ]
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
        "name": "Primary",
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
    ]
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
        "name": "Primary",
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
    ]
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
        "name": "Primary",
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
    ]
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
        "name": "Primary",
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
    ]
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
        "name": "Primary",
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
    ]
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
        "name": "Primary",
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
    ]
  },
  {
    "id": "aspirin",
    "name": "Aspirin",
    "class": "Antiplatelet",
    "moa": "Irreversible COX-1 platelet inhibition reducing thromboxane A2.",
    "category": "Cardiac/antiplatelet",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Cardiac/antiplatelet",
      "Antiplatelet"
    ]
  },
  {
    "id": "cangrelor",
    "name": "Cangrelor",
    "class": "IV P2Y12 inhibitor",
    "moa": "Reversible platelet P2Y12 ADP receptor antagonist.",
    "category": "Cardiac/antiplatelet",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "IV P2Y12 inhibitor"
    ]
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
        "name": "Primary",
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
      "Neuro/rescue",
      "Antiseizure medication"
    ]
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
        "name": "Primary",
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
      "Neuro/rescue",
      "Antiseizure prodrug"
    ]
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
        "name": "Primary",
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
      "Neuro/rescue",
      "Antiseizure medication"
    ]
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
        "name": "Primary",
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
      "Neuro/rescue",
      "Barbiturate anticonvulsant"
    ]
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
        "name": "Primary",
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
      "Neuro/rescue",
      "Methylxanthine"
    ]
  },
  {
    "id": "racemic-epinephrine",
    "name": "Racemic epinephrine",
    "class": "Alpha/beta agonist aerosol",
    "moa": "Airway mucosal vasoconstriction and bronchodilation.",
    "category": "Airway/bronchospasm",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Alpha/beta agonist aerosol"
    ]
  },
  {
    "id": "aminophylline",
    "name": "Aminophylline",
    "class": "Methylxanthine bronchodilator",
    "moa": "PDE inhibition and adenosine antagonism.",
    "category": "Airway/bronchospasm",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "Methylxanthine bronchodilator"
    ]
  },
  {
    "id": "epoprostenol-inhaled",
    "name": "Epoprostenol inhaled",
    "class": "Prostacyclin analog",
    "moa": "Pulmonary vasodilation via prostacyclin receptor/cAMP.",
    "category": "Pulmonary vasodilator",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "name": "Primary",
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
      "Pulmonary vasodilator",
      "Prostacyclin analog"
    ]
  },
  {
    "id": "iloprost-inhaled",
    "name": "Iloprost inhaled",
    "class": "Prostacyclin analog",
    "moa": "Pulmonary vasodilation via prostacyclin receptor/cAMP.",
    "category": "Pulmonary vasodilator",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "name": "Primary",
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
      "Pulmonary vasodilator",
      "Prostacyclin analog"
    ]
  },
  {
    "id": "nitric-oxide-inhaled",
    "name": "Nitric oxide inhaled",
    "class": "Selective pulmonary vasodilator",
    "moa": "Activates soluble guanylate cyclase, increases cGMP.",
    "category": "Pulmonary vasodilator",
    "defaultScalar": "Titrated",
    "doses": [
      {
        "name": "Primary",
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
      "Pulmonary vasodilator",
      "Selective pulmonary vasodilator"
    ]
  },
  {
    "id": "nifedipine",
    "name": "Nifedipine",
    "class": "Dihydropyridine calcium channel blocker",
    "moa": "L-type calcium channel blockade; vasodilation and tocolysis.",
    "category": "OB/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "OB/cardiac",
      "Dihydropyridine calcium channel blocker"
    ]
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
        "name": "Primary",
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
    ]
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
        "name": "Primary",
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
    ]
  },
  {
    "id": "phenobarbital-neonatal",
    "name": "Phenobarbital neonatal",
    "class": "Barbiturate anticonvulsant",
    "moa": "GABA-A positive modulation.",
    "category": "Pediatric/neonatal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "Pediatric/neonatal",
      "Barbiturate anticonvulsant"
    ]
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
        "name": "Primary",
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
      "Reversal/rescue",
      "Alpha-2 antagonist"
    ]
  },
  {
    "id": "sugammadex-16-mg-kg",
    "name": "Sugammadex 16 mg/kg",
    "class": "Selective relaxant binding agent",
    "moa": "Encapsulates rocuronium/vecuronium.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "Selective relaxant binding agent"
    ]
  },
  {
    "id": "sugammadex-4-mg-kg",
    "name": "Sugammadex 4 mg/kg",
    "class": "Selective relaxant binding agent",
    "moa": "Encapsulates rocuronium/vecuronium.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "Selective relaxant binding agent"
    ]
  },
  {
    "id": "sugammadex-2-mg-kg",
    "name": "Sugammadex 2 mg/kg",
    "class": "Selective relaxant binding agent",
    "moa": "Encapsulates rocuronium/vecuronium.",
    "category": "Neuromuscular/reversal",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "Selective relaxant binding agent"
    ]
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
        "name": "Primary",
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
      "Fluid/blood adjunct",
      "Colloid volume expander"
    ]
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
        "name": "Primary",
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
    ]
  },
  {
    "id": "potassium-chloride",
    "name": "Potassium chloride",
    "class": "Electrolyte",
    "moa": "Potassium replacement.",
    "category": "Electrolyte",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Primary",
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
      "Electrolyte"
    ]
  },
  {
    "id": "sodium-phosphate",
    "name": "Sodium phosphate",
    "class": "Electrolyte",
    "moa": "Phosphate replacement.",
    "category": "Electrolyte",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Primary",
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
      "Electrolyte"
    ]
  },
  {
    "id": "potassium-phosphate",
    "name": "Potassium phosphate",
    "class": "Electrolyte",
    "moa": "Phosphate and potassium replacement.",
    "category": "Electrolyte",
    "defaultScalar": "Custom",
    "doses": [
      {
        "name": "Primary",
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
      "Electrolyte"
    ]
  },
  {
    "id": "acetazolamide",
    "name": "Acetazolamide",
    "class": "Carbonic anhydrase inhibitor",
    "moa": "Inhibits carbonic anhydrase, bicarbonaturia, lowers IOP/CSF production.",
    "category": "Diuretic/other",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Diuretic/other",
      "Carbonic anhydrase inhibitor"
    ]
  },
  {
    "id": "mannitol-20",
    "name": "Mannitol 20%",
    "class": "Osmotic diuretic",
    "moa": "Raises plasma osmolality, reduces brain bulk/IOP.",
    "category": "Neuro/rescue",
    "defaultScalar": "ABW",
    "doses": [
      {
        "name": "Primary",
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
      "Osmotic diuretic"
    ]
  },
  {
    "id": "clevidipine-infusion",
    "name": "Clevidipine infusion",
    "class": "Dihydropyridine calcium channel blocker",
    "moa": "Ultra-short L-type calcium channel blockade; arterial vasodilation.",
    "category": "Vasoactive/cardiac",
    "defaultScalar": "Fixed",
    "doses": [
      {
        "name": "Primary",
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
      "Vasoactive/cardiac",
      "Dihydropyridine calcium channel blocker"
    ]
  }
];
