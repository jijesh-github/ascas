export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline?: string;
  image?: string;
  shortDescription: string;
  fullDescription: string;
  suitableForTitle?: string;
  suitableForSubtitle?: string;
  footerNote?: string;
  iconName: 'sparkles' | 'heartPulse' | 'microscope' | 'baby' | 'shieldCheck' | 'dna' | 'stethoscope' | 'activity';
  href: string;
  isPrimaryHomepage: boolean;
  highlights: string[];
}

export const treatmentsData: Treatment[] = [
  {
    id: 'ivf',
    slug: 'ivf',
    title: 'In Vitro Fertilization (IVF)',
    shortTitle: 'IVF Treatment',
    category: 'Assisted Reproduction',
    tagline: 'The Gold Standard in Assisted Reproduction',
    image: '/images/services/ivf.png',
    shortDescription: 'Carefully retrieving mature eggs from ovaries and fertilizing them in a state-of-the-art laboratory environment.',
    fullDescription: 'In Vitro Fertilization (IVF) is one of the most effective and widely recognized fertility treatments available today. It involves carefully retrieving mature eggs from the ovaries and fertilizing them with sperm in a secure, state-of-the-art laboratory environment. Once fertilization occurs and the embryos develop, the healthiest embryo is carefully transferred back into the uterus to establish a successful pregnancy.',
    suitableForTitle: 'Is IVF right for you?',
    suitableForSubtitle: 'This treatment is highly recommended for individuals or couples facing various fertility challenges.',
    footerNote: 'Our team provides personalized care throughout every step of the IVF cycle, ensuring you feel supported, informed, and confident on your journey to parenthood.',
    iconName: 'sparkles',
    href: '/treatments/ivf',
    isPrimaryHomepage: true,
    highlights: [
      'Blocked or damaged fallopian tubes',
      'Endometriosis or ovulation disorders',
      'Unexplained infertility',
      'Individuals using donor eggs or surrogate carriers'
    ]
  },
  {
    id: 'iui',
    slug: 'iui',
    title: 'Intrauterine Insemination (IUI)',
    shortTitle: 'IUI Treatment',
    category: 'Non-Invasive Fertility',
    tagline: 'A Gentle, Less Invasive Fertility Option',
    image: '/images/services/iui.png',
    shortDescription: 'Highly accessible, first-line fertility treatment placing concentrated motile sperm directly into the uterus.',
    fullDescription: 'Intrauterine Insemination (IUI) is a highly accessible, first-line fertility treatment designed to give sperm a strategic head start. During this quick and minimally invasive procedure, a concentrated sample of highly motile, washed sperm is placed directly into the uterus right around the time of ovulation. By bypassing the cervix, IUI significantly increases the number of sperm that reach the fallopian tubes, boosting the chances of natural fertilization.',
    suitableForTitle: 'When is IUI recommended?',
    suitableForSubtitle: 'IUI is often the first step for couples looking for a gentle approach to conception.',
    footerNote: 'The procedure feels similar to a routine pelvic exam, requires no anesthesia, and allows you to return to your normal activities immediately.',
    iconName: 'heartPulse',
    href: '/treatments/iui',
    isPrimaryHomepage: true,
    highlights: [
      'Mild male factor infertility (low sperm count or motility)',
      'Cervical mucus abnormalities',
      'Unexplained infertility',
      'Individuals using donor sperm'
    ]
  },
  {
    id: 'icsi',
    slug: 'icsi',
    title: 'Intracytoplasmic Sperm Injection (ICSI)',
    shortTitle: 'ICSI Treatment',
    category: 'Advanced Embryology',
    tagline: 'Advanced Single-Sperm Fertilization',
    image: '/images/services/icsi.png',
    shortDescription: 'Groundbreaking leap in assisted reproduction injecting a single healthy sperm directly into a mature egg.',
    fullDescription: 'For couples facing severe male factor infertility, Intracytoplasmic Sperm Injection (ICSI) represents a groundbreaking leap in assisted reproduction. Performed in conjunction with IVF, ICSI bypasses the need for sperm to penetrate the egg naturally. Instead, our expert embryologists select a single, healthy sperm and delicately inject it directly into the center of a mature egg using precision microscopic tools.',
    suitableForTitle: 'Why choose ICSI?',
    suitableForSubtitle: 'ICSI maximizes the chances of fertilization when traditional IVF may not be enough.',
    footerNote: 'With ICSI, even the most challenging male infertility cases can be overcome, dramatically improving the likelihood of creating healthy embryos.',
    iconName: 'microscope',
    href: '/treatments/icsi',
    isPrimaryHomepage: true,
    highlights: [
      'Critically low sperm count or poor sperm motility',
      'Abnormal sperm morphology (shape)',
      'Previous fertilization failures during standard IVF cycles',
      'Sperm retrieved surgically from the testicles'
    ]
  },
  {
    id: 'fertility-preservation',
    slug: 'fertility-preservation',
    title: 'Egg Freezing (Fertility Preservation)',
    shortTitle: 'Egg Freezing',
    category: 'Reproductive Wellness',
    tagline: 'Freeze Your Eggs for Future Family Planning',
    image: '/images/services/egg freezing.png',
    shortDescription: 'Empowering you to take control of your reproductive future with sub-zero cryopreservation.',
    fullDescription: "Life doesn't always align with your biological clock, and egg freezing (oocyte cryopreservation) empowers you to take control of your reproductive future. This advanced preservation technique involves stimulating the ovaries, retrieving healthy eggs, and safely freezing them at sub-zero temperatures. When you are ready to start a family, your eggs can be thawed, fertilized, and transferred.",
    suitableForTitle: 'Who benefits from egg freezing?',
    suitableForSubtitle: 'Fertility preservation offers peace of mind for women in a variety of situations.',
    footerNote: 'By freezing your eggs at a younger age, you lock in their current quality and viability, giving you the freedom to build your family on your own timeline.',
    iconName: 'shieldCheck',
    href: '/treatments/fertility-preservation',
    isPrimaryHomepage: true,
    highlights: [
      'Women focusing on career or personal goals before motherhood',
      'Individuals facing medical treatments like chemotherapy or radiation',
      'Those with a family history of early menopause'
    ]
  },
  {
    id: 'embryology-genetics',
    slug: 'embryology-genetics',
    title: 'Genetic Testing (PGT)',
    shortTitle: 'Genetic Testing (PGT)',
    category: 'Advanced Diagnostics',
    tagline: 'Preimplantation Genetic Testing for Healthier Pregnancies',
    image: '/images/services/genetic testing.png',
    shortDescription: 'Cutting-edge screening during IVF to biopsy and analyze embryos for genetic abnormalities.',
    fullDescription: 'Preimplantation Genetic Testing (PGT) is a cutting-edge screening process performed during an IVF cycle to ensure only the healthiest embryos are transferred. Before an embryo is implanted in the uterus, a few cells are safely biopsied and analyzed for genetic abnormalities or chromosomal imbalances. This helps prevent the transmission of inherited genetic diseases and significantly increases the chances of a successful, healthy pregnancy.',
    suitableForTitle: 'The advantages of PGT:',
    suitableForSubtitle: 'PGT brings an added layer of certainty and safety to your IVF journey.',
    footerNote: 'PGT takes the guesswork out of embryo selection, helping you achieve a healthy baby sooner.',
    iconName: 'baby',
    href: '/treatments/embryology-genetics',
    isPrimaryHomepage: false,
    highlights: [
      'Reduces the risk of miscarriage by identifying chromosomally normal embryos',
      'Prevents passing on single-gene disorders (like Cystic Fibrosis or Sickle Cell Anemia)',
      'Increases implantation success rates per transfer',
      'Highly recommended for older parents or those with recurrent pregnancy loss'
    ]
  },
  {
    id: 'male-infertility',
    slug: 'male-infertility',
    title: 'Male Infertility Evaluation & Treatment',
    shortTitle: 'Male Infertility Care',
    category: 'Male Reproductive Health',
    tagline: 'Comprehensive Male Fertility Evaluation and Treatment',
    image: '/images/services/male fertility care.png',
    shortDescription: 'Comprehensive semen analysis, hormonal evaluation, and targeted male fertility solutions.',
    fullDescription: 'Infertility is a shared journey, and male factors contribute to approximately half of all conception challenges. Our dedicated male fertility program focuses on accurate diagnosis and highly effective, targeted treatments. We begin with a comprehensive semen analysis to evaluate sperm count, shape, and movement, alongside hormonal and genetic testing if necessary.',
    suitableForTitle: 'How we treat male infertility:',
    suitableForSubtitle: 'We offer a full spectrum of solutions tailored to your specific diagnosis.',
    footerNote: 'Our discreet, compassionate approach ensures that male partners receive the exact medical support they need to help achieve your dream of a growing family.',
    iconName: 'activity',
    href: '/treatments/male-infertility',
    isPrimaryHomepage: true,
    highlights: [
      'Lifestyle and nutritional guidance to improve sperm quality',
      'Medications to balance hormones and boost production',
      'Advanced techniques like ICSI for severe sperm deficiencies',
      'Surgical sperm retrieval (TESE/PESA) for blockages'
    ]
  },
  {
    id: 'female-infertility',
    slug: 'female-infertility',
    title: 'Female Infertility & PCOS Care',
    shortTitle: 'Female Fertility Care',
    category: 'Specialized Diagnostics',
    tagline: 'Specialized Care for Female Reproductive Wellness',
    image: '/images/services/female fertilty care.png',
    shortDescription: 'Specialized care for PCOS, endometriosis, and pelvic health.',
    fullDescription: 'We provide thorough diagnostic workups and personalized medical management for conditions affecting ovulation, uterine receptivity, and reproductive organ health.',
    suitableForTitle: 'Comprehensive Female Fertility Care',
    suitableForSubtitle: 'Tailored diagnostics and clinical support for women at every reproductive stage.',
    iconName: 'stethoscope',
    href: '/treatments/female-infertility',
    isPrimaryHomepage: true,
    highlights: [
      '3D/4D pelvic imaging & sonography',
      'PCOS lifestyle & medical management',
      'Endometriosis staging & treatment',
      'Tubal patency testing (HSG / SSG)'
    ]
  },
  {
    id: 'laparoscopy-hysteroscopy',
    slug: 'laparoscopy-hysteroscopy',
    title: 'Fertility-Enhancing Surgeries',
    shortTitle: 'Keyhole Surgeries',
    category: 'Minimally Invasive Surgery',
    tagline: 'Minimally Invasive Keyhole Procedures',
    image: '/images/services/keyhole surgery.png',
    shortDescription: 'Minimally invasive keyhole procedures to correct uterine anomalies and tubal blockages.',
    fullDescription: 'Minimally invasive keyhole procedures allow accurate diagnosis and immediate surgical correction of anatomical barriers to fertility with minimal downtime.',
    suitableForTitle: 'Advanced Keyhole Surgical Solutions',
    suitableForSubtitle: 'Gentle, precise procedures to optimize anatomical health for conception.',
    iconName: 'dna',
    href: '/treatments/laparoscopy-hysteroscopy',
    isPrimaryHomepage: false,
    highlights: [
      'Laparoscopic fibroid removal (Myomectomy)',
      'Hysteroscopic septum resection & polyp removal',
      'Ovarian cystectomy with tissue preservation',
      'Faster recovery and minimal scar tissue'
    ]
  }
];

