import DesignDeServiceSection from './design-de-service/design-de-service-section';
import DesignEspaceSection from './design-espace/design-espace-section';

export default function CvSection() {
  return (
    <section className="h-screen">
      <DesignEspaceSection></DesignEspaceSection>
      <DesignDeServiceSection></DesignDeServiceSection>
    </section>
  );
}
