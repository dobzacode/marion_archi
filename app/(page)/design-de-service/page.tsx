import ContentServiceSection from '@/components/design-de-service/content-service-section';
import DesignServiceMenu from '@/components/design-de-service/design-service-menu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Design de Service | Marion Deleersnyder, Architecte Visionnaire',
  description:
    "Explorez le portfolio exceptionnel de Marion Deleersnyder dédié au design de service. Plongez dans son univers créatif où l'architecture rencontre l'innovation pour offrir des solutions uniques. Découvrez ses projets variés et trouvez l'inspiration pour intégrer le design de service à votre environnement avec élégance et fonctionnalité."
};

export default async function Page() {
  return (
    <>
      <main className="relative flex h-full w-full flex-col px-[1px]">
        <DesignServiceMenu />
        <ContentServiceSection />
      </main>
    </>
  );
}
