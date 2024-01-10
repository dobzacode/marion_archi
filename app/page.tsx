import HeroSection from '@/components/landing/hero-section';
import Footer from '@/components/ui/footer/footer';

export default function Home() {
  return (
    <main className="relative flex h-[80vh] w-screen flex-col gap-extra-large overflow-hidden px-small mobile-large:h-[83vh]">
      <HeroSection></HeroSection>
      <Footer></Footer>
    </main>
  );
}
