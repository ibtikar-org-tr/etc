export type Lang = "ar" | "tr" | "en"

export const LANGS: { code: Lang; label: string; dir: "rtl" | "ltr" }[] = [
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
]

type Track = {
  title: string
  desc: string
  duration?: string
  tags?: string[]
  speaker?: string
  speakerBio?: string
  speakerTagline?: string
  speakerImage?: string
  panel?: {
    moderator: string
    moderatorImage?: string
    moderatorTagline?: string
    moderatorBio?: string
    guests: { name: string; bio?: string; tagline?: string; imageSlug?: string }[]
  }
}

export type Dict = {
  dir: "rtl" | "ltr"
  common: { showSpeakerBio: string; hideSpeakerBio: string }
  nav: { about: string; agenda: string; topics: string; workshops: string; faq: string; register: string; pastEdition: string }
  hero: {
    badge: string
    organizer: string
    titleTop: string
    titleBottom: string
    subtitle: string
    register: string
    viewAgenda: string
    city: string
    cityValue: string
    dates: string
    datesValue: string
    days: string
    daysValue: string
  }
  about: {
    label: string
    title: string
    body: string
    organizerLabel: string
    organizerBody: string
    organizerLink: string
    stats: { value: string; label: string }[]
    pastEditionLabel: string
    pastEditionTitle: string
    pastEditionBody: string
    pastEditionLink: string
  }
  topics: {
    label: string
    title: string
    subtitle: string
    panelType: string
    panelModerator: string
    panelGuestLabels: string[]
    items: Track[]
  }
  shorts: { label: string; title: string; items: Track[] }
  agenda: {
    label: string
    title: string
    day1: string
    day1date: string
    day2: string
    day2date: string
    time: string
    session: string
    speaker: string
    lectures: string
    workshops: string
  }
  workshops: { label: string; title: string; subtitle: string; sessions: { name: string; items: Track[] }[] }
  cta: { title: string; subtitle: string; button: string; note: string; comingSoon: string; registerVia: string }
  faq: { label: string; title: string; items: { q: string; a: string }[] }
  footer: {
    org: string
    orgSub: string
    tagline: string
    rights: string
    nav: string
    contact: string
    volunteer: string
    website: string
  }
}

