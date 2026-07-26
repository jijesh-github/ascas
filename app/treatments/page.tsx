import TreatmentsSection from '@/components/home/TreatmentsSection';
import PageHero from '@/components/ui/PageHero';
import { Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fertility Treatments & Specialized Care | ASCAS Fertility Center',
  description: 'Explore IVF, ICSI, IUI, fertility preservation, PCOS care, and minimally invasive surgeries offered by ASCAS Fertility Center in Chennai.',
  alternates: {
    canonical: '/treatments'
  }
};

export default function TreatmentsDirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-50/40">
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Fertility Treatments' }]}
        eyebrow="Specialized Reproductive Care"
        eyebrowIcon={<Sparkles className="w-4 h-4 text-pink-700" />}
        title={
          <>
            Advanced Fertility <span className="font-accent italic text-amber-300 font-normal">Treatments & Care</span>
          </>
        }
        description="Evidence-based reproductive protocols, state-of-the-art embryology labs, and personalized treatment pathways tailored to your journey."
      />
      <TreatmentsSection showHeader={false} showAll={true} />
    </main>
  );
}
