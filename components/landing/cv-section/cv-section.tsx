import BaroudeuseTitleBlock from './baroudeuse/baroudeuse-title-block';
import DesignDeServiceSection from './design-de-service/design-de-service-section';
import DesignEspaceSection from './design-espace/design-espace-section';
import VieAssociativeSection from './vie-associative/vie-associative-section';

export default function CvSection() {
  return (
    <section className="flex h-screen flex-col">
      <DesignEspaceSection></DesignEspaceSection>
      <DesignDeServiceSection></DesignDeServiceSection>
      <div className=" relative block h-full w-full max-[1298px]:translate-y-96 max-laptop:flex max-laptop:flex-col-reverse max-tablet:h-[55rem] ">
        <section className=" relative flex w-full translate-x-24 flex-col-reverse items-center justify-center gap-extra-large px-[10px] max-laptop:mt-large max-laptop:py-extra-large max-tablet:hidden tablet:gap-small">
          <BaroudeuseTitleBlock className="laptop absolute flex  w-[40rem] flex-col max-laptop:translate-x-5  max-tablet:translate-x-0   laptop:right-[10%]"></BaroudeuseTitleBlock>
        </section>
        <VieAssociativeSection></VieAssociativeSection>
      </div>
    </section>
  );
}
