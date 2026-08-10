import { iconList } from './iconList';

export const branches = [
  {
    id: 'valasaravakkam',
    name: 'Valasaravakkam',
    clinicName: 'Accumed Speciality Clinic and Scans Valasaravakkam',
    addressLines: ['24 Chowdhary Nagar Main Road', 'Valasaravakkam, Chennai', 'Tamil Nadu - 600087'],
    address: '24 Chowdhary Nagar Main Road Valasaravakkam, Chennai Tamil Nadu - 600087',
    phone: '+91-9342521779',
    tel: '+919342521779',
    whatsapp: 'https://wa.me/919342521779',
    hours: ['Monday - Saturday: 9 AM - 9 PM', 'Sunday: Emergency Only'],
    mapUrl: 'https://maps.app.goo.gl/v9g9g6Thhx4HvcAj6',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2317.9872637993863!2d80.1806221!3d13.040088899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526128ef1b5ef3%3A0x10eeb6a69254d1cc!2sAccumed%20Speciality%20Clinic%20and%20Scans!5e1!3m2!1sen!2sin!4v1786371189551!5m2!1sen!2sin'
  },
  {
    id: 'vadapalani',
    name: 'Vadapalani',
    clinicName: "ASCAS Fertility and Women's Center",
    addressLines: ['14, Arunachalam Rd, next to VB World', 'Saligramam, Chennai', 'Tamil Nadu 600093'],
    address: '14, Arunachalam Rd, next to VB World, Saligramam, Chennai, Tamil Nadu 600093',
    phone: '+91-9345293609',
    tel: '+919345293609',
    whatsapp: 'https://wa.me/919345293609',
    hours: ['Monday - Saturday: 9 AM - 8 PM', 'Sunday: Emergency Only'],
    mapUrl: 'https://maps.app.goo.gl/e5HSPGFUaeCewLav5',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7901065300625!2d80.20137327484277!3d13.049028187273478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526771fa5db163%3A0x16eadf06d51dfdc8!2sASCAS%20Fertility%20and%20Women%27s%20Center!5e0!3m2!1sen!2sin!4v1778395143992!5m2!1sen!2sin'
  }
];

export const primaryBranch = branches[0];

export const services = [
  'IVF/ICSI',
  'IUI',
  'Fertility Preservation',
  'Fertility Enhancing',
  'Male/Female Infertility Workups',
  'PCOS & Fibroid Management',
  'Embryology',
  'Genetic Testing'
];

