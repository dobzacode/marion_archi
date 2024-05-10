import ContentSection from '@/components/design-d-espaces/content-section';
import DesignMenu from '@/components/design-d-espaces/design-menu';
import { sanityFetch } from '@/sanity/lib/fetch';
import { DesignEspace, DESIGNESPACE_QUERY, DesignEspaceQueryResponse } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Portfolio Design d'Espace | Marion Deleersnyder, Architecte Créative",
  description:
    "Découvrez l'expertise unique de Marion Deleersnyder en design d'espace à travers son portfolio captivant. Explorez ses créations innovantes, son approche artistique et son talent exceptionnel en architecture. Parcourez ses réalisations inspirantes pour trouver l'inspiration pour votre projet de design d'intérieur."
};

export interface DesignEspaceWithUrl extends DesignEspace {
  url: string;
  blurSrc: string;
}

export default async function Page() {
  const designEspaceArr = await sanityFetch<DesignEspaceQueryResponse>({
    query: DESIGNESPACE_QUERY,
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  const withImg = designEspaceArr
    ? await Promise.all(
        designEspaceArr.map(async (item) => {
          const url = await urlForImage(item.mainImage)
            .width(1920)
            .height(1080)
            .dpr(2)
            .quality(100)
            .url();
          const blurSrc = urlForImage(item.mainImage).width(20).quality(20).url();
          return { url, blurSrc, ...item };
        })
      )
    : null;

  return (
    <main className="relative flex h-full w-full flex-col px-[1px]">
      <DesignMenu></DesignMenu>
      <Suspense>
        <ContentSection designEspaceArr={withImg}></ContentSection>
      </Suspense>
    </main>
  );
}
