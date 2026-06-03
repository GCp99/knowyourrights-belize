// ============================================================
// KnowYourRights Belize — Legal Data
// All content references Belizean statutes (laws.gov.bz)
// Plain-language summaries written at Grade 7 reading level
// Last reviewed: June 2026
// ============================================================

export const CATEGORIES = [
  {
    id: "traffic",
    icon: "🚗",
    title: "Traffic Stops",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.35)",
    desc: "Road checks · Documents · Vehicle searches",
    intro: "Police have the authority to stop vehicles and set up road checks. This section explains exactly what officers can and cannot do — and what you are legally required to provide.",
  },
  {
    id: "search",
    icon: "🔍",
    title: "Stop & Search",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.35)",
    desc: "On-foot stops · Body searches · Reasonable suspicion",
    intro: "Police can stop and search you on foot, but only under specific legal conditions. Knowing those conditions protects your right to privacy and dignity.",
  },
  {
    id: "arrest",
    icon: "⚖️",
    title: "Arrest & Detention",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.35)",
    desc: "Arrest procedure · Right to silence · Bail",
    intro: "Being arrested is one of the most serious situations you can face. The Constitution gives you strong protections. Know them before you need them.",
  },
  {
    id: "drugs",
    icon: "💊",
    title: "Drug Encounters",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.35)",
    desc: "Misuse of Drugs Act · Possession · Search powers",
    intro: "The Misuse of Drugs Act gives police special powers — but also requires specific conditions. This section covers what those powers are and what limits exist.",
  },
  {
    id: "weapons",
    icon: "🔫",
    title: "Weapons & Firearms",
    color: "#34d399",
    glow: "rgba(52,211,153,0.35)",
    desc: "Firearms Act · Licensing · Police powers",
    intro: "Possessing a weapon or firearm in Belize is tightly regulated. This section explains what is legal, what officers can do, and what your rights are.",
  },
  {
    id: "domestic",
    icon: "🏠",
    title: "Domestic Incidents",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.35)",
    desc: "Domestic Violence Act · Protection orders · Police duties",
    intro: "The Domestic Violence Act provides strong protections. Police have specific mandatory duties when responding to domestic situations.",
  },
  {
    id: "protest",
    icon: "✊",
    title: "Public Order & Protests",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.35)",
    desc: "Right to assembly · Gatherings · Use of force",
    intro: "The Constitution protects your right to peaceful assembly. This section explains when police can lawfully intervene and when they cannot.",
  },
  {
    id: "station",
    icon: "🏛️",
    title: "At the Police Station",
    color: "#e879f9",
    glow: "rgba(232,121,249,0.35)",
    desc: "Custody rights · Legal access · Complaints",
    intro: "Your rights do not stop at the station door. The Constitution and Police Act guarantee you specific protections while in custody.",
  },
  {
    id: "juvenile",
    icon: "🧒",
    title: "Juvenile Rights",
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.35)",
    desc: "Age of responsibility · Guardian notification · Schools",
    intro: "Persons under 18 have additional legal protections in Belize. Police and courts must follow special rules when dealing with juveniles.",
  },
  {
    id: "immigration",
    icon: "🛂",
    title: "Immigration Encounters",
    color: "#f87171",
    glow: "rgba(248,113,113,0.35)",
    desc: "Non-citizen rights · Consular access · Deportation",
    intro: "Non-citizens in Belize still have legal rights. International conventions and the Vienna Convention provide key protections.",
  },
];

