import { iconList } from './iconList';
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
    role: 'Consultant Gynecologist and Fertility Specialist',
    qualification: 'MD(OG), DNB(OG),  FNB(RM), MRCOG(UK)',
    about:
      'Dr. Aishwarya Parthasarathy is a highly acclaimed Gynecologist, Fertility Specialist, and IVF Expert with a proven track record of helping women achieve their reproductive goals. With an MD (ObGyn) from AIIMS, New Delhi, and advanced training in Reproductive Medicine, Dr. Aishwarya Parthasarathy brings a wealth of knowledge and expertise to her practice.',
    image: '/images/doctor/aishwarya.jpeg',
    icon: iconList.stethoscope,
    philosophy: `Dr. Aishwarya Parthasarathy is known for her compassionate and patient-centric approach. She takes the time to understand each patient's unique needs and concerns, tailoring her treatment plans to meet their individual requirements.`,
    expertise: [
      'Complex IVF cases',
      'PCOS and endometriosis management',
      'Laporoscopic Gynaec surgeries, Obstetrics Management',
      'Fertility preservation and egg freezing'
    ]
  },
  {
    name: 'Dr. Ashwin Muralidharan',
    role: 'Consultant Radiologist',
    qualification: 'MBBS, MDRD, DNB(RD), FRCR(UK)',
    about: `Dr. Ashwin Muralidharan is a highly skilled Consultant Radiologist and Fetal Imaging Specialist with a passion for diagnosing and interpreting complex medical images. With a FRCR (UK) and DNB (Radiodiagnosis) with Distinction, Dr. Ashwin Muralidharan has consistently demonstrated a mastery of radiological techniques.`,
    image: '/images/doctor/ashwin.jpeg',
    icon: iconList.scanLine,
    philosophy: `Dr. Ashwin Muralidharan is committed to providing accurate and compassionate care. He works closely with patients and healthcare providers to ensure that imaging results are interpreted in the context of overall health and well-being.`,
    expertise: [
      'Gynecological Imaging: Fibroids, Endometriosis, Adenomyosis, Ovarian Cysts & Uterine Anomalies.',
      'Cross-Sectional Imaging (CT, MRI, PET-CT) with special focus on Onco-Imaging and Musculoskeletal Imaging.',
      'Renowned for 3D/4D USC Imaging of Fetal & Uterine Anomalies.',
      'Male infertility imaging (Scrotal Doppler/ Cross sectional imaging male pelvis)'
    ]
  },
  {
    name: 'Dr. M. Ashokkumar',
    role: 'Consultant Surgical Gastroenterologist (SGE)',
    qualification: '',
    image: '/images/doctor/ashok.jpeg',
    about: `Dr. M. Ashokkumar is a renowned Surgical Gastroenterologist and Laparoscopy Pioneer with a remarkable track record of performing complex surgeries with precision and care. With an (link unavailable) in Surgical Gastroenterology and advanced training in laparoscopy, Dr. Ashokkumar has perfected the art of minimally invasive surgery.`,
    icon: iconList.microscope,
    philosophy: `Dr. Ashokkumar is dedicated to providing patient-centered care, ensuring that each patient receives personalized attention and support throughout their treatment journey. He is committed to staying at the forefront of surgical innovation, ensuring that his patients receive the most advanced and effective treatments available.`,
    expertise: [
      'Advanced minimally invasive laparoscopic Surgeries in GI/LIVER/PANCREAS/SPLEEN',
      'Minimally invasive laproscopic management for HERNIA/GALL BLADDER STONE/APPENDICITIS Hepatobiliary, pancreas and Gastrointestinal CANCER SURGEON Endoscopy and colonoscopy specialist',
      'Advanced Management of haemorrhoids/Fissure/Fistula in ano'
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
  { lable: 'Contact', path: 'contact' }
];
