'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { DesignServiceWithUrl } from '@/app/(page)/design-de-service/page';
import { AnimatePresence } from 'framer-motion';
import CategoryCard from './category-service-card';

export default function ContentServiceSection({
  designServiceArr
}: {
  designServiceArr: DesignServiceWithUrl[] | null;
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
          <Suspense>
            {actualType === 'projets' && (
              <CategoryCard
                key="projets"
                projectsToShow={designServiceArr?.filter((item) => {
                  return item.category === 'projets';
                })}
                arrLength={
                  designServiceArr?.filter((item) => {
                    return item.category === 'projets';
                  }).length ?? 0
                }
                actualType={actualType}
              />
            )}
            {actualType === 'recherches' && (
              <CategoryCard
                key="recherches"
                projectsToShow={designServiceArr?.filter((item) => {
                  return item.category === 'recherches';
                })}
                arrLength={
                  designServiceArr?.filter((item) => {
                    return item.category === 'recherches';
                  }).length ?? 0
                }
                actualType={actualType}
              />
            )}
          </Suspense>
        </AnimatePresence>
      </ul>
    </section>
  );
}
