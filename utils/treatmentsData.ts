export interface Treatment {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
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
    shortDescription: 'Advanced laboratory fertilization supporting conception.',
    fullDescription: 'In Vitro Fertilization (IVF) is one of the most effective assisted reproductive technologies. At ASCAS, our expert embryology team uses state-of-the-art incubation and monitoring to maximize successful fertilization and embryo development.',
    iconName: 'sparkles',
    href: '/treatments/ivf',
    isPrimaryHomepage: true,
    highlights: [
      'Tailored ovarian stimulation protocols',
      'Class-100 cleanroom embryology lab',
      'High blastocyst conversion rates',
      'Compassionate monitoring at every stage'
    ]
  },
  {
    id: 'icsi',
    slug: 'icsi',
    title: 'Intracytoplasmic Sperm Injection (ICSI)',
    shortTitle: 'ICSI Treatment',
    category: 'Advanced Embryology',
    shortDescription: 'Precision microscopic sperm injection for complex fertility needs.',
    fullDescription: 'ICSI is a specialized form of IVF used primarily to overcome male factor infertility. Under high-powered microscopic guidance, a single viable sperm is carefully selected and injected into the mature oocyte.',
    iconName: 'microscope',
    href: '/treatments/icsi',
    isPrimaryHomepage: true,
    highlights: [
      'Ideal for severe male factor infertility',
      'High fertilization success per mature egg',
      'Specialized sperm selection techniques',
      'Seamless integration with standard IVF'
    ]
  },
  {
    id: 'iui',
    slug: 'iui',
    title: 'Intrauterine Insemination (IUI)',
    shortTitle: 'IUI Treatment',
    category: 'Non-Invasive Fertility',
    shortDescription: 'Minimally invasive treatment placing motile sperm into the uterus.',
    fullDescription: 'IUI is often the first-line treatment for unexplained infertility, mild male factor issues, or cervical factor challenges. It synchronizes ovulation with direct sperm delivery to optimize natural fertilization conditions.',
    iconName: 'heartPulse',
    href: '/treatments/iui',
    isPrimaryHomepage: true,
    highlights: [
      'Minimally invasive and cost-effective',
      'Follicular tracking for accurate timing',
      'In-house advanced sperm washing',
      'Painless outpatient procedure'
    ]
  },
  {
    id: 'fertility-preservation',
    slug: 'fertility-preservation',
    title: 'Fertility Preservation & Egg Freezing',
    shortTitle: 'Fertility Preservation',
    category: 'Reproductive Wellness',
    shortDescription: 'Advanced egg and embryo vitrification for future parenthood.',
    fullDescription: 'Fertility preservation allows women and men to store healthy eggs, sperm, or embryos for future parenthood, whether for elective personal timing or prior to medical therapies.',
    iconName: 'shieldCheck',
    href: '/treatments/fertility-preservation',
    isPrimaryHomepage: true,
    highlights: [
      'Ultra-rapid vitrification freezing technology',
      'Elective egg freezing for timing flexibility',
      'Medical & oncology fertility preservation',
      'Secure long-term storage facility'
    ]
  },
  {
    id: 'female-infertility',
    slug: 'female-infertility',
    title: 'Female Infertility & PCOS Care',
    shortTitle: 'Female Fertility Care',
    category: 'Specialized Diagnostics',
    shortDescription: 'Specialized care for PCOS, endometriosis, and pelvic health.',
    fullDescription: 'We provide thorough diagnostic workups and personalized medical management for conditions affecting ovulation, uterine receptivity, and reproductive organ health.',
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
    id: 'male-infertility',
    slug: 'male-infertility',
    title: 'Male Infertility Evaluation & Care',
    shortTitle: 'Male Fertility Care',
    category: 'Male Reproductive Health',
    shortDescription: 'Comprehensive semen analysis and male reproductive evaluation.',
    fullDescription: 'Male factor contributions are present in nearly half of fertility challenges. ASCAS provides confidential, expert diagnostic evaluations and treatment options for male reproductive health.',
    iconName: 'activity',
    href: '/treatments/male-infertility',
    isPrimaryHomepage: true,
    highlights: [
      'Computer-assisted semen analysis (CASA)',
      'Scrotal Doppler ultrasound diagnostic',
      'Surgical sperm retrieval techniques (TESA/PESA)',
      'Lifestyle & antioxidant medical guidance'
    ]
  },
  {
    id: 'laparoscopy-hysteroscopy',
    slug: 'laparoscopy-hysteroscopy',
    title: 'Fertility-Enhancing Surgeries',
    shortTitle: 'Keyhole Surgeries',
    category: 'Minimally Invasive Surgery',
    shortDescription: 'Minimally invasive keyhole procedures to correct uterine anomalies and tubal blockages.',
    fullDescription: 'Minimally invasive keyhole procedures allow accurate diagnosis and immediate surgical correction of anatomical barriers to fertility with minimal downtime.',
    iconName: 'dna',
    href: '/treatments/laparoscopy-hysteroscopy',
    isPrimaryHomepage: false,
    highlights: [
      'Laparoscopic fibroid removal (Myomectomy)',
      'Hysteroscopic septum resection & polyp removal',
      'Ovarian cystectomy with tissue preservation',
      'Faster recovery and minimal scar tissue'
    ]
  },
  {
    id: 'embryology-genetics',
    slug: 'embryology-genetics',
    title: 'Embryology & Genetic Testing (PGT)',
    shortTitle: 'Genetic Screening',
    category: 'Advanced Diagnostics',
    shortDescription: 'Pre-implantation genetic screening to test embryos for chromosomal health prior to transfer.',
    fullDescription: 'Pre-implantation genetic screening assists in selecting embryos with normal chromosome counts, reducing miscarriage risks and enhancing transfer success rates.',
    iconName: 'baby',
    href: '/treatments/embryology-genetics',
    isPrimaryHomepage: false,
    highlights: [
      'PGT-A screening for aneuploidy',
      'Reduced risk of recurrent miscarriages',
      'Single embryo transfer optimization',
      'Detailed genetic counseling support'
    ]
  }
];
