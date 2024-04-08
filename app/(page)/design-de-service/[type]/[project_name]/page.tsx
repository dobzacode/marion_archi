import DetailServiceCard from '@/components/design-de-service/detail-service-card';
import { Project } from '@/components/design-de-service/project-service-card';
import P from '@/components/ui/text/p';
import projets from '@/lib/design-de-service/projets.json';
import recherches from '@/lib/design-de-service/recherches.json';

import { encodeUrl } from '@/lib/utils';
import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateMetadata = ({ params }: { params: { project_name: string } }): Metadata => {
  return {
    title: `Design de service | ${params.project_name}`,
    description: `Découvrez le projet ${params.project_name} de Marion Deleersnyder.`
  };
};

export async function generateStaticParams() {
  const result1 = projets.map((item) => ({ project_name: item.project_name }));
  const result2 = recherches.map((item) => ({ project_name: item.project_name }));

  return [...result1, ...result2].map((post) => ({
    project_name: post.project_name
  }));
}
export default async function Page({
  params
}: {
  params: {
    type: 'recherches' | 'projets';

    project_name: string;
  };
}) {
  let project: Project | undefined;

  console.log(params.project_name);

  switch (params.type) {
    case 'projets':
      project = projets.find((project) => params.project_name === encodeUrl(project.project_name));
      break;
    case 'recherches':
      project = recherches.find(
        (project) => params.project_name === encodeUrl(project.project_name)
      );
      break;
  }

  console.log(project);

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
        <P className="truncate">{project.project_name}</P>
      </nav>
      <div className="duration-75">
        <DetailServiceCard project={project}></DetailServiceCard>
      </div>
    </div>
  );
}
