import DetailCard from '@/components/design-d-espaces/detail-card';

import P from '@/components/ui/text/p';
import { sanityFetch } from '@/sanity/lib/fetch';
import { DESIGNESPACE_QUERY, DesignEspaceUnitQueryResponse } from '@/sanity/lib/queries';
import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateMetadata = ({ params }: { params: { project_name: string } }): Metadata => {
  return {
    title: `Design d'espaces | ${params.project_name}`,
    description: `Découvrez le projet ${params.project_name} de Marion Deleersnyder.`
  };
};

export default async function Page({
  params
}: {
  params: {
    type:
      | 'architecture'
      | 'architecture_interieurs'
      | 'architecture_retail'
      | 'architecture_tertiaire';
    titre: string;
  };
}) {
  const project = await sanityFetch<DesignEspaceUnitQueryResponse>({
    query: DESIGNESPACE_QUERY,
    params,
    stega: false
  });

  if (!project) {
    return notFound();
  }

  console.log(params.titre);

  return (
    <div className="container relative mx-auto flex flex-col items-center gap-medium laptop:max-w-[1000px]">
      <nav
        aria-label="Fil d'ariane"
        className="slideInFromLeft caption -mt-large flex items-center gap-1 self-start px-extra-small text-primary90 mobile-large:gap-extra-small tablet:-mt-small tablet:px-medium"
      >
        <Link href="/design-d-espaces">Design d&apos;espaces</Link>
        <Icon path={mdiChevronRight} size={'16px'}></Icon>
        <Link href={`/design-d-espaces?type=${params.type}`} className="truncate">
          {params.type.charAt(0).toUpperCase() + params.type.slice(1).replace('_', ' ')}
        </Link>
        <Icon path={mdiChevronRight} size={'16px'}></Icon>
        <P className="truncate">{project.titre}</P>
      </nav>
      <div className="duration-75">
        <DetailCard project={project}></DetailCard>
      </div>
    </div>
  );
}
