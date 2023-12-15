import ContentSection from '@/components/design-d-espaces/content-section';
import DesignMenu from '@/components/design-d-espaces/design-menu';
import Footer from '@/components/ui/footer/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio Design d'Espace | Marion Deleersnyder, Architecte Créative",
  description:
    "Découvrez l'expertise unique de Marion Deleersnyder en design d'espace à travers son portfolio captivant. Explorez ses créations innovantes, son approche artistique et son talent exceptionnel en architecture. Parcourez ses réalisations inspirantes pour trouver l'inspiration pour votre projet de design d'intérieur."
};

export default function Page() {
  return (
    <main className="relative flex h-full w-full flex-col px-[1px]">
      <DesignMenu></DesignMenu>
      <ContentSection></ContentSection>
      <Footer className="-bottom-sub-large"></Footer>
    </main>
  );
}
