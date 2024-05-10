'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import projets from '@/lib/design-de-service/projets.json';
import recherches from '@/lib/design-de-service/recherches.json';
import { DesignServiceQueryResponse } from '@/sanity/lib/queries';
import { AnimatePresence } from 'framer-motion';
import CategoryCard from './category-service-card';

export default function ContentServiceSection({
  designServiceArr
}: {
  designServiceArr: DesignServiceQueryResponse;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [actualType, setActualType] = useState<string>('recherches');

  useEffect(() => {
    const typeFromParams = searchParams.get('type');
    setActualType(typeFromParams ? typeFromParams : 'recherches');
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
