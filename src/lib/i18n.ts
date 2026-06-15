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
}

export type Dict = {
  dir: "rtl" | "ltr"
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
    attendees: string
    attendeesValue: string
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
  topics: { label: string; title: string; subtitle: string; items: Track[] }
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
  cta: { title: string; subtitle: string; button: string; note: string; comingSoon: string }
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
      attendees: "الحضور",
      attendeesValue: "200 طالب + ضيوف",
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
        { value: "+200", label: "طالب وضيف" },
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
      items: [
        { title: "الذكاء الاصطناعي مفتوح المصدر — امتلك ذكائك الاصطناعي", desc: "محاضرة نظريّة تقدّم مدخلًا في عالم النماذج المفتوحة والقدرة على امتلاك ذكائك الاصطناعي وبنائه وتشغيله.", duration: "45 دقيقة", tags: ["AI", "open-source"] },
        {
          title: "الذكاء الاصطناعي الوكيل في عصرٍ متسارع",
          desc: "تتمحور المحاضرة حول تطوّر الأنظمة الذكية المستقلة التي تتّخذ القرارات وتنفّذ المهام بكفاءة عالية، واستعراض كيفية بناء وكلاء ذكيّين قادرين على التعاون والتكيّف مع بيئات معقّدة، مع تسليط الضوء على التطبيقات العملية والتحديات التي تواجه تطويرها.",
          duration: "45 دقيقة",
          tags: ["agentic-ai", "automation"],
        },
        { title: "التقنيات في المجال الصحّي", desc: "عناوين مقترحة في المجال الصحّي — التفاصيل قيد التحديد.", duration: "45 دقيقة", tags: ["health-tech"] },
        { title: "إنترنت الأشياء — تقنيات ذكيّة لمجتمع صاعد", desc: "محاضرة نظريّة تستكشف كيف تبني الأجهزة المتّصلة بنية تحتيّة ذكيّة تخدم المجتمعات الصاعدة.", duration: "45 دقيقة", tags: ["IoT", "smart-city"] },
        { title: "السيادة الرقميّة والتهديد القومي — هل نقلق أم نحذر", desc: "نقاش حول البيانات والبنية التحتية الرقمية والأمن القومي في عالمٍ مترابط.", duration: "45 دقيقة", tags: ["sovereignty", "security"] },
        { title: "برمجيّات ملطّخة بالدم — هل نحن شركاء في الجريمة", desc: "جلسة نقاشيّة حول أخلاقيّات البرمجة ومسؤوليّة المطوّر في عالمٍ تتقاطع فيه التقنية مع القيم الإنسانيّة.", duration: "45 دقيقة", tags: ["ethics", "panel"] },
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
      day1date: "السبت · 27 يونيو · 10:30–18:00",
      day2: "اليوم الثاني",
      day2date: "الأحد · 28 يونيو · ورش العمل",
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
            { title: "ورشة عمل في التقنيّات الطبيّة", desc: "ورشة تطبيقيّة في التقنيات الطبيّة — التفاصيل قيد التحديد.", tags: ["health-tech", "r-programming", "python", "analytics"] },
            { title: "هندسة الأوامر السريعة — ابنِ تطبيقك في نصف ساعة", desc: "تطوير تطبيق برمجي باستخدام هندسة الأوامر والذكاء الاصطناعي.", tags: ["ai", "prompt-engineering", "vibe-coding", "programming"] },
            { title: "ورشة عمل في DeepMind و VLLM", desc: "ورشة تطبيقيّة في تشغيل النماذج الكبيرة بكفاءة باستخدام قواعد البيانات الشعاعيّة.", tags: ["ai", "vector-database", "vllm", "python"] },
          ],
        },
        {
          name: "الفقرة الثانية",
          items: [
            {
              title: "ورشة عمل في مهارات الأمن السّيبراني — محاكاة الاختراق",
              desc: "تطبيق سيناريوهات محاكاة لاختبار الاختراق وفحص الثغرات الشائعة، بالإضافة إلى تجربة استغلال هذه الثغرات.",
              tags: ["security", "pentest"],
            },
            {
              title: "ورشة عمل في نماذج الذكاء الاصطناعي مفتوحة المصدر وتدريبها",
              desc: "استخدام نماذج من Hugging Face لفهم دور النماذج المدرّبة مسبقًا في تأدية المهام.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "ورشة عمل في أدوات الذكاء الاصطناعي المجّانيّة بفعّاليّة",
              desc: "استخدام مجموعة من أدوات الذكاء الاصطناعي المجانية المصممة لتعزيز الإنتاجية وتسهيل سير العمل، مع تمارين عملية في معالجة البيانات وإدارة المشاريع.",
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
      subtitle: "200 طالب + ضيوف — المقاعد محدودة. التسجيل عبر منصّة خارجيّة.",
      button: "سجّل مجّانًا",
      note: "تجمّع إبتكار · التسجيل مجّاني للطلاب · إسطنبول 2026",
      comingSoon: "سيُفعَّل رابط التسجيل الخارجي خلال أيّام قليلة.",
    },
    faq: {
      label: "الأسئلة الشائعة",
      title: "كل ما تحتاج معرفته",
      items: [
        { q: "من يُنظّم المؤتمر؟", a: "يُنظّم المؤتمر تجمّع إبتكار، الفريق التطوّعي الذي يجمع طلّاب الجامعات الناطقين بالعربية المهتمّين بالابتكار والتقنية. تعرّف أكثر على ibtikar.org.tr" },
        { q: "أين ومتى يُقام المؤتمر؟", a: "يُقام المؤتمر في إسطنبول يومي السبت 27 يونيو (10:30–18:00) والأحد 28 يونيو 2026 — اليوم الأول محاضرات نظريّة، واليوم الثاني ورش عمل." },
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
      attendees: "Katılımcı",
      attendeesValue: "200 öğrenci + misafir",
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
        { value: "200+", label: "öğrenci ve misafir" },
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
      items: [
        { title: "Açık Kaynak YZ — Yapay Zekana Sahip Ol", desc: "Açık modeller dünyasına giriş ve yapay zekanı sahiplenme, inşa etme ve çalıştırma.", duration: "45 dk", tags: ["AI", "open-source"] },
        {
          title: "Hızlanan Çağda Ajan Tabanlı YZ",
          desc: "Karar veren ve görevleri verimli yürüten otonom sistemlerin evrimi; karmaşık ortamlara uyum sağlayan ajanlar inşa etmek, pratik uygulamalar ve geliştirme zorlukları.",
          duration: "45 dk",
          tags: ["agentic-ai", "automation"],
        },
        { title: "Sağlık Alanında Teknolojiler", desc: "Sağlık alanında önerilen başlıklar — detaylar belirlenecek.", duration: "45 dk", tags: ["health-tech"] },
        { title: "Nesnelerin İnterneti — Yükselen Toplumlar İçin Akıllı Teknolojiler", desc: "Bağlı cihazların yükselen toplumlar için akıllı altyapı kurması.", duration: "45 dk", tags: ["IoT", "smart-city"] },
        { title: "Dijital Egemenlik ve Ulusal Tehdit — Endişe mi, Dikkat mi?", desc: "Veri, dijital altyapı ve ulusal güvenlik üzerine tartışma.", duration: "45 dk", tags: ["sovereignty", "security"] },
        { title: "Kanla Lekelenmiş Yazılım — Suç Ortağı mıyız?", desc: "Yazılım etiği ve geliştirici sorumluluğu üzerine panel.", duration: "45 dk", tags: ["ethics", "panel"] },
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
      day1date: "Cumartesi · 27 Haz · 10:30–18:00",
      day2: "2. Gün",
      day2date: "Pazar · 28 Haz · Atölyeler",
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
            { title: "Tıbbi Teknolojiler Atölyesi", desc: "Tıbbi teknolojilerde uygulamalı atölye — detaylar belirlenecek.", tags: ["health-tech", "r-programming", "python", "analytics"] },
            { title: "Hızlı Prompt Mühendisliği — Yarım Saatte Uygulama", desc: "Prompt mühendisliği ve yapay zeka ile yazılım uygulaması geliştirme.", tags: ["ai", "prompt-engineering", "vibe-coding", "programming"] },
            { title: "DeepMind ve VLLM Atölyesi", desc: "Vektör veritabanlarıyla büyük modelleri verimli çalıştırma.", tags: ["ai", "vector-database", "vllm", "python"] },
          ],
        },
        {
          name: "İkinci Oturum",
          items: [
            {
              title: "Siber Güvenlik Becerileri — Sızma Simülasyonu",
              desc: "Sızma testi simülasyon senaryoları, yaygın zafiyetlerin taranması ve istismar deneyimi.",
              tags: ["security", "pentest"],
            },
            {
              title: "Açık Kaynak YZ Modelleri ve Eğitimi",
              desc: "Görevleri yerine getirmede önceden eğitilmiş modellerin rolünü anlamak için Hugging Face modelleri.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "Ücretsiz YZ Araçlarını Etkin Kullanma",
              desc: "Verimliliği artırmak ve iş akışını kolaylaştırmak için ücretsiz YZ araçları; veri işleme ve proje yönetiminde pratik uygulamalar.",
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
      subtitle: "200 öğrenci + misafir — kontenjan sınırlı. Kayıt harici bir platform üzerinden yapılacak.",
      button: "Ücretsiz Kayıt Ol",
      note: "İbtikar Topluluğu · Öğrenciler için ücretsiz · İstanbul 2026",
      comingSoon: "Harici kayıt bağlantısı birkaç gün içinde aktif olacak.",
    },
    faq: {
      label: "Sıkça Sorulan Sorular",
      title: "Bilmen gereken her şey",
      items: [
        { q: "Konferansı kim düzenliyor?", a: "Konferans, inovasyon ve teknolojiyle ilgilenen Arapça konuşan üniversite öğrencilerini bir araya getiren gönüllü ekip İbtikar Topluluğu tarafından düzenlenmektedir. Daha fazlası için ibtikar.org.tr" },
        { q: "Konferans nerede ve ne zaman?", a: "Konferans İstanbul'da; 27 Haziran Cumartesi (10:30–18:00) teorik dersler, 28 Haziran Pazar atölyeler." },
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
      attendees: "Attendees",
      attendeesValue: "200 students + guests",
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
        { value: "200+", label: "students & guests" },
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
      items: [
        { title: "Open-Source AI — Own Your AI", desc: "A theoretical introduction to open models and owning, building, and running your own AI.", duration: "45 min", tags: ["AI", "open-source"] },
        {
          title: "Agentic AI in a Fast-Moving Era",
          desc: "The evolution of autonomous intelligent systems that make decisions and execute tasks efficiently; building agents that collaborate and adapt to complex environments, with practical applications and development challenges.",
          duration: "45 min",
          tags: ["agentic-ai", "automation"],
        },
        { title: "Technologies in Healthcare", desc: "Proposed topics in healthcare — details to be confirmed.", duration: "45 min", tags: ["health-tech"] },
        { title: "IoT — Smart Tech for a Rising Society", desc: "How connected devices build intelligent infrastructure for emerging communities.", duration: "45 min", tags: ["IoT", "smart-city"] },
        { title: "Digital Sovereignty & National Threat — Worry or Beware?", desc: "A discussion on data, digital infrastructure, and national security in a connected world.", duration: "45 min", tags: ["sovereignty", "security"] },
        { title: "Blood-Stained Software — Are We Accomplices?", desc: "A panel discussion on software ethics and developer responsibility.", duration: "45 min", tags: ["ethics", "panel"] },
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
      day1date: "Saturday · Jun 27 · 10:30–18:00",
      day2: "Day 2",
      day2date: "Sunday · Jun 28 · Workshops",
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
            { title: "Medical Technologies Workshop", desc: "Hands-on workshop in medical technologies — details to be confirmed.", tags: ["health-tech", "r-programming", "python", "analytics"] },
            { title: "Rapid Prompt Engineering — Build Your App in 30 Min", desc: "Developing a software app using prompt engineering and AI.", tags: ["ai", "prompt-engineering", "vibe-coding", "programming"] },
            { title: "DeepMind & VLLM Workshop", desc: "Running large models efficiently with vector databases.", tags: ["ai", "vector-database", "vllm", "python"] },
          ],
        },
        {
          name: "Session Two",
          items: [
            {
              title: "Cybersecurity Skills — Hack Simulation",
              desc: "Simulating penetration testing scenarios, scanning common vulnerabilities, and experiencing exploitation techniques.",
              tags: ["security", "pentest"],
            },
            {
              title: "Open-Source AI Models & Training",
              desc: "Using Hugging Face models to understand the role of pre-trained models in performing tasks.",
              tags: ["ai", "huggingface", "training"],
            },
            {
              title: "Using Free AI Tools Effectively",
              desc: "Free AI tools designed to boost productivity and streamline workflows, with practical exercises in data processing and project management.",
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
      subtitle: "200 students + guests — limited seats. Registration is via an external platform.",
      button: "Register for Free",
      note: "Ibtikar Assembly · Free for students · Istanbul 2026",
      comingSoon: "The external registration link will be available in a few days.",
    },
    faq: {
      label: "FAQ",
      title: "Everything you need to know",
      items: [
        { q: "Who organizes the conference?", a: "The conference is organized by Ibtikar Assembly, a volunteer team of Arabic-speaking university students passionate about innovation and technology. Learn more at ibtikar.org.tr" },
        { q: "Where and when is the conference?", a: "In Istanbul: Saturday June 27 (10:30–18:00) for lectures, Sunday June 28 for workshops." },
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
