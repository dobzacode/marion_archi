import CvSection from '@/components/landing/cv-section';
import HeroSection from '@/components/landing/hero-section';

export default function Home() {
  return (
    <main className="flex flex-col gap-extra-large">
      <HeroSection></HeroSection>
      <CvSection></CvSection>
    </main>
  );
}
