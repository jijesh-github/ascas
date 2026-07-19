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
    mapUrl: 'https://maps.app.goo.gl/FpnKJTQvc3rGZPqz9',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.91300280639618!2d80.18052373469796!3d13.04012077225027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52614cc3a6016b%3A0xe59e9878a0ae65c2!2s24%2C%20Chowdry%20Nagar%20Main%20Rd%2C%20opposite%20vasanthi%20dental%20hospital%2C%20Chowthri%20Nagar%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600087!5e1!3m2!1sen!2sin!4v1748695987640!5m2!1sen!2sin'
  },
  {
    id: 'vadapalani',
    name: 'Vadapalani',
    clinicName: 'ASCAS Fertility Center',
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
  'Fertility Preservation, Fertility Enhancing Surgeries',
  'Male/Female Infertility Workups',
  'PCOS & Fibroid Management'
];

export const doctors = [
  {
    name: 'Dr. Aishwarya Parthasarathy',
    role: 'Consultant Gynaecologist and Fertility Specialist',
    qualification: 'MD (OG), DNB (OG), FNB (RM), MRCOG (UK)',
    about:
      'Dr. Aishwarya Parthasarathy is a highly acclaimed Gynaecologist, Fertility Specialist, and IVF Expert with a proven track record of helping women achieve their reproductive goals. Dr. Aishwarya holds an MD in Obstetrics and Gynaecology from AIIMS, New Delhi, and has further specialized with a Fellowship of National Board (FNB) in Reproductive Medicine. With extensive experience from prestigious institutions such as JIPMER, AIIMS, IRM-MMM, and several other leading hospitals, she brings a wealth of knowledge and expertise to her clinical practice.',
    image: '/images/doctor/aishwarya.jpeg',
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
    about: `Dr. M. Ashok Kumar is a renowned Surgical Gastroenterologist and a pioneer in laparoscopic surgery, with an exceptional track record in performing advanced procedures with precision and compassion.`,
    icon: iconList.microscope,
    philosophy: `Dr. Ashokkumar is dedicated to providing patient-centered care, ensuring that each patient receives personalized attention and support throughout their treatment journey. He is committed to staying at the forefront of surgical innovation, ensuring that his patients receive the most advanced and effective treatments available.`,
    expertise: [
      'Advanced minimally invasive laparoscopic surgeries involving the gastrointestinal (GI) tract, liver, pancreas, and spleen.',
      'Minimally invasive laparoscopic management of hernia, gallbladder stones, and appendicitis. Specialist in hepatobiliary, pancreatic, and gastrointestinal cancers. Expert in endoscopy and colonoscopy.',
      'Advanced management of hemorrhoids, fissures, and fistulas in the anal region.'
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
    items: ['Pregnancy Related Blood Investigations', 'NT, Anomaly and Growth Scans', 'Pregenancy Related Vaccinations']
  },
  {
    title: 'Surgical & Diagnostics',
    icon: iconList.microscope,
    items: ['Laparoscopic Gynecology Surgeries', 'Advanced Imaging (MRI/CT/4D Ultrasound)', 'In-House Lab & Pharmacy']
  }
];

export const navLinks = [
  { lable: 'Home', path: '/' },
  { lable: 'About Us', path: '/about' },
  { lable: 'Services', path: '/services' },
  { lable: 'Our Team', path: '/team' },
  { lable: 'Blog', path: '/blog' },
  { lable: 'Branches', path: '/branches' },
  { lable: 'Contact', path: 'contact' }
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