export const doctors = [
  {
    name: 'Dr. Aishwarya Parthasarathy',
    role: 'Consultant Gynaecologist and Fertility Specialist',
    qualification: 'MD (OG), DNB (OG), FNB (RM), MRCOG (UK)',
    about:
      'Dr. Aishwarya Parthasarathy is a highly acclaimed Gynaecologist, Fertility Specialist, and IVF Expert with a proven track record of helping women achieve their reproductive goals. Dr. Aishwarya holds an MD in Obstetrics and Gynaecology from AIIMS, New Delhi, and has further specialized with a Fellowship of National Board (FNB) in Reproductive Medicine. With extensive experience from prestigious institutions such as JIPMER, AIIMS, IRM-MMM, and several other leading hospitals, she brings a wealth of knowledge and expertise to her clinical practice.',
    image: '/images/doctor/aishwarya.jpeg',
    imagePosition: 'object-center',
    icon: iconList.stethoscope,
    philosophy: `Dr. Aishwarya Parthasarathy is known for her compassionate and patient-centric approach. She takes the time to understand each patient's unique needs and concerns, tailoring her treatment plans to meet their individual requirements.`,
    expertise: [
      'Complex IVF cases.',
      'PCOS and Endometriosis Management.',
      'Laparoscopic Gynaecological surgeries, Obstetric care.',
      'Fertility preservation and egg freezing.'
    ]
  },
  {
    name: 'Dr. Ashwin Muralidharan',
    role: 'Consultant Radiologist',
    qualification: 'MBBS, MDRD, DNB (RD), FRCR (UK)',
    about: `Dr. Ashwin Muralidharan is a highly skilled Consultant Radiologist and Fetal Imaging Specialist with a passion for diagnosing and interpreting complex medical images. Holding FRCR (UK) and DNB (Radiodiagnosis) with distinction, Dr. Ashwin Muralidharan has consistently demonstrated mastery in radiological techniques.`,
    image: '/images/doctor/ashwin.jpeg',
    imagePosition: 'object-top',
    icon: iconList.scanLine,
    philosophy: `He is committed to delivering precise diagnostics and empathetic care. He collaborates closely with patients and healthcare providers to ensure imaging results are interpreted within the broader context of overall health and well-being.`,
    expertise: [
      'Gynecological Imaging: Fibroids, Endometriosis, Adenomyosis, Ovarian Cysts & Uterine Anomalies.',
      'Cross-Sectional Imaging (CT, MRI, PET-CT) with special focus on Onco-Imaging and Musculoskeletal Imaging.',
      'Renowned for 3D/4D USG imaging of Fetal and Uterine Anomalies.',
      'Male infertility imaging (Scrotal Doppler and Cross-Sectional imaging of the male pelvis).'
    ]
  },
  {
    name: 'Dr. M. Ashok kumar',
    role: 'Consultant Surgical Gastroenterologist',
    qualification: '',
    image: '/images/doctor/ashok.jpeg',
    imagePosition: 'object-center',
    about: `Dr. M. Ashok Kumar is a renowned Surgical Gastroenterologist and a pioneer in laparoscopic surgery, with an exceptional track record in performing advanced procedures with precision and compassion.`,
    icon: iconList.microscope,
    philosophy: `Dr. Ashokkumar is dedicated to providing patient-centered care, ensuring that each patient receives personalized attention and support throughout their treatment journey. He is committed to staying at the forefront of surgical innovation, ensuring that his patients receive the most advanced and effective treatments available.`,
    expertise: [
      'Advanced minimally invasive laparoscopic surgeries involving the gastrointestinal (GI) tract, liver, pancreas, and spleen.',
      'Minimally invasive laparoscopic management of hernia, gallbladder stones, and appendicitis. Specialist in hepatobiliary, pancreatic, and gastrointestinal cancers. Expert in endoscopy and colonoscopy.',
      'Advanced management of hemorrhoids, fissures, and fistulas in the anal region.'
    ]
  },
  {
    name: 'Dr. Balamurugan S',
    role: 'Consultant Interventional Cardiologist',
    qualification: 'DM Cardiology – Christian Medical College (CMC), Vellore',
    image: '/images/doctor/balamurugan.jpeg',
    imagePosition: 'object-[50%_15%]',
    about: `Dr. Balamurugan S is a Consultant Interventional Cardiologist specialising in Complex Coronary & Structural Heart Interventions. He holds a DM in Cardiology from Christian Medical College (CMC), Vellore, and has been awarded Multiple Gold Medals in MBBS & Cardiology Training.`,
    icon: iconList.heartPulse,
    philosophy: `Dr. Balamurugan S is committed to delivering precise, evidence-based cardiac care, with a focus on imaging and physiology-guided interventions to achieve the best outcomes for each patient. He pays particular attention to cardiac health in women, including pregnancy-related heart conditions, ensuring that care is both thorough and personalised.`,
    expertise: [
      'Coronary Angiogram and Angioplasty.',
      'Complex Coronary Interventions (CHIP PCI – Left Main, CTO, Bifurcation).',
      'Calcium Modification (Rotational/Orbital Atherectomy, Intravascular Lithotripsy).',
      'Imaging & Physiology-guided PCI (IVUS, OCT, FFR and iFR).',
      'Structural Heart Interventions (ASD, VSD, PDA, Valvuloplasty).',
      'Pacemaker, ICD & CRT Implantation.'
    ]
  },
  {
    name: 'Dr. Narayanan A',
    role: 'Consultant Dermatologist',
    qualification: 'MD Dermatology and Venereology – AIIMS, New Delhi',
    image: '/images/doctor/narayanan.jpeg',
    imagePosition: 'object-[50%_15%]',
    about: `Dr. Narayanan A is a Consultant Dermatologist with an MD in Dermatology and Venereology from AIIMS, New Delhi. He also holds a PDCC in Paediatric Dermatology from JIPMER, Puducherry, a Diplomate of the National Board in Dermatology, Venereology and Leprosy, and an MRCP Specialty Certificate Examination in Dermatology.`,
    icon: iconList.stethoscope,
    philosophy: `Dr. Narayanan A is dedicated to providing comprehensive dermatological care across all age groups, from children to adults, combining medical and procedural expertise to address a wide range of skin, hair, and venereological conditions. He is committed to delivering accurate diagnosis and effective, evidence-based treatment tailored to each patient's individual needs.`,
    expertise: [
      'Paediatric Dermatology.',
      'Advanced treatment options for Psoriasis, Acne, Hair Fall & Melasma.',
      'Vitiligo Surgery.',
      'Hair Transplantation.',
      'Laser Hair Reduction.',
      'Fractional CO2 Laser for Acne Scars.',
      'Venereology and Sexually Transmitted Infections.'
    ]
  },
  {
    name: 'Dr. Dhivya Kumar',
    role: 'Consultant Laparoscopic and General Surgeon',
    qualification: 'MS General Surgery, DNB General Surgery, MRCS(Ed)',
    image: '/images/doctor/dhivya.jpeg',
    imagePosition: 'object-top',
    about: `Dr. Dhivya Kumar is a Consultant Laparoscopic and General Surgeon and Assistant Professor at Madras Medical College. She holds an MS in General Surgery and DNB in General Surgery from Madras Medical College / NBE, and MRCS(Ed) from the Royal College of Surgeons, UK.`,
    icon: iconList.microscope,
    philosophy: `Dr. Dhivya Kumar is dedicated to providing safe, minimally invasive surgical care, with a strong commitment to supporting patients through every stage of their surgical journey. She brings both clinical expertise and an academic perspective to her practice, ensuring her patients receive thoughtful, up-to-date surgical management.`,
    expertise: [
      'Laparoscopic and Open General Surgical Procedures.',
      'Breast and Thyroid Surgeries.',
      'Hernia, Gallbladder and Appendix Surgeries.',
      'Anorectal Diseases (Hemorrhoids, Fistula and Fissures).',
      'Diabetic Foot and Wound Management.',
      'Women\'s Surgical Care.'
    ]
  }
];

