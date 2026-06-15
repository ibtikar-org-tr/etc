import type { Lang } from "@/lib/i18n"

type Track = {
  title: string
  desc: string
  tags?: string[]
}

export type Dict2024 = {
  dir: "rtl" | "ltr"
  nav: {
    about: string
    topics: string
    workshops: string
    gallery: string
    backTo2026: string
    edition2024: string
  }
  hero: {
    badge: string
    archived: string
    titleTop: string
    titleBottom: string
    subtitle: string
    viewTopics: string
    viewGallery: string
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
    stats: { value: string; label: string }[]
  }
  topics: { label: string; title: string; subtitle: string; items: Track[] }
  workshops: { label: string; title: string; subtitle: string; items: Track[] }
  gallery: { label: string; title: string; subtitle: string }
  cta: { title: string; subtitle: string; button: string }
  footer: { dates: string }
}

export const dict2024: Record<Lang, Dict2024> = {
  ar: {
    dir: "rtl",
    nav: {
      about: "عن المؤتمر",
      topics: "المحاضرات",
      workshops: "ورش العمل",
      gallery: "معرض الصور",
      backTo2026: "النسخة الحالية 2026",
      edition2024: "ETC 2024",
    },
    hero: {
      badge: "إسطنبول · 17–18 فبراير 2024",
      archived: "أرشيف النسخة السابقة",
      titleTop: "مؤتمر التّقنيّات",
      titleBottom: "الصّاعدة 2024",
      subtitle:
        "مؤتمر طلّابي يسلّط الضّوء على مواضيع مختلفة في التقنيّات الحديثة، يتناولها من النّاحية التّقنيّة. يتألف من محاضرات نظريّة تقدّم مدخلًا في مجالات تقنية صاعدة، وورش عمل تقنية تعتبر مدخلًا لكل تقنية أو مجال.",
      viewTopics: "استعرض المحاضرات",
      viewGallery: "معرض الصور",
      city: "المكان",
      cityValue: "إسطنبول، تركيا",
      dates: "التاريخ",
      datesValue: "17–18 فبراير 2024",
      attendees: "الحضور",
      attendeesValue: "150 طالب + ضيوف",
      days: "المدّة",
      daysValue: "يومان",
    },
    about: {
      label: "عن المؤتمر",
      title: "حيث التقى الجيل الصّاعد بالتقنيات الصّاعدة",
      body: "مؤتمر طلّابي يسلّط الضّوء على مواضيع مختلفة في التقنيّات الحديثة، يتناولها من النّاحية التّقنيّة. يتألف المؤتمر من مجموعة من المحاضرات النظرية، حيث يتم تقديم مدخل في مجالات تقنية صاعدة في عالم التكنولوجيا. بالإضافة إلى ذلك، شمل المؤتمر ورش عمل تقنية تعتبر مدخلًا للتقنية أو المجال.",
      stats: [
        { value: "+150", label: "طالب وضيف" },
        { value: "6", label: "محاضرات نظريّة" },
        { value: "9", label: "ورش عمل" },
        { value: "2", label: "يوم مكثّف" },
      ],
    },
    topics: {
      label: "اليوم الأوّل · محاضرات نظريّة",
      title: "محاور المؤتمر",
      subtitle: "ستّ محاضرات نظريّة معمّقة في مجالات تقنية صاعدة.",
      items: [
        {
          title: "تقنيّات الـ Blockchain والـ Crypto",
          desc: "تتناول المحاضرة كيفية عمل تقنية Blockchain، وأهميتها في تحقيق الأمان والشفافية في التعاملات الرقمية. بالإضافة لمفهوم العملات المشفرة وكيفية استخدامها كوسيلة للتبادل الآمن والفعّال.",
          tags: ["blockchain", "crypto"],
        },
        {
          title: "تقنيّات الميتافيرس وتطوير الألعاب",
          desc: "تتناول المحاضرة مفهوم الميتافيرس كبيئة افتراضية متقدمة يمكنها دمج الواقع والعالم الافتراضي معًا. بالإضافة إلى كيفية استخدام تقنيات الميتافيرس لخلق تجارب ألعاب ذات أبعاد واقعية ومتطورة.",
          tags: ["metaverse", "game-dev"],
        },
        {
          title: "الذكاء الاصطناعي والفرص مفتوحة المصدر، ونماذج اللغة الضّخمة",
          desc: "تتمحور المحاضرة عن التقنيات المفتوحة المصدر في مجال الذكاء الاصطناعي وكيفية استفادة المطورين منها. بالإضافة إلى استعراض الابتكارات في نماذج اللغة الضّخمة وتسليط الضوء على التطورات الحديثة في فهم اللغة الطبيعية.",
          tags: ["ai", "open-source", "llm"],
        },
        {
          title: "الفرص في المجالات الطبيّة والدّوائيّة مع ظهور مشاريع مثل AlphaFold",
          desc: "تستعرض المحاضرة الفرص المتاحة في مجالات الطب والصناعة الدوائية مع تقدم مشاريع مثل AlphaFold. تتناول أيضًا كيف يمكن لتقنيات الذكاء الاصطناعي أن تحدث ثورة في فهمنا للهياكل البيولوجية وتصميم الدواء.",
          tags: ["health-tech", "alphafold"],
        },
        {
          title: "إنترنت الأشياء، والمُدُن الذّكيّة",
          desc: "تستكشف المحاضرة عالم إنترنت الأشياء (IoT) والمدن الذكية. تتمحور على استخدام هذه التقنية بهدف تحسين جودة الحياة وكيف يمكن أن تساهم في تحسين إدارة الموارد وخدمات الحياة اليومية.",
          tags: ["iot", "smart-city"],
        },
        {
          title: "الأمن السّيبراني والتحدّيات العصريّة",
          desc: "تستعرض المحاضرة مجال الأمن السيبراني وتسلط الضوء على التحديات العصرية التي يواجهها. فهم أساسيات الأمن السيبراني وكيفية حماية الأنظمة والبيانات من التهديدات الإلكترونية المتقدمة.",
          tags: ["security", "cyber"],
        },
      ],
    },
    workshops: {
      label: "اليوم الثّاني · ورشات عمل",
      title: "ورش عمل تطبيقيّة",
      subtitle: "تسع ورش عمل تطبيقية كمدخل عملي لكل مجال تقني.",
      items: [
        {
          title: "ورشة عمل تطوير الـ Blockchain",
          desc: "ورشة عمل تطبيقية يتم تطوير تطبيق Blockchain بسيط يساعد في فهم العقود الذكية والتطبيقات اللامركزية.",
          tags: ["blockchain", "smart-contracts"],
        },
        {
          title: "ورشة عمل تطوير تطبيقات AR",
          desc: "إنشاء تطبيق بسيط باستخدام تقنية الواقع المعزز (AR) وتجربة بعض إطارات العمل في المجال.",
          tags: ["ar", "mobile"],
        },
        {
          title: "ورشة عمل في التقنيّات الطبيّة (مدخل إلى التّعديل الجيني وتقنيّات CRISPR)",
          desc: "ورشة تطبيقية باستخدام أدوات التعديل الجيني وتقنيات CRISPR ومناقشة الجانب الأخلاقي من الهندسة الجينية.",
          tags: ["crispr", "bio-tech"],
        },
        {
          title: "ورشة عمل في تطوير تقنيّات الذكاء الاصطناعي (مدخل لتعلّم الآلة بالبايثون)",
          desc: "تطوير وتدريب نماذج تعلم آلي بسيطة باستخدام مكاتب التعلم الآلي المعروفة بلغة بايثون.",
          tags: ["ml", "python"],
        },
        {
          title: "ورشة عمل باستخدام تقنيّات AlphaFold في الأبحاث الطبّيّة",
          desc: "تشمل الورشة أساسيات طي البروتين، كيفية عمل AlphaFold، والتطبيقات العملية في البحوث الطبية مثل اكتشاف الأدوية وفهم الأمراض على المستوى الجزيئي.",
          tags: ["alphafold", "research"],
        },
        {
          title: "ورشة عمل في مهارات الأمن السّيبراني (اختبار الاختراق)",
          desc: "تطبيق سيناريوهات محاكاة لاختبار الاختراق وفحص الثغرات الشائعة، بالإضافة إلى تجربة استغلال هذه الثغرات.",
          tags: ["pentest", "security"],
        },
        {
          title: "ورشة عمل في استخدام نماذج الذّكاء الاصطناعي مفتوحة المصدر وتدريبها",
          desc: "استخدام مكتبة Hugging Face لفهم دور النماذج المدرَّبة مسبقًا في معالجة اللغات.",
          tags: ["huggingface", "ai"],
        },
        {
          title: "ورشة عمل في استخدام أدوات الذّكاء الاصطناعي المجّانيّة بشكل فعّال",
          desc: "استخدام مجموعة من أدوات الذكاء الاصطناعي المجانية المصممة لتعزيز الإنتاجية وتسهيل سير العمل.",
          tags: ["ai-tools", "productivity"],
        },
        {
          title: "ورشة عمل في استخدام البرمجيّات مفتوحة المصدر والـ Git والـ GitHub",
          desc: "تتمحور الورشة عن أساسيات Git لمراقبة الإصدارات وGitHub لإدارة المشاريع بشكل تعاوني.",
          tags: ["git", "github", "open-source"],
        },
      ],
    },
    gallery: {
      label: "من أرشيف المؤتمر",
      title: "لحظات من ETC 2024",
      subtitle: "صور من أيام المؤتمر في إسطنبول — محاضرات، ورش عمل، وأجواء الحدث.",
    },
    cta: {
      title: "انضمّ إلى النسخة القادمة",
      subtitle: "مؤتمر التّقنيّات الصّاعدة 2026 — إسطنبول، 27–28 يونيو.",
      button: "انتقل إلى ETC 2026",
    },
    footer: { dates: "Istanbul · 17–18.02.2024" },
  },

  tr: {
    dir: "ltr",
    nav: {
      about: "Hakkında",
      topics: "Dersler",
      workshops: "Atölyeler",
      gallery: "Galeri",
      backTo2026: "Güncel Sürüm 2026",
      edition2024: "ETC 2024",
    },
    hero: {
      badge: "İstanbul · 17–18 Şubat 2024",
      archived: "Önceki Sürüm Arşivi",
      titleTop: "Yükselen Teknolojiler",
      titleBottom: "Konferansı 2024",
      subtitle:
        "Modern teknolojinin çeşitli konularını teknik açıdan ele alan öğrenci konferansı — yükselen alanlara giriş niteliğinde teorik dersler ve her teknolojiye kapı açan uygulamalı atölyeler.",
      viewTopics: "Dersleri Gör",
      viewGallery: "Galeri",
      city: "Konum",
      cityValue: "İstanbul, Türkiye",
      dates: "Tarih",
      datesValue: "17–18 Şubat 2024",
      attendees: "Katılımcı",
      attendeesValue: "150 öğrenci + misafir",
      days: "Süre",
      daysValue: "2 gün",
    },
    about: {
      label: "Hakkında",
      title: "Yükselen neslin yükselen teknolojilerle buluştuğu yer",
      body: "Modern teknolojinin çeşitli konularını teknik açıdan ele alan bir öğrenci konferansı. Yükselen teknik alanlara giriş niteliğinde teorik derslerin yanı sıra, her teknoloji ve alana kapı açan uygulamalı atölyelerden oluşur.",
      stats: [
        { value: "150+", label: "öğrenci ve misafir" },
        { value: "6", label: "teorik ders" },
        { value: "9", label: "atölye" },
        { value: "2", label: "yoğun gün" },
      ],
    },
    topics: {
      label: "1. Gün · Teorik Dersler",
      title: "Konferans Konuları",
      subtitle: "Yükselen teknik alanlarda altı derinlemesine teorik ders.",
      items: [
        {
          title: "Blockchain ve Kripto Teknolojileri",
          desc: "Blockchain teknolojisinin nasıl çalıştığı, dijital işlemlerde güvenlik ve şeffaflık sağlamadaki önemi ve kripto paraların güvenli değişim aracı olarak kullanımı.",
          tags: ["blockchain", "crypto"],
        },
        {
          title: "Metaverse ve Oyun Geliştirme Teknolojileri",
          desc: "Gerçek ve sanal dünyayı birleştiren gelişmiş sanal ortam olan metaverse kavramı ve gerçekçi oyun deneyimleri oluşturmak için metaverse teknolojilerinin kullanımı.",
          tags: ["metaverse", "game-dev"],
        },
        {
          title: "YZ, Açık Kaynak Fırsatları ve Büyük Dil Modelleri",
          desc: "Yapay zekada açık kaynak teknolojiler ve geliştiricilerin bunlardan nasıl yararlanabileceği; büyük dil modellerindeki yenilikler ve doğal dil anlama gelişmeleri.",
          tags: ["ai", "open-source", "llm"],
        },
        {
          title: "AlphaFold Gibi Projelerle Tıp ve İlaç Alanındaki Fırsatlar",
          desc: "AlphaFold gibi projelerle tıp ve ilaç endüstrisindeki fırsatlar; yapay zekanın biyolojik yapıları anlama ve ilaç tasarımında devrim yaratması.",
          tags: ["health-tech", "alphafold"],
        },
        {
          title: "Nesnelerin İnterneti ve Akıllı Şehirler",
          desc: "IoT ve akıllı şehirler dünyasını keşfetme; yaşam kalitesini artırmak, kaynak yönetimini ve günlük hizmetleri iyileştirmek için bu teknolojinin kullanımı.",
          tags: ["iot", "smart-city"],
        },
        {
          title: "Siber Güvenlik ve Çağdaş Zorluklar",
          desc: "Siber güvenlik alanı ve karşılaşılan çağdaş zorluklar; sistemleri ve verileri gelişmiş tehditlerden koruma temelleri.",
          tags: ["security", "cyber"],
        },
      ],
    },
    workshops: {
      label: "2. Gün · Atölyeler",
      title: "Uygulamalı Atölyeler",
      subtitle: "Her teknik alana pratik giriş sağlayan dokuz uygulamalı atölye.",
      items: [
        {
          title: "Blockchain Geliştirme Atölyesi",
          desc: "Akıllı sözleşmeleri ve merkeziyetsiz uygulamaları anlamaya yardımcı olan basit bir Blockchain uygulaması geliştirme.",
          tags: ["blockchain", "smart-contracts"],
        },
        {
          title: "AR Uygulama Geliştirme Atölyesi",
          desc: "Artırılmış gerçeklik (AR) teknolojisi kullanarak basit bir uygulama oluşturma ve alandaki çerçeveleri deneyimleme.",
          tags: ["ar", "mobile"],
        },
        {
          title: "Tıbbi Teknolojiler Atölyesi (Gen Düzenleme ve CRISPR)",
          desc: "Gen düzenleme araçları ve CRISPR teknolojileriyle uygulamalı atölye; genetik mühendisliğinin etik boyutunun tartışılması.",
          tags: ["crispr", "bio-tech"],
        },
        {
          title: "YZ Geliştirme Atölyesi (Python ile Makine Öğrenimi)",
          desc: "Python'da bilinen makine öğrenimi kütüphaneleri kullanarak basit modeller geliştirme ve eğitme.",
          tags: ["ml", "python"],
        },
        {
          title: "AlphaFold ile Tıbbi Araştırma Atölyesi",
          desc: "Protein katlanması temelleri, AlphaFold'un nasıl çalıştığı ve ilaç keşfi ile moleküler düzeyde hastalık anlama gibi pratik uygulamalar.",
          tags: ["alphafold", "research"],
        },
        {
          title: "Siber Güvenlik Becerileri Atölyesi (Sızma Testi)",
          desc: "Sızma testi simülasyon senaryoları, yaygın zafiyetlerin taranması ve istismar deneyimi.",
          tags: ["pentest", "security"],
        },
        {
          title: "Açık Kaynak YZ Modelleri ve Eğitimi",
          desc: "Dil işlemede önceden eğitilmiş modellerin rolünü anlamak için Hugging Face kütüphanesinin kullanımı.",
          tags: ["huggingface", "ai"],
        },
        {
          title: "Ücretsiz YZ Araçlarını Etkin Kullanma",
          desc: "Verimliliği artırmak ve iş akışını kolaylaştırmak için tasarlanmış ücretsiz yapay zeka araçlarının kullanımı.",
          tags: ["ai-tools", "productivity"],
        },
        {
          title: "Açık Kaynak Yazılım, Git ve GitHub Atölyesi",
          desc: "Sürüm kontrolü için Git ve işbirlikçi proje yönetimi için GitHub temelleri.",
          tags: ["git", "github", "open-source"],
        },
      ],
    },
    gallery: {
      label: "Konferans Arşivinden",
      title: "ETC 2024'ten Anlar",
      subtitle: "İstanbul'daki konferans günlerinden fotoğraflar — dersler, atölyeler ve etkinlik atmosferi.",
    },
    cta: {
      title: "Gelecek sürüme katıl",
      subtitle: "Yükselen Teknolojiler Konferansı 2026 — İstanbul, 27–28 Haziran.",
      button: "ETC 2026'ya Git",
    },
    footer: { dates: "Istanbul · 17–18.02.2024" },
  },

  en: {
    dir: "ltr",
    nav: {
      about: "About",
      topics: "Lectures",
      workshops: "Workshops",
      gallery: "Gallery",
      backTo2026: "Current Edition 2026",
      edition2024: "ETC 2024",
    },
    hero: {
      badge: "Istanbul · February 17–18, 2024",
      archived: "Previous Edition Archive",
      titleTop: "Emerging Technologies",
      titleBottom: "Conference 2024",
      subtitle:
        "A student conference spotlighting diverse topics in modern technology from a technical angle — theoretical lectures introducing emerging fields, and hands-on workshops as a gateway into each domain.",
      viewTopics: "View Lectures",
      viewGallery: "Photo Gallery",
      city: "Location",
      cityValue: "Istanbul, Türkiye",
      dates: "Dates",
      datesValue: "February 17–18, 2024",
      attendees: "Attendees",
      attendeesValue: "150 students + guests",
      days: "Duration",
      daysValue: "2 days",
    },
    about: {
      label: "About",
      title: "Where a rising generation met emerging technologies",
      body: "A student conference spotlighting diverse topics in modern technology from a technical perspective. It combined theoretical lectures introducing emerging fields in the world of technology with hands-on workshops that served as a gateway into each technology and domain.",
      stats: [
        { value: "150+", label: "students & guests" },
        { value: "6", label: "theoretical lectures" },
        { value: "9", label: "workshops" },
        { value: "2", label: "intensive days" },
      ],
    },
    topics: {
      label: "Day 1 · Theoretical Lectures",
      title: "Conference Topics",
      subtitle: "Six in-depth theoretical lectures across emerging technical fields.",
      items: [
        {
          title: "Blockchain & Crypto Technologies",
          desc: "How blockchain technology works, its role in security and transparency for digital transactions, and cryptocurrencies as a secure and efficient medium of exchange.",
          tags: ["blockchain", "crypto"],
        },
        {
          title: "Metaverse & Game Development Technologies",
          desc: "The metaverse as an advanced virtual environment blending real and virtual worlds, and using metaverse technologies to create immersive, realistic gaming experiences.",
          tags: ["metaverse", "game-dev"],
        },
        {
          title: "AI, Open-Source Opportunities & Large Language Models",
          desc: "Open-source technologies in AI and how developers can benefit from them, plus innovations in large language models and advances in natural language understanding.",
          tags: ["ai", "open-source", "llm"],
        },
        {
          title: "Opportunities in Medicine & Pharma with Projects like AlphaFold",
          desc: "Opportunities in medicine and pharmaceuticals as projects like AlphaFold advance, and how AI can revolutionize our understanding of biological structures and drug design.",
          tags: ["health-tech", "alphafold"],
        },
        {
          title: "Internet of Things & Smart Cities",
          desc: "Exploring IoT and smart cities — using these technologies to improve quality of life, resource management, and everyday services.",
          tags: ["iot", "smart-city"],
        },
        {
          title: "Cybersecurity & Contemporary Challenges",
          desc: "The field of cybersecurity and modern challenges it faces — fundamentals of protecting systems and data from advanced electronic threats.",
          tags: ["security", "cyber"],
        },
      ],
    },
    workshops: {
      label: "Day 2 · Workshops",
      title: "Hands-On Workshops",
      subtitle: "Nine practical workshops as a hands-on gateway into each technical field.",
      items: [
        {
          title: "Blockchain Development Workshop",
          desc: "Building a simple blockchain application to understand smart contracts and decentralized applications.",
          tags: ["blockchain", "smart-contracts"],
        },
        {
          title: "AR Application Development Workshop",
          desc: "Creating a simple augmented reality (AR) application and exploring frameworks in the field.",
          tags: ["ar", "mobile"],
        },
        {
          title: "Medical Technologies Workshop (Intro to Gene Editing & CRISPR)",
          desc: "Hands-on work with gene editing tools and CRISPR technologies, plus discussion of the ethics of genetic engineering.",
          tags: ["crispr", "bio-tech"],
        },
        {
          title: "AI Development Workshop (Intro to Machine Learning with Python)",
          desc: "Developing and training simple machine learning models using well-known Python ML libraries.",
          tags: ["ml", "python"],
        },
        {
          title: "AlphaFold in Medical Research Workshop",
          desc: "Protein folding basics, how AlphaFold works, and practical applications in drug discovery and molecular-level disease understanding.",
          tags: ["alphafold", "research"],
        },
        {
          title: "Cybersecurity Skills Workshop (Penetration Testing)",
          desc: "Simulating penetration testing scenarios, scanning common vulnerabilities, and experiencing exploitation techniques.",
          tags: ["pentest", "security"],
        },
        {
          title: "Open-Source AI Models & Training Workshop",
          desc: "Using the Hugging Face library to understand the role of pre-trained models in language processing.",
          tags: ["huggingface", "ai"],
        },
        {
          title: "Using Free AI Tools Effectively Workshop",
          desc: "Using a set of free AI tools designed to boost productivity and streamline workflows.",
          tags: ["ai-tools", "productivity"],
        },
        {
          title: "Open-Source Software, Git & GitHub Workshop",
          desc: "Git fundamentals for version control and GitHub for collaborative project management.",
          tags: ["git", "github", "open-source"],
        },
      ],
    },
    gallery: {
      label: "From the Conference Archive",
      title: "Moments from ETC 2024",
      subtitle: "Photos from the conference days in Istanbul — lectures, workshops, and the event atmosphere.",
    },
    cta: {
      title: "Join the upcoming edition",
      subtitle: "Emerging Technologies Conference 2026 — Istanbul, June 27–28.",
      button: "Go to ETC 2026",
    },
    footer: { dates: "Istanbul · 17–18.02.2024" },
  },
}
