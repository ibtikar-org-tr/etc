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
  nav: { about: string; agenda: string; topics: string; workshops: string; faq: string; register: string }
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
  cta: { title: string; subtitle: string; button: string; note: string }
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
    nav: { about: "عن المؤتمر", agenda: "الجدول", topics: "المحاور", workshops: "ورش العمل", faq: "الأسئلة", register: "سجّل الآن" },
    hero: {
      badge: "إسطنبول · 27–28 يونيو 2026",
      organizer: "تنظّمه تجمّع إبتكار",
      titleTop: "مؤتمر التّقنيّات",
      titleBottom: "الصّاعدة 2026",
      subtitle:
        "مؤتمر طلّابي تنظّمه تجمّع إبتكار، يسلّط الضّوء على أحدث التقنيات من الناحية التّقنيّة، عبر محاضرات نظريّة معمّقة وورش عمل تطبيقيّة في الذكاء الاصطناعي والأمن السيبراني وإنترنت الأشياء وأكثر.",
      register: "سجّل الآن",
      viewAgenda: "استعرض الجدول",
      city: "المكان",
      cityValue: "إسطنبول، تركيا",
      dates: "التاريخ",
      datesValue: "27–28 يونيو 2026",
      attendees: "الحضور",
      attendeesValue: "+200 طالب",
      days: "المدّة",
      daysValue: "يومان",
    },
    about: {
      label: "عن المؤتمر",
      title: "حيث تلتقي العقول الصّاعدة بالتقنيات الصّاعدة",
      body: "مؤتمر طلّابي يتناول مواضيع مختلفة في التقنيّات الحديثة من النّاحية التّقنيّة. يتألف من مجموعة محاضرات نظريّة تقدّم مدخلًا في المجالات التقنية الصاعدة، إلى جانب ورش عمل عمليّة تشكّل بوّابة للدخول إلى كل تقنية أو مجال.",
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
    },
    topics: {
      label: "اليوم الأول · المحاضرات النظريّة",
      title: "محاور المؤتمر",
      subtitle: "ستّ محاضرات نظريّة معمّقة، مدّة كلٍّ منها 45 دقيقة.",
      items: [
        { title: "الذكاء الاصطناعي مفتوح المصدر", desc: "امتلك ذكاءك الاصطناعي — رحلة في عالم النماذج المفتوحة والقدرة على بنائها وتشغيلها محليًّا.", duration: "45 دقيقة", tags: ["AI", "open-source"] },
        { title: "الذكاء الاصطناعي الوكيل في عصرٍ متسارع", desc: "تطوّر الأنظمة الذكية المستقلّة التي تتّخذ القرارات وتنفّذ المهام، وكيفية بناء وكلاء قادرين على التعاون والتكيّف.", duration: "45 دقيقة", tags: ["agentic-ai", "automation"] },
        { title: "التقنيات في المجال الصحّي", desc: "كيف تعيد التقنيات الحديثة تشكيل الرعاية الصحيّة، من التحليلات إلى التشخيص المدعوم بالذكاء الاصطناعي.", duration: "45 دقيقة", tags: ["health-tech", "data"] },
        { title: "إنترنت الأشياء — تقنيات ذكيّة لمجتمع صاعد", desc: "كيف تبني الأجهزة المتّصلة بنية تحتيّة ذكيّة تخدم المجتمعات والمدن الناشئة.", duration: "45 دقيقة", tags: ["IoT", "smart-city"] },
        { title: "السيادة الرقميّة والتهديد القومي", desc: "هل نقلق أم نحذر؟ نقاش حول البيانات والبنية التحتية الرقمية والأمن القومي في عالمٍ مترابط.", duration: "45 دقيقة", tags: ["sovereignty", "security"] },
        { title: "برمجيّات ملطّخة بالدم", desc: "هل نحن شركاء في الجريمة؟ جلسة نقاشيّة حول أخلاقيّات البرمجة ومسؤوليّة المطوّر.", duration: "45 دقيقة", tags: ["ethics", "panel"] },
      ],
    },
    shorts: {
      label: "فقرات قصيرة بين المحاضرات",
      title: "لحظات مميّزة",
      items: [
        { title: "مقدّمة المؤتمر", desc: "كلمة مسؤول المؤتمر.", duration: "15 دقيقة" },
        { title: "كلمة رائد أعمال", desc: "نستضيف رائد أعمال يحكي تجربته في شركته التقنيّة المتخصّصة.", duration: "15 دقيقة" },
        { title: "كلمة مسؤول", desc: "استضافة مسؤول من الحكومة أو النقابة أو التجمّع إن أمكن.", duration: "15 دقيقة" },
        { title: "كلمة إدارة إبتكار", desc: "آخر تطوّرات إبتكار والخطط المستقبليّة مع عرض فيديو.", duration: "25 دقيقة" },
        { title: "مسابقة قصيرة", desc: "أسئلة عن المحاضرة السابقة وجوائز.", duration: "15 دقيقة" },
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
            { title: "ورشة في التقنيّات الطبيّة", desc: "تحليل البيانات الصحيّة باستخدام أدوات حديثة.", tags: ["health-tech", "r", "python", "analytics"] },
            { title: "هندسة الأوامر — ابنِ تطبيقك في نصف ساعة", desc: "تطوير تطبيق برمجي باستخدام هندسة الأوامر والذكاء الاصطناعي.", tags: ["ai", "prompt-engineering", "vibe-coding"] },
            { title: "ورشة في DeepMind و vLLM", desc: "تشغيل النماذج الكبيرة بكفاءة باستخدام قواعد البيانات الشعاعيّة.", tags: ["ai", "vector-db", "vllm", "python"] },
          ],
        },
        {
          name: "الفقرة الثانية",
          items: [
            { title: "مهارات الأمن السّيبراني — محاكاة الاختراق", desc: "سيناريوهات محاكاة لاختبار الاختراق وفحص الثغرات الشائعة واستغلالها.", tags: ["security", "pentest"] },
            { title: "نماذج الذكاء الاصطناعي مفتوحة المصدر وتدريبها", desc: "استخدام نماذج Hugging Face لفهم دور النماذج المدرّبة مسبقًا.", tags: ["ai", "huggingface", "training"] },
            { title: "أدوات الذكاء الاصطناعي المجّانيّة بفعّاليّة", desc: "تعزيز الإنتاجيّة وتسهيل سير العمل في معالجة البيانات وإدارة المشاريع.", tags: ["ai", "productivity", "tools"] },
          ],
        },
        {
          name: "الفقرة الثالثة",
          items: [
            { title: "DevOps — CI/CD", desc: "بناء خطوط تكامل ونشر مستمرّ احترافيّة.", tags: ["git", "devops", "ci-cd"] },
            { title: "استراتيجيّة اختيار البنية الأفضل للأكواد", desc: "الخدمات المصغّرة والواجهات المصغّرة و serverless وزمن المعالجة.", tags: ["micro-services", "micro-frontends", "serverless"] },
            { title: "أنظمة إدارة الموارد العصريّة ERP", desc: "مدخل إلى برمجيّات إدارة الموارد في المؤسسات الحديثة.", tags: ["erp", "management"] },
          ],
        },
      ],
    },
    cta: {
      title: "احجز مقعدك في مؤتمر التّقنيّات الصّاعدة",
      subtitle: "المقاعد محدودة بـ 200 طالب. سجّل الآن قبل اكتمال العدد.",
      button: "سجّل مجّانًا",
      note: "تجمّع إبتكار · التسجيل مجّاني للطلاب · إسطنبول 2026",
    },
    faq: {
      label: "الأسئلة الشائعة",
      title: "كل ما تحتاج معرفته",
      items: [
        { q: "من يُنظّم المؤتمر؟", a: "يُنظّم المؤتمر تجمّع إبتكار، الفريق التطوّعي الذي يجمع طلّاب الجامعات الناطقين بالعربية المهتمّين بالابتكار والتقنية. تعرّف أكثر على ibtikar.org.tr" },
        { q: "أين ومتى يُقام المؤتمر؟", a: "يُقام المؤتمر في إسطنبول يومي السبت والأحد، 27–28 يونيو 2026." },
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
    nav: { about: "Hakkında", agenda: "Program", topics: "Konular", workshops: "Atölyeler", faq: "SSS", register: "Kayıt Ol" },
    hero: {
      badge: "İstanbul · 27–28 Haziran 2026",
      organizer: "İbtikar Meclisi düzenliyor",
      titleTop: "Yükselen Teknolojiler",
      titleBottom: "Konferansı 2026",
      subtitle:
        "İbtikar Meclisi tarafından düzenlenen; yapay zeka, siber güvenlik, nesnelerin interneti ve daha fazlasında derinlemesine teorik dersler ve uygulamalı atölyelerle en yeni teknolojileri teknik açıdan ele alan bir öğrenci konferansı.",
      register: "Kayıt Ol",
      viewAgenda: "Programı Gör",
      city: "Konum",
      cityValue: "İstanbul, Türkiye",
      dates: "Tarih",
      datesValue: "27–28 Haziran 2026",
      attendees: "Katılımcı",
      attendeesValue: "200+ öğrenci",
      days: "Süre",
      daysValue: "2 gün",
    },
    about: {
      label: "Hakkında",
      title: "Yükselen zihinlerin yükselen teknolojilerle buluştuğu yer",
      body: "Modern teknolojinin çeşitli konularını teknik açıdan ele alan bir öğrenci konferansı. Yükselen teknik alanlara giriş niteliğinde teorik derslerin yanı sıra, her teknoloji ve alana kapı açan uygulamalı atölyelerden oluşur.",
      organizerLabel: "Düzenleyen",
      organizerBody:
        "İbtikar Meclisi, inovasyon, teknoloji, araştırma ve geliştirmeyle ilgilenen Arapça konuşan üniversite öğrencilerini bir araya getiren gönüllü bir ekiptir. Öğrencileri güçlendirmeyi ve teknik becerilerini zenginleştirmeyi hedefler.",
      organizerLink: "İbtikar Meclisi hakkında",
      stats: [
        { value: "200+", label: "öğrenci ve misafir" },
        { value: "6", label: "ana ders" },
        { value: "9", label: "atölye" },
        { value: "2", label: "yoğun gün" },
      ],
    },
    topics: {
      label: "1. Gün · Teorik Dersler",
      title: "Konferans Konuları",
      subtitle: "Her biri 45 dakikalık altı derinlemesine teorik ders.",
      items: [
        { title: "Açık Kaynak Yapay Zeka", desc: "Yapay zekana sahip ol — açık modeller dünyasında yerel olarak inşa etme ve çalıştırma yolculuğu.", duration: "45 dk", tags: ["AI", "open-source"] },
        { title: "Hızlanan Çağda Ajan Tabanlı YZ", desc: "Karar veren ve görevleri yürüten otonom zeki sistemlerin evrimi; iş birliği yapabilen ajanlar inşa etmek.", duration: "45 dk", tags: ["agentic-ai", "automation"] },
        { title: "Sağlık Alanında Teknolojiler", desc: "Modern teknolojiler sağlık hizmetlerini analitikten YZ destekli teşhise nasıl yeniden şekillendiriyor.", duration: "45 dk", tags: ["health-tech", "data"] },
        { title: "Nesnelerin İnterneti — Akıllı Teknolojiler", desc: "Bağlı cihazlar yükselen toplumlar ve şehirler için nasıl akıllı altyapı kuruyor.", duration: "45 dk", tags: ["IoT", "smart-city"] },
        { title: "Dijital Egemenlik ve Ulusal Tehdit", desc: "Endişe mi etmeli, dikkat mi? Veri, dijital altyapı ve ulusal güvenlik üzerine bir tartışma.", duration: "45 dk", tags: ["sovereignty", "security"] },
        { title: "Kanla Lekelenmiş Yazılım", desc: "Suç ortağı mıyız? Yazılım etiği ve geliştirici sorumluluğu üzerine bir panel.", duration: "45 dk", tags: ["ethics", "panel"] },
      ],
    },
    shorts: {
      label: "Dersler Arası Kısa Bölümler",
      title: "Öne Çıkan Anlar",
      items: [
        { title: "Açılış", desc: "Konferans sorumlusunun konuşması.", duration: "15 dk" },
        { title: "Girişimci Konuşması", desc: "Teknoloji şirketindeki deneyimini anlatan bir girişimci ağırlıyoruz.", duration: "15 dk" },
        { title: "Yetkili Konuşması", desc: "Mümkünse devlet, oda veya birlikten bir yetkiliyi ağırlıyoruz.", duration: "15 dk" },
        { title: "İbtikar Yönetimi", desc: "İbtikar'ın son gelişmeleri ve gelecek planları, video gösterimiyle.", duration: "25 dk" },
        { title: "Kısa Yarışma", desc: "Önceki ders hakkında sorular ve ödüller.", duration: "15 dk" },
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
            { title: "Tıbbi Teknolojiler Atölyesi", desc: "Modern araçlarla sağlık verilerinin analizi.", tags: ["health-tech", "r", "python", "analytics"] },
            { title: "Prompt Mühendisliği — Yarım Saatte Uygulama", desc: "Prompt mühendisliği ve yapay zeka ile yazılım uygulaması geliştirme.", tags: ["ai", "prompt-engineering", "vibe-coding"] },
            { title: "DeepMind ve vLLM Atölyesi", desc: "Vektör veritabanlarıyla büyük modelleri verimli çalıştırma.", tags: ["ai", "vector-db", "vllm", "python"] },
          ],
        },
        {
          name: "İkinci Oturum",
          items: [
            { title: "Siber Güvenlik Becerileri — Sızma Simülasyonu", desc: "Sızma testi senaryoları, yaygın zafiyetlerin taranması ve istismarı.", tags: ["security", "pentest"] },
            { title: "Açık Kaynak YZ Modelleri ve Eğitimi", desc: "Önceden eğitilmiş modellerin rolünü anlamak için Hugging Face modelleri.", tags: ["ai", "huggingface", "training"] },
            { title: "Ücretsiz YZ Araçlarını Etkin Kullanma", desc: "Veri işleme ve proje yönetiminde verimliliği artırma.", tags: ["ai", "productivity", "tools"] },
          ],
        },
        {
          name: "Üçüncü Oturum",
          items: [
            { title: "DevOps — CI/CD", desc: "Profesyonel sürekli entegrasyon ve dağıtım hatları kurma.", tags: ["git", "devops", "ci-cd"] },
            { title: "En İyi Kod Mimarisini Seçme Stratejisi", desc: "Mikro servisler, mikro önyüzler, serverless ve CPU süresi.", tags: ["micro-services", "micro-frontends", "serverless"] },
            { title: "Modern ERP Kaynak Yönetim Sistemleri", desc: "Modern kurumlarda kaynak yönetimi yazılımlarına giriş.", tags: ["erp", "management"] },
          ],
        },
      ],
    },
    cta: {
      title: "Yükselen Teknolojiler Konferansı'ndaki yerini ayırt",
      subtitle: "Kontenjan 200 öğrenci ile sınırlıdır. Dolmadan kayıt ol.",
      button: "Ücretsiz Kayıt Ol",
      note: "İbtikar Meclisi · Öğrenciler için ücretsiz · İstanbul 2026",
    },
    faq: {
      label: "Sıkça Sorulan Sorular",
      title: "Bilmen gereken her şey",
      items: [
        { q: "Konferansı kim düzenliyor?", a: "Konferans, inovasyon ve teknolojiyle ilgilenen Arapça konuşan üniversite öğrencilerini bir araya getiren gönüllü ekip İbtikar Meclisi tarafından düzenlenmektedir. Daha fazlası için ibtikar.org.tr" },
        { q: "Konferans nerede ve ne zaman?", a: "Konferans İstanbul'da, 27–28 Haziran 2026 Cumartesi ve Pazar günleri yapılacak." },
        { q: "Kayıt ücretsiz mi?", a: "Evet, öğrenciler için kayıt ücretsizdir ve kontenjan sınırlıdır." },
        { q: "Konferansın dilleri nelerdir?", a: "Etkinlikler Arapça sunulur, bazıları Türkçe ve İngilizcedir." },
        { q: "Atölyeler için ön deneyim gerekli mi?", a: "Çoğu atölye alana giriş olarak tasarlandı, başlangıç ve orta seviyeye uygundur." },
        { q: "Katılım sertifikası alacak mıyım?", a: "Evet, katılımcılar konferans sonrası dijital katılım sertifikası alır." },
      ],
    },
    footer: {
      org: "İbtikar Meclisi",
      orgSub: "Ibtikar Assembly",
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
    nav: { about: "About", agenda: "Agenda", topics: "Topics", workshops: "Workshops", faq: "FAQ", register: "Register" },
    hero: {
      badge: "Istanbul · June 27–28, 2026",
      organizer: "Hosted by Ibtikar Assembly",
      titleTop: "Emerging Technologies",
      titleBottom: "Conference 2026",
      subtitle:
        "A student conference hosted by Ibtikar Assembly, spotlighting the latest technologies from a technical angle — through in-depth theoretical lectures and hands-on workshops in AI, cybersecurity, IoT, and more.",
      register: "Register Now",
      viewAgenda: "View Agenda",
      city: "Location",
      cityValue: "Istanbul, Türkiye",
      dates: "Dates",
      datesValue: "June 27–28, 2026",
      attendees: "Attendees",
      attendeesValue: "200+ students",
      days: "Duration",
      daysValue: "2 days",
    },
    about: {
      label: "About",
      title: "Where rising minds meet emerging technologies",
      body: "A student conference covering diverse topics in modern technology from a technical perspective. It combines theoretical lectures that introduce emerging technical fields with practical workshops that serve as a gateway into each technology and domain.",
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
    },
    topics: {
      label: "Day 1 · Theoretical Lectures",
      title: "Conference Topics",
      subtitle: "Six in-depth theoretical lectures, 45 minutes each.",
      items: [
        { title: "Open-Source AI", desc: "Own your AI — a journey through open models and the power to build and run them locally.", duration: "45 min", tags: ["AI", "open-source"] },
        { title: "Agentic AI in a Fast-Moving Era", desc: "The evolution of autonomous systems that make decisions and execute tasks, and how to build agents that collaborate and adapt.", duration: "45 min", tags: ["agentic-ai", "automation"] },
        { title: "Technologies in Healthcare", desc: "How modern technology is reshaping healthcare, from analytics to AI-powered diagnostics.", duration: "45 min", tags: ["health-tech", "data"] },
        { title: "IoT — Smart Tech for a Rising Society", desc: "How connected devices build intelligent infrastructure serving emerging communities and cities.", duration: "45 min", tags: ["IoT", "smart-city"] },
        { title: "Digital Sovereignty & National Threat", desc: "Worry or beware? A discussion on data, digital infrastructure, and national security in a connected world.", duration: "45 min", tags: ["sovereignty", "security"] },
        { title: "Blood-Stained Software", desc: "Are we accomplices? A panel on software ethics and developer responsibility.", duration: "45 min", tags: ["ethics", "panel"] },
      ],
    },
    shorts: {
      label: "Short Segments Between Lectures",
      title: "Highlight Moments",
      items: [
        { title: "Conference Opening", desc: "Opening remarks by the conference lead.", duration: "15 min" },
        { title: "Entrepreneur Talk", desc: "We host an entrepreneur sharing their journey in a specialized tech company.", duration: "15 min" },
        { title: "Official Address", desc: "Hosting an official from government, union, or association if possible.", duration: "15 min" },
        { title: "Ibtikar Management", desc: "Latest developments at Ibtikar and future plans, with a video showcase.", duration: "25 min" },
        { title: "Quick Quiz", desc: "Questions about the previous lecture with prizes.", duration: "15 min" },
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
            { title: "Medical Technologies Workshop", desc: "Analyzing health data using modern tools.", tags: ["health-tech", "r", "python", "analytics"] },
            { title: "Prompt Engineering — Build Your App in 30 Min", desc: "Developing a software app using prompt engineering and AI.", tags: ["ai", "prompt-engineering", "vibe-coding"] },
            { title: "DeepMind & vLLM Workshop", desc: "Running large models efficiently with vector databases.", tags: ["ai", "vector-db", "vllm", "python"] },
          ],
        },
        {
          name: "Session Two",
          items: [
            { title: "Cybersecurity Skills — Hack Simulation", desc: "Simulating penetration testing scenarios, scanning and exploiting common vulnerabilities.", tags: ["security", "pentest"] },
            { title: "Open-Source AI Models & Training", desc: "Using Hugging Face models to understand the role of pre-trained models.", tags: ["ai", "huggingface", "training"] },
            { title: "Using Free AI Tools Effectively", desc: "Boosting productivity in data processing and project management.", tags: ["ai", "productivity", "tools"] },
          ],
        },
        {
          name: "Session Three",
          items: [
            { title: "DevOps — CI/CD", desc: "Building professional continuous integration and deployment pipelines.", tags: ["git", "devops", "ci-cd"] },
            { title: "Choosing the Best Code Architecture", desc: "Microservices, micro-frontends, module federation, serverless, and CPU time.", tags: ["micro-services", "micro-frontends", "serverless"] },
            { title: "Modern ERP Resource Systems", desc: "An introduction to resource management software in modern enterprises.", tags: ["erp", "management"] },
          ],
        },
      ],
    },
    cta: {
      title: "Reserve your seat at the Emerging Technologies Conference",
      subtitle: "Seats are limited to 200 students. Register before they're gone.",
      button: "Register for Free",
      note: "Ibtikar Assembly · Free for students · Istanbul 2026",
    },
    faq: {
      label: "FAQ",
      title: "Everything you need to know",
      items: [
        { q: "Who organizes the conference?", a: "The conference is organized by Ibtikar Assembly, a volunteer team of Arabic-speaking university students passionate about innovation and technology. Learn more at ibtikar.org.tr" },
        { q: "Where and when is the conference?", a: "The conference takes place in Istanbul on Saturday and Sunday, June 27–28, 2026." },
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
