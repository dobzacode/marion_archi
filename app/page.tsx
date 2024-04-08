import HeroSection from '@/components/landing/hero-section';

export default function Home() {
  return (
    <main className="relative flex h-[80vh] w-screen flex-col gap-extra-large overflow-hidden px-small mobile-large:h-[82.5vh]">
      <HeroSection></HeroSection>
    </main>
  );
}
