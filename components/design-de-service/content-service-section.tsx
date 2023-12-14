'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import projets from '@/public/design-de-service/projets.json';
import recherches from '@/public/design-de-service/recherches.json';
import { AnimatePresence } from 'framer-motion';
import CategoryCard from './category-service-card';

export default function ContentServiceSection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [actualType, setActualType] = useState<string>('projets');

  useEffect(() => {
    const typeFromParams = searchParams.get('type');
    setActualType(typeFromParams ? typeFromParams : 'projets');
  }, [pathname, searchParams]);

  return (
    <section>
      <ul key="projectList" className="relative flex flex-wrap ">
        <AnimatePresence mode="wait">
          {actualType === 'projets' && (
            <CategoryCard
              key="projets"
              projectsToShow={projets}
              arrLength={projets.length}
              actualType={actualType}
            />
          )}
          {actualType === 'recherches' && (
            <CategoryCard
              key="recherches"
              projectsToShow={recherches}
              arrLength={recherches.length}
              actualType={actualType}
            />
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}
