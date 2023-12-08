'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import architecture from '@/public/design-d-espaces/architecture.json';
import architecture_interieurs from '@/public/design-d-espaces/architecture_interieurs.json';
import architecture_retail from '@/public/design-d-espaces/architecture_retail.json';
import architecture_tertiaire from '@/public/design-d-espaces/architecture_tertiaire.json';
import { v4 } from 'uuid';
import ContentCard from './content-card';

export interface Project {
  project_name: string;
  information: {
    renovation: number;
    honoraires: number;
    dimension: number;
    description: string;
  };
  picture: {
    banner: string;
    schema: string;
    gallery: string[];
    video: string;
  };
}

const projectTypes: Record<string, Project[]> = {
  architecture_retail,
  architecture,
  architecture_tertiaire,
  architecture_interieurs
};

export default function ContentSection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [actualType, setActualType] = useState<string>('architecture_interieurs');

  useEffect(() => {
    const typeFromParams = searchParams.get('type');
    setActualType(typeFromParams ? typeFromParams : 'architecture_interieurs');
  }, [pathname, searchParams]);

  // Récupérez le tableau de projets en fonction du type actuel
  const projectsToShow: Project[] = projectTypes[actualType] || [];

  return (
    <section>
      <ul className="flex flex-wrap overflow-hidden">
        {projectsToShow.map((project, index) => {
          return (
            <ContentCard
              index={index}
              {...project}
              actualType={actualType}
              key={v4()}
            ></ContentCard>
          );
        })}
      </ul>
    </section>
  );
}
