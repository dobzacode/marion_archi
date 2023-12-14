import ContentServiceSection from '@/components/design-de-service/content-service-section';
import DesignServiceMenu from '@/components/design-de-service/design-service-menu';

export default function Page() {
  return (
    <main className="relative flex h-full w-full flex-col px-[1px]">
      <DesignServiceMenu />
      <ContentServiceSection />
    </main>
  );
}
