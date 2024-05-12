import { DesignServiceUnitQueryResponse, Image as ImageSanity } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomPortableText from '../sanity/portable-text';
import EmblaCarousel from '../ui/div/carousel/embla-carousel';
import { H1 } from '../ui/text/h1';

interface DetailServiceCardProps {
  project: DesignServiceUnitQueryResponse;
}

export default async function DetailServiceCard({ project }: DetailServiceCardProps) {
  if (!project) {
    return notFound();
  }

  const imagesWithUrl = project.imageGallery
    ? await Promise.all(
        project.imageGallery.map(async (image: ImageSanity) => {
          image.url = await urlForImage(image).width(1920).height(1080).dpr(2).quality(80).url();

          image.blurSrc = urlForImage(image).width(20).quality(20).url();
          return image;
        })
      )
    : null;

  const {
    titre,
    mainImage,
    diffusionRestitution,
    echangesEntretiensDialogues,
    nom,
    mediationsComptages,
    problematiquesEnjeux,
    prototypesActions,
    preconisations
  } = project;

  return (
    <>
      <div className="slideInFromLeft flex h-full w-full flex-col gap-medium">
        <H1
          className="  relative leading-[6.25rem]   max-[860px]:leading-[3.75rem] max-[651px]:leading-[4.125rem] max-[600px]:leading-[3.5rem] max-mobile-large:leading-[2.5rem]"
          textType="heading--extra-large"
        >
          {project.titre}
        </H1>
        {project.mainImage ? (
          <Image
            className="rounded-sm object-cover"
            src={urlForImage(mainImage).width(1920).height(1080).dpr(2).quality(80).url()}
            alt={`${titre} image`}
            width={1200}
            height={1200}
            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
            placeholder="blur"
            blurDataURL={urlForImage(mainImage).width(20).quality(20).url()}
          />
        ) : null}
      </div>

      <div className="slideInFromLeft flex flex-col gap-small">
        <h2 className="tablet:heading sub-heading font-medium">1 : PROBLEMATIQUES / ENJEUX</h2>
        <div className=" prose prose-base max-w-full">
          <CustomPortableText value={problematiquesEnjeux}></CustomPortableText>
        </div>
      </div>
      <div className="slideInFromLeft flex flex-col gap-small">
        <h2 className="tablet:heading sub-heading font-medium">
          2 : OUTILS DE MEDIATIONS, OBSERVATIONS / COMPTAGES
        </h2>
        <div className=" slideInFromLeft prose prose-base max-w-full">
          <CustomPortableText value={mediationsComptages}></CustomPortableText>
        </div>
      </div>
      <div className="slideInFromLeft flex flex-col gap-small">
        <h2 className="tablet:heading sub-heading font-medium">3 : PROTOTYPES / ACTIONS TESTS</h2>
        <div className=" prose prose-base max-w-full">
          <CustomPortableText value={prototypesActions}></CustomPortableText>
        </div>
      </div>

      <div className="slideInFromLeft flex flex-col gap-small">
        <h2 className="tablet:heading sub-heading font-medium">
          4 : ECHANGES / ENTRETIENS , LIENS / DIALOGUES
        </h2>
        <div className=" slideInFromLeft prose prose-base max-w-full">
          <CustomPortableText value={echangesEntretiensDialogues}></CustomPortableText>
        </div>
      </div>
      <div className="slideInFromLeft flex flex-col gap-small">
        <h2 className="tablet:heading sub-heading font-medium">
          5: OUTILS DE DIFFUSION / RESTITUTION
        </h2>
        <div className=" prose prose-base max-w-full">
          <CustomPortableText value={diffusionRestitution}></CustomPortableText>
        </div>
      </div>
      <div className="slideInFromLeft flex flex-col gap-small">
        <h2 className="tablet:heading sub-heading font-medium">6 : PRECONISATIONS</h2>
        <div className=" prose prose-base max-w-full">
          <CustomPortableText value={preconisations}></CustomPortableText>
        </div>
      </div>

      {imagesWithUrl ? (
        <EmblaCarousel imageArr={imagesWithUrl} options={{ loop: true, active: true }} />
      ) : null}
    </>
  );
}
