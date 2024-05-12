import DetailServiceCard from '@/components/design-de-service/detail-service-card';

import P from '@/components/ui/text/p';
import { sanityFetch } from '@/sanity/lib/fetch';
import {
  DESIGNSERVICE_QUERY,
  DESIGNSERVICEUNIT_QUERY,
  DesignServiceUnitQueryResponse
} from '@/sanity/lib/queries';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    type:
      | 'architecture'
      | 'architecture_interieurs'
      | 'architecture_retail'
      | 'architecture_tertiaire';
    slug: string;
  };
};

export async function generateStaticParams() {
  const project = await sanityFetch<{ slug: string }[]>({
    query: `${DESIGNSERVICE_QUERY}{"slug": slug.current}`,
    perspective: 'published',
    stega: false
  });

  return project;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await sanityFetch<DesignServiceUnitQueryResponse>({
    query: DESIGNSERVICEUNIT_QUERY,
    params: { slug: params.slug },
    stega: false
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(project?.mainImage);

  return {
    title: project?.metatitre,
    description: project?.metadescription,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages
    }
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  const project = await sanityFetch<DesignServiceUnitQueryResponse>({
    query: DESIGNSERVICEUNIT_QUERY,
    params: { slug: params.slug },
    stega: draftMode().isEnabled,
    perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
  });

  console.log(project);

  if (!project) {
    return notFound();
  }

  return (
    <section className="flex flex-col gap-medium">
      <div className="max-w-screen section-px relative mx-auto w-full  laptop:container laptop:mx-auto laptop:max-w-[1000px]">
        <nav
          aria-label="Fil d'ariane"
          className="slideInFromLeft caption  flex items-center justify-start gap-1 self-start  text-primary90 mobile-large:gap-extra-small "
        >
          <Link href="/design-d-espaces">Design d&apos;espaces</Link>
          <Icon path={mdiChevronRight} size={'16px'}></Icon>
          <Link href={`/design-d-espaces?type=${params.type}`} className="truncate">
            {params.type.charAt(0).toUpperCase() + params.type.slice(1).replace('_', ' ')}
          </Link>
          <Icon path={mdiChevronRight} size={'16px'}></Icon>
          <P className="truncate">{project.titre}</P>
        </nav>
      </div>
      <div className="max-w-screen section-px relative mx-auto flex flex-col items-center gap-sub-large laptop:container max-tablet:gap-medium laptop:mx-auto laptop:max-w-[1000px]">
        <DetailServiceCard project={project}></DetailServiceCard>
      </div>
    </section>
  );
}
