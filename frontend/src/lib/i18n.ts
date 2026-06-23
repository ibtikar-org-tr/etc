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
  nav: { about: string; agenda: string; topics: string; workshops: string; guests: string; faq: string; register: string; pastEdition: string }
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
    day1Rows: { time: string; title: string; highlight?: boolean; lecture?: boolean }[]
  }
  workshops: { label: string; title: string; subtitle: string; sessions: { name: string; items: Track[] }[] }
  guests: { label: string; title: string; subtitle: string }
  startupBooth: {
    title: string
    subtitle: string
    button: string
    note: string
    applyVia: string
    badge: string
    backToHome: string
    disclaimer: string
    teaser: string
    teaserLink: string
  }
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
    startupBooth: string
    website: string
  }
}

export const dict: Record<Lang, Dict> = {
  ar: {
    dir: "rtl",
    common: { showSpeakerBio: "عرض النبذة", hideSpeakerBio: "إخفاء" },
    nav: { about: "عن المؤتمر", agenda: "الجدول", topics: "المحاور", workshops: "ورش العمل", guests: "الضيوف", faq: "الأسئلة", register: "سجّل الآن", pastEdition: "ETC 2024" },
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
        { value: "8", label: "محاضرات رئيسيّة" },
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
      subtitle: "ثمان محاضرات نظريّة معمّقة، مدّة كلٍّ منها 45 دقيقة.",
      panelType: "حوار",
      panelModerator: "قائد الحوار",
      panelGuestLabels: ["الضيف الأول", "الضيف الثاني", "الضيف الثالث"],
      items: [
        {
          title: "الذكاء الاصطناعي مفتوح المصدر في الرؤية الحاسوبية",
          desc: "محاضرة نظريّة تقدّم مدخلًا في عالم النماذج المفتوحة والقدرة على امتلاك ذكائك الاصطناعي وبنائه وتشغيله.",
          speaker: "محمد إمهان",
          speakerImage: "muhammad-imhan",
          speakerTagline: "معيد وباحث — جامعة إسطنبول التقنية",
          speakerBio:
            "طالب ماجستير في هندسة الحاسوب بجامعة إسطنبول التقنية وأعمل معيد وباحث هناك. مهتم بمجالات الذكاء الاصطناعي، الرؤية الحاسوبية، والتعلم العميق. يعمل على مشاريع بحثية وتطبيقية تهدف إلى استخدام الذكاء الاصطناعي في حل مشكلات واقعية.",
          duration: "45 دقيقة",
          tags: ["AI", "open-source", "computer-vision"],
        },
        {
          title: "استخدام الذكاء الاصطناعي في أنظمة الحماية للمجال البنكي",
          desc: "تتمحور المحاضرة حول الثغرات الحالية وأنظمة الحماية في المجال البنكي، وتقنيات الذكاء الاصطناعي الصاعدة لسد تلك الثغرات.",
          speaker: "مصطفى اسماعيل",
          speakerImage: "moustafa-ismail",
          speakerTagline: "طالب ماجستير هندسة حاسوب — ODTÜ",
          speakerBio:
            "انا خريج هندسة كمبيوتر من اوتو، كنت الاول علي القسم. و حاليا بعمل ماجستير في اوتو هندسة كمبيوتر في classification of np complete instances. و بشتغل في استخدام الذكاء الصناعي لانظمة ال authentication للبنوك",
          duration: "45 دقيقة",
          tags: ["AI", "security", "banking"],
        },
        {
          title: "البيانات الحيوية وتغيير مستقبل علاج الأمراض",
          desc: "محاضرة نظريّة حول دور البيانات الحيوية في تطوير فهم الأمراض وإعادة تشكيل مستقبل العلاج.",
          speaker: "إسراء موالدي",
          speakerImage: "female-avatar",
          speakerTagline: "باحثة في تحليل البيانات الطبية — جامعة يلدز التقنية",
          speakerBio:
            "إسراء موالدي باحثة في علوم تحليل البيانات الطبية، حاصلة على البكالوريوس والماجستير في الهندسة الحيوية من جامعة يلدز التقنية.",
          duration: "45 دقيقة",
          tags: ["health-tech", "bioinformatics"],
        },
        {
          title: "من الطائرة إلى المنظومة: هندسة الأنظمة المسيرة",
          desc: "محاضرة نظريّة حول هندسة الأنظمة المسيرة وانتقالها من منصّات الطيران إلى منظومات متكاملة قابلة للتوسّع.",
          speaker: "حازم خلوصي",
          speakerImage: "hazem-khulousi",
          speakerTagline: "مهندس طيران — ESEN · METU",
          speakerBio:
            "مهندس ميكانيكا طيران وأنظمة تحكم، وطالب دكتوراه في هندسة الطيران والفضاء في جامعة الشرق الأوسط التقنية (METU) في أنقرة. حصلت على درجتي البكالوريوس والماجستير في هندسة الطيران والفضاء من الجامعة نفسها، وكانت رسالتي للماجستير حول تطوير أنظمة الهبوط الذاتي لطائرات الإقلاع والهبوط العمودي (VTOL) على المنصات البحرية المتحركة. وتتركز دراساتي الحالية في مرحلة الدكتوراه على الأنظمة الجوية الذاتية، وديناميكا الطيران، وأنظمة التحكم المتقدمة للطائرات المأهولة وغير المأهولة. أعمل مهندس ميكانيكا طيران في شركة ESEN System Integration، وأتخصص في ديناميكا الطيران، وأنظمة التوجيه والملاحة والتحكم (GNC)، وتطوير الخوارزميات الخاصة بالطائرات ثابتة الجناح وطائرات الإقلاع والهبوط العمودي (VTOL) والأنظمة الجوية غير المأهولة. تركز أبحاثي وأعمالي على الأنظمة الجوية الذاتية، والتحكم المتقدم، وهبوط طائرات VTOL على المنصات المتحركة، وقد نشرت عدة أبحاث علمية في هذا المجال.",
          duration: "45 دقيقة",
          tags: ["drones", "systems-engineering"],
        },
        {
          title: "انترنت الأشياء الثورة الصامتة التي لم نستعد لها بعد",
          desc: "محاضرة نظريّة تستكشف كيف تبني الأجهزة المتّصلة بنية تحتيّة ذكيّة تخدم المجتمعات الصاعدة، والتحدّيات التي لم نستعد لها بعد.",
          speaker: "فراس قراحسن",
          speakerImage: "firas-qarahsan",
          speakerTagline: "مؤسس شركة menamatix",
          speakerBio:
            "فراس قراحسن مهندس كهرباء ورائد أعمال بخبرة تمتد لأكثر من 10 سنوات في قطاع التكنولوجيا وأنظمة التتبع وإدارة الأسطول. يقود شركة menamatix في تطوير حلول برمجية ذكية تساعد الشركات على تحسين كفاءة النقل، متابعة المركبات، وأتمتة العمليات التشغيلية.",
          duration: "45 دقيقة",
          tags: ["IoT", "smart-city"],
        },
        {
          title: "السيادة الرقميّة والتهديد القومي",
          desc: "خليط بين عرض سلايد ومناقشة حول البيانات والبنية التحتية الرقمية والأمن القومي في عالمٍ مترابط.",
          duration: "45 دقيقة",
          tags: ["sovereignty", "security", "panel"],
          panel: {
            moderator: "عبدالله دعمش",
            moderatorImage: "abduallah-damash",
            moderatorTagline: "مهندس ذكاء اصطناعي وأمن سيبراني — MLOps · DevOps",
            moderatorBio:
              "رائد أعمال ومهندس مختص في الأمن السيبراني والذكاء الاصطناعي، حاصل على الماجستير في الذكاء الاصطناعي من جامعة ODTU. مؤسس @ [AuthDeep](https://authdeep.com)، بخبرة في بناء حلول برمجية مؤسسية وأنظمة معقّدة بالتعاون مع شركات عالمية.",
            guests: [
              { name: "أحمد شمس الدين", imageSlug: "ahmad-shamsddin.jpg" },
              { name: "يوسف بكارة", imageSlug: "youssef-bakara" },
              { name: "أسامة صيام", imageSlug: "osama-siam", tagline: "مختص أمن التطبيقات والأمن السيبراني — ماجستير أمن سيبراني", bio: "أسامة صيام مختص في أمن التطبيقات والأمن السيبراني، يمتلك خبرة تزيد عن تسع سنوات في مجالات DevSecOps، واختبار الاختراق، وأمن تطبيقات الويب والجوال والسحابة. يحمل درجة الماجستير في الأمن السيبراني، إضافة إلى شهادات مهنية متخصصة مثل Burp Suite Certified Practitioner وCertified AI/ML Pentester." },
            ],
          },
        },
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
              "درس الطب البشري في جامعة إسطنبول جراح باشا، ويعمل طبيب طوارئ في ولاية كوجالي. خبير في تطوير البرمجيات ولديه مشاريع ريادية برمجية، ومطوّر full-stack. يمتلك خبرات حاسوبية ورياضية واسعة، وسبق أن ألّف مناهج رياضية لاختبار YÖS قبل سبع سنوات. مهتم بالعمل المجتمعي، وأسّس تجمّع إبتكار قبل ثلاث سنوات — وهو اليوم أكبر تجمّع تقني عربي بين الطلاب في تركيا. يسعى إلى إعادة تشكيل مستقبل التعليم، ولذلك تُعد التقنيات التعليمية المجال الأقرب إليه. مؤسس @ [ClinicDeep](https://clinicdeep.com) · مؤسس @ [98tools](https://98tools.com).",
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
                name: "عمر خميس",
                imageSlug: "omar-al-khamis",
                tagline: "مهندس طيران — TUSAŞ · İTÜ",
                bio: "مهندس طيران بشركة توساش للصناعات الدفاعية. طالب ماجستير بجامعة اسطنبول التقنية. بكالوريوس هندسة طيران من جامعة اسطنبول التقنية.",
              },
            ],
          },
        },
        {
          title: "برمجة المسيّرات: المهارات والأدوات وفرص المستقبل",
          desc: "محاضرة نظريّة حول مهارات وأدوات برمجة المسيّرات وآفاق هذا المجال.",
          speaker: "محمد فريد الحافظ",
          speakerImage: "muhammad-farid-al-hafiz.jpeg",
          speakerTagline: "مهندس تحكم في المسيرات — جامعة يلدز التقنية",
          speakerBio:
            "مهندس تحكم في المسيرات الحربية. خريج هندسة تحكم و اتمتة من جامعة يلدز التقنية. شاركت في مسابقات التكنوفست عدة مرات. حاصل على المركز الاول في مسابقة التقنيات التعليمية 2023 في التكنوفست.",
          duration: "45 دقيقة",
          tags: ["drones", "programming", "robotics"],
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
      day1date: "السبت · 27 يونيو · 10:00–19:00 · إسطنبول — Eyyüpsultan TÜGVA",
      day2: "اليوم الثاني",
      day2date: "الأحد · 28 يونيو · ورش العمل · إسطنبول — Florya TÜGVA",
      time: "الوقت",
      session: "الفقرة",
      speaker: "النوع",
      lectures: "محاضرات",
      workshops: "ورش عمل",
      day1Rows: [
        { time: "10:00 – 10:30", title: "تواصل وتشبيك", highlight: true },
        { time: "10:30 – 11:00", title: "مقدمة المؤتمر", highlight: true },
        { time: "11:00 – 11:45", title: "البيانات الحيوية وتغيير مستقبل علاج الأمراض", lecture: true },
        { time: "11:45 – 12:30", title: "من الطائرة إلى المنظومة: هندسة الأنظمة المسيرة", lecture: true },
        { time: "12:30 – 13:00", title: "كلمة إدارة ابتكار", highlight: true },
        { time: "13:00 – 14:00", title: "استراحة غداء وصلاة", highlight: true },
        { time: "14:00 – 14:45", title: "انترنت الأشياء الثورة الصامتة التي لم نستعد لها بعد", lecture: true },
        { time: "14:45 – 15:30", title: "برمجيّات ملطّخة بالدم", lecture: true },
        { time: "15:30 – 16:15", title: "استخدام الذكاء الاصطناعي في أنظمة الحماية للمجال البنكي", lecture: true },
        { time: "16:15 – 16:30", title: "مسابقة انضمام", highlight: true },
        { time: "16:30 – 17:15", title: "السيادة الرقميّة والتهديد القومي", lecture: true },
        { time: "17:15 – 18:00", title: "الذكاء الاصطناعي مفتوح المصدر في الرؤية الحاسوبية", lecture: true },
        { time: "18:00 – 18:45", title: "برمجة المسيّرات: المهارات والأدوات وفرص المستقبل", lecture: true },
        { time: "18:45 – 19:00", title: "خاتمة المؤتمر", highlight: true },
      ],
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
              speakerImage: "female-avatar",
              speakerTagline: "باحثة في تحليل البيانات الطبية — جامعة يلدز التقنية",
              speakerBio:
                "إسراء موالدي باحثة في علوم تحليل البيانات الطبية، حاصلة على البكالوريوس والماجستير في الهندسة الحيوية من جامعة يلدز التقنية.",
              tags: ["health-tech", "r-programming", "python", "analytics"],
            },
            {
              title: "هندسة الأوامر السريعة",
              desc: "تطوير تطبيق برمجي باستخدام هندسة الأوامر والذكاء الاصطناعي.",
              speaker: "ماسة سودان",
              speakerImage: "masa-soudan",
              speakerTagline: "مهندسة برمجيات — Teknofest · TÜBİTAK",
              speakerBio:
                "خريجة هندسة برمجيات عندي مشاريع سابقة بالذكاء الاصطناعي شاركت فيهم من قبل ب Teknofest و Tubitak",
              tags: ["ai", "prompt-engineering", "vibe-coding", "programming"],
            },
            {
              title: "ورشة عمل في DeepMind و VLLM",
              desc: "ورشة تطبيقيّة في تشغيل النماذج الكبيرة بكفاءة باستخدام قواعد البيانات الشعاعيّة.",
              speaker: "أسامة شبيب",
              speakerImage: "osama-shbib.jpeg",
              speakerTagline: "باحث ذكاء اصطناعي — TÜBİTAK BİLGEM · Cosmos AI",
              speakerBio:
                "باحث في الذكاء الاصطناعي في TÜBİTAK BİLGEM، وعضو في مجموعة COSMOS AI البحثية في قسم هندسة الحاسوب بجامعة يلدز التقنية. حاصل على بكالوريوس هندسة الحاسوب من YTÜ. عمل سابقًا مهندس تعلّم آلة في NewMind AI، حيث طوّر خطوط RAG وضبط نماذج اللغة الكبيرة وحلول chatbot قابلة للنشر. شارك في أبحاث تحسين نماذج اللغة التركية وتطوير Cosmos-LLaVA للتعليمات البصرية. حائز على جائزة أفضل ورقة في UBMK 2025 والمركز الأول في فئة الضبط الدقيق في TEKNOFEST T3 AI Hackathon.",
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
              speakerImage: "ahmad-shamsddin.jpg",
              speakerTagline: "مطوّر برمجيات — اختبار اختراق · DevOps",
              speakerBio:
                "مطوّر برمجيات متخصص في أنظمة الخلفية القابلة للتوسّع وممارسات DevOps وأنظمة التحكم بالإصدارات. طالب هندسة برمجيات في İstanbul Aydın University (تبادل Erasmus+ في VSB Ostrava). حاصل على شهادات eJPT وINE Junior Penetration Tester وHackviser CAPT؛ ضمن أفضل 10 في BEING-WISE CTF. خبرة في EARTech وBluLogix وHesco Engineering Services وMevhibe Teknoloji.",
              tags: ["security", "pentest"],
            },
            {
              title: "مدخل إلى الذكاء الاصطناعي مفتوح المصدر",
              desc: "استخدام نماذج من Hugging Face لفهم دور النماذج المدرّبة مسبقًا في تأدية المهام.",
              speaker: "محمد إقبال",
              speakerImage: "m.ikbal.jpg",
              speakerTagline: "مهندس طيران — ESEN · METU",
              speakerBio:
                "مهندس ميكانيكا طيران وأنظمة تحكم، وطالب دكتوراه في هندسة الطيران والفضاء في جامعة الشرق الأوسط التقنية (METU) في أنقرة. حصلت على درجتي البكالوريوس والماجستير في هندسة الطيران والفضاء من الجامعة نفسها، وكانت رسالتي للماجستير حول تطوير أنظمة الهبوط الذاتي لطائرات الإقلاع والهبوط العمودي (VTOL) على المنصات البحرية المتحركة. وتتركز دراساتي الحالية في مرحلة الدكتوراه على الأنظمة الجوية الذاتية، وديناميكا الطيران، وأنظمة التحكم المتقدمة للطائرات المأهولة وغير المأهولة. أعمل مهندس ميكانيكا طيران في شركة ESEN System Integration، وأتخصص في ديناميكا الطيران، وأنظمة التوجيه والملاحة والتحكم (GNC)، وتطوير الخوارزميات الخاصة بالطائرات ثابتة الجناح وطائرات الإقلاع والهبوط العمودي (VTOL) والأنظمة الجوية غير المأهولة. تركز أبحاثي وأعمالي على الأنظمة الجوية الذاتية، والتحكم المتقدم، وهبوط طائرات VTOL على المنصات المتحركة، وقد نشرت عدة أبحاث علمية في هذا المجال.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "ابن بكفاءة باستخدام الذكاء الاصطناعي",
              desc: "استخدام أدوات الذكاء الاصطناعي لتعزيز الإنتاجية وتسريع بناء المنتجات الرقمية.",
              speaker: "عبدالرحمن إسماعيل",
              speakerImage: "abdurrahman-ismail",
              speakerTagline: "مدير تقني — Manchester Airport Group",
              speakerBio:
                "عبد الرحمن إسماعيل مبرمج ومدير تقني يمتلك خبرة تزيد على 12 عامًا في مجال تطوير البرمجيات، ويعمل حاليًا ضمن الفريق التقني في مجموعة مطارات مانشستر (Manchester Airport Group). إلى جانب عمله المهني، يقدّم محتوى تقنيًا متخصصًا في البرمجة والتقنيات الحديثة والذكاء الاصطناعي، مع التركيز على تبسيط المفاهيم ومشاركة الخبرات العملية. يهتم ببناء التطبيقات المعتمدة على الذكاء الاصطناعي، ويشارك من خلال محتواه نصائح وأفكارًا وتجارب عملية تساعد المطورين ورواد الأعمال على الاستفادة من أدوات الـ AI بأفضل صورة ممكنة لزيادة الإنتاجية وتسريع بناء المنتجات الرقمية.",
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
            {
              title: "أنظمة إدارة الموارد ERP ومستقبلها",
              desc: "مدخل عملي إلى برمجيّات إدارة الموارد في المؤسسات الحديثة.",
              speaker: "مصطفى عبد العزيز",
              speakerImage: "moustafa-abdul-aziz",
              speakerTagline: "مهندس ومبرمج — ERP",
              speakerBio:
                "مهندس ومبرمج خريج هندسة حاسوب عمل على الكثير من مشاريع ال ERP كمبرمج ومدير مشروع",
              tags: ["erp", "management-software"],
            },
          ],
        },
      ],
    },
    guests: {
      label: "ضيوف المؤتمر",
      title: "المتحدثون والضيوف",
      subtitle: "تعرّف على متحدثي وضيوف مؤتمر التّقنيّات الصّاعدة 2026.",
    },
    startupBooth: {
      title: "قدّم طلبًا لجناح شركتك الناشئة",
      subtitle: "نستقبل طلبات الشركات الناشئة للمشاركة بجناح عرض في مؤتمر التّقنيّات الصّاعدة 2026.",
      button: "قدّم طلبك الآن",
      note: "ETC 2026 · مساحة عرض للشركات الناشئة",
      applyVia: "التقديم مفتوح الآن عبر نموذج الطلب الإلكتروني.",
      badge: "جناح الشركات الناشئة",
      backToHome: "العودة إلى مؤتمر ETC 2026",
      disclaimer: "هذا الطلب مخصّص للشركات الناشئة الراغبة في المشاركة بجناح عرض، وليس لتسجيل حضور الطلاب.",
      teaser: "هل تمثّل شركة ناشئة؟",
      teaserLink: "قدّم طلب جناح",
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
        { q: "أين ومتى يُقام المؤتمر؟", a: "يُقام المؤتمر في إسطنبول: اليوم الأول السبت 27 يونيو (10:00–19:00) في Eyyüpsultan TÜGVA للمحاضرات النظريّة، واليوم الثاني الأحد 28 يونيو في Florya TÜGVA لورش العمل." },
        { q: "هل التسجيل مجّاني؟", a: "نعم، التسجيل مجّاني للطلاب مع عدد محدود من المقاعد." },
        { q: "ما اللغات المعتمدة في المؤتمر؟", a: "تُقدَّم الفعاليّات بالعربيّة، وبعضها بالتركيّة والإنجليزيّة." },
        { q: "هل أحتاج خبرة تقنيّة مسبقة لحضور الورش؟", a: "صُمّمت معظم الورش كمدخل للمجال، لذا تناسب المبتدئين والمتوسّطين." },
        { q: "كيف تتقدّم الشركات الناشئة لحجز جناح؟", a: "يمكن للشركات الناشئة التقديم عبر صفحة جناح الشركات الناشئة على الموقع (/2026/startups)، وليس عبر نموذج تسجيل الطلاب." },
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
      startupBooth: "جناح الشركات الناشئة",
      website: "ibtikar.org.tr",
    },
  },

  tr: {
    dir: "ltr",
    common: { showSpeakerBio: "Biyografiyi göster", hideSpeakerBio: "Gizle" },
    nav: { about: "Hakkında", agenda: "Program", topics: "Konular", workshops: "Atölyeler", guests: "Konuklar", faq: "SSS", register: "Kayıt Ol", pastEdition: "ETC 2024" },
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
        { value: "8", label: "ana ders" },
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
      subtitle: "Her biri 45 dakikalık sekiz derinlemesine teorik ders.",
      panelType: "Panel",
      panelModerator: "Moderatör",
      panelGuestLabels: ["Birinci Konuk", "İkinci Konuk", "Üçüncü Konuk"],
      items: [
        {
          title: "Bilgisayarlı Görüde Açık Kaynak Yapay Zeka",
          desc: "Açık modeller dünyasına giriş ve yapay zekanı sahiplenme, inşa etme ve çalıştırma.",
          speaker: "Muhammed İmhan",
          speakerImage: "muhammad-imhan",
          speakerTagline: "Araştırma görevlisi — İTÜ",
          speakerBio:
            "İstanbul Teknik Üniversitesi'nde bilgisayar mühendisliği yüksek lisans öğrencisi; aynı üniversitede araştırma görevlisi ve araştırmacı olarak çalışıyor. Yapay zeka, bilgisayarlı görü ve derin öğrenme alanlarıyla ilgileniyor. Yapay zekayı gerçek dünya sorunlarını çözmek için kullanmayı hedefleyen araştırma ve uygulama projeleri üzerinde çalışıyor.",
          duration: "45 dk",
          tags: ["AI", "open-source", "computer-vision"],
        },
        {
          title: "Bankacılıkta SiberGüvenlik Sistemlerinde Yapay Zeka",
          desc: "Ders, bankacılık alanındaki mevcut güvenlik açıkları ve koruma sistemleri ile bu açıkları kapatmak için yükselen yapay zeka teknolojileri üzerine odaklanıyor.",
          speaker: "Mustafa İsmail",
          speakerImage: "moustafa-ismail",
          speakerTagline: "Bilgisayar mühendisliği yüksek lisans öğrencisi — ODTÜ",
          speakerBio:
            "ODTÜ bilgisayar mühendisliği mezunuyum; bölüm birincisiydim. Şu anda ODTÜ'de bilgisayar mühendisliği yüksek lisansında, NP-complete örneklerinin sınıflandırılması üzerine çalışıyorum. Bankacılıkta kimlik doğrulama sistemlerinde yapay zekanın kullanımı üzerine çalışıyorum.",
          duration: "45 dk",
          tags: ["AI", "security", "banking"],
        },
        {
          title: "Biyoinformatik ve Hastalık Tedavisinin Geleceğini Değiştirmek",
          desc: "Hastalıkların anlaşılması ve tedavinin geleceğinin yeniden şekillendirilmesinde biyoinformatiğin rolü.",
          speaker: "Esra Mevludi",
          speakerImage: "female-avatar",
          speakerTagline: "Tıbbi veri analizi araştırmacısı — YTÜ",
          speakerBio:
            "Tıbbi veri analizi bilimleri alanında araştırmacı; Yıldız Teknik Üniversitesi Biyomühendislik lisans ve yüksek lisans mezunu.",
          duration: "45 dk",
          tags: ["health-tech", "bioinformatics"],
        },
        {
          title: "Uçaktan Sisteme: İnsansız Sistem Mühendisliği",
          desc: "İnsansız sistem mühendisliği ve hava platformlarından ölçeklenebilir bütünleşik sistemlere geçiş.",
          speaker: "Hazem Khulousi",
          speakerImage: "hazem-khulousi",
          speakerTagline: "Havacılık mühendisi — ESEN · ODTÜ",
          speakerBio:
            "Havacılık ve kontrol sistemleri mühendisi; Ankara'da Orta Doğu Teknik Üniversitesi'nde (ODTÜ) havacılık ve uzay mühendisliği doktora adayı. ODTÜ'den havacılık ve uzay mühendisliği lisans ve yüksek lisans derecelerine sahip; yüksek lisans tezi hareketli deniz platformlarında VTOL uçaklar için otonom iniş sistemleri üzerineydi. Doktora çalışmaları otonom hava sistemleri, uçuş dinamiği ve insanlı/insansız hava araçları için ileri kontrol üzerine odaklanıyor. ESEN System Integration'da havacılık mühendisi olarak çalışıyor; uçuş dinamiği, GNC sistemleri ve sabit kanat, VTOL ve insansız hava sistemleri algoritmalarında uzmanlaşmış. Otonom hava sistemleri, ileri kontrol ve hareketli platformlarda VTOL inişi üzerine birçok bilimsel yayını bulunuyor.",
          duration: "45 dk",
          tags: ["drones", "systems-engineering"],
        },
        {
          title: "Nesnelerin İnterneti: Henüz Hazırlanmadığımız Sessiz Devrim",
          desc: "Bağlı cihazların yükselen toplumlar için akıllı altyapı kurması ve henüz hazırlanmadığımız zorluklar.",
          speaker: "Firas Qarahsan",
          speakerImage: "firas-qarahsan",
          speakerTagline: "menamatix kurucusu",
          speakerBio:
            "Teknoloji, takip sistemleri ve filo yönetiminde 10 yılı aşkın deneyime sahip elektrik mühendisi ve girişimci. menamatix'te şirketlerin ulaşım verimliliğini artırmasına, araçları izlemesine ve operasyonel süreçleri otomatikleştirmesine yardımcı olan akıllı yazılım çözümleri geliştiriyor.",
          duration: "45 dk",
          tags: ["IoT", "smart-city"],
        },
        {
          title: "Dijital Egemenlik ve Ulusal Tehdit",
          desc: "Bağlantılı bir dünyada veri, dijital altyapı ve ulusal güvenlik üzerine slayt sunumu ve tartışma karışımı.",
          duration: "45 dk",
          tags: ["sovereignty", "security", "panel"],
          panel: {
            moderator: "Abdullah Damash",
            moderatorImage: "abduallah-damash",
            moderatorTagline: "Kıdemli YZ ve Siber Güvenlik Mühendisi — MLOps · DevOps",
            moderatorBio:
              "Siber güvenlik ve yapay zeka alanında uzmanlaşmış girişimci ve mühendis; ODTÜ'den yapay zeka yüksek lisans derecesine sahip. Kurucu @ [AuthDeep](https://authdeep.com); küresel şirketlerle iş birliği içinde kurumsal yazılım çözümleri ve karmaşık sistemler inşa etme deneyimine sahip.",
            guests: [
              { name: "Ahmed Shams al-Din", imageSlug: "ahmad-shamsddin.jpg" },
              { name: "Yusuf Bakara", imageSlug: "youssef-bakara" },
              { name: "Osama Siam", imageSlug: "osama-siam", tagline: "Uygulama güvenliği uzmanı — siber güvenlik yüksek lisansı", bio: "Uygulama güvenliği ve siber güvenlik uzmanı; DevSecOps, sızma testi ve web, mobil ve bulut uygulama güvenliğinde 9 yılı aşkın deneyime sahip. Siber güvenlik yüksek lisans derecesinin yanı sıra Burp Suite Certified Practitioner ve Certified AI/ML Pentester gibi profesyonel sertifikalara sahip." },
            ],
          },
        },
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
              "İstanbul Üniversitesi-Cerrahpaşa Tıp Fakültesi mezunu; Kocaeli'de acil servis hekimi. Yazılım geliştirme uzmanı, full-stack geliştirici ve girişimci teknoloji projelerinin sahibi. Yedi yıl önce YÖS matematik müfredatları yazdı. Topluluk çalışmalarına önem verir; üç yıl önce kurduğu İbtikar Topluluğu bugün Türkiye'deki Arapça konuşan öğrenciler arasında en büyük teknoloji topluluğudur. Eğitimin geleceğini yeniden şekillendirmeyi hedefler; eğitim teknolojileri onun için en öncelikli alandır. Kurucu @ [ClinicDeep](https://clinicdeep.com) · Kurucu @ [98tools](https://98tools.com).",
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
                name: "Omar Khamis",
                imageSlug: "omar-al-khamis",
                tagline: "Havacılık mühendisi — TUSAŞ · İTÜ",
                bio: "TUSAŞ'ta havacılık mühendisi; İstanbul Teknik Üniversitesi Havacılık Mühendisliği lisans mezunu ve yüksek lisans öğrencisi.",
              },
            ],
          },
        },
        {
          title: "İHA Programlama: Beceriler, Araçlar ve Gelecek Fırsatları",
          desc: "İHA programlamada beceriler, araçlar ve bu alandaki gelecek fırsatları üzerine teorik bir ders.",
          speaker: "Muhammed Farid El-Hafız",
          speakerImage: "muhammad-farid-al-hafiz.jpeg",
          speakerTagline: "İHA kontrol mühendisi — YTÜ",
          speakerBio:
            "Askeri İHA'larda kontrol mühendisi. Yıldız Teknik Üniversitesi Kontrol ve Otomasyon Mühendisliği mezunu. Teknofest yarışmalarına birçok kez katıldı. 2023 Teknofest Eğitim Teknolojileri yarışmasında birincilik ödülü aldı.",
          duration: "45 dk",
          tags: ["drones", "programming", "robotics"],
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
      day1date: "Cumartesi · 27 Haz · 10:00–19:00 · İstanbul — Eyyüpsultan TÜGVA",
      day2: "2. Gün",
      day2date: "Pazar · 28 Haz · Atölyeler · İstanbul — Florya TÜGVA",
      time: "Saat",
      session: "Bölüm",
      speaker: "Tür",
      lectures: "Dersler",
      workshops: "Atölyeler",
      day1Rows: [
        { time: "10:00 – 10:30", title: "Networking ve Tanışma", highlight: true },
        { time: "10:30 – 11:00", title: "Konferans Açılışı", highlight: true },
        { time: "11:00 – 11:45", title: "Biyoinformatik ve Hastalık Tedavisinin Geleceğini Değiştirmek", lecture: true },
        { time: "11:45 – 12:30", title: "Uçaktan Sisteme: İnsansız Sistem Mühendisliği", lecture: true },
        { time: "12:30 – 13:00", title: "İbtikar Yönetimi Konuşması", highlight: true },
        { time: "13:00 – 14:00", title: "Öğle Yemeği ve Namaz Molası", highlight: true },
        { time: "14:00 – 14:45", title: "Nesnelerin İnterneti: Henüz Hazırlanmadığımız Sessiz Devrim", lecture: true },
        { time: "14:45 – 15:30", title: "Kanla Lekelenmiş Yazılım", lecture: true },
        { time: "15:30 – 16:15", title: "Bankacılıkta SiberGüvenlik Sistemlerinde Yapay Zeka", lecture: true },
        { time: "16:15 – 16:30", title: "Katılım Yarışması", highlight: true },
        { time: "16:30 – 17:15", title: "Dijital Egemenlik ve Ulusal Tehdit", lecture: true },
        { time: "17:15 – 18:00", title: "Bilgisayarlı Görüde Açık Kaynak Yapay Zeka", lecture: true },
        { time: "18:00 – 18:45", title: "İHA Programlama: Beceriler, Araçlar ve Gelecek Fırsatları", lecture: true },
        { time: "18:45 – 19:00", title: "Konferans Kapanışı", highlight: true },
      ],
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
              speakerImage: "female-avatar",
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
              speakerBio:
                "Yazılım mühendisliği mezunuyum. Daha önce Teknofest ve TÜBİTAK kapsamında yapay zeka projelerine katıldım.",
              tags: ["ai", "prompt-engineering", "vibe-coding", "programming"],
            },
            {
              title: "DeepMind ve VLLM Atölyesi",
              desc: "Vektör veritabanlarıyla büyük modelleri verimli çalıştırma.",
              speaker: "Osama SHBIB",
              speakerImage: "osama-shbib.jpeg",
              speakerTagline: "YZ Araştırmacısı — TÜBİTAK BİLGEM · Cosmos AI",
              speakerBio:
                "TÜBİTAK BİLGEM'de yapay zeka araştırmacısı; YTÜ Bilgisayar Mühendisliği COSMOS AI Araştırma Grubu üyesi. Yıldız Teknik Üniversitesi bilgisayar mühendisliği mezunu. NewMind AI'da makine öğrenmesi mühendisi olarak RAG hatları, LLM ince ayarı ve Docker/FastAPI ile ölçeklenebilir ML çözümleri geliştirdi. Türkçe dil modelleri ve Cosmos-LLaVA görsel talimat modeli üzerine araştırmalara katkıda bulundu. UBMK 2025 En İyi Makale Ödülü; TEKNOFEST T3 AI Hackathon ince ayar kategorisi birinciliği.",
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
              speaker: "Ahmad Shamsddin",
              speakerImage: "ahmad-shamsddin.jpg",
              speakerTagline: "Yazılım Geliştirici — Sızma Testi · DevOps",
              speakerBio:
                "Ölçeklenebilir arka uç sistemler, DevOps ve sürüm kontrolü konularında uzmanlaşmış yazılım geliştirici. İstanbul Aydın Üniversitesi yazılım mühendisliği öğrencisi (VSB Ostrava Erasmus+). eJPT, INE Junior Penetration Tester ve Hackviser CAPT sertifikalarına sahip; BEING-WISE CTF ilk 10. EARTech, BluLogix, Hesco Engineering Services ve Mevhibe Teknoloji deneyimi.",
              tags: ["security", "pentest"],
            },
            {
              title: "Açık Kaynak Yapay Zekaya Giriş",
              desc: "Görevleri yerine getirmede önceden eğitilmiş modellerin rolünü anlamak için Hugging Face modelleri.",
              speaker: "Muhammad Iqbal",
              speakerImage: "m.ikbal.jpg",
              speakerTagline: "Havacılık mühendisi — ESEN · ODTÜ",
              speakerBio:
                "Havacılık ve kontrol sistemleri mühendisi; Ankara'da Orta Doğu Teknik Üniversitesi'nde (ODTÜ) havacılık ve uzay mühendisliği doktora adayı. ODTÜ'den havacılık ve uzay mühendisliği lisans ve yüksek lisans derecelerine sahip; yüksek lisans tezi hareketli deniz platformlarında VTOL uçaklar için otonom iniş sistemleri üzerineydi. Doktora çalışmaları otonom hava sistemleri, uçuş dinamiği ve insanlı/insansız hava araçları için ileri kontrol üzerine odaklanıyor. ESEN System Integration'da havacılık mühendisi olarak çalışıyor; uçuş dinamiği, GNC sistemleri ve sabit kanat, VTOL ve insansız hava sistemleri algoritmalarında uzmanlaşmış. Otonom hava sistemleri, ileri kontrol ve hareketli platformlarda VTOL inişi üzerine birçok bilimsel yayını bulunuyor.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "Yapay Zeka ile Verimli Ürün Geliştirme",
              desc: "Yapay zeka araçlarıyla verimliliği artırma ve dijital ürünleri daha hızlı inşa etme.",
              speaker: "Abdurrahman Ismail",
              speakerImage: "abdurrahman-ismail",
              speakerTagline: "Teknik lider — Manchester Airport Group",
              speakerBio:
                "Abdurrahman Ismail, programcı ve teknik lider; 12 yılı aşkın yazılım geliştirme deneyimine sahip ve Manchester Airport Group'ta teknik ekipte çalışıyor. Programlama, modern teknolojiler ve yapay zeka alanında uzmanlaşmış teknik içerik üretiyor; kavramları sadeleştirmeye ve pratik deneyimler paylaşmaya odaklanıyor. YZ destekli uygulamalar geliştiriyor ve geliştiricilere ve girişimcilere YZ araçlarından en iyi şekilde yararlanarak verimliliği artırma ve dijital ürünleri hızlandırma konusunda pratik ipuçları sunuyor.",
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
            {
              title: "ERP Kaynak Yönetim Sistemleri ve Gelecekleri",
              desc: "Modern kurumlarda kaynak yönetimi yazılımlarına pratik giriş.",
              speaker: "Mustafa Abdülaziz",
              speakerImage: "moustafa-abdul-aziz",
              speakerTagline: "Mühendis ve programcı — ERP",
              speakerBio:
                "Mühendis ve programcı; bilgisayar mühendisliği mezunu. Birçok ERP projesinde programcı ve proje yöneticisi olarak çalıştı.",
              tags: ["erp", "management-software"],
            },
          ],
        },
      ],
    },
    guests: {
      label: "Konferans Konukları",
      title: "Konuşmacılar ve Konuklar",
      subtitle: "ETC 2026 konuşmacıları ve konuklarıyla tanışın.",
    },
    startupBooth: {
      title: "Girişim Standı için Başvur",
      subtitle: "Yükselen Teknolojiler Konferansı 2026'da girişim standında yer almak isteyen girişimlerden başvuru kabul ediyoruz.",
      button: "Hemen Başvur",
      note: "ETC 2026 · Girişim standı başvuruları açık",
      applyVia: "Başvurular çevrimiçi form üzerinden şimdi açık.",
      badge: "Girişim Standı",
      backToHome: "ETC 2026 konferansına dön",
      disclaimer: "Bu başvuru, standda yer almak isteyen girişimler içindir; öğrenci katılım kaydı değildir.",
      teaser: "Bir girişimi mi temsil ediyorsunuz?",
      teaserLink: "Stand başvurusu yap",
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
        { q: "Konferans nerede ve ne zaman?", a: "Konferans İstanbul'da: 1. gün 27 Haziran Cumartesi (10:00–19:00) Eyyüpsultan TÜGVA'da teorik dersler; 2. gün 28 Haziran Pazar Florya TÜGVA'da atölyeler." },
        { q: "Kayıt ücretsiz mi?", a: "Evet, öğrenciler için kayıt ücretsizdir ve kontenjan sınırlıdır." },
        { q: "Konferansın dilleri nelerdir?", a: "Etkinlikler Arapça sunulur, bazıları Türkçe ve İngilizcedir." },
        { q: "Atölyeler için ön deneyim gerekli mi?", a: "Çoğu atölye alana giriş olarak tasarlandı, başlangıç ve orta seviyeye uygundur." },
        { q: "Girişimler stand başvurusunu nasıl yapabilir?", a: "Girişimler, sitedeki Girişim Standı sayfası (/2026/startups) üzerinden başvurabilir; öğrenci kayıt formu üzerinden değil." },
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
      startupBooth: "Girişim Standı",
      website: "ibtikar.org.tr",
    },
  },

  en: {
    dir: "ltr",
    common: { showSpeakerBio: "Show bio", hideSpeakerBio: "Hide" },
    nav: { about: "About", agenda: "Agenda", topics: "Topics", workshops: "Workshops", guests: "Guests", faq: "FAQ", register: "Register", pastEdition: "ETC 2024" },
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
        { value: "8", label: "keynote lectures" },
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
      subtitle: "Eight in-depth theoretical lectures, 45 minutes each.",
      panelType: "Panel Discussion",
      panelModerator: "Moderator",
      panelGuestLabels: ["Guest One", "Guest Two", "Guest Three"],
      items: [
        {
          title: "Open-Source AI in Computer Vision",
          desc: "A theoretical introduction to open models and owning, building, and running your own AI.",
          speaker: "Muhammad Imhan",
          speakerImage: "muhammad-imhan",
          speakerTagline: "Teaching assistant & researcher — ITU",
          speakerBio:
            "Master's student in computer engineering at Istanbul Technical University; works as a teaching assistant and researcher there. Interested in artificial intelligence, computer vision, and deep learning. Works on research and applied projects aimed at using AI to solve real-world problems.",
          duration: "45 min",
          tags: ["AI", "open-source", "computer-vision"],
        },
        {
          title: "AI for Cybersecurity Systems in Banking",
          desc: "The lecture focuses on current vulnerabilities and protection systems in banking, and emerging AI techniques to close those gaps.",
          speaker: "Moustafa Ismail",
          speakerImage: "moustafa-ismail",
          speakerTagline: "MSc student in computer engineering — ODTÜ",
          speakerBio:
            "I'm a computer engineering graduate from ODTU, where I ranked first in my department. I'm currently pursuing a master's in computer engineering at ODTU, focusing on classification of NP-complete instances. I work on using AI for authentication systems in banking.",
          duration: "45 min",
          tags: ["AI", "security", "banking"],
        },
        {
          title: "Bioinformatics & Changing the Future of Disease Treatment",
          desc: "A theoretical lecture on the role of bioinformatics in understanding disease and reshaping the future of treatment.",
          speaker: "Esra Mevludi",
          speakerImage: "female-avatar",
          speakerTagline: "Medical data analysis researcher — YTU",
          speakerBio:
            "Researcher in medical data analysis sciences; holds bachelor's and master's degrees in bioengineering from Yildiz Technical University.",
          duration: "45 min",
          tags: ["health-tech", "bioinformatics"],
        },
        {
          title: "From Aircraft to System: Uncrewed Systems Engineering",
          desc: "A theoretical lecture on uncrewed systems engineering and the shift from aerial platforms to scalable integrated systems.",
          speaker: "Hazem Khulousi",
          speakerImage: "hazem-khulousi",
          speakerTagline: "Aerospace engineer — ESEN · METU",
          speakerBio:
            "Aerospace and control systems engineer; PhD candidate in aerospace engineering at Middle East Technical University (METU) in Ankara. Holds bachelor's and master's degrees in aerospace engineering from METU; his master's thesis focused on autonomous landing systems for VTOL aircraft on moving marine platforms. His doctoral research focuses on autonomous aerial systems, flight dynamics, and advanced control for manned and unmanned aircraft. Works as an aerospace engineer at ESEN System Integration, specializing in flight dynamics, GNC systems, and algorithms for fixed-wing, VTOL, and uncrewed aerial systems. His research spans autonomous aerial systems, advanced control, and VTOL landing on moving platforms, with several published papers in the field.",
          duration: "45 min",
          tags: ["drones", "systems-engineering"],
        },
        {
          title: "Internet of Things: The Silent Revolution We Aren't Ready For",
          desc: "How connected devices build intelligent infrastructure for emerging communities — and the challenges we aren't ready for yet.",
          speaker: "Firas Qarahsan",
          speakerImage: "firas-qarahsan",
          speakerTagline: "Founder of menamatix",
          speakerBio:
            "Electrical engineer and entrepreneur with over 10 years of experience in technology, tracking systems, and fleet management. He leads menamatix in developing smart software solutions that help companies improve transport efficiency, track vehicles, and automate operational processes.",
          duration: "45 min",
          tags: ["IoT", "smart-city"],
        },
        {
          title: "Digital Sovereignty & National Threat",
          desc: "A mix of slides and discussion on data, digital infrastructure, and national security in a connected world.",
          duration: "45 min",
          tags: ["sovereignty", "security", "panel"],
          panel: {
            moderator: "Abdullah Damash",
            moderatorImage: "abduallah-damash",
            moderatorTagline: "Senior AI & Cybersecurity Engineer — MLOps · DevOps",
            moderatorBio:
              "Entrepreneur and engineer specializing in cybersecurity and artificial intelligence, with a master's degree in AI from ODTU. Founder @ [AuthDeep](https://authdeep.com), with experience building enterprise software solutions and complex systems in collaboration with global companies.",
            guests: [
              { name: "Ahmad Shams al-Din", imageSlug: "ahmad-shamsddin.jpg" },
              { name: "Youssef Bakara", imageSlug: "youssef-bakara" },
              { name: "Osama Siam", imageSlug: "osama-siam", tagline: "Application security specialist — MSc Cybersecurity", bio: "Application security and cybersecurity specialist with over nine years of experience in DevSecOps, penetration testing, and web, mobile, and cloud application security. Holds a master's degree in cybersecurity, along with professional certifications including Burp Suite Certified Practitioner and Certified AI/ML Pentester." },
            ],
          },
        },
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
              "He studied human medicine at Istanbul University-Cerrahpaşa and works as an emergency physician in Kocaeli. A software development expert and full-stack developer with entrepreneurial tech projects. He authored YÖS mathematics curricula seven years ago and brings deep experience in computing and mathematics. Passionate about community work, he founded Ibtikar Assembly three years ago — now the largest Arabic-speaking student tech community in Türkiye. He aims to reshape the future of education; educational technologies are the field he cares for most. Founder @ [ClinicDeep](https://clinicdeep.com) · Founder @ [98tools](https://98tools.com).",
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
                name: "Omar Khamis",
                imageSlug: "omar-al-khamis",
                tagline: "Aerospace engineer — TAI · ITU",
                bio: "Aerospace engineer at TAI (Turkish Aerospace Industries); master's student at Istanbul Technical University with a bachelor's in aerospace engineering.",
              },
            ],
          },
        },
        {
          title: "Drone Programming: Skills, Tools, and Future Opportunities",
          desc: "A theoretical lecture on drone programming skills, tools, and future opportunities in the field.",
          speaker: "Muhammad Farid Al-Hafiz",
          speakerImage: "muhammad-farid-al-hafiz.jpeg",
          speakerTagline: "Drone control engineer — YTU",
          speakerBio:
            "Control engineer for military drones. Graduate of control and automation engineering from Yildiz Technical University. Participated in Teknofest competitions multiple times. Won first place in the 2023 Educational Technologies competition at Teknofest.",
          duration: "45 min",
          tags: ["drones", "programming", "robotics"],
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
      day1date: "Saturday · Jun 27 · 10:00–19:00 · Istanbul — Eyyüpsultan TÜGVA",
      day2: "Day 2",
      day2date: "Sunday · Jun 28 · Workshops · Istanbul — Florya TÜGVA",
      time: "Time",
      session: "Session",
      speaker: "Type",
      lectures: "Lectures",
      workshops: "Workshops",
      day1Rows: [
        { time: "10:00 – 10:30", title: "Networking & Meet-up", highlight: true },
        { time: "10:30 – 11:00", title: "Conference Opening", highlight: true },
        { time: "11:00 – 11:45", title: "Bioinformatics & Changing the Future of Disease Treatment", lecture: true },
        { time: "11:45 – 12:30", title: "From Aircraft to System: Uncrewed Systems Engineering", lecture: true },
        { time: "12:30 – 13:00", title: "Ibtikar Management Address", highlight: true },
        { time: "13:00 – 14:00", title: "Lunch Break & Prayer", highlight: true },
        { time: "14:00 – 14:45", title: "Internet of Things: The Silent Revolution We Aren't Ready For", lecture: true },
        { time: "14:45 – 15:30", title: "Blood-Stained Software", lecture: true },
        { time: "15:30 – 16:15", title: "AI for Cybersecurity Systems in Banking", lecture: true },
        { time: "16:15 – 16:30", title: "Join Quiz", highlight: true },
        { time: "16:30 – 17:15", title: "Digital Sovereignty & National Threat", lecture: true },
        { time: "17:15 – 18:00", title: "Open-Source AI in Computer Vision", lecture: true },
        { time: "18:00 – 18:45", title: "Drone Programming: Skills, Tools, and Future Opportunities", lecture: true },
        { time: "18:45 – 19:00", title: "Conference Closing", highlight: true },
      ],
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
              speakerImage: "female-avatar",
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
              speakerBio:
                "Software engineering graduate. I've worked on previous AI projects through Teknofest and TÜBİTAK.",
              tags: ["ai", "prompt-engineering", "vibe-coding", "programming"],
            },
            {
              title: "DeepMind & VLLM Workshop",
              desc: "Running large models efficiently with vector databases.",
              speaker: "Osama SHBIB",
              speakerImage: "osama-shbib.jpeg",
              speakerTagline: "AI Researcher — TÜBİTAK BİLGEM · Cosmos AI",
              speakerBio:
                "AI researcher at TÜBİTAK BİLGEM and research team member at the COSMOS AI Research Group (YTU Computer Engineering). Holds a bachelor's in computer engineering from Yıldız Technical University. Previously worked as a machine learning engineer at NewMind AI, building RAG pipelines, fine-tuning LLMs, and deploying scalable ML solutions with Docker and FastAPI. Co-authored research on Turkish language models and visual instruction tuning (Cosmos-LLaVA). Best Paper Award at UBMK 2025; 1st place in the finetuning category at TEKNOFEST T3 AI Hackathon.",
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
              speaker: "Ahmad Shamsddin",
              speakerImage: "ahmad-shamsddin.jpg",
              speakerTagline: "Software Developer — Penetration Testing · DevOps",
              speakerBio:
                "Software developer specializing in scalable back-end systems, DevOps, and version control. Bachelor's student in software engineering at Istanbul Aydin University (Erasmus+ at VSB Ostrava). Certified in penetration testing (eJPT, INE Junior Penetration Tester, Hackviser CAPT); BEING-WISE CTF top 10. Experience at EARTech, BluLogix, Hesco Engineering Services, and Mevhibe Teknoloji.",
              tags: ["security", "pentest"],
            },
            {
              title: "Introduction to Open-Source AI",
              desc: "Using Hugging Face models to understand the role of pre-trained models in performing tasks.",
              speaker: "Muhammad Iqbal",
              speakerImage: "m.ikbal.jpg",
              speakerTagline: "Aerospace engineer — ESEN · METU",
              speakerBio:
                "Aerospace and control systems engineer; PhD candidate in aerospace engineering at Middle East Technical University (METU) in Ankara. Holds bachelor's and master's degrees in aerospace engineering from METU; his master's thesis focused on autonomous landing systems for VTOL aircraft on moving marine platforms. His doctoral research focuses on autonomous aerial systems, flight dynamics, and advanced control for manned and unmanned aircraft. Works as an aerospace engineer at ESEN System Integration, specializing in flight dynamics, GNC systems, and algorithms for fixed-wing, VTOL, and uncrewed aerial systems. His research spans autonomous aerial systems, advanced control, and VTOL landing on moving platforms, with several published papers in the field.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "Build Efficiently with AI",
              desc: "Using AI tools to boost productivity and accelerate building digital products.",
              speaker: "Abdurrahman Ismail",
              speakerImage: "abdurrahman-ismail",
              speakerTagline: "Technical lead — Manchester Airport Group",
              speakerBio:
                "Abdurrahman Ismail is a programmer and technical lead with over 12 years of software development experience, currently on the technical team at Manchester Airport Group. He creates specialized technical content on programming, modern technologies, and AI, focusing on simplifying concepts and sharing practical expertise. He builds AI-powered applications and shares tips, ideas, and hands-on experiences that help developers and entrepreneurs get the most from AI tools to boost productivity and accelerate building digital products.",
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
            {
              title: "ERP Resource Management Systems and Their Future",
              desc: "A practical introduction to resource management software in modern enterprises.",
              speaker: "Moustafa Abdul Aziz",
              speakerImage: "moustafa-abdul-aziz",
              speakerTagline: "Engineer & programmer — ERP",
              speakerBio:
                "Engineer and programmer; computer engineering graduate who has worked on many ERP projects as a programmer and project manager.",
              tags: ["erp", "management-software"],
            },
          ],
        },
      ],
    },
    guests: {
      label: "Conference Guests",
      title: "Speakers & Guests",
      subtitle: "Meet the speakers and guests of the Emerging Technologies Conference 2026.",
    },
    startupBooth: {
      title: "Apply for a Startup Booth",
      subtitle: "We are accepting applications from startups to participate with an exhibition booth at the Emerging Technologies Conference 2026.",
      button: "Apply Now",
      note: "ETC 2026 · Startup booth applications open",
      applyVia: "Applications are now open via the online application form.",
      badge: "Startup Booth",
      backToHome: "Back to ETC 2026",
      disclaimer: "This application is for startups seeking an exhibition booth — not for student attendance registration.",
      teaser: "Representing a startup?",
      teaserLink: "Apply for a booth",
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
        { q: "Where and when is the conference?", a: "In Istanbul: Day 1, Saturday June 27 (10:00–19:00) at Eyyüpsultan TÜGVA for lectures; Day 2, Sunday June 28 at Florya TÜGVA for workshops." },
        { q: "Is registration free?", a: "Yes, registration is free for students with a limited number of seats." },
        { q: "What languages are used?", a: "Sessions are delivered in Arabic, with some in Turkish and English." },
        { q: "Do I need prior technical experience for workshops?", a: "Most workshops are designed as an introduction, suitable for beginners and intermediates." },
        { q: "How can startups apply for a booth?", a: "Startups can apply on the dedicated Startup Booth page on this site (/2026/startups) — not through the student registration form." },
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
      startupBooth: "Startup Booth",
      website: "ibtikar.org.tr",
    },
  },
}