export const SITUATIONS = {
  traffic: [
    {
      id: "t1",
      title: "Officer pulls me over at a road check",
      summary: "Police can set up road checks and stop vehicles. Here is exactly what they can and cannot do — and what you must provide by law.",
      rights: [
        {
          type: "must",
          text: "Pull over safely and calmly when signalled by a police officer at a road check.",
          plain: "You are required by law to stop. Driving through a checkpoint is an offence.",
          law: "Motor Vehicles & Road Traffic Act, Cap. 230",
        },
        {
          type: "must",
          text: "Provide your driver's licence, vehicle registration certificate, and valid insurance when asked.",
          plain: "These three documents are the only things you legally must hand over at a routine stop.",
          law: "Motor Vehicles & Road Traffic Act s.65",
        },
        {
          type: "your_right",
          text: "You have the right to ask the officer for their name and badge number.",
          plain: "Every officer must identify themselves if you ask. Write it down.",
          law: "Police Act, Cap. 138 s.14",
        },
        {
          type: "can",
          text: "Officers can check that your documents are valid and inspect visible parts of your vehicle for roadworthiness.",
          plain: "This is a routine check. Looking through the windshield at what is in plain view is lawful.",
          law: "Motor Vehicles & Road Traffic Act s.63",
        },
        {
          type: "cannot",
          text: "An officer CANNOT search your vehicle without your consent, a valid warrant, or specific legal grounds such as seeing something illegal in plain view.",
          plain: "Just pulling you over does NOT give police the right to search inside your car.",
          law: "Constitution of Belize s.9 — Right to Privacy",
        },
        {
          type: "cannot",
          text: "An officer CANNOT hold you at a road check for an unreasonably long time without a specific reason.",
          plain: "A routine check should take only a few minutes. Extended detention without cause violates your right to personal liberty.",
          law: "Constitution of Belize s.5 — Right to Personal Liberty",
        },
        {
          type: "critical",
          text: "If searched without consent or lawful reason: stay calm, do NOT physically resist, clearly say 'I do not consent to this search,' note the badge number, and raise it with a lawyer afterward.",
          plain: "Evidence found in an unlawful search may be excluded in court. Your calm, recorded objection matters legally.",
          law: "Constitution s.9; Evidence Act — unlawfully obtained evidence may be challenged",
        },
      ],
    },
    {
      id: "t2",
      title: "Officer asks to search my vehicle",
      summary: "Vehicle searches require specific legal justification. Knowing when a search is lawful — and when it is not — can be critical in court.",
      rights: [
        {
          type: "your_right",
          text: "You have the right to say 'I do not consent to this search.' Say it clearly, calmly, and once.",
          plain: "This does not necessarily stop the search, but it puts the officer on legal notice and protects your rights if challenged later.",
          law: "Constitution of Belize s.9 — Right to Privacy",
        },
        {
          type: "can",
          text: "An officer CAN lawfully search your vehicle if: (1) you give consent, (2) they have a warrant, (3) they have reasonable suspicion of a serious offence, or (4) a lawful arrest is being made.",
          plain: "There are four situations where a vehicle search is legal. Outside of these four, the search is likely unlawful.",
          law: "Criminal Code s.16; Misuse of Drugs Act s.7; Constitution s.9",
        },
        {
          type: "cannot",
          text: "An officer CANNOT search your vehicle based on your race, appearance, neighbourhood, or a vague 'feeling' without specific facts.",
          plain: "Reasonable suspicion must be based on specific, observable facts — not assumptions about who you are.",
          law: "Constitution s.16 — Protection from Discrimination; Police Act s.23",
        },
        {
          type: "must",
          text: "Do NOT physically block or obstruct the search, even if you believe it is unlawful.",
          plain: "Physically resisting police is a criminal offence. Comply physically, state your objection verbally, and challenge it in court later.",
          law: "Criminal Code — obstruction of a police officer is an offence",
        },
      ],
    },
    {
      id: "t3",
      title: "Officer wants to breathalyse me",
      summary: "Roadside breath tests are lawful under specific conditions. Understand what you must comply with and what happens if you refuse.",
      rights: [
        {
          type: "can",
          text: "A police officer CAN require you to take a breathalyser test if they have reasonable cause to suspect you have been drinking.",
          plain: "If they smell alcohol, see erratic driving, or have another specific reason, the test is lawful.",
          law: "Motor Vehicles & Road Traffic Act s.68",
        },
        {
          type: "must",
          text: "You must comply with a lawful breathalyser request. Refusing is itself an offence and treated similarly to failing the test.",
          plain: "Saying no is not a safe option — it carries the same legal consequences as being over the limit.",
          law: "Motor Vehicles & Road Traffic Act s.68(3)",
        },
        {
          type: "your_right",
          text: "If arrested following a test, you have the right to request a blood or urine test as an alternative at the station.",
          plain: "You can ask for a secondary test to verify the breathalyser result.",
          law: "Motor Vehicles & Road Traffic Act s.69",
        },
        {
          type: "cannot",
          text: "An officer CANNOT demand a breathalyser test without any observable reason — they need specific grounds, not just a random choice.",
          plain: "A random test with no basis is not lawful unless it is a designated road safety checkpoint authorised for that purpose.",
          law: "Motor Vehicles & Road Traffic Act s.68",
        },
      ],
    },
  ],

  search: [
    {
      id: "s1",
      title: "Officer stops me on the street",
      summary: "Police can stop and question you on the street, but only under specific legal conditions. You are not required to answer every question.",
      rights: [
        {
          type: "can",
          text: "An officer CAN stop you if they have reasonable suspicion you are involved in, or about to commit, a criminal offence.",
          plain: "They need a specific, real reason based on what they see or know — not just a gut feeling about you.",
          law: "Criminal Code, Cap. 101 s.16",
        },
        {
          type: "your_right",
          text: "You can ask the officer why you are being stopped. You are entitled to a reason before cooperating further.",
          plain: "Ask calmly: 'Why are you stopping me?' You have a right to know.",
          law: "Police Act, Cap. 138 s.14",
        },
        {
          type: "your_right",
          text: "You are NOT required to give a detailed statement on the spot. You may provide only your name and address.",
          plain: "You do not have to explain where you are going, what you are doing, or answer other questions at a street stop.",
          law: "Constitution s.6(2)(b) — Right to Silence",
        },
        {
          type: "cannot",
          text: "An officer CANNOT detain you on the street for an unreasonable time without either arresting you or letting you go.",
          plain: "If they are not arresting you, they cannot hold you indefinitely. After a brief, lawful stop, you are free to leave.",
          law: "Constitution s.5 — Right to Personal Liberty",
        },
        {
          type: "cannot",
          text: "An officer CANNOT conduct a body search unless they have lawful grounds — reasonable suspicion of weapon or drug possession.",
          plain: "Being stopped does not automatically authorise a body search. There must be additional, specific grounds.",
          law: "Police Act s.23; Misuse of Drugs Act s.7",
        },
      ],
    },
    {
      id: "s2",
      title: "Officer wants to do a body search",
      summary: "Body searches have strict legal requirements protecting your dignity. Specific rules govern who can search you and how.",
      rights: [
        {
          type: "must",
          text: "Before searching you, the officer MUST tell you their name, the reason for the search, and show ID if they are in plain clothes.",
          plain: "If they do not identify themselves and state a reason, the search may be unlawful.",
          law: "Police Act s.23(2); Misuse of Drugs Act s.7(2)",
        },
        {
          type: "cannot",
          text: "A male officer CANNOT conduct a body or strip search on a female. The search must be done by an officer of the same sex.",
          plain: "This rule exists to protect your dignity. If violated, the search is unlawful and evidence found may be excluded.",
          law: "Misuse of Drugs Act s.7(3); Police Act",
        },
        {
          type: "cannot",
          text: "A body search CANNOT be conducted in a public place in a degrading or humiliating manner.",
          plain: "You have the right to basic dignity during any search. Unnecessary exposure in public is unlawful.",
          law: "Constitution s.7 — Protection from Inhumane Treatment",
        },
        {
          type: "your_right",
          text: "You can ask that the search be conducted in a private location, away from public view.",
          plain: "You do not have to be searched on the street in front of others if you object. Request a private location.",
          law: "Constitution s.7",
        },
      ],
    },
  ],

  arrest: [
    {
      id: "a1",
      title: "Police say I am under arrest",
      summary: "Arrest carries serious consequences and strong constitutional protections. Know these rights — they apply from the moment of arrest.",
      rights: [
        {
          type: "must",
          text: "The officer MUST inform you at the time of arrest that you are under arrest AND the specific reason why.",
          plain: "They cannot just grab you and say nothing. You have the right to know exactly why you are being arrested.",
          law: "Constitution of Belize s.6(2)(a)",
        },
        {
          type: "your_right",
          text: "You have the right to remain silent. You do NOT have to answer any questions. Anything you say can be used as evidence against you.",
          plain: "Saying 'I will not answer questions without a lawyer' is your legal right. Use it.",
          law: "Constitution of Belize s.6(2)(b)",
        },
        {
          type: "your_right",
          text: "You have the right to consult a lawyer without delay. You must be told this right at the moment of arrest.",
          plain: "Ask for a lawyer immediately. Do not answer substantive questions until you have spoken to one.",
          law: "Constitution of Belize s.6(2)(c)",
        },
        {
          type: "your_right",
          text: "You have the right to have a family member or friend notified of your arrest and location.",
          plain: "Police must allow you to contact someone. If they refuse, it is a violation of your rights.",
          law: "Police Act, Cap. 138",
        },
        {
          type: "cannot",
          text: "Police CANNOT hold you for more than 48 hours without either charging you with a specific offence or bringing you before a magistrate.",
          plain: "After 48 hours without a charge, continued detention is unlawful — regardless of what they are investigating.",
          law: "Constitution of Belize s.6(3)",
        },
        {
          type: "cannot",
          text: "Police CANNOT use excessive or unreasonable force during arrest. Force must be proportional and only used when genuinely necessary.",
          plain: "Being pushed to the ground, beaten, or physically abused during arrest is unlawful, even if you are guilty of the alleged offence.",
          law: "Police Act s.18; Constitution s.7 — Protection from Torture and Inhumane Treatment",
        },
        {
          type: "cannot",
          text: "Police CANNOT continue questioning you after you have clearly asked for a lawyer — until you have had the opportunity to speak with one.",
          plain: "Once you say 'I want a lawyer,' questioning must stop. Any answers given after that request, without access to a lawyer, may be inadmissible.",
          law: "Constitution s.6(2)(c); Judges' Rules on Interrogation",
        },
        {
          type: "critical",
          text: "If you are mistreated during arrest — beaten, threatened, denied a lawyer, or held beyond 48 hours without charge — document everything afterward and file a complaint with the Independent Police Complaints Commission (IPCC).",
          plain: "You can also bring a constitutional motion in the Supreme Court if your rights are seriously violated. A lawyer can assist with this.",
          law: "Police Complaints Act; Constitution s.20 — Enforcement of Fundamental Rights",
        },
      ],
    },
    {
      id: "a2",
      title: "I want to apply for bail",
      summary: "Bail allows you to be released from custody while awaiting your court hearing. Understanding bail helps you act quickly.",
      rights: [
        {
          type: "your_right",
          text: "You have the right to apply for bail for most offences. Bail may be granted by police at the station, or by a magistrate in court.",
          plain: "Bail is not automatic — you must apply. For serious offences, only a magistrate or judge can grant it.",
          law: "Indictable Procedures Act; Summary Jurisdiction (Procedure) Act",
        },
        {
          type: "can",
          text: "A magistrate CAN consider factors such as the seriousness of the offence, whether you are a flight risk, and your ties to the community when deciding on bail.",
          plain: "Having family, a job, and roots in Belize helps your bail application. A lawyer can present these factors for you.",
          law: "Indictable Procedures Act s.26",
        },
        {
          type: "cannot",
          text: "Bail CANNOT be denied arbitrarily or without stated reasons.",
          plain: "If bail is refused, the magistrate must give reasons. Those reasons can be challenged in a higher court.",
          law: "Constitution s.5; Indictable Procedures Act",
        },
        {
          type: "critical",
          text: "For murder, treason, and certain drug trafficking offences, bail can only be granted by the Supreme Court — not a magistrate.",
          plain: "For the most serious charges, you need a lawyer to apply to the Supreme Court for bail. Contact Legal Aid Belize immediately.",
          law: "Indictable Procedures Act; Constitution s.6(3)",
        },
      ],
    },
  ],

  drugs: [
    {
      id: "d1",
      title: "Officer suspects I am carrying drugs",
      summary: "The Misuse of Drugs Act gives police specific search powers — but those powers come with specific conditions. Know both sides.",
      rights: [
        {
          type: "can",
          text: "A police officer CAN stop and search you if they have reasonable grounds — based on specific facts — to suspect you are carrying a controlled drug.",
          plain: "Reasonable grounds means specific things they have seen, smelled, or know. A general suspicion about your appearance is not enough.",
          law: "Misuse of Drugs Act, Cap. 103 s.7(1)",
        },
        {
          type: "must",
          text: "Before searching you, the officer MUST: state their name, tell you the specific reason for the search, and show their police ID if they are in plain clothes.",
          plain: "If they skip these steps, the search may be unlawful and any evidence found could be challenged.",
          law: "Misuse of Drugs Act s.7(2)",
        },
        {
          type: "cannot",
          text: "A male officer CANNOT conduct a body or strip search on a female person. The search must be by an officer of the same sex.",
          plain: "This is a firm legal rule. A violation makes the search unlawful.",
          law: "Misuse of Drugs Act s.7(3)",
        },
        {
          type: "your_right",
          text: "Possession of a very small quantity of cannabis (personal use amount) may be dealt with as a minor matter depending on circumstances, rather than a serious criminal charge.",
          plain: "The law distinguishes between personal use and supply/trafficking. Small amounts attract lower penalties.",
          law: "Misuse of Drugs Act — Schedule; Decriminalisation provisions",
        },
        {
          type: "cannot",
          text: "Simply being near someone who has drugs does NOT make you automatically guilty of possession.",
          plain: "The prosecution must prove you personally knew about the drugs AND had control over them. Being present is not enough.",
          law: "Misuse of Drugs Act s.3 — Definition of Possession; R v Lambert principles",
        },
        {
          type: "critical",
          text: "Drug trafficking carries penalties of 3 years to life imprisonment depending on the substance and quantity. If charged with anything beyond simple possession, immediately ask for a lawyer and do not answer any questions.",
          plain: "Trafficking is treated very seriously in Belize. Your right to silence is your most important protection at this stage.",
          law: "Misuse of Drugs Act s.5 — Trafficking Offences",
        },
      ],
    },
    {
      id: "d2",
      title: "Drugs found in my vehicle or home",
      summary: "When drugs are found in a place you control, the law presumes you knew about them — but that presumption can be challenged.",
      rights: [
        {
          type: "can",
          text: "If drugs are found in your vehicle or home, police CAN arrest and charge you with possession based on the location of the drugs.",
          plain: "The law creates a presumption that you knew about drugs found in your space.",
          law: "Misuse of Drugs Act s.3; Evidence Act",
        },
        {
          type: "your_right",
          text: "You have the right to challenge the presumption of possession — for example, by showing others had access to the space.",
          plain: "If other people had access to your car or home, this is a valid legal defence. A lawyer can help you build this argument.",
          law: "Misuse of Drugs Act s.3; Constitution s.6 — Presumption of Innocence",
        },
        {
          type: "critical",
          text: "Do NOT make any statements to police about the drugs without first speaking to a lawyer. Anything you say will be used against you.",
          plain: "Even saying 'Those aren't mine' can be twisted in court. Stay silent until you have legal advice.",
          law: "Constitution s.6(2)(b) — Right to Silence",
        },
      ],
    },
  ],

  weapons: [
    {
      id: "w1",
      title: "Officer asks about a weapon or firearm",
      summary: "The Firearms Act tightly controls weapons in Belize. Knowing the difference between licensed and unlicensed possession is critical.",
      rights: [
        {
          type: "must",
          text: "You MUST possess a valid firearms licence to carry or store most firearms in Belize. Carry your licence at all times when in possession of the firearm.",
          plain: "An unlicensed firearm — even at home — is a serious criminal offence.",
          law: "Firearms Act, Cap. 143 s.3",
        },
        {
          type: "can",
          text: "Police CAN seize any firearm or weapon that is unlicensed, being used unlawfully, or reasonably suspected of being involved in a crime.",
          plain: "If your licence is not in order, expect the weapon to be seized immediately.",
          law: "Firearms Act s.19",
        },
        {
          type: "cannot",
          text: "Police CANNOT seize a properly licensed firearm that is being lawfully stored or carried without a specific lawful reason.",
          plain: "Having a valid licence is your protection. Keep documentation up to date.",
          law: "Firearms Act; Constitution s.9 — Right to Property",
        },
        {
          type: "critical",
          text: "Carrying a firearm without a licence carries a mandatory minimum sentence under the Firearms Act. If you are found with an unlicensed weapon, say nothing to police and immediately request a lawyer.",
          plain: "This is one of the most serious weapon offences in Belize. Your right to silence is essential.",
          law: "Firearms Act s.4 — Penalties; Constitution s.6(2)(b)",
        },
      ],
    },
  ],

  domestic: [
    {
      id: "dom1",
      title: "Police called to a domestic dispute",
      summary: "The Domestic Violence Act gives police specific mandatory duties when responding to domestic incidents. Both victims and accused persons have rights.",
      rights: [
        {
          type: "must",
          text: "When police are called to a domestic dispute, they MUST investigate the complaint and take a statement from the complainant.",
          plain: "Police cannot simply show up and leave without investigating. They have a legal duty to act.",
          law: "Domestic Violence Act, Cap. 179 s.14",
        },
        {
          type: "can",
          text: "Police CAN arrest a person at the scene if they have reasonable grounds to believe that person has committed an act of domestic violence.",
          plain: "An arrest can happen immediately — no warrant is required if police witness or have clear evidence of the violence.",
          law: "Domestic Violence Act s.14(2)",
        },
        {
          type: "your_right",
          text: "As a victim, you have the right to apply for a Protection Order from the magistrate's court — the same day if necessary.",
          plain: "A Protection Order legally requires the abuser to stay away from you and can be issued very quickly in urgent situations.",
          law: "Domestic Violence Act s.5 — Occupation and Protection Orders",
        },
        {
          type: "your_right",
          text: "As a person accused of domestic violence, you have the right to be heard in court before a final Protection Order is issued against you.",
          plain: "An interim order can be made without you present in urgent cases, but you will have the opportunity to respond.",
          law: "Domestic Violence Act s.7; Constitution s.6 — Right to Fair Hearing",
        },
        {
          type: "critical",
          text: "If you are in immediate danger, call 911. Police are required under the Domestic Violence Act to respond and provide immediate protection.",
          plain: "Do not wait. The law requires police to protect you.",
          law: "Domestic Violence Act s.14; Police Act",
        },
      ],
    },
  ],

  protest: [
    {
      id: "pr1",
      title: "I am attending or organising a protest",
      summary: "The Constitution protects your right to peaceful assembly. But this right has limits. Know where the line is.",
      rights: [
        {
          type: "your_right",
          text: "You have the constitutional right to peaceful assembly and association with others.",
          plain: "You have the right to gather, march, or demonstrate peacefully. This is a fundamental right.",
          law: "Constitution of Belize s.13 — Freedom of Assembly and Association",
        },
        {
          type: "can",
          text: "Police CAN impose reasonable conditions on a public assembly — such as routes, timing, or noise levels — if there is a genuine public safety need.",
          plain: "Conditions are not automatic. They must be reasonable and proportional to a real safety concern.",
          law: "Public Meetings Act; Police Act",
        },
        {
          type: "can",
          text: "Police CAN lawfully disperse a gathering that has become violent, is causing serious disorder, or has been declared unlawful by a magistrate.",
          plain: "A peaceful protest that turns violent changes the legal situation. You should leave immediately if violence begins around you.",
          law: "Criminal Code — Unlawful Assembly provisions",
        },
        {
          type: "cannot",
          text: "Police CANNOT disperse a peaceful, non-violent assembly simply because they or the government disagrees with its message.",
          plain: "The content of your protest is protected. Police can regulate how and where, not what you say.",
          law: "Constitution s.13; ICCPR Art. 21 (Belize ratified 1996)",
        },
        {
          type: "critical",
          text: "If police order a dispersal: leave quickly and calmly. Remaining after a lawful order to disperse can result in arrest. If the order was unlawful, challenge it in court afterward — not on the street.",
          plain: "Protect yourself first. Legal challenges are more effective in court than on the street.",
          law: "Criminal Code s. — Failure to disperse; Constitution s.20",
        },
      ],
    },
  ],

  station: [
    {
      id: "st1",
      title: "I am being held at the police station",
      summary: "Custody does not mean your rights disappear. The Constitution and Police Act protect you inside the station.",
      rights: [
        {
          type: "your_right",
          text: "You have the right to be told clearly why you are being held — the specific offence or suspicion.",
          plain: "If no one has told you why you are there, ask. You are entitled to that information.",
          law: "Constitution s.6(2)(a)",
        },
        {
          type: "your_right",
          text: "You have the right to consult a lawyer without delay. If you cannot afford one, you have the right to contact Legal Aid Belize.",
          plain: "Legal Aid Belize provides free legal assistance. Ask for their number immediately.",
          law: "Constitution s.6(2)(c); Legal Aid Act",
        },
        {
          type: "your_right",
          text: "You have the right to have a family member or friend notified of your whereabouts and detention.",
          plain: "Police must allow this. Give them a name and number and ask them to make the call if you cannot.",
          law: "Police Act, Cap. 138",
        },
        {
          type: "your_right",
          text: "You have the right to medical attention if you are injured, ill, or in need of medical care while in custody.",
          plain: "This right cannot be withheld as punishment or as leverage. Medical need must be addressed.",
          law: "Constitution s.7; UN Nelson Mandela Rules — Rule 24",
        },
        {
          type: "cannot",
          text: "Police CANNOT hold you beyond 48 hours without charging you or bringing you before a magistrate.",
          plain: "After 48 hours, continued detention without charge is unlawful — full stop.",
          law: "Constitution s.6(3)",
        },
        {
          type: "cannot",
          text: "Police CANNOT deny you adequate food and water during extended detention.",
          plain: "Basic needs must be met. Deprivation of food or water is a form of inhumane treatment.",
          law: "Constitution s.7; UN Nelson Mandela Rules",
        },
        {
          type: "cannot",
          text: "Police CANNOT subject you to torture, cruel, inhumane, or degrading treatment at any time.",
          plain: "This includes beatings, threats, sleep deprivation used as pressure, and humiliation. All are unlawful.",
          law: "Constitution s.7; ICCPR Art. 7; UN Convention Against Torture",
        },
        {
          type: "critical",
          text: "If your rights are violated while in custody: state your objection clearly, ask for it to be entered in the station diary, remember details (times, officers' names, badge numbers), and file a formal complaint with the IPCC after release.",
          plain: "You can also bring a constitutional motion in the Supreme Court for serious rights violations. A lawyer can help.",
          law: "Independent Police Complaints Commission Act; Constitution s.20",
        },
      ],
    },
  ],

  juvenile: [
    {
      id: "j1",
      title: "A young person is stopped or arrested",
      summary: "Persons under 18 have extra legal protections in Belize. Police and courts must follow special rules when dealing with juveniles.",
      rights: [
        {
          type: "must",
          text: "When a person under 18 is arrested or detained, police MUST notify a parent, guardian, or responsible adult as soon as possible.",
          plain: "A young person should not be questioned alone without a parent or guardian present.",
          law: "Juvenile Offenders Act, Cap. 101A; Police Act",
        },
        {
          type: "cannot",
          text: "Police CANNOT place a juvenile in the same cell or holding area as adult detainees.",
          plain: "Juveniles must be separated from adults in custody at all times.",
          law: "Juvenile Offenders Act; UN Rules for Protection of Juveniles Deprived of Liberty",
        },
        {
          type: "your_right",
          text: "A juvenile has the right to have a parent, guardian, or legal representative present during any police interview.",
          plain: "If a juvenile is questioned without this, any statement they make may be inadmissible as evidence.",
          law: "Juvenile Offenders Act; Constitution s.6(2)(c)",
        },
        {
          type: "critical",
          text: "The age of criminal responsibility in Belize is 9 years old. Children below this age CANNOT be charged with any criminal offence.",
          plain: "A child under 9 cannot be prosecuted, regardless of what they have done.",
          law: "Criminal Code, Cap. 101 s.7",
        },
      ],
    },
  ],

  immigration: [
    {
      id: "im1",
      title: "I am a non-citizen stopped by authorities",
      summary: "Non-citizens in Belize still have rights. International law and the Belize Constitution provide key protections.",
      rights: [
        {
          type: "your_right",
          text: "Non-citizens in Belize have the right to humane treatment and protection from arbitrary detention.",
          plain: "Being a foreigner does not remove your basic human rights while in Belize.",
          law: "ICCPR Art. 9; Constitution s.5",
        },
        {
          type: "your_right",
          text: "You have the right to contact your country's consulate or embassy if you are arrested or detained.",
          plain: "Ask for this immediately. They can send a consul officer to assist you and contact your family.",
          law: "Vienna Convention on Consular Relations Art. 36 — Belize is a signatory",
        },
        {
          type: "can",
          text: "Immigration authorities CAN detain and deport a non-citizen who is in Belize illegally or has violated immigration conditions.",
          plain: "Deportation is lawful but must follow a process. It cannot be done instantly without any procedure.",
          law: "Immigration Act, Cap. 156",
        },
        {
          type: "cannot",
          text: "Immigration authorities CANNOT deport you to a country where you face a genuine risk of torture, persecution, or serious harm.",
          plain: "If you fear for your life or safety in your home country, tell this to the authorities. You may have the right to seek asylum.",
          law: "UN Convention Against Torture Art. 3; Refugee Convention — principle of non-refoulement",
        },
      ],
    },
  ],
};

