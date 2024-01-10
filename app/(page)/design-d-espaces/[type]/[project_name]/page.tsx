import DetailCard from '@/components/design-d-espaces/detail-card';
import { Project } from '@/components/design-d-espaces/project-card';
import Footer from '@/components/ui/footer/footer';
import P from '@/components/ui/text/p';
import architecture from '@/lib/design-d-espaces/architecture.json';
import architecture_interieurs from '@/lib/design-d-espaces/architecture_interieurs.json';
import architecture_retail from '@/lib/design-d-espaces/architecture_retail.json';
import architecture_tertiaire from '@/lib/design-d-espaces/architecture_tertiaire.json';
import { encodeUrl } from '@/lib/utils';
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

export async function generateStaticParams() {
  const result1 = architecture.map((item) => ({ project_name: item.project_name }));
  const result2 = architecture_interieurs.map((item) => ({ project_name: item.project_name }));
  const result3 = architecture_retail.map((item) => ({ project_name: item.project_name }));
  const result4 = architecture_tertiaire.map((item) => ({ project_name: item.project_name }));

  return [...result1, ...result2, ...result3, ...result4].map((post) => ({
    project_name: post.project_name
  }));
}
export default async function Page({
  params
}: {
  params: {
    type:
      | 'architecture'
      | 'architecture_interieurs'
      | 'architecture_retail'
      | 'architecture_tertiaire';
    project_name: string;
  };
}) {
  let project: Project | undefined;

  console.log(params.project_name);

  switch (params.type) {
    case 'architecture':
      project = architecture.find(
        (project) => params.project_name === encodeUrl(project.project_name)
      );
      break;
    case 'architecture_interieurs':
      project = architecture_interieurs.find(
        (project) => params.project_name === encodeUrl(project.project_name)
      );
      break;
    case 'architecture_retail':
      project = architecture_retail.find(
        (project) => params.project_name === encodeUrl(project.project_name)
      );
      break;
    case 'architecture_tertiaire':
      project = architecture_tertiaire.find(
        (project) => params.project_name === encodeUrl(project.project_name)
      );
      break;
    default:
      // Gérer le cas où le type n'est pas reconnu
      break;
  }

  console.log(project);

  if (!project) {
    return notFound();
  }

  return (
    <div className="relative z-[70] flex flex-col gap-medium">
      <nav
        aria-label="Fil d'ariane"
        className="slideInFromLeft caption -mt-sub-large flex items-center gap-1 px-extra-small text-primary90 mobile-large:gap-extra-small tablet:-mt-0 tablet:px-medium"
      >
        <Link href="/design-d-espaces">Design d&apos;espaces</Link>
        <Icon path={mdiChevronRight} size={'16px'}></Icon>
        <Link href={`/design-d-espaces?type=${params.type}`} className="truncate">
          {params.type.charAt(0).toUpperCase() + params.type.slice(1).replace('_', ' ')}
        </Link>
        <Icon path={mdiChevronRight} size={'16px'}></Icon>
        <P className="truncate">{project.project_name}</P>
      </nav>
      <div className="duration-75">
        <DetailCard project={project}></DetailCard>
      </div>
      <Footer className="relative mt-medium"></Footer>
    </div>
  );
}
