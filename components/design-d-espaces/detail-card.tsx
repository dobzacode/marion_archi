import { DesignEspaceUnitQueryResponse, Image as ImageSanity } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomPortableText from '../sanity/portable-text';

const formatList = (list: string[]) => {
  if (!list || list.length === 0) return '';
  if (list.length === 1) return list[0];
  if (list.length === 2) return list.join(' et ');
  return list.slice(0, -1).join(', ') + ' et ' + list.slice(-1);
};

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

  const { honoraire, squareMeter, renovation, titre, description, imageGallery, mainImage } =
    project;

  return (
    <>
      <div className="gap-md flex h-full max-tablet:flex-col-reverse">
        {project.mainImage ? (
          <Image
            className="rounded-sm object-cover"
            src={urlForImage(mainImage).width(1920).height(1080).dpr(2).quality(80).url()}
            alt={`${titre} image`}
            width={800}
            height={800}
            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
            placeholder="blur"
            blurDataURL={urlForImage(project.mainImage).width(20).quality(20).url()}
          />
        ) : null}
        <div className=" bg-primary-400 flex-grow pl-0.5 "></div>
        <aside className="[&>div]:body gap-md flex w-fit   flex-wrap   tablet:flex-col [&>div>*:first-child]:laptop:whitespace-nowrap [&>div>*:last-child]:font-medium">
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
            <p>{squareMeter}</p>
          </div>
        </aside>
      </div>

      <div className="prose prose-base max-w-full">
        <CustomPortableText value={description}></CustomPortableText>
      </div>
      {/* {imagesWithUrl ? (
        <EmblaCarousel imageArr={imagesWithUrl} options={{ loop: true, active: true }} />
      ) : null} */}
    </>
  );
}
