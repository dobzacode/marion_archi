import CvSection from '@/components/landing/cv-section/cv-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A propos | Marion Deleersnyder',
  description:
    "Découvrez l'univers exceptionnel de Marion Deleersnyder, architecte de design d'intérieur. Explorez son portfolio diversifié et captivant, révélant son talent à travers une variété de projets uniques. De la conception d'espaces résidentiels élégants aux projets commerciaux innovants, plongez dans l'excellence de son travail créatif. Explorez maintenant les réalisations qui définissent le savoir-faire incomparable de Marion Deleersnyder en matière de design intérieur."
};

export default function Page() {
  return (
    <main className="relative flex h-full w-full flex-col px-[1px]">
      <CvSection></CvSection>
    </main>
  );
}
