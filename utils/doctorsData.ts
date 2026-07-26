export interface Doctor {
  id: string;
  slug: string;
  name: string;
  qualification: string;
  role: string;
  shortIntro: string;
  fullAbout: string;
  image: string;
  imagePosition: string;
  expertise: string[];
  philosophy?: string;
  href: string;
}

export const doctorsData: Doctor[] = [
  {
    id: 'aishwarya',
    slug: 'dr-aishwarya-parthasarathy',
    name: 'Dr. Aishwarya Parthasarathy',
    qualification: 'MD (OG), DNB (OG), FNB (RM), MRCOG (UK)',
    role: 'Consultant Gynaecologist & Fertility Specialist',
    shortIntro: 'AIIMS-trained Gynaecologist and IVF Expert with advanced FNB fellowship in Reproductive Medicine, specializing in complex fertility care.',
    fullAbout: 'Dr. Aishwarya Parthasarathy is a highly acclaimed Gynaecologist, Fertility Specialist, and IVF Expert with a proven track record of helping women achieve their reproductive goals. Dr. Aishwarya holds an MD in Obstetrics and Gynaecology from AIIMS, New Delhi, and has further specialized with a Fellowship of National Board (FNB) in Reproductive Medicine. With extensive experience from prestigious institutions such as JIPMER, AIIMS, IRM-MMM, and several other leading hospitals, she brings a wealth of knowledge and expertise to her clinical practice.',
    image: '/images/doctor/aishwarya.jpeg',
    imagePosition: 'object-center',
    expertise: [
      'Complex IVF cases',
      'PCOS and Endometriosis Management',
      'Laparoscopic Gynaecological surgeries',
      'Fertility preservation and egg freezing'
    ],
    philosophy: "Dr. Aishwarya Parthasarathy is known for her compassionate and patient-centric approach. She takes the time to understand each patient's unique needs and concerns, tailoring her treatment plans to meet their individual requirements.",
    href: '/doctors/dr-aishwarya-parthasarathy'
  },
  {
    id: 'ashwin',
    slug: 'dr-ashwin-muralidharan',
    name: 'Dr. Ashwin Muralidharan',
    qualification: 'MBBS, MDRD, DNB (RD), FRCR (UK)',
    role: 'Consultant Radiologist & Fetal Imaging Specialist',
    shortIntro: 'Distinguished Radiologist and FRCR (UK) fellow specializing in 3D/4D fetal ultrasound, gynecological MRI, and male pelvic diagnostics.',
    fullAbout: 'Dr. Ashwin Muralidharan is a highly skilled Consultant Radiologist and Fetal Imaging Specialist with a passion for diagnosing and interpreting complex medical images. Holding FRCR (UK) and DNB (Radiodiagnosis) with distinction, Dr. Ashwin Muralidharan has consistently demonstrated mastery in radiological techniques.',
    image: '/images/doctor/ashwin.jpeg',
    imagePosition: 'object-top',
    expertise: [
      'Gynecological Imaging (Fibroids, Endometriosis, Adenomyosis)',
      'Cross-Sectional Imaging (CT, MRI, PET-CT)',
      '3D/4D USG imaging of Fetal and Uterine Anomalies',
      'Male infertility imaging (Scrotal Doppler)'
    ],
    philosophy: 'He is committed to delivering precise diagnostics and empathetic care. He collaborates closely with patients and healthcare providers to ensure imaging results are interpreted within the broader context of overall health and well-being.',
    href: '/doctors/dr-ashwin-muralidharan'
  },
  {
    id: 'ashok',
    slug: 'dr-m-ashok-kumar',
    name: 'Dr. M. Ashok Kumar',
    qualification: 'Surgical Gastroenterology Specialist',
    role: 'Consultant Surgical Gastroenterologist',
    shortIntro: 'Renowned Surgical Gastroenterologist and pioneer in advanced minimally invasive laparoscopic procedures.',
    fullAbout: 'Dr. M. Ashok Kumar is a renowned Surgical Gastroenterologist and a pioneer in laparoscopic surgery, with an exceptional track record in performing advanced procedures with precision and compassion.',
    image: '/images/doctor/ashok.jpeg',
    imagePosition: 'object-center',
    expertise: [
      'Advanced minimally invasive laparoscopic surgeries',
      'Gastrointestinal (GI) tract, liver & pancreas surgery',
      'Minimally invasive laparoscopic hernia repair',
      'Hepatobiliary, pancreatic & GI cancer surgery'
    ],
    philosophy: 'Dr. Ashokkumar is dedicated to providing patient-centered care, ensuring that each patient receives personalized attention and support throughout their treatment journey.',
    href: '/doctors/dr-m-ashok-kumar'
  },
  {
    id: 'balamurugan',
    slug: 'dr-balamurugan-s',
    name: 'Dr. Balamurugan S',
    qualification: 'DM Cardiology – CMC Vellore',
    role: 'Consultant Interventional Cardiologist',
    shortIntro: 'Gold-medalist Interventional Cardiologist from CMC Vellore specializing in complex coronary interventional care and pregnancy heart health.',
    fullAbout: 'Dr. Balamurugan S is a Consultant Interventional Cardiologist specialising in Complex Coronary & Structural Heart Interventions. He holds a DM in Cardiology from Christian Medical College (CMC), Vellore, and has been awarded Multiple Gold Medals in MBBS & Cardiology Training.',
    image: '/images/doctor/balamurugan.jpeg',
    imagePosition: 'object-[50%_15%]',
    expertise: [
      'Coronary Angiogram and Angioplasty',
      'Complex Coronary Interventions (CHIP PCI)',
      'Imaging & Physiology-guided PCI (IVUS, OCT)',
      'Structural Heart Interventions & Pregnancy Cardiac Care'
    ],
    philosophy: 'Dr. Balamurugan S is committed to delivering precise, evidence-based cardiac care, with a focus on imaging and physiology-guided interventions to achieve the best outcomes for each patient.',
    href: '/doctors/dr-balamurugan-s'
  },
  {
    id: 'narayanan',
    slug: 'dr-narayanan-a',
    name: 'Dr. Narayanan A',
    qualification: 'MD Dermatology – AIIMS, New Delhi',
    role: 'Consultant Dermatologist',
    shortIntro: 'AIIMS-trained Dermatologist and JIPMER Pediatric Dermatology specialist offering comprehensive medical and laser skincare.',
    fullAbout: 'Dr. Narayanan A is a Consultant Dermatologist with an MD in Dermatology and Venereology from AIIMS, New Delhi. He also holds a PDCC in Paediatric Dermatology from JIPMER, Puducherry, a Diplomate of the National Board in Dermatology, Venereology and Leprosy, and an MRCP Specialty Certificate Examination in Dermatology.',
    image: '/images/doctor/narayanan.jpeg',
    imagePosition: 'object-[50%_15%]',
    expertise: [
      'Paediatric Dermatology',
      'Advanced treatment for Psoriasis, Acne & Hair Fall',
      'Vitiligo Surgery & Hair Transplantation',
      'Laser Hair Reduction & Fractional CO2 Laser'
    ],
    philosophy: 'Dr. Narayanan A is dedicated to providing comprehensive dermatological care across all age groups, combining medical and procedural expertise to address skin, hair, and venereological conditions.',
    href: '/doctors/dr-narayanan-a'
  },
  {
    id: 'dhivya',
    slug: 'dr-dhivya-kumar',
    name: 'Dr. Dhivya Kumar',
    qualification: 'MS General Surgery, DNB, MRCS(Ed)',
    role: 'Consultant Laparoscopic & General Surgeon',
    shortIntro: 'MMC Assistant Professor specializing in minimally invasive laparoscopic surgery, general surgical care, and women’s health.',
    fullAbout: 'Dr. Dhivya Kumar is a Consultant Laparoscopic and General Surgeon and Assistant Professor at Madras Medical College. She holds an MS in General Surgery and DNB in General Surgery from Madras Medical College / NBE, and MRCS(Ed) from the Royal College of Surgeons, UK.',
    image: '/images/doctor/dhivya.jpeg',
    imagePosition: 'object-top',
    expertise: [
      'Laparoscopic and Open General Surgical Procedures',
      'Breast and Thyroid Surgeries',
      'Hernia, Gallbladder and Appendix Surgeries',
      "Women's Surgical Care & Wound Management"
    ],
    philosophy: 'Dr. Dhivya Kumar is dedicated to providing safe, minimally invasive surgical care, with a strong commitment to supporting patients through every stage of their surgical journey.',
    href: '/doctors/dr-dhivya-kumar'
  }
];
