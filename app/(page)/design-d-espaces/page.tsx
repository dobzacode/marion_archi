import ContentSection from '@/components/design-d-espaces/content-section';
import DesignMenu from '@/components/design-d-espaces/design-menu';

export default function Page() {
  return (
    <main className="relative flex h-full w-full flex-col px-[1px]">
      <DesignMenu></DesignMenu>
      <ContentSection></ContentSection>
    </main>
  );
}
