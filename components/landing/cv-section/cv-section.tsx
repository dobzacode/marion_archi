import DesignDeServiceSection from './design-de-service/design-de-service-section';
import DesignEspaceSection from './design-espace/design-espace-section';

export default function CvSection() {
  return (
    <section className="flex h-screen flex-col gap-medium laptop:gap-extra-large">
      <DesignEspaceSection></DesignEspaceSection>
      <DesignDeServiceSection></DesignDeServiceSection>
    </section>
  );
}
