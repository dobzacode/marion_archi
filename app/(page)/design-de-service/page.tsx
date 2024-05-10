import ContentServiceSection from '@/components/design-de-service/content-service-section';
import DesignServiceMenu from '@/components/design-de-service/design-service-menu';
import { sanityFetch } from '@/sanity/lib/fetch';
import {
  DesignService,
  DESIGNSERVICE_QUERY,
  DesignServiceQueryResponse
} from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Portfolio Design de Service | Marion Deleersnyder, Architecte Visionnaire',
  description:
    "Explorez le portfolio exceptionnel de Marion Deleersnyder dédié au design de service. Plongez dans son univers créatif où l'architecture rencontre l'innovation pour offrir des solutions uniques. Découvrez ses projets variés et trouvez l'inspiration pour intégrer le design de service à votre environnement avec élégance et fonctionnalité."
};

export interface DesignServiceWithUrl extends DesignService {
  url: string;
  blurSrc: string;
}

export default async function Page() {
  const designServiceArr = await sanityFetch<DesignServiceQueryResponse>({
    query: DESIGNSERVICE_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  const withImg = designServiceArr
    ? await Promise.all(
        designServiceArr.map(async (item) => {
          const url = await urlForImage(item?.mainImage)
            .width(1920)
            .height(1080)
            .dpr(2)
            .quality(100)
            .url();
          const blurSrc = urlForImage(item?.mainImage).width(20).quality(20).url();
          return { url, blurSrc, ...item };
        })
      )
    : null;

  console.log(designServiceArr);

  return (
    <>
      <main className="relative flex h-full w-full flex-col px-[1px]">
        <Suspense>
          <DesignServiceMenu />
        </Suspense>
        <Suspense>
          <ContentServiceSection designServiceArr={withImg} />
        </Suspense>
      </main>
    </>
  );
}
