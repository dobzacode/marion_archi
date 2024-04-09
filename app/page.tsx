import HeroSection from '@/components/landing/hero-section';

export default function Home() {
  return (
    <main className="relative -mt-large flex h-[82.5vh] max-h-[70vh] w-screen flex-col gap-extra-large overflow-hidden px-small max-tablet:max-h-[65vh] mobile-large:h-[82.5vh] ">
      <HeroSection></HeroSection>
    </main>
  );
}
