'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import architecture from '@/public/design-d-espaces/architecture.json';
import architecture_interieurs from '@/public/design-d-espaces/architecture_interieurs.json';
import architecture_retail from '@/public/design-d-espaces/architecture_retail.json';
import architecture_tertiaire from '@/public/design-d-espaces/architecture_tertiaire.json';
import { AnimatePresence } from 'framer-motion';
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

  // Utilisation de useMemo pour éviter le recalcul de projectsToShow
  const projectsToShow: Project[] | undefined = useMemo(() => {
    if (projectTypes[actualType]) {
      return projectTypes[actualType];
    }

    return undefined; // Utiliser undefined au lieu de projectsToShow initial
  }, [actualType]);

  const router = useRouter();

  const handleButtonClick = (project_name: string) => {
    router.push(`${pathname}?type=${actualType}&project=${project_name}`);
  };

  // Utiliser React.memo pour éviter le re-render inutile du composant

  return (
    <section>
      <ul className="overflow flex flex-wrap">
        <AnimatePresence mode="wait">
          {projectsToShow?.map((project, index) => (
            <ContentCard
              onClick={() => handleButtonClick(project.project_name)}
              arrLength={projectsToShow.length}
              index={index}
              project_name={project.project_name}
              actualType={actualType}
              key={`${project.project_name}${v4()}`}
            />
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
