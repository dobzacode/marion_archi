import HeroSection from '@/components/landing/hero-section';
import Footer from '@/components/ui/footer/footer';

export default function Home() {
  return (
    <main className="flex flex-col gap-extra-large px-small">
      <HeroSection></HeroSection>
      <Footer></Footer>
    </main>
  );
}
