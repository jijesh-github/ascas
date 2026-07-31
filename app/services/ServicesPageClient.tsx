'use client';

import PageHero from '@/components/ui/PageHero';
import CtaSection from '@/components/home/CtaSection';
import {
  Stethoscope,
  Baby,
  Microscope,
  Scan,
  Sparkles,
  HeartPulse,
  ShieldCheck,
  Activity,
  Dna,
  Building2,
  Clock
} from 'lucide-react';

interface SimpleService {
  title: string;
  description: string;
  icon: React.ElementType;
}

const fertilityServices: SimpleService[] = [
  {
    title: 'IVF & ICSI Treatment',
    description: 'Advanced laboratory fertilization and precision microscopic sperm injection to overcome complex fertility challenges.',
    icon: Sparkles
  },
  {
    title: 'Intrauterine Insemination (IUI)',
    description: 'Minimally invasive fertility treatment placing processed motile sperm directly into the uterus timed precisely with ovulation.',
    icon: HeartPulse
  },
  {
    title: 'Fertility Preservation & Egg Freezing',
    description: 'Ultra-rapid vitrification technology allowing individuals to safely store healthy eggs, sperm, or embryos for future parenthood.',
    icon: ShieldCheck
  },
  {
    title: 'Fertility-Enhancing Keyhole Surgeries',
    description: 'Specialized laparoscopic and hysteroscopic procedures to correct uterine fibroids, polyps, septums, and tubal blockages.',
    icon: Dna
  },
  {
    title: 'Male & Female Infertility Workups',
    description: 'Comprehensive diagnostic evaluation including 3D pelvic imaging, Computer-Assisted Semen Analysis (CASA), and hormone profiling.',
    icon: Stethoscope
  },
  {
    title: 'PCOS & Fibroid Management',
    description: 'Tailored medical protocols, lifestyle guidance, and targeted non-surgical therapies for PCOS, endometriosis, and uterine conditions.',
    icon: Activity
  },
  {
    title: 'Advanced Embryology Services',
    description: 'Continuous embryo incubation, time-lapse monitoring, blastocyst culture, and laser-assisted hatching.',
    icon: Microscope
  },
  {
    title: 'Pre-Implantation Genetic Testing (PGT)',
    description: 'Advanced genetic screening of embryos for chromosomal health prior to transfer to maximize successful pregnancy outcomes.',
    icon: Baby
  }
];

const maternityServices: SimpleService[] = [
  {
    title: 'Targeted Anomaly Scan (TIFFA)',
    description: 'In-depth 4D high-resolution ultrasound examining fetal organ development, spine, and anatomy by expert fetal radiologists.',
    icon: Scan
  },
  {
    title: 'High-Risk Pregnancy Care',
    description: 'Specialized maternal-fetal monitoring and management for gestational diabetes, hypertension, and complex pregnancies.',
    icon: HeartPulse
  },
  {
    title: 'Govt-Recommended Fetal ECHO',
    description: 'Specialized fetal echocardiography to evaluate the structural integrity and blood flow of the baby’s heart.',
    icon: Activity
  },
  {
    title: 'CTG Fetal Heart Rate Monitoring',
    description: 'Real-time non-stress cardiotocography tracking fetal heart patterns and uterine contractions for peace of mind.',
    icon: Stethoscope
  },
  {
    title: 'First Trimester Screening & NIPT',
    description: 'Early pregnancy NT scan paired with non-invasive cell-free DNA blood testing for early chromosomal risk assessment.',
    icon: ShieldCheck
  },
  {
    title: 'Postnatal Care & Lactation Support',
    description: 'Post-delivery recovery guidance, lactation specialist counseling, and dedicated infant wellness support.',
    icon: Baby
  }
];

