// =========================================================
//  ✏️  ده الملف الوحيد اللي بتعدّلي فيه المواد
//
//  • عشان تضيفي مادة: انسخي بلوك { ... } كامل بالفاصلة اللي بعده،
//    والصقيه، وغيّري الكلام اللي بين علامتي " ".
//  • عشان تشيلي مادة: امسحي البلوك بتاعها كله.
//  • ar: اسم المادة بالعربي
//  • form: لينك فورم Tally بتاع المادة
//  • icon: اسم صورة الـ 3D (finance, managerial, portfolio, institutions,
//    risk, contemporary, banking, analysis, valuation, international,
//    graduation, operations, investment, business)
//  • عدد المواد اللي بيظهر في الصفحة الرئيسية (عشوائي) في HOME_COUNT
// =========================================================

// ⬇️ رقم الواتساب بكود الدولة من غير + ومن غير صفر (مثال: 201012345678) – اختياري
const WHATSAPP = "";

// ⬇️ عدد المواد العشوائية في الصفحة الرئيسية
const HOME_COUNT = 4;

const COURSES = [
  {
    name: "Principles of Finance & Investment",
    ar: "مبادئ التمويل والاستثمار",
    desc: "أساسيات التمويل والاستثمار: القيمة الزمنية للنقود، العائد والمخاطرة، وأدوات الاستثمار.",
    form: "https://tally.so/r/Z9jJ70",
    icon: "finance"
  },
  {
    name: "Managerial Finance",
    ar: "التمويل الإداري",
    desc: "اتخاذ القرارات المالية في الشركات: الميزانيات الرأسمالية، هيكل التمويل، وإدارة رأس المال العامل.",
    form: "https://tally.so/r/gbD4BN",
    icon: "managerial"
  },
  {
    name: "Portfolio Management",
    ar: "إدارة المحافظ الاستثمارية",
    desc: "بناء وإدارة المحافظ الاستثمارية، التنويع، وقياس أداء المحفظة.",
    form: "https://tally.so/r/Z9jJqa",
    icon: "portfolio"
  },
  {
    name: "Financial Institutions",
    ar: "المؤسسات المالية",
    desc: "البنوك وشركات التأمين وصناديق الاستثمار: دورها وطريقة عملها في النظام المالي.",
    form: "https://tally.so/r/q54P0d",
    icon: "institutions"
  },
  {
    name: "Financial Risk",
    ar: "المخاطر المالية",
    desc: "أنواع المخاطر المالية وطرق قياسها وإدارتها والتحوّط منها.",
    form: "https://tally.so/r/Z9jJ4v",
    icon: "risk"
  },
  {
    name: "Contemporary Issues in Finance",
    ar: "قضايا معاصرة في التمويل",
    desc: "أحدث القضايا والاتجاهات في عالم المال: التكنولوجيا المالية، الاستدامة، والأزمات.",
    form: "https://tally.so/r/2jErqb",
    icon: "contemporary"
  },
  {
    name: "Banking Management",
    ar: "إدارة البنوك",
    desc: "إدارة البنوك: الأصول والخصوم، السيولة، الائتمان، والرقابة المصرفية.",
    form: "https://tally.so/r/yXPDWW",
    icon: "banking"
  },
  {
    name: "Financial Analysis",
    ar: "التحليل المالي",
    desc: "قراءة وتحليل القوائم المالية والنسب المالية وتقييم أداء الشركات.",
    form: "https://tally.so/r/gbD4RK",
    icon: "analysis"
  },
  {
    name: "Cash Valuation",
    ar: "التقييم النقدي",
    desc: "تقييم التدفقات النقدية وطرق التقييم المختلفة واتخاذ القرار على أساسها.",
    form: "https://tally.so/r/9Nqlb1",
    icon: "valuation"
  },
  {
    name: "International Finance",
    ar: "التمويل الدولي",
    desc: "أسعار الصرف، الأسواق المالية الدولية، وإدارة المخاطر في الشركات متعددة الجنسيات.",
    form: "https://tally.so/r/J190N7",
    icon: "international"
  },
  {
    name: "Graduation Projects",
    ar: "مشروعات التخرج",
    desc: "إشراف ومتابعة لمشروع التخرج من اختيار الفكرة حتى المناقشة.",
    form: "https://tally.so/r/M1e590",
    icon: "graduation"
  },
  {
    name: "Operations & Production Management",
    ar: "إدارة العمليات والإنتاج",
    desc: "تخطيط وإدارة العمليات والإنتاج، الجودة، والمخزون وسلاسل الإمداد.",
    form: "https://tally.so/r/1WAE1L",
    icon: "operations"
  },
  {
    name: "Investment Analysis",
    ar: "تحليل الاستثمار",
    desc: "تحليل الأسهم والسندات، التحليل الأساسي، وتقييم الفرص الاستثمارية.",
    form: "https://tally.so/r/pebVlE",
    icon: "investment"
  },
  {
    name: "Business Administration",
    ar: "إدارة الأعمال",
    desc: "أساسيات الإدارة والتخطيط والتنظيم واتخاذ القرار في منظمات الأعمال.",
    form: "https://tally.so/r/kbdZVj",
    icon: "business"
  }
];
