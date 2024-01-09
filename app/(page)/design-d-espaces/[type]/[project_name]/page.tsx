import DetailCard from '@/components/design-d-espaces/detail-card';
import { Project } from '@/components/design-d-espaces/project-card';
import Footer from '@/components/ui/footer/footer';
import architecture from '@/lib/design-d-espaces/architecture.json';
import architecture_interieurs from '@/lib/design-d-espaces/architecture_interieurs.json';
import architecture_retail from '@/lib/design-d-espaces/architecture_retail.json';
import architecture_tertiaire from '@/lib/design-d-espaces/architecture_tertiaire.json';
import { encodeUrl } from '@/lib/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const result1 = architecture.map((item) => ({ project_name: item.project_name }));
  const result2 = architecture_interieurs.map((item) => ({ project_name: item.project_name }));
  const result3 = architecture_retail.map((item) => ({ project_name: item.project_name }));
  const result4 = architecture_tertiaire.map((item) => ({ project_name: item.project_name }));

  return [...result1, ...result2, ...result3, ...result4].map((post) => ({
    project_name: post.project_name
  }));
}
export default async function Page({ params }: { params: { type: string; project_name: string } }) {
  let project: Project | undefined;

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
    <div className="relative flex flex-col">
      <DetailCard project={project}></DetailCard>
      <Footer className="relative mt-large"></Footer>
    </div>
  );
}