export const features = [
  {
    title: 'Expert Care',
    description:
      'Our team of specialists has years of experience in fertility treatment, ensuring you receive the best possible care'
  },
  {
    title: 'Personalized Approach',
    description: `We understand that every individual's journey is unique, and we'll work with you to create a customized treatment plan tailored to your needs`
  },
  {
    title: 'State-of-the-Art Facilities',
    description:
      'Our clinic is equipped with the latest technology and equipment, ensuring that you receive the most advanced and effective treatments available'
  },
  {
    title: 'Compassionate Support',
    description: `We believe that emotional support is just as important as medical care, and we'll be with you every step of the way`
  }
];

export const servicesList = [
  {
    title: 'Fertility Care',
    icon: iconList.heartPulse,
    items: services
  },
  {
    title: 'Pregnancy Support',
    icon: iconList.baby,
    items: [
      'Pregnancy Related Blood Investigations',
      'NT, Anomaly and Growth Scans',
      'Pregenancy Related Vaccinations',
      'CTG Monitoring'
    ]
  },
  {
    title: 'Surgical & Diagnostics',
    icon: iconList.microscope,
    items: [
      'Laparoscopic Gynecology Surgeries',
      'Advanced Imaging (MRI/CT/4D Ultrasound)',
      'In-House Lab & Pharmacy',
      'Dilatation and Curettage (D&C)',
      'Dilatation and Evacuation (D&E)',
      'Myomectomy',
      'Hysterectomy',
      'Ovarian Cystectomy',
      'Salpingectomy',
      'Tubal Ligation',
      'Laparoscopy for Endometriosis or Ectopic Pregnancy',
      'Cervical Cerclage'
    ]
  }
];

