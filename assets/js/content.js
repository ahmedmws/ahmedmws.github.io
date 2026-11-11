/* ==========================================================
   CONTENT FILE — this is the only file you need to edit
   to change text, links, photos or add career updates.
   ========================================================== */

window.SITE = {

  /* ---------- LINKS (leave "" to hide an item) ---------- */
  links: {
    email: "ahmad.mws86@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahmad-haj-mawas-a6065070/",
    fiverr: [],   // gig links removed: only the Fiverr profile is shown
    upwork: "https://www.upwork.com/freelancers/~015e0b70703df283d3?mp_source=share",
    khamsat: "https://khamsat.com/user/cutreadystudio",
    mostaql: "https://mostaql.com/u/CutreadyStudio",
    baeed: "https://baaeed.com/u/ahmedhmws",
    golance: "https://golance.com/freelancer/ahmed.haj.mawas",
    contra: "https://contra.com/ahmed_haj_mawas",
    fiverrProfile: "https://www.fiverr.com/cutreadystudio?public_mode=true",
    cv: ""           // not used: the site itself is the CV
  },

  /* ---------- GALLERY ----------
     Numbers are photo numbers: assets/img/work/w000.jpg ... w117.jpg
     Each photo is placed in the first category that lists it; anything not
     listed goes to "gifts". "featured" photos show first in "All". */
  gallery: {
    featured: [0, 2, 23, 10, 29, 36, 115, 54, 34, 57, 24, 101, 17, 21, 80, 116],
    cats: {
      maps:       [54, 115],
      brand:      [6, 14, 99, 100, 86, 70, 71, 3],
      functional: [21, 29, 61],
      storage:    [4, 7, 34, 37, 41, 42, 45, 46, 49, 53, 56, 58, 74, 77, 94, 95, 103, 104, 110, 114],
      light:      [0, 1, 2, 5, 9, 11, 15, 16, 19, 24, 25, 47, 50, 51, 55, 63, 65, 75, 80, 81, 84, 85, 91, 92, 98, 105, 106, 108, 109, 112, 116, 117]
    },
    exclude: [6, 14, 70, 97, 99],   // photos hidden because client names/text could not be blurred without ruining the piece
    total: 118
  },

  /* ---------- CAREER UPDATES (newest first) ----------
     Add a new line at the top any time. type: "milestone" | "learning" | "work" */
  updates: [
    { date: "2026-11", type: "milestone",
      en: { t: "Personal portfolio site launched", d: "One place for my work, services and career progress. I will keep adding to it." },
      ar: { t: "إطلاق موقعي الشخصي", d: "مكان واحد لأعمالي وخدماتي وتطوري المهني. وسأواصل تحديثه." } }
  ],

  /* ---------- TEXT ---------- */
  en: {
    dir: "ltr", langName: "العربية",
    nav: { work: "Work", services: "Services", process: "How I work", about: "About", journey: "Journey", contact: "Contact" },
    hero: {
      badge: "Open for laser-cut & vector projects",
      title: "Laser-cut design,<br><em>built to assemble.</em>",
      lead: "I design cut-ready vector files and flat-pack products that fit the first time. They are tested in my own laser studio before I send them to you.",
      cta1: "See my work", cta2: "Contact",
      role: "Laser-Cut Vector Designer & Product Developer",
      tag: "Romantica Design Studio"
    },
    stats: [
      { n: "1,600+", l: "completed orders" }, { n: "248+", l: "individual clients" },
      { n: "205", l: "unique product designs" }, { n: "58%", l: "repeat clients" }
    ],
    work: {
      kicker: "// WORK", title: "Selected work",
      lead: "Real pieces I designed, cut and assembled in my Cairo studio. Tap any photo to enlarge.",
      cats: { all: "All", light: "Light & glow", storage: "Storage & furniture", gifts: "Gifts & decor", brand: "Branded work", functional: "Functional builds", maps: "Maps" },
      alt: "Laser-cut piece by Romantica Design Studio",
      note: "Client names and logos on branded pieces belong to those clients.",
      more: "Show more", close: "Close"
    },
    services: {
      kicker: "// SERVICES", title: "What I deliver",
      items: [
        ["Cut-ready vector files", "Closed paths, correct layer colours, cut / engrave / score separated. Ready for any laser."],
        ["File repair & conversion", "Open paths, double lines and broken nodes fixed. DXF, SVG, CDR, AI and PDF."],
        ["Vector tracing", "Photos, sketches and logos rebuilt as clean vectors for cutting or engraving."],
        ["Product & interlocking design", "Boxes, lamps, shelves and organisers that assemble from flat MDF, plywood or acrylic."],
        ["Kerf & tolerance fitting", "Slots and tabs sized for your material and machine, so parts fit without sanding."],
        ["Maps & custom engraving", "Layered city maps, puzzle-style region maps, glass and rotary engraving."]
      ],
      files: "File formats", tools: "Software"
    },
    process: {
      kicker: "// PROCESS", title: "From file to finished piece",
      lead: "Every design is cut and assembled before the file is released. Slots, tabs and tolerances are already proven.",
      steps: [
        ["Project review", "We agree on the material, machine, file format and what the finished piece should do."],
        ["File preparation", "I draw, clean up, trace and fit the design. You see progress as it moves."],
        ["Delivery & revisions", "You get production-ready files in the format you need, with revisions until they cut right."]
      ],
      slides: [
        { img: "process.jpg", cap: "Vector file → laser cut sheets → assembled and lit" },
        { img: "engineering.jpg", cap: "Engineering beyond the cut: a piano box with a motor-driven base and built-in speaker" },
        { img: "maps.jpg", cap: "Layered maps, relief city maps, glass and rotary engraving" }
      ]
    },
    case: {
      kicker: "// CASE STUDY", title: "Zero to a stocked storefront, remotely",
      meta: "Norway · Nov 2024 – Feb 2026 · 15 months",
      points: [
        "Worked remotely with a first-time shop owner who had no laser experience.",
        "Designed the product line and every cut-ready file.",
        "Created custom rotary engraving designs for mugs and bottles.",
        "Trained the owner until they ran the studio on their own."
      ],
      quote: "Outstanding knowledge! Outstanding help!",
      quoteBy: "Client review, 5.0 stars, October 2026"
    },
    about: {
      kicker: "// ABOUT", title: "I'm Ahmed",
      p1: "I ran a CO2 laser studio in Cairo for more than four years, so I know how a file behaves on the machine: which joints fit, which cuts burn, and which layouts waste material.",
      p2: "Before that I spent about nine years in sales and operations in Saudi Arabia. That is why I work in a clear, businesslike way: clear questions, clear timelines, and no surprises.",
      p3: "Now I work remotely with makers, shops and brands,.",
      timelineTitle: "Timeline",
      timeline: [
        ["2021 – 2026", "Founder & Operations Lead, Romantica Design Studio, Cairo", "Laser-cut products and custom gifts. 1,600+ orders."],
        ["2024 – 2026", "Remote design consultant, Norway", "Set up a laser and embroidery studio from zero."],
        ["2019 – 2021", "Property & Facilities Coordinator, Riyadh", "Operations and coordination."],
        ["2010 – 2019", "Sales Engineer, then Eastern Region Sales Manager, Saudi Arabia", "Around 79 major projects."],
        ["2006 – 2008", "Technical Diploma in Accounting, Aleppo", "Foundation in accounting and finance."]
      ],
      langs: "Languages: Arabic (native), English (working level, improving)."
    },
    skills: {
      kicker: "// SKILLS", title: "Tools & skills",
      groups: [
        ["Design & files", ["CorelDRAW", "RDWorks", "Vector tracing", "DXF / SVG / CDR / AI", "Kerf & tolerance", "Interlocking 3D-from-2D"]],
        ["Supporting tools", ["Illustrator", "Photoshop", "Inkscape"]],
        ["Business", ["Operations", "Sales & client management", "Excel", "Accounting basics"]]
      ]
    },
    journey: {
      kicker: "// JOURNEY", title: "Career log",
      lead: "What I am working on and what I have learned. New entries are added on top.",
      types: { milestone: "Milestone", learning: "Learning", work: "Work" }
    },
    contact: {
      kicker: "// CONTACT", title: "Let's make your next file cut right the first time.",
      lead: "Send me your idea, sketch or file, with the material and thickness. I will tell you what is needed.",
      elsewhere: "Find me on",
      email: "Email", cv: "Download CV", soon: "coming soon"
    },
    footer: "© 2026 Ahmed Haj Mawas · Romantica Design Studio"
  },

  ar: {
    dir: "rtl", langName: "English",
    nav: { work: "أعمالي", services: "خدماتي", process: "طريقة العمل", about: "نبذة", journey: "المسيرة", contact: "تواصل" },
    hero: {
      badge: "متاح لمشاريع القص بالليزر والفيكتور",
      title: "تصميم للقص بالليزر،<br><em>جاهز للتركيب.</em>",
      lead: "أصمّم ملفات فيكتور جاهزة للقص ومنتجات مسطّحة تتركّب بدقة من أول مرة. وكلها مجرّبة في ورشتي قبل ما توصلك.",
      cta1: "شاهد أعمالي", cta2: "تواصل",
      role: "مصمم فيكتور للقص بالليزر ومطوّر منتجات",
      tag: "Romantica Design Studio"
    },
    stats: [
      { n: "+1,600", l: "طلب مكتمل" }, { n: "+248", l: "عميل" },
      { n: "205", l: "تصميم منتج فريد" }, { n: "58%", l: "عملاء متكررون" }
    ],
    work: {
      kicker: "// أعمالي", title: "أعمال مختارة",
      lead: "قطع حقيقية صمّمتها وقصصتها وركّبتها في ورشتي بالقاهرة. اضغط على أي صورة لتكبيرها.",
      cats: { all: "الكل", light: "إضاءة", storage: "تخزين وأثاث", gifts: "هدايا وديكور", brand: "أعمال لعلامات", functional: "تصاميم وظيفية", maps: "خرائط" },
      alt: "قطعة ليزر من Romantica Design Studio",
      note: "أسماء وشعارات العملاء على الأعمال المخصصة تخصّ أصحابها.",
      more: "عرض المزيد", close: "إغلاق"
    },
    services: {
      kicker: "// الخدمات", title: "ماذا أقدّم",
      items: [
        ["ملفات فيكتور جاهزة للقص", "مسارات مغلقة وألوان طبقات صحيحة، مع فصل القص والحفر والخدش. جاهزة لأي ماكينة ليزر."],
        ["إصلاح وتحويل الملفات", "إصلاح المسارات المفتوحة والخطوط المكررة والنقاط المكسورة. DXF وSVG وCDR وAI وPDF."],
        ["تتبّع الفيكتور", "تحويل الصور والاسكتشات والشعارات إلى فيكتور نظيف للقص أو الحفر."],
        ["تصميم المنتجات المتداخلة", "علب وأباجورات ورفوف ومنظّمات تتركّب من ألواح MDF أو بلايوود أو أكريليك."],
        ["ضبط الـ Kerf والتفاوت", "فتحات وألسنة بمقاسات تناسب خامتك وماكينتك، فتتركّب القطع بدون صنفرة."],
        ["خرائط وحفر مخصص", "خرائط مدن متعددة الطبقات، وخرائط مناطق بنظام البازل، وحفر على الزجاج وحفر دوّار."]
      ],
      files: "صيغ الملفات", tools: "البرامج"
    },
    process: {
      kicker: "// طريقة العمل", title: "من الملف إلى القطعة النهائية",
      lead: "كل تصميم يُقصّ ويُركّب قبل تسليم الملف. فالفتحات والألسنة والتفاوتات مجرّبة مسبقًا.",
      steps: [
        ["مراجعة المشروع", "نتفق على الخامة والماكينة وصيغة الملف والغرض من القطعة."],
        ["تجهيز الملف", "أرسم وأنظّف وأتتبّع وأضبط التصميم، وتتابع التقدم أول بأول."],
        ["التسليم والتعديلات", "تستلم ملفات جاهزة للإنتاج بالصيغة المطلوبة، مع تعديلات حتى تقصّ بشكل صحيح."]
      ],
      slides: [
        { img: "process.jpg", cap: "ملف فيكتور ← ألواح مقصوصة ← قطعة مركّبة ومضاءة" },
        { img: "engineering.jpg", cap: "هندسة أبعد من القص: علبة بيانو بقاعدة دوّارة بمحرك وسماعة مدمجة" },
        { img: "maps.jpg", cap: "خرائط متعددة الطبقات وخرائط مجسمة وحفر على الزجاج وحفر دوّار" }
      ]
    },
    case: {
      kicker: "// دراسة حالة", title: "من الصفر إلى متجر مجهّز، عن بُعد",
      meta: "النرويج · نوفمبر 2024 – فبراير 2026 · 15 شهرًا",
      points: [
        "عملت عن بُعد مع صاحب متجر جديد بلا أي خبرة في الليزر.",
        "صمّمت خط المنتجات وكل ملف جاهز للقص.",
        "أنشأت تصاميم حفر دوّار مخصصة للأكواب والزجاجات.",
        "درّبت صاحب المتجر حتى أدار الورشة بنفسه."
      ],
      quote: "Outstanding knowledge! Outstanding help!",
      quoteBy: "تقييم عميل، 5.0 نجوم، أكتوبر 2026"
    },
    about: {
      kicker: "// نبذة", title: "أنا أحمد",
      p1: "أدرت ورشة ليزر CO2 في القاهرة لأكثر من أربع سنوات، فأعرف كيف يتصرف الملف على الماكينة: أي الوصلات تركّب، وأي القصّات تحرق، وأي التوزيعات تهدر الخامة.",
      p2: "وقبلها قضيت نحو تسع سنوات في المبيعات والعمليات في السعودية. لذلك أعمل بوضوح واحترافية: أسئلة واضحة ومواعيد واضحة وبلا مفاجآت.",
      p3: "أعمل الآن عن بُعد مع الصنّاع والمتاجر والعلامات التجارية،.",
      timelineTitle: "المسيرة",
      timeline: [
        ["2021 – 2026", "مؤسس ومسؤول العمليات، Romantica Design Studio، القاهرة", "منتجات ليزر وهدايا مخصصة. أكثر من 1,600 طلب."],
        ["2024 – 2026", "مستشار تصميم عن بُعد، النرويج", "تأسيس ورشة ليزر وتطريز من الصفر."],
        ["2019 – 2021", "منسّق عقارات ومرافق، الرياض", "عمليات وتنسيق."],
        ["2010 – 2019", "مهندس مبيعات ثم مدير مبيعات المنطقة الشرقية، السعودية", "حوالي 79 مشروعًا كبيرًا."],
        ["2006 – 2008", "دبلوم فني في المحاسبة، حلب", "أساس في المحاسبة والمالية."]
      ],
      langs: "اللغات: العربية (الأم)، الإنجليزية (مستوى عملي وفي تحسّن)."
    },
    skills: {
      kicker: "// المهارات", title: "الأدوات والمهارات",
      groups: [
        ["التصميم والملفات", ["CorelDRAW", "RDWorks", "تتبّع الفيكتور", "DXF / SVG / CDR / AI", "Kerf والتفاوت", "تصميم 3D متداخل من 2D"]],
        ["أدوات مساعدة", ["Illustrator", "Photoshop", "Inkscape"]],
        ["الأعمال", ["العمليات", "المبيعات وإدارة العملاء", "Excel", "أساسيات المحاسبة"]]
      ]
    },
    journey: {
      kicker: "// المسيرة", title: "سجل التطور المهني",
      lead: "ما أعمل عليه وما تعلّمته. الإضافات الجديدة تظهر في الأعلى.",
      types: { milestone: "إنجاز", learning: "تعلّم", work: "عمل" }
    },
    contact: {
      kicker: "// تواصل", title: "خلّينا نخلّي ملفك القادم يقصّ صح من أول مرة.",
      lead: "ابعتلي فكرتك أو الاسكتش أو الملف مع الخامة والسُمك، وأقولك المطلوب.",
      elsewhere: "تجدني على",
      email: "البريد", cv: "تحميل السيرة الذاتية", soon: "قريبًا"
    },
    footer: "© 2026 أحمد حاج مواس · Romantica Design Studio"
  }
};