export const dict: Record<Lang, Dict> = {
  ar: {
    dir: "rtl",
    common: { showSpeakerBio: "عرض النبذة", hideSpeakerBio: "إخفاء" },
    nav: { about: "عن المؤتمر", agenda: "الجدول", topics: "المحاور", workshops: "ورش العمل", faq: "الأسئلة", register: "سجّل الآن", pastEdition: "ETC 2024" },
    hero: {
      badge: "إسطنبول · 27–28 يونيو 2026",
      organizer: "ينظّمه تجمّع إبتكار",
      titleTop: "مؤتمر التّقنيّات",
      titleBottom: "الصّاعدة 2026",
      subtitle:
        "مؤتمر طلّابي ينظّمه تجمّع إبتكار، يسلّط الضّوء على مواضيع مختلفة في التقنيّات الحديثة من النّاحية التّقنيّة — محاضرات نظريّة تقدّم مدخلًا في مجالات تقنية صاعدة، وورش عمل تقنية تعتبر مدخلًا لكل تقنية أو مجال.",
      register: "سجّل الآن",
      viewAgenda: "استعرض الجدول",
      city: "المكان",
      cityValue: "إسطنبول، تركيا",
      dates: "التاريخ",
      datesValue: "27–28 يونيو 2026",
      days: "المدّة",
      daysValue: "يومان",
    },
    about: {
      label: "عن المؤتمر",
      title: "حيث تلتقي العقول الصّاعدة بالتقنيات الصّاعدة",
      body: "مؤتمر طلّابي يسلّط الضّوء على مواضيع مختلفة في التقنيّات الحديثة، يتناولها من النّاحية التّقنيّة. يتألف من مجموعة محاضرات نظريّة تقدّم مدخلًا في مجالات تقنية صاعدة في عالم التكنولوجيا، بالإضافة إلى ورش عمل تقنية تعتبر مدخلًا للتقنية أو المجال.",
      organizerLabel: "الجهة المنظّمة",
      organizerBody:
        "تجمّع إبتكار فريق تطوّعي يجمع طلّاب الجامعات الناطقين بالعربية المهتمّين بالابتكار والتقنية والبحث والتطوير. يهدف إلى تمكينهم وإثراء خبراتهم التقنية عبر أنشطة ومشاريع تلامس حياة الطالب الجامعية وتطوّره في المجال التقني والمهارات المجتمعية.",
      organizerLink: "تعرّف على تجمّع إبتكار",
      stats: [
        { value: "6", label: "محاضرات رئيسيّة" },
        { value: "9", label: "ورش عمل" },
        { value: "2", label: "يوم مكثّف" },
      ],
      pastEditionLabel: "النسخ السابقة",
      pastEditionTitle: "مؤتمر التّقنيّات الصّاعدة 2024",
      pastEditionBody: "استعرض أرشيف النسخة السابقة من المؤتمر — المحاضرات، ورش العمل، وصور من الحدث في إسطنبول.",
      pastEditionLink: "استعرض ETC 2024",
    },
    topics: {
      label: "اليوم الأول · المحاضرات النظريّة",
      title: "محاور المؤتمر",
      subtitle: "ستّ محاضرات نظريّة معمّقة، مدّة كلٍّ منها 45 دقيقة.",
      panelType: "حوار",
      panelModerator: "قائد الحوار",
      panelGuestLabels: ["الضيف الأول", "الضيف الثاني", "الضيف الثالث"],
      items: [
        { title: "الذكاء الاصطناعي مفتوح المصدر — امتلك ذكائك الاصطناعي", desc: "محاضرة نظريّة تقدّم مدخلًا في عالم النماذج المفتوحة والقدرة على امتلاك ذكائك الاصطناعي وبنائه وتشغيله.", duration: "45 دقيقة", tags: ["AI", "open-source"] },
        {
          title: "الذكاء الاصطناعي الوكيل في عصرٍ متسارع",
          desc: "تتمحور المحاضرة حول تطوّر الأنظمة الذكية المستقلة التي تتّخذ القرارات وتنفّذ المهام بكفاءة عالية، واستعراض كيفية بناء وكلاء ذكيّين قادرين على التعاون والتكيّف مع بيئات معقّدة، مع تسليط الضوء على التطبيقات العملية والتحديات التي تواجه تطويرها.",
          duration: "45 دقيقة",
          tags: ["agentic-ai", "automation"],
        },
        {
          title: "البيانات الحيوية وتغيير مستقبل علاج الأمراض",
          desc: "محاضرة نظريّة حول دور البيانات الحيوية في تطوير فهم الأمراض وإعادة تشكيل مستقبل العلاج.",
          speaker: "إسراء موالدي",
          speakerTagline: "باحثة في تحليل البيانات الطبية — جامعة يلدز التقنية",
          speakerBio:
            "باحثة في علوم تحليل البيانات الطبية، حاصلة على البكالوريوس والماجستير في الهندسة الحيوية من جامعة يلدز التقنية.",
          duration: "45 دقيقة",
          tags: ["health-tech", "bioinformatics"],
        },
        {
          title: "إنترنت الأشياء",
          desc: "محاضرة نظريّة تستكشف كيف تبني الأجهزة المتّصلة بنية تحتيّة ذكيّة تخدم المجتمعات الصاعدة.",
          speaker: "فراس قراحسن",
          speakerImage: "firas-qarahsan",
          speakerTagline: "مؤسس شركة menamatix",
          speakerBio:
            "مهندس كهرباء ورائد أعمال بخبرة تمتد لأكثر من 10 سنوات في قطاع التكنولوجيا وأنظمة التتبع وإدارة الأسطول. يقود شركة menamatix في تطوير حلول برمجية ذكية تساعد الشركات على تحسين كفاءة النقل، متابعة المركبات، وأتمتة العمليات التشغيلية.",
          duration: "45 دقيقة",
          tags: ["IoT", "smart-city"],
        },
        { title: "السيادة الرقميّة والتهديد القومي — هل نقلق أم نحذر", desc: "نقاش حول البيانات والبنية التحتية الرقمية والأمن القومي في عالمٍ مترابط.", duration: "45 دقيقة", tags: ["sovereignty", "security"] },
        {
          title: "برمجيّات ملطّخة بالدم",
          desc: "حوار حول أخلاقيّات البرمجة ومسؤوليّة المطوّر في عالمٍ تتقاطع فيه التقنية مع القيم الإنسانيّة.",
          duration: "45 دقيقة",
          tags: ["ethics", "panel"],
          panel: {
            moderator: "عبد الكريم لحموني",
            moderatorImage: "abdulkarim-lahmuni",
            moderatorTagline: "طبيب ومبرمج — مؤسس تجمّع إبتكار",
            moderatorBio:
              "درس الطب البشري في جامعة إسطنبول جراح باشا، ويعمل طبيب طوارئ في ولاية كوجالي. خبير في تطوير البرمجيات ولديه مشاريع ريادية برمجية، ومطوّر full-stack. يمتلك خبرات حاسوبية ورياضية واسعة، وسبق أن ألّف مناهج رياضية لاختبار YÖS قبل سبع سنوات. مهتم بالعمل المجتمعي، وأسّس تجمّع إبتكار قبل ثلاث سنوات — وهو اليوم أكبر تجمّع تقني عربي بين الطلاب في تركيا. يسعى إلى إعادة تشكيل مستقبل التعليم، ولذلك تُعد التقنيات التعليمية المجال الأقرب إليه.",
            guests: [
              {
                name: "عبدالرحمن رجب",
                imageSlug: "abdurrahman-rajab.jpeg",
                tagline: "مهندس برمجيات — بودكاست Hadith Tech — بناء مجتمعات",
                bio: "مهندس حاسوب شغوف بحلّ المشكلات المعقّدة وبناء المجتمعات. مهندس برمجيات ومقدّم بودكاست Hadith Tech وبنّاء مجتمعات. تعلّم البرمجة خلال الجامعة، ثم تبنّى فكرة علوم الحاسوب الشاملة عبر البودكاست الذي يقدّمه. عمل مع الفئات الأقل حظًا، والتقنيات الناشئة، والواقع الافتراضي، وبناء المجتمعات. تطوّع مع عدة منظمات غير حكومية في منطقة الشرق الأوسط وشمال أفريقيا، وساعد في تمكينها من التقنيات. يرحّب بالتحديات التي تمكّن الناس وتدفع التقنيات قدمًا حول العالم.",
              },
              {
                name: "عبد الرحمن إسماعيل",
                imageSlug: "abdurrahman-ismail",
                tagline: "مدير تقني — Manchester Airport Group",
                bio: "مبرمج ومدير تقني يمتلك خبرة تزيد على 12 عامًا في مجال تطوير البرمجيات، ويعمل حاليًا ضمن الفريق التقني في مجموعة مطارات مانشستر (Manchester Airport Group). إلى جانب عمله المهني، يقدّم محتوى تقنيًا متخصصًا في البرمجة والتقنيات الحديثة والذكاء الاصطناعي، مع التركيز على تبسيط المفاهيم ومشاركة الخبرات العملية. يهتم ببناء التطبيقات المعتمدة على الذكاء الاصطناعي، ويشارك من خلال محتواه نصائح وأفكارًا وتجارب عملية تساعد المطورين ورواد الأعمال على الاستفادة من أدوات الـ AI بأفضل صورة ممكنة لزيادة الإنتاجية وتسريع بناء المنتجات الرقمية.",
              },
              {
                name: "عمر الخميس",
                imageSlug: "omar-al-khamis",
                tagline: "مهندس طيران — TUSAŞ · İTÜ",
                bio: "مهندس طيران بشركة توساش للصناعات الدفاعية. طالب ماجستير بجامعة اسطنبول التقنية. بكالوريوس هندسة طيران من جامعة اسطنبول التقنية.",
              },
            ],
          },
        },
      ],
    },
    shorts: {
      label: "فقرات قصيرة بين المحاضرات",
      title: "لحظات مميّزة",
      items: [
        { title: "مقدّمة المؤتمر", desc: "كلمة مسؤول المؤتمر.", duration: "15 دقيقة" },
        { title: "كلمة رائد أعمال", desc: "نستضيف شخصًا رائد أعمال يحكي عن تجربته في شركته التقنيّة المتخصّصة.", duration: "15 دقيقة" },
        { title: "كلمة مسؤول", desc: "إذا استطعنا استضافة مسؤول معيّن، سواء في الحكومة أو النقابة أو التجمّع.", duration: "15 دقيقة" },
        { title: "كلمة إدارة إبتكار", desc: "الحديث عن آخر التطوّرات في إبتكار والخطط المستقبليّة، مع إمكان عرض فيديو.", duration: "25 دقيقة" },
        { title: "مسابقة قصيرة", desc: "مسابقة تتضمّن أسئلة عن محاضرة المقاطعة.", duration: "15 دقيقة" },
      ],
    },
    agenda: {
      label: "الجدول الزمني",
      title: "برنامج المؤتمر",
      day1: "اليوم الأول",
      day1date: "السبت · 27 يونيو · 10:30–18:00 · إسطنبول — Seyrantepe TÜGVA",
      day2: "اليوم الثاني",
      day2date: "الأحد · 28 يونيو · ورش العمل · إسطنبول — Florya TÜGVA",
      time: "الوقت",
      session: "الفقرة",
      speaker: "النوع",
      lectures: "محاضرات",
      workshops: "ورش عمل",
    },
    workshops: {
      label: "اليوم الثاني · ورش العمل",
      title: "ورش عمل تطبيقيّة",
      subtitle: "ثلاث فقرات متوازية تتيح لك اختيار مسارك التقني.",
      sessions: [
        {
          name: "الفقرة الأولى",
          items: [
            {
              title: "تحليل الأعراض الطبية واستخلاص الأنماط باستخدام لغة R",
              desc: "ورشة تطبيقيّة لتحليل الأعراض الطبية واستخلاص الأنماط باستخدام لغة R.",
              speaker: "إسراء موالدي",
              speakerTagline: "باحثة في تحليل البيانات الطبية — جامعة يلدز التقنية",
              speakerBio:
                "باحثة في علوم تحليل البيانات الطبية، حاصلة على البكالوريوس والماجستير في الهندسة الحيوية من جامعة يلدز التقنية.",
              tags: ["health-tech", "r-programming", "python", "analytics"],
            },
            {
              title: "هندسة الأوامر السريعة",
              desc: "تطوير تطبيق برمجي باستخدام هندسة الأوامر والذكاء الاصطناعي.",
              speaker: "ماسة سودان",
              speakerImage: "masa-soudan",
              speakerTagline: "مهندسة برمجيات — Teknofest · TÜBİTAK",
              speakerBio: "خريجة هندسة برمجيات، شاركت سابقًا في مشاريع ذكاء اصطناعي ضمن Teknofest و TÜBİTAK.",
              tags: ["ai", "prompt-engineering", "vibe-coding", "programming"],
            },
            {
              title: "ورشة عمل في DeepMind و VLLM",
              desc: "ورشة تطبيقيّة في تشغيل النماذج الكبيرة بكفاءة باستخدام قواعد البيانات الشعاعيّة.",
              speaker: "أسامة شبيب",
              speakerImage: "osama-shbib.jpeg",
              tags: ["ai", "vector-database", "vllm", "python"],
            },
          ],
        },
        {
          name: "الفقرة الثانية",
          items: [
            {
              title: "ورشة عمل في مهارات الأمن السّيبراني",
              desc: "تطبيق سيناريوهات محاكاة لاختبار الاختراق وفحص الثغرات الشائعة، بالإضافة إلى تجربة استغلال هذه الثغرات.",
              speaker: "أحمد شمس الدين",
              tags: ["security", "pentest"],
            },
            {
              title: "مدخل إلى الذكاء الاصطناعي مفتوح المصدر",
              desc: "استخدام نماذج من Hugging Face لفهم دور النماذج المدرّبة مسبقًا في تأدية المهام.",
              speaker: "محمد إقبال",
              speakerImage: "m.ikbal",
              speakerTagline: "مهندس طيران — ESEN · METU",
              speakerBio:
                "مهندس ميكانيكا طيران وأنظمة تحكم، وطالب دكتوراه في هندسة الطيران والفضاء في جامعة الشرق الأوسط التقنية (METU) في أنقرة. حاصل على البكالوريوس والماجستير في هندسة الطيران والفضاء من الجامعة نفسها، وكانت رسالة الماجستير حول تطوير أنظمة الهبوط الذاتي لطائرات VTOL على المنصات البحرية المتحركة. يعمل مهندس ميكانيكا طيران في ESEN System Integration، ويتخصص في ديناميكا الطيران وأنظمة التوجيه والملاحة والتحكم (GNC) وتطوير خوارزميات الطائرات ثابتة الجناح وVTOL والأنظمة الجوية غير المأهولة، ونشر عدة أبحاث في الأنظمة الجوية الذاتية والتحكم المتقدم.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "ابن بكفاءة باستخدام الذكاء الاصطناعي",
              desc: "استخدام أدوات الذكاء الاصطناعي لتعزيز الإنتاجية وتسريع بناء المنتجات الرقمية.",
              speaker: "عبد الرحمن إسماعيل",
              speakerImage: "abdurrahman-ismail",
              speakerTagline: "مدير تقني — Manchester Airport Group",
              speakerBio:
                "مبرمج ومدير تقني يمتلك خبرة تزيد على 12 عامًا في مجال تطوير البرمجيات، ويعمل حاليًا ضمن الفريق التقني في مجموعة مطارات مانشستر (Manchester Airport Group). إلى جانب عمله المهني، يقدّم محتوى تقنيًا متخصصًا في البرمجة والتقنيات الحديثة والذكاء الاصطناعي، مع التركيز على تبسيط المفاهيم ومشاركة الخبرات العملية. يهتم ببناء التطبيقات المعتمدة على الذكاء الاصطناعي، ويشارك من خلال محتواه نصائح وأفكارًا وتجارب عملية تساعد المطورين ورواد الأعمال على الاستفادة من أدوات الـ AI بأفضل صورة ممكنة لزيادة الإنتاجية وتسريع بناء المنتجات الرقمية.",
              tags: ["ai", "productivity", "tools"],
            },
          ],
        },
        {
          name: "الفقرة الثالثة",
          items: [
            { title: "ورشة DevOps — CI/CD", desc: "ورشة تطبيقيّة في بناء خطوط التكامل والنشر المستمر.", tags: ["git", "programming", "devops", "ci-cd"] },
            {
              title: "اكتساب استراتيجية اختيار البنية الأفضل للأكواد البرمجيّة",
              desc: "استكشاف الخدمات المصغّرة والواجهات المصغّرة وربط الوحدات وserverless وزمن المعالجة.",
              tags: ["micro-services", "micro-frontends", "module-federation", "serverless", "cpu-time"],
            },
            { title: "استخدام أنظمة إدارة الموارد العصريّة ERP", desc: "مدخل عملي إلى برمجيّات إدارة الموارد في المؤسسات الحديثة.", tags: ["erp", "management-software"] },
          ],
        },
      ],
    },
    cta: {
      title: "احجز مقعدك في مؤتمر التّقنيّات الصّاعدة 2026",
      subtitle: "التسجيل مفتوح — سجّل عبر منصّة أعضاء إبتكار.",
      button: "سجّل مجّانًا",
      note: "تجمّع إبتكار · التسجيل مجّاني للطلاب · إسطنبول 2026",
      comingSoon: "سيُفعَّل رابط التسجيل الخارجي خلال أيّام قليلة.",
      registerVia: "سجّل عبر منصّة أعضاء إبتكار — التسجيل مفتوح الآن.",
    },
    faq: {
      label: "الأسئلة الشائعة",
      title: "كل ما تحتاج معرفته",
      items: [
        { q: "من يُنظّم المؤتمر؟", a: "يُنظّم المؤتمر تجمّع إبتكار، الفريق التطوّعي الذي يجمع طلّاب الجامعات الناطقين بالعربية المهتمّين بالابتكار والتقنية. تعرّف أكثر على ibtikar.org.tr" },
        { q: "أين ومتى يُقام المؤتمر؟", a: "يُقام المؤتمر في إسطنبول: اليوم الأول السبت 27 يونيو (10:30–18:00) في Seyrantepe TÜGVA للمحاضرات النظريّة، واليوم الثاني الأحد 28 يونيو في Florya TÜGVA لورش العمل." },
        { q: "هل التسجيل مجّاني؟", a: "نعم، التسجيل مجّاني للطلاب مع عدد محدود من المقاعد." },
        { q: "ما اللغات المعتمدة في المؤتمر؟", a: "تُقدَّم الفعاليّات بالعربيّة، وبعضها بالتركيّة والإنجليزيّة." },
        { q: "هل أحتاج خبرة تقنيّة مسبقة لحضور الورش؟", a: "صُمّمت معظم الورش كمدخل للمجال، لذا تناسب المبتدئين والمتوسّطين." },
        { q: "هل سأحصل على شهادة حضور؟", a: "نعم، يحصل المشاركون على شهادة حضور رقميّة بعد المؤتمر." },
      ],
    },
    footer: {
      org: "تجمّع إبتكار",
      orgSub: "Ibtikar Assembly",
      tagline: "جيلٌ يبتكر",
      rights: "جميع الحقوق محفوظة",
      nav: "روابط",
      contact: "تواصل",
      volunteer: "تطوّع معنا",
      website: "ibtikar.org.tr",
    },
  },

  tr: {
    dir: "ltr",
    common: { showSpeakerBio: "Biyografiyi göster", hideSpeakerBio: "Gizle" },
    nav: { about: "Hakkında", agenda: "Program", topics: "Konular", workshops: "Atölyeler", faq: "SSS", register: "Kayıt Ol", pastEdition: "ETC 2024" },
    hero: {
      badge: "İstanbul · 27–28 Haziran 2026",
      organizer: "İbtikar Topluluğu düzenliyor",
      titleTop: "Yükselen Teknolojiler",
      titleBottom: "Konferansı 2026",
      subtitle:
        "İbtikar Topluluğu tarafından düzenlenen; modern teknolojinin çeşitli konularını teknik açıdan ele alan öğrenci konferansı — yükselen alanlara giriş niteliğinde teorik dersler ve her teknolojiye kapı açan uygulamalı atölyeler.",
      register: "Kayıt Ol",
      viewAgenda: "Programı Gör",
      city: "Konum",
      cityValue: "İstanbul, Türkiye",
      dates: "Tarih",
      datesValue: "27–28 Haziran 2026",
      days: "Süre",
      daysValue: "2 gün",
    },
    about: {
      label: "Hakkında",
      title: "Yükselen zihinlerin yükselen teknolojilerle buluştuğu yer",
      body: "Modern teknolojinin çeşitli konularını teknik açıdan ele alan bir öğrenci konferansı. Yükselen teknik alanlara giriş niteliğinde teorik derslerin yanı sıra, her teknoloji ve alana kapı açan uygulamalı atölyelerden oluşur.",
      organizerLabel: "Düzenleyen",
      organizerBody:
        "İbtikar Topluluğu, inovasyon, teknoloji, araştırma ve geliştirmeyle ilgilenen Arapça konuşan üniversite öğrencilerini bir araya getiren gönüllü bir ekiptir. Öğrencileri güçlendirmeyi ve teknik becerilerini zenginleştirmeyi hedefler.",
      organizerLink: "İbtikar Topluluğu hakkında",
      stats: [
        { value: "6", label: "ana ders" },
        { value: "9", label: "atölye" },
        { value: "2", label: "yoğun gün" },
      ],
      pastEditionLabel: "Önceki Sürümler",
      pastEditionTitle: "Yükselen Teknolojiler Konferansı 2024",
      pastEditionBody: "Konferansın önceki sürümünün arşivini inceleyin — dersler, atölyeler ve İstanbul'daki etkinlik fotoğrafları.",
      pastEditionLink: "ETC 2024'ü Gör",
    },
    topics: {
      label: "1. Gün · Teorik Dersler",
      title: "Konferans Konuları",
      subtitle: "Her biri 45 dakikalık altı derinlemesine teorik ders.",
      panelType: "Panel",
      panelModerator: "Moderatör",
      panelGuestLabels: ["Birinci Konuk", "İkinci Konuk", "Üçüncü Konuk"],
      items: [
        { title: "Açık Kaynak YZ — Yapay Zekana Sahip Ol", desc: "Açık modeller dünyasına giriş ve yapay zekanı sahiplenme, inşa etme ve çalıştırma.", duration: "45 dk", tags: ["AI", "open-source"] },
        {
          title: "Hızlanan Çağda Ajan Tabanlı YZ",
          desc: "Karar veren ve görevleri verimli yürüten otonom sistemlerin evrimi; karmaşık ortamlara uyum sağlayan ajanlar inşa etmek, pratik uygulamalar ve geliştirme zorlukları.",
          duration: "45 dk",
          tags: ["agentic-ai", "automation"],
        },
        {
          title: "Biyoinformatik ve Hastalık Tedavisinin Geleceğini Değiştirmek",
          desc: "Hastalıkların anlaşılması ve tedavinin geleceğinin yeniden şekillendirilmesinde biyoinformatiğin rolü.",
          speaker: "Esra Mevludi",
          speakerTagline: "Tıbbi veri analizi araştırmacısı — YTÜ",
          speakerBio:
            "Tıbbi veri analizi bilimleri alanında araştırmacı; Yıldız Teknik Üniversitesi Biyomühendislik lisans ve yüksek lisans mezunu.",
          duration: "45 dk",
          tags: ["health-tech", "bioinformatics"],
        },
        {
          title: "Nesnelerin İnterneti",
          desc: "Bağlı cihazların yükselen toplumlar için akıllı altyapı kurması.",
          speaker: "Firas Qarahsan",
          speakerImage: "firas-qarahsan",
          speakerTagline: "menamatix kurucusu",
          speakerBio:
            "Teknoloji, takip sistemleri ve filo yönetiminde 10 yılı aşkın deneyime sahip elektrik mühendisi ve girişimci. menamatix'te şirketlerin ulaşım verimliliğini artırmasına, araçları izlemesine ve operasyonel süreçleri otomatikleştirmesine yardımcı olan akıllı yazılım çözümleri geliştiriyor.",
          duration: "45 dk",
          tags: ["IoT", "smart-city"],
        },
        { title: "Dijital Egemenlik ve Ulusal Tehdit — Endişe mi, Dikkat mi?", desc: "Veri, dijital altyapı ve ulusal güvenlik üzerine tartışma.", duration: "45 dk", tags: ["sovereignty", "security"] },
        {
          title: "Kanla Lekelenmiş Yazılım",
          desc: "Yazılım etiği ve geliştirici sorumluluğu üzerine panel tartışması.",
          duration: "45 dk",
          tags: ["ethics", "panel"],
          panel: {
            moderator: "Abdulkarim Lahmuni",
            moderatorImage: "abdulkarim-lahmuni",
            moderatorTagline: "Doktor ve programcı — İbtikar Topluluğu kurucusu",
            moderatorBio:
              "İstanbul Üniversitesi-Cerrahpaşa Tıp Fakültesi mezunu; Kocaeli'de acil servis hekimi. Yazılım geliştirme uzmanı, full-stack geliştirici ve girişimci teknoloji projelerinin sahibi. Yedi yıl önce YÖS matematik müfredatları yazdı. Topluluk çalışmalarına önem verir; üç yıl önce kurduğu İbtikar Topluluğu bugün Türkiye'deki Arapça konuşan öğrenciler arasında en büyük teknoloji topluluğudur. Eğitimin geleceğini yeniden şekillendirmeyi hedefler; eğitim teknolojileri onun için en öncelikli alandır.",
            guests: [
              {
                name: "Abdurrahman Rajab",
                imageSlug: "abdurrahman-rajab.jpeg",
                tagline: "Yazılım mühendisi — Hadith Tech podcast — Topluluk oluşturucu",
                bio: "Karmaşık sorunları çözmeyi ve topluluklar inşa etmeyi seven bir bilgisayar mühendisi. Yazılım mühendisi, Hadith Tech podcast sunucusu ve topluluk oluşturucu. Programlamayı üniversitede öğrendi ve ardından sunduğu podcast aracılığıyla kapsayıcı bilgisayar bilimlerini benimsedi. Kariyeri boyunca dezavantajlı gruplarla, yükselen teknolojilerle, sanal gerçeklikle ve topluluk inşasıyla çalıştı. MENA bölgesindeki birçok STK'da gönüllü olarak teknolojiden yararlanmalarına yardımcı oldu. İnsanları güçlendiren ve teknolojiyi dünya çapında ilerleten yeni zorluklara açıktır.",
              },
              {
                name: "Abdurrahman Ismail",
                imageSlug: "abdurrahman-ismail",
                tagline: "Teknik lider — Manchester Airport Group",
                bio: "12 yılı aşkın yazılım geliştirme deneyimine sahip programcı ve teknik lider; Manchester Airport Group'ta teknik ekipte çalışıyor. Programlama, modern teknolojiler ve yapay zeka alanında uzmanlaşmış teknik içerik üretiyor; kavramları sadeleştirmeye ve pratik deneyimler paylaşmaya odaklanıyor. YZ destekli uygulamalar geliştiriyor ve geliştiricilere ve girişimcilere YZ araçlarından en iyi şekilde yararlanarak verimliliği artırma konusunda pratik ipuçları sunuyor.",
              },
              {
                name: "Omar Al-Khamis",
                imageSlug: "omar-al-khamis",
                tagline: "Havacılık mühendisi — TUSAŞ · İTÜ",
                bio: "TUSAŞ'ta havacılık mühendisi; İstanbul Teknik Üniversitesi Havacılık Mühendisliği lisans mezunu ve yüksek lisans öğrencisi.",
              },
            ],
          },
        },
      ],
    },
    shorts: {
      label: "Dersler Arası Kısa Bölümler",
      title: "Öne Çıkan Anlar",
      items: [
        { title: "Konferans Açılışı", desc: "Konferans sorumlusunun konuşması.", duration: "15 dk" },
        { title: "Girişimci Konuşması", desc: "Uzmanlaşmış bir teknoloji şirketindeki deneyimini anlatan girişimci.", duration: "15 dk" },
        { title: "Yetkili Konuşması", desc: "Mümkünse devlet, oda veya birlikten bir yetkili.", duration: "15 dk" },
        { title: "İbtikar Yönetimi", desc: "İbtikar'ın son gelişmeleri ve gelecek planları; video gösterimi mümkün.", duration: "25 dk" },
        { title: "Kısa Yarışma", desc: "Önceki dersteki konular hakkında sorular.", duration: "15 dk" },
      ],
    },
    agenda: {
      label: "Zaman Çizelgesi",
      title: "Konferans Programı",
      day1: "1. Gün",
      day1date: "Cumartesi · 27 Haz · 10:30–18:00 · İstanbul — Seyrantepe TÜGVA",
      day2: "2. Gün",
      day2date: "Pazar · 28 Haz · Atölyeler · İstanbul — Florya TÜGVA",
      time: "Saat",
      session: "Bölüm",
      speaker: "Tür",
      lectures: "Dersler",
      workshops: "Atölyeler",
    },
    workshops: {
      label: "2. Gün · Atölyeler",
      title: "Uygulamalı Atölyeler",
      subtitle: "Kendi teknik yolunu seçebileceğin üç paralel oturum.",
      sessions: [
        {
          name: "Birinci Oturum",
          items: [
            {
              title: "R ile Tıbbi Semptom Analizi ve Örüntü Çıkarımı",
              desc: "R programlama dili kullanarak tıbbi semptomları analiz etme ve örüntüleri çıkarma atölyesi.",
              speaker: "Esra Mevludi",
              speakerBio:
                "Tıbbi veri analizi bilimleri alanında araştırmacı; Yıldız Teknik Üniversitesi Biyomühendislik lisans ve yüksek lisans mezunu.",
              tags: ["health-tech", "r-programming", "python", "analytics"],
            },
            {
              title: "Hızlı Prompt Mühendisliği",
              desc: "Prompt mühendisliği ve yapay zeka ile yazılım uygulaması geliştirme.",
              speaker: "Masa Sudan",
              speakerImage: "masa-soudan",
              speakerTagline: "Yazılım mühendisi — Teknofest · TÜBİTAK",
              speakerBio: "Yazılım mühendisliği mezunu; daha önce Teknofest ve TÜBİTAK kapsamında yapay zeka projelerinde yer aldı.",
              tags: ["ai", "prompt-engineering", "vibe-coding", "programming"],
            },
            {
              title: "DeepMind ve VLLM Atölyesi",
              desc: "Vektör veritabanlarıyla büyük modelleri verimli çalıştırma.",
              speaker: "Osama Shabaib",
              speakerImage: "osama-shbib.jpeg",
              tags: ["ai", "vector-database", "vllm", "python"],
            },
          ],
        },
        {
          name: "İkinci Oturum",
          items: [
            {
              title: "Siber Güvenlik Becerileri Atölyesi",
              desc: "Sızma testi simülasyon senaryoları, yaygın zafiyetlerin taranması ve istismar deneyimi.",
              speaker: "Ahmed Shams al-Din",
              tags: ["security", "pentest"],
            },
            {
              title: "Açık Kaynak Yapay Zekaya Giriş",
              desc: "Görevleri yerine getirmede önceden eğitilmiş modellerin rolünü anlamak için Hugging Face modelleri.",
              speaker: "Muhammad Iqbal",
              speakerImage: "m.ikbal",
              speakerTagline: "Havacılık mühendisi — ESEN · ODTÜ",
              speakerBio:
                "Havacılık ve uzay mühendisliği doktora adayı (ODTÜ, Ankara); havacılık mekaniği mühendisi. ESEN System Integration'da çalışıyor; aerodinamik, GNC sistemleri ve VTOL/İHA algoritmaları üzerine uzmanlaşmış.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "Yapay Zeka ile Verimli Ürün Geliştirme",
              desc: "Yapay zeka araçlarıyla verimliliği artırma ve dijital ürünleri daha hızlı inşa etme.",
              speaker: "Abdurrahman Ismail",
              speakerImage: "abdurrahman-ismail",
              speakerTagline: "Teknik lider — Manchester Airport Group",
              speakerBio:
                "12 yılı aşkın yazılım geliştirme deneyimine sahip programcı ve teknik lider; Manchester Airport Group'ta teknik ekipte çalışıyor. Programlama, modern teknolojiler ve yapay zeka alanında uzmanlaşmış teknik içerik üretiyor; kavramları sadeleştirmeye ve pratik deneyimler paylaşmaya odaklanıyor. YZ destekli uygulamalar geliştiriyor ve geliştiricilere ve girişimcilere YZ araçlarından en iyi şekilde yararlanarak verimliliği artırma konusunda pratik ipuçları sunuyor.",
              tags: ["ai", "productivity", "tools"],
            },
          ],
        },
        {
          name: "Üçüncü Oturum",
          items: [
            { title: "DevOps — CI/CD Atölyesi", desc: "Sürekli entegrasyon ve dağıtım hatları kurma.", tags: ["git", "programming", "devops", "ci-cd"] },
            {
              title: "En İyi Kod Mimarisi Seçme Stratejisi",
              desc: "Mikro servisler, mikro önyüzler, modül federasyonu, serverless ve CPU süresi.",
              tags: ["micro-services", "micro-frontends", "module-federation", "serverless", "cpu-time"],
            },
            { title: "Modern ERP Kaynak Yönetim Sistemleri", desc: "Modern kurumlarda kaynak yönetimi yazılımlarına pratik giriş.", tags: ["erp", "management-software"] },
          ],
        },
      ],
    },
    cta: {
      title: "Yükselen Teknolojiler Konferansı 2026'da yerini ayırt",
      subtitle: "Kayıt açık — İbtikar üye platformu üzerinden kayıt olun.",
      button: "Ücretsiz Kayıt Ol",
      note: "İbtikar Topluluğu · Öğrenciler için ücretsiz · İstanbul 2026",
      comingSoon: "Harici kayıt bağlantısı birkaç gün içinde aktif olacak.",
      registerVia: "İbtikar üye platformu üzerinden kayıt olun — kayıt şimdi açık.",
    },
    faq: {
      label: "Sıkça Sorulan Sorular",
      title: "Bilmen gereken her şey",
      items: [
        { q: "Konferansı kim düzenliyor?", a: "Konferans, inovasyon ve teknolojiyle ilgilenen Arapça konuşan üniversite öğrencilerini bir araya getiren gönüllü ekip İbtikar Topluluğu tarafından düzenlenmektedir. Daha fazlası için ibtikar.org.tr" },
        { q: "Konferans nerede ve ne zaman?", a: "Konferans İstanbul'da: 1. gün 27 Haziran Cumartesi (10:30–18:00) Seyrantepe TÜGVA'da teorik dersler; 2. gün 28 Haziran Pazar Florya TÜGVA'da atölyeler." },
        { q: "Kayıt ücretsiz mi?", a: "Evet, öğrenciler için kayıt ücretsizdir ve kontenjan sınırlıdır." },
        { q: "Konferansın dilleri nelerdir?", a: "Etkinlikler Arapça sunulur, bazıları Türkçe ve İngilizcedir." },
        { q: "Atölyeler için ön deneyim gerekli mi?", a: "Çoğu atölye alana giriş olarak tasarlandı, başlangıç ve orta seviyeye uygundur." },
        { q: "Katılım sertifikası alacak mıyım?", a: "Evet, katılımcılar konferans sonrası dijital katılım sertifikası alır." },
      ],
    },
    footer: {
      org: "İbtikar Topluluğu",
      orgSub: "İbtikar Topluluğu",
      tagline: "İnovasyon yapan bir nesil",
      rights: "Tüm hakları saklıdır",
      nav: "Bağlantılar",
      contact: "İletişim",
      volunteer: "Gönüllü Ol",
      website: "ibtikar.org.tr",
    },
  },

  en: {
    dir: "ltr",
    common: { showSpeakerBio: "Show bio", hideSpeakerBio: "Hide" },
    nav: { about: "About", agenda: "Agenda", topics: "Topics", workshops: "Workshops", faq: "FAQ", register: "Register", pastEdition: "ETC 2024" },
    hero: {
      badge: "Istanbul · June 27–28, 2026",
      organizer: "Hosted by Ibtikar Assembly",
      titleTop: "Emerging Technologies",
      titleBottom: "Conference 2026",
      subtitle:
        "A student conference hosted by Ibtikar Assembly, spotlighting diverse topics in modern technology from a technical angle — theoretical lectures introducing emerging fields, and hands-on workshops as a gateway into each domain.",
      register: "Register Now",
      viewAgenda: "View Agenda",
      city: "Location",
      cityValue: "Istanbul, Türkiye",
      dates: "Dates",
      datesValue: "June 27–28, 2026",
      days: "Duration",
      daysValue: "2 days",
    },
    about: {
      label: "About",
      title: "Where rising minds meet emerging technologies",
      body: "A student conference spotlighting diverse topics in modern technology from a technical perspective. It combines theoretical lectures introducing emerging fields in the world of technology with hands-on workshops that serve as a gateway into each technology and domain.",
      organizerLabel: "Organizer",
      organizerBody:
        "Ibtikar Assembly is a volunteer team that brings together Arabic-speaking university students interested in innovation, technology, research and development. It seeks to empower them and enrich their technical expertise through activities and projects that touch student life and community skills.",
      organizerLink: "Learn about Ibtikar Assembly",
      stats: [
        { value: "6", label: "keynote lectures" },
        { value: "9", label: "workshops" },
        { value: "2", label: "intensive days" },
      ],
      pastEditionLabel: "Past Editions",
      pastEditionTitle: "Emerging Technologies Conference 2024",
      pastEditionBody: "Browse the archive of the previous edition — lectures, workshops, and photos from the event in Istanbul.",
      pastEditionLink: "View ETC 2024",
    },
    topics: {
      label: "Day 1 · Theoretical Lectures",
      title: "Conference Topics",
      subtitle: "Six in-depth theoretical lectures, 45 minutes each.",
      panelType: "Panel Discussion",
      panelModerator: "Moderator",
      panelGuestLabels: ["Guest One", "Guest Two", "Guest Three"],
      items: [
        { title: "Open-Source AI — Own Your AI", desc: "A theoretical introduction to open models and owning, building, and running your own AI.", duration: "45 min", tags: ["AI", "open-source"] },
        {
          title: "Agentic AI in a Fast-Moving Era",
          desc: "The evolution of autonomous intelligent systems that make decisions and execute tasks efficiently; building agents that collaborate and adapt to complex environments, with practical applications and development challenges.",
          duration: "45 min",
          tags: ["agentic-ai", "automation"],
        },
        {
          title: "Bioinformatics & Changing the Future of Disease Treatment",
          desc: "A theoretical lecture on the role of bioinformatics in understanding disease and reshaping the future of treatment.",
          speaker: "Esra Mevludi",
          speakerTagline: "Medical data analysis researcher — YTU",
          speakerBio:
            "Researcher in medical data analysis sciences; holds bachelor's and master's degrees in bioengineering from Yildiz Technical University.",
          duration: "45 min",
          tags: ["health-tech", "bioinformatics"],
        },
        {
          title: "Internet of Things",
          desc: "How connected devices build intelligent infrastructure for emerging communities.",
          speaker: "Firas Qarahsan",
          speakerImage: "firas-qarahsan",
          speakerTagline: "Founder of menamatix",
          speakerBio:
            "Electrical engineer and entrepreneur with over 10 years of experience in technology, tracking systems, and fleet management. He leads menamatix in developing smart software solutions that help companies improve transport efficiency, track vehicles, and automate operational processes.",
          duration: "45 min",
          tags: ["IoT", "smart-city"],
        },
        { title: "Digital Sovereignty & National Threat — Worry or Beware?", desc: "A discussion on data, digital infrastructure, and national security in a connected world.", duration: "45 min", tags: ["sovereignty", "security"] },
        {
          title: "Blood-Stained Software",
          desc: "A panel on software ethics and developer responsibility where technology intersects with human values.",
          duration: "45 min",
          tags: ["ethics", "panel"],
          panel: {
            moderator: "Abdulkarim Lahmuni",
            moderatorImage: "abdulkarim-lahmuni",
            moderatorTagline: "Doctor & programmer — Founder of Ibtikar Assembly",
            moderatorBio:
              "He studied human medicine at Istanbul University-Cerrahpaşa and works as an emergency physician in Kocaeli. A software development expert and full-stack developer with entrepreneurial tech projects. He authored YÖS mathematics curricula seven years ago and brings deep experience in computing and mathematics. Passionate about community work, he founded Ibtikar Assembly three years ago — now the largest Arabic-speaking student tech community in Türkiye. He aims to reshape the future of education; educational technologies are the field he cares for most.",
            guests: [
              {
                name: "Abdurrahman Rajab",
                imageSlug: "abdurrahman-rajab.jpeg",
                tagline: "Software engineer — Hadith Tech podcast — Community builder",
                bio: "A computer engineer passionate about solving complex problems and building communities. Software engineer, host of the Hadith Tech podcast, and community builder. He learned programming at university and has since championed inclusive computer science through his podcast. His work spans underserved communities, emerging technologies, virtual reality, and community building. He has volunteered with several NGOs across the MENA region, helping them leverage technology. He welcomes new challenges that empower people and advance technology worldwide.",
              },
              {
                name: "Abdurrahman Ismail",
                imageSlug: "abdurrahman-ismail",
                tagline: "Technical lead — Manchester Airport Group",
                bio: "Programmer and technical lead with over 12 years of software development experience, currently on the technical team at Manchester Airport Group. He creates specialized technical content on programming, modern technologies, and AI, focusing on simplifying concepts and sharing practical expertise. He builds AI-powered applications and shares tips, ideas, and hands-on experiences that help developers and entrepreneurs get the most from AI tools to boost productivity and accelerate building digital products.",
              },
              {
                name: "Omar Al-Khamis",
                imageSlug: "omar-al-khamis",
                tagline: "Aerospace engineer — TAI · ITU",
                bio: "Aerospace engineer at TAI (Turkish Aerospace Industries); master's student at Istanbul Technical University with a bachelor's in aerospace engineering.",
              },
            ],
          },
        },
      ],
    },
    shorts: {
      label: "Short Segments Between Lectures",
      title: "Highlight Moments",
      items: [
        { title: "Conference Opening", desc: "Opening remarks by the conference lead.", duration: "15 min" },
        { title: "Entrepreneur Talk", desc: "An entrepreneur shares their journey in a specialized tech company.", duration: "15 min" },
        { title: "Official Address", desc: "Hosting an official from government, union, or the assembly if possible.", duration: "15 min" },
        { title: "Ibtikar Management", desc: "Latest developments at Ibtikar and future plans; video showcase if available.", duration: "25 min" },
        { title: "Quick Quiz", desc: "Questions about the preceding lecture.", duration: "15 min" },
      ],
    },
    agenda: {
      label: "Timeline",
      title: "Conference Program",
      day1: "Day 1",
      day1date: "Saturday · Jun 27 · 10:30–18:00 · Istanbul — Seyrantepe TÜGVA",
      day2: "Day 2",
      day2date: "Sunday · Jun 28 · Workshops · Istanbul — Florya TÜGVA",
      time: "Time",
      session: "Session",
      speaker: "Type",
      lectures: "Lectures",
      workshops: "Workshops",
    },
    workshops: {
      label: "Day 2 · Workshops",
      title: "Hands-On Workshops",
      subtitle: "Three parallel sessions letting you choose your technical track.",
      sessions: [
        {
          name: "Session One",
          items: [
            {
              title: "Medical Symptom Analysis & Pattern Extraction with R",
              desc: "A hands-on workshop on analyzing medical symptoms and extracting patterns using the R language.",
              speaker: "Esra Mevludi",
              speakerTagline: "Medical data analysis researcher — YTU",
              speakerBio:
                "Researcher in medical data analysis sciences; holds bachelor's and master's degrees in bioengineering from Yildiz Technical University.",
              tags: ["health-tech", "r-programming", "python", "analytics"],
            },
            {
              title: "Rapid Prompt Engineering",
              desc: "Developing a software app using prompt engineering and AI.",
              speaker: "Masa Sudan",
              speakerImage: "masa-soudan",
              speakerTagline: "Software engineer — Teknofest · TÜBİTAK",
              speakerBio: "Software engineering graduate; previously participated in AI projects through Teknofest and TÜBİTAK.",
              tags: ["ai", "prompt-engineering", "vibe-coding", "programming"],
            },
            {
              title: "DeepMind & VLLM Workshop",
              desc: "Running large models efficiently with vector databases.",
              speaker: "Osama Shabaib",
              speakerImage: "osama-shbib.jpeg",
              tags: ["ai", "vector-database", "vllm", "python"],
            },
          ],
        },
        {
          name: "Session Two",
          items: [
            {
              title: "Cybersecurity Skills Workshop",
              desc: "Simulating penetration testing scenarios, scanning common vulnerabilities, and experiencing exploitation techniques.",
              speaker: "Ahmed Shams al-Din",
              tags: ["security", "pentest"],
            },
            {
              title: "Introduction to Open-Source AI",
              desc: "Using Hugging Face models to understand the role of pre-trained models in performing tasks.",
              speaker: "Muhammad Iqbal",
              speakerImage: "m.ikbal",
              speakerTagline: "Aerospace engineer — ESEN · METU",
              speakerBio:
                "Aerospace and control systems engineer; PhD candidate in aerospace engineering at METU, Ankara. Works at ESEN System Integration, specializing in aerodynamics, GNC systems, and fixed-wing, VTOL, and UAV algorithms.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "Build Efficiently with AI",
              desc: "Using AI tools to boost productivity and accelerate building digital products.",
              speaker: "Abdurrahman Ismail",
              speakerImage: "abdurrahman-ismail",
              speakerTagline: "Technical lead — Manchester Airport Group",
              speakerBio:
                "Programmer and technical lead with over 12 years of software development experience, currently on the technical team at Manchester Airport Group. He creates specialized technical content on programming, modern technologies, and AI, focusing on simplifying concepts and sharing practical expertise. He builds AI-powered applications and shares tips, ideas, and hands-on experiences that help developers and entrepreneurs get the most from AI tools to boost productivity and accelerate building digital products.",
              tags: ["ai", "productivity", "tools"],
            },
          ],
        },
        {
          name: "Session Three",
          items: [
            { title: "DevOps — CI/CD Workshop", desc: "Building continuous integration and deployment pipelines.", tags: ["git", "programming", "devops", "ci-cd"] },
            {
              title: "Choosing the Best Code Architecture",
              desc: "Microservices, micro-frontends, module federation, serverless, and CPU time.",
              tags: ["micro-services", "micro-frontends", "module-federation", "serverless", "cpu-time"],
            },
            { title: "Modern ERP Resource Management Systems", desc: "A practical introduction to resource management software in modern enterprises.", tags: ["erp", "management-software"] },
          ],
        },
      ],
    },
    cta: {
      title: "Reserve your seat at the Emerging Technologies Conference 2026",
      subtitle: "Registration is open — sign up via the Ibtikar members platform.",
      button: "Register for Free",
      note: "Ibtikar Assembly · Free for students · Istanbul 2026",
      comingSoon: "The external registration link will be available in a few days.",
      registerVia: "Register through the Ibtikar members platform — registration is now open.",
    },
    faq: {
      label: "FAQ",
      title: "Everything you need to know",
      items: [
        { q: "Who organizes the conference?", a: "The conference is organized by Ibtikar Assembly, a volunteer team of Arabic-speaking university students passionate about innovation and technology. Learn more at ibtikar.org.tr" },
        { q: "Where and when is the conference?", a: "In Istanbul: Day 1, Saturday June 27 (10:30–18:00) at Seyrantepe TÜGVA for lectures; Day 2, Sunday June 28 at Florya TÜGVA for workshops." },
        { q: "Is registration free?", a: "Yes, registration is free for students with a limited number of seats." },
        { q: "What languages are used?", a: "Sessions are delivered in Arabic, with some in Turkish and English." },
        { q: "Do I need prior technical experience for workshops?", a: "Most workshops are designed as an introduction, suitable for beginners and intermediates." },
        { q: "Will I get a certificate?", a: "Yes, participants receive a digital certificate of attendance after the conference." },
      ],
    },
    footer: {
      org: "Ibtikar Assembly",
      orgSub: "تجمّع إبتكار",
      tagline: "A generation that innovates",
      rights: "All rights reserved",
      nav: "Links",
      contact: "Contact",
      volunteer: "Volunteer With Us",
      website: "ibtikar.org.tr",
    },
  },
}
