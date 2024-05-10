import DetailServiceCard from '@/components/design-de-service/detail-service-card';
import P from '@/components/ui/text/p';

import { sanityFetch } from '@/sanity/lib/fetch';
import { DESIGNSERVICE_QUERY, DesignServiceUnitQueryResponse } from '@/sanity/lib/queries';
import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateMetadata = ({ params }: { params: { titre: string } }): Metadata => {
  return {
    title: `Design de service | ${params.titre}`,
    description: `Découvrez le projet ${params.titre} de Marion Deleersnyder.`
  };
};

export default async function Page({
  params
}: {
  params: {
    type: 'recherches' | 'projets';

    titre: string;
  };
}) {
  const project = await sanityFetch<DesignServiceUnitQueryResponse>({
    query: DESIGNSERVICE_QUERY,
    params,
    stega: false
  });

  if (!project) {
    return notFound();
  }

  return (
    <div className=" relative  flex flex-col gap-medium">
      <nav
        aria-label="Fil d'ariane"
        className="slideInFromLeft caption -mt-large flex items-center gap-1 px-extra-small text-primary90 mobile-large:gap-extra-small tablet:-mt-small tablet:px-medium"
      >
        <Link href="/design-de-service">Design de service</Link>
        <Icon path={mdiChevronRight} size={'16px'}></Icon>
        <Link href={`/design-de-service?type=${params.type}`} className="truncate">
          {params.type.charAt(0).toUpperCase() + params.type.slice(1).replace('_', ' ')}
        </Link>
        <Icon path={mdiChevronRight} size={'16px'}></Icon>
        <P className="truncate">{project.titre}</P>
      </nav>
      <div className="duration-75">
        <DetailServiceCard project={project}></DetailServiceCard>
      </div>
    </div>
  );
}