export const EMERGENCY_CONTACTS = [
  { id: 1, name: "Legal Aid Belize", phone: "0-800-LEGAL-AID", note: "Free legal assistance for citizens", available: "Mon–Fri", category: "legal" },
  { id: 2, name: "Police Emergency", phone: "911", note: "Emergency response", available: "24/7", category: "emergency" },
  { id: 3, name: "Belize Human Rights Commission", phone: "223-5368", note: "Rights violations & complaints", available: "Mon–Fri", category: "rights" },
  { id: 4, name: "IPCC (Police Complaints)", phone: "222-0050", note: "Independent Police Complaints Commission", available: "Mon–Fri", category: "complaints" },
  { id: 5, name: "National Crisis Hotline", phone: "0-800-628-4673", note: "Domestic violence & crisis support", available: "24/7", category: "crisis" },
  { id: 6, name: "Immigration Dept (Belmopan)", phone: "822-2423", note: "Immigration inquiries", available: "Mon–Fri", category: "immigration" },
];

export const ACTS_REFERENCED = [
  { name: "Constitution of Belize", chapter: "Cap. 4", url: "https://laws.gov.bz" },
  { name: "Criminal Code", chapter: "Cap. 101", url: "https://laws.gov.bz" },
  { name: "Misuse of Drugs Act", chapter: "Cap. 103", url: "https://laws.gov.bz" },
  { name: "Firearms Act", chapter: "Cap. 143", url: "https://laws.gov.bz" },
  { name: "Police Act", chapter: "Cap. 138", url: "https://laws.gov.bz" },
  { name: "Motor Vehicles & Road Traffic Act", chapter: "Cap. 230", url: "https://laws.gov.bz" },
  { name: "Domestic Violence Act", chapter: "Cap. 179", url: "https://laws.gov.bz" },
  { name: "Juvenile Offenders Act", chapter: "Cap. 101A", url: "https://laws.gov.bz" },
  { name: "Immigration Act", chapter: "Cap. 156", url: "https://laws.gov.bz" },
  { name: "Summary Jurisdiction (Offences) Act", chapter: "Cap. 98", url: "https://laws.gov.bz" },
];
