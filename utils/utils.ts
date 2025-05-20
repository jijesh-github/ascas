import { iconList } from './iconList';
export const services = [
  'IVF/ICSI',
  'IUI',
  'Egg/Sperm Freezing',
  'Male/Female Infertility Workups',
  'PCOS & Fibroid Management'
];

export const doctors = [
  {
    name: 'Dr. Aishwarya Parthasarathy',
    role: 'Gynecologist, Fertility Specialist & IVF Expert',
    about:
      'Dr. Aishwarya Parthasarathy is a highly acclaimed Gynecologist, Fertility Specialist, and IVF Expert with a proven track record of helping women achieve their reproductive goals. With an MD (ObGyn) from AIIMS, New Delhi, and advanced training in Reproductive Medicine, Dr. Parthasarathy brings a wealth of knowledge and expertise to her practice.',
    image: '/images/doctor/aishwarya.jpeg',
    icon: iconList.stethoscope,
    philosophy: `Dr. Aishwarya Parthasarathy is known for her compassionate and patient-centric approach. She takes the time to understand each patient's unique needs and concerns, tailoring her treatment plans to meet their individual requirements.`,
    expertise: [
      'Complex IVF cases',
      'PCOS and endometriosis management',
      'Male Infertility Solutions',
      'Fertility preservation and egg freezing'
    ]
  },
  {
    name: 'Dr. Ashwin Muralidharan',
    role: 'Consultant Radiologist & Fetal Imaging Specialist',
    about: `Dr. Ashwin Muralidharan is a highly skilled Consultant Radiologist and Fetal Imaging Specialist with a passion for diagnosing and interpreting complex medical images. With a FRCR (UK) and DNB (Radiodiagnosis) with Distinction, Dr. Muralidharan has consistently demonstrated a mastery of radiological techniques.`,
    image: '/images/doctor/doc_1.jpg',
    icon: iconList.scanLine,
    philosophy: `Dr. Muralidharan is committed to providing accurate and compassionate care. He works closely with patients and healthcare providers to ensure that imaging results are interpreted in the context of overall health and well-being.`,
    expertise: ['Fetal Anomaly Detection', 'Male Fertility Imaging', 'Onco-Imaging', 'Gynecological Ultrasounds']
  },
  {
    name: 'Dr. M. Ashokkumar',
    role: 'Surgical Gastroenterologist & Laparoscopy Pioneer',
    image: '/images/doctor/doc_1.jpg',
    about: `Dr. M. Ashokkumar is a renowned Surgical Gastroenterologist and Laparoscopy Pioneer with a remarkable track record of performing complex surgeries with precision and care. With an (link unavailable) in Surgical Gastroenterology and advanced training in laparoscopy, Dr. Ashokkumar has perfected the art of minimally invasive surgery.`,
    icon: iconList.microscope,
    philosophy: `Dr. Ashokkumar is dedicated to providing patient-centered care, ensuring that each patient receives personalized attention and support throughout their treatment journey. He is committed to staying at the forefront of surgical innovation, ensuring that his patients receive the most advanced and effective treatments available.`,
    expertise: [
      'Fertility-Sparing Surgeries',
      'Gallbladder and hernia repair',
      'Cancer Resections',
      'Painless piles and fistula treatment'
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
    items: ['IVF/ICSI', 'IUI', 'Egg/Sperm Freezing', 'Male/Female Infertility Workups', 'PCOS & Fibroid Management']
  },
  {
    title: 'Pregnancy Support',
    icon: iconList.baby,
    items: ['Govt-Recommended Pregnancy ECHO', 'High-Risk Pregnancy Care', 'CTG Fetal Monitoring']
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