const surgicalServices: SimpleService[] = [
  {
    title: 'Laparoscopic Gynecological Surgeries',
    description: 'Keyhole surgical removal of uterine fibroids, ovarian cysts, endometriosis lesions, and laparoscopic hysterectomy.',
    icon: Microscope
  },
  {
    title: '4D Diagnostic Ultrasound & Imaging',
    description: 'High-resolution 4D pelvic scans, scrotal Doppler imaging, follicular monitoring, and 3D uterine cavity assessment.',
    icon: Scan
  },
  {
    title: 'Day-Care Surgical Procedures',
    description: 'Painless D&C, D&E, cervical cerclage placement, tubal ligation, and endometrial polyp removal with same-day recovery.',
    icon: Stethoscope
  },
  {
    title: 'General & Gastrointestinal Surgeries',
    description: 'Minimally invasive laparoscopic hernia repair, gallbladder stone removal, appendectomy, and laser piles treatment.',
    icon: Activity
  }
];

const clinicFacilities: SimpleService[] = [
  {
    title: 'Comfortable OPD Suites',
    description: 'Private consultation rooms designed for confidential doctor-patient discussions.',
    icon: Building2
  },
  {
    title: '24/7 On-Site Pharmacy',
    description: 'Fully stocked with specialized fertility medications, supplements, and emergency care needs.',
    icon: Clock
  },
  {
    title: 'Full-Time Diagnostic Lab',
    description: 'In-house lab for rapid hormone assays, beta-hCG tests, and routine blood diagnostics.',
    icon: Microscope
  },
  {
    title: 'Advanced Radiology Suite',
    description: 'High-precision ultrasound equipment for pelvic, fetal, and Doppler imaging.',
    icon: Scan
  },
  {
    title: 'Counseling & Patient Support',
    description: 'Dedicated financial and emotional guidance for aspiring parents.',
    icon: HeartPulse
  }
];

export default function ServicesPageClient() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* Page Hero Header */}
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services & Treatments' }]}
        eyebrow="Full-Spectrum Care"
        eyebrowIcon={<Stethoscope className="w-4 h-4 text-[#570026]" />}
        title={
          <>
            Our Services & <span className="font-accent italic text-amber-300 font-normal">Medical Treatments</span>
          </>
        }
        description="Comprehensive reproductive medicine, advanced embryology, 4D diagnostic scans, laparoscopic surgery, and high-risk pregnancy support at ASCAS Clinics."
      />

      {/* Main Container */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-12 sm:py-16 space-y-14 sm:space-y-16">

        {/* Section 1: Reproductive Medicine & Fertility Care */}
        <section className="space-y-6">
          <div className="border-b border-pink-200/80 pb-4 space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/80 text-[#570026] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reproductive Medicine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Fertility & Assisted Conception
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {fertilityServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white p-5 sm:p-6 border border-pink-100/80 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-start">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#570026] group-hover:bg-[#570026] group-hover:text-white transition-colors duration-300 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#570026] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Maternity & Fetal Care */}
        <section className="space-y-6">
          <div className="border-b border-pink-200/80 pb-4 space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/80 text-[#570026] text-xs font-bold uppercase tracking-wider">
              <Baby className="w-3.5 h-3.5" />
              <span>Maternity & Fetal Diagnostics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Pregnancy & Fetal Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {maternityServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white p-5 sm:p-6 border border-pink-100/80 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-start">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#570026] group-hover:bg-[#570026] group-hover:text-white transition-colors duration-300 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#570026] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Surgical & Advanced Diagnostics */}
        <section className="space-y-6">
          <div className="border-b border-pink-200/80 pb-4 space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/80 text-[#570026] text-xs font-bold uppercase tracking-wider">
              <Microscope className="w-3.5 h-3.5" />
              <span>Surgical & Diagnostic Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Surgical & Advanced Diagnostics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {surgicalServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white p-5 sm:p-6 border border-pink-100/80 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-start">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#570026] group-hover:bg-[#570026] group-hover:text-white transition-colors duration-300 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#570026] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: On-Site Clinic Facilities */}
        <section className="rounded-3xl bg-gradient-to-br from-white via-pink-50/30 to-pink-100/20 p-6 sm:p-10 border border-pink-200/60 shadow-sm space-y-6">
          <div className="border-b border-pink-200/60 pb-4 space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#570026] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              On-Site Clinical Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {clinicFacilities.map((facility, idx) => {
              const IconComp = facility.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-5 border border-pink-100 shadow-sm flex flex-col justify-start space-y-2 hover:border-pink-300 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center text-[#570026] shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug">{facility.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <CtaSection />

      </div>
    </main>
  );
}