export const navLinks = [
  { lable: 'Home', path: '/' },
  { lable: 'About Us', path: '/about' },
  { lable: 'Services', path: '/services' },
  { lable: 'Our Team', path: '/team' },
  { lable: 'Blog', path: '/blog' },
  { lable: 'Branches', path: '/branches' },
  { lable: 'Contact', path: '/contact' }
];

export const imageGallery = [
  {
    src: '/images/gallery/01.jpeg',
    alt: 'Dr. Aishwarya with her FNB Batchmates in Institute of Reproductive Medicine – MMM Hospital, Chennai.',
    caption: 'Dr. Aishwarya with her FNB Batchmates in Institute of Reproductive Medicine – MMM Hospital, Chennai.'
  },
  {
    src: '/images/gallery/02.jpeg',
    alt: 'Dr.Aishwarya shared the stage with the top fertility specialist of Tamilnadu in IFS CME.',
    caption: 'Dr.Aishwarya shared the stage with the top fertility specialist of Tamilnadu in IFS CME.'
  },
  {
    src: '/images/gallery/03.jpeg',
    alt: 'Dr. Aishwarya has been recognized by her mentor, Dr. K. M. Kundavi Shankar, Lead Consultant at the Institute of Reproductive Medicine, MMM Hospital, for her dedication, clinical expertise, and contributions to the field of reproductive medicine.',
    caption:
      'Dr. Aishwarya has been recognized by her mentor, Dr. K. M. Kundavi Shankar, Lead Consultant at the Institute of Reproductive Medicine, MMM Hospital, for her dedication, clinical expertise, and contributions to the field of reproductive medicine.'
  },
  {
    src: '/images/gallery/04.jpeg',
    alt: 'Dr.Aishwarya Parthasarathy shared the stage with Dr.G.Buvaneswari Medical Director of GBR Fertility Center.',
    caption:
      'Dr.Aishwarya Parthasarathy shared the stage with Dr.G.Buvaneswari Medical Director of GBR Fertility Center.'
  },
  {
    src: '/images/gallery/05.jpeg',
    alt: 'Dr.Aishwarya performing laparoscopic surgery.',
    caption: 'Dr.Aishwarya performing laparoscopic surgery.'
  },
  {
    src: '/images/gallery/06.jpeg',
    alt: 'Dr. Aishwarya with her mentor – Professor.Dr.Sunesh (AIIMS- New Delhi).',
    caption: 'Dr. Aishwarya with her mentor – Professor.Dr.Sunesh (AIIMS- New Delhi). '
  },
  {
    src: '/images/gallery/vadapalani/01.jpeg',
    alt: 'ASCAS Vadapalani branch interior',
    caption: 'ASCAS Vadapalani Branch'
  },
  {
    src: '/images/gallery/vadapalani/02.jpeg',
    alt: 'ASCAS Vadapalani branch facility',
    caption: 'ASCAS Vadapalani Branch'
  },
  {
    src: '/images/gallery/vadapalani/03.jpeg',
    alt: 'ASCAS Vadapalani branch consultation space',
    caption: 'ASCAS Vadapalani Branch'
  },
  {
    src: '/images/gallery/vadapalani/04.jpeg',
    alt: 'ASCAS Vadapalani branch clinic space',
    caption: 'ASCAS Vadapalani Branch'
  }
];

export const videos = [
  {
    id: 'OlDcuUB8WM0',
    title: ''
  },
  { id: 'Nf5OU3GaJtA', title: '' },
  { id: 'cfsPnSwH7DA', title: '' },
  { id: 'PrMkOoMZK4M', title: '' },
  { id: 'EFRpI6x8Uv0', title: '' },
  { id: 'IrniJo8njzQ', title: '' }
];
