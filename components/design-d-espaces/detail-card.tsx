import { DesignEspaceUnitQueryResponse, Image as ImageSanity } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomPortableText from '../sanity/portable-text';
import EmblaCarousel from '../ui/div/carousel/embla-carousel';
import { H1 } from '../ui/text/h1';

export default async function projectContent({
  project
}: {
  project: DesignEspaceUnitQueryResponse;
}) {
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
    honoraire,
    squareMeter,
    renovation,
    titre,
    description,
    imageGallery,
    mainImage,
    schema
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

      <div className="slideInFromLeft prose prose-base max-w-full">
        <CustomPortableText value={description}></CustomPortableText>
      </div>
      <div className="slideInFromLeft flex w-full gap-medium max-tablet:flex-col-reverse">
        <Image
          className="rounded-sm object-cover"
          src={urlForImage(schema).width(1920).height(1080).dpr(2).quality(80).url()}
          alt={`${titre} image`}
          width={800}
          height={800}
          sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
          placeholder="blur"
          blurDataURL={urlForImage(schema).width(20).quality(20).url()}
        />
        <div className="  bg-primary40 pl-0.5 max-tablet:hidden"></div>
        <aside className="[&>div]:body flex w-fit flex-wrap   gap-medium   tablet:flex-col [&>div>*:first-child]:laptop:whitespace-nowrap [&>div>*:last-child]:font-medium">
          <div className="sub-heading flex flex-col ">
            <p className="text-black/40">Honoraire</p>
            <p>{honoraire}</p>
          </div>
          <div className=" flex flex-col ">
            <p className="text-black/40">Rénovation</p>
            <p>{renovation}</p>
          </div>
          <div className=" flex flex-col ">
            <p className="text-black/40">Dimension</p>
            <p>{squareMeter} m²</p>
          </div>
        </aside>
      </div>
      {imagesWithUrl ? (
        <EmblaCarousel imageArr={imagesWithUrl} options={{ loop: true, active: true }} />
      ) : null}
    </>
  );
}
