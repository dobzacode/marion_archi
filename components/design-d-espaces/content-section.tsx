'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { DesignEspaceWithUrl } from '@/app/(page)/design-d-espaces/page';
import { AnimatePresence } from 'framer-motion';
import CategoryCard from './category-card';

export default function ContentSection({
  designEspaceArr
}: {
  designEspaceArr: DesignEspaceWithUrl[] | null;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [actualType, setActualType] = useState<string>('architecture_interieurs');

  useEffect(() => {
    const typeFromParams = searchParams.get('type');
    setActualType(typeFromParams ? typeFromParams : 'architecture_interieurs');
  }, [pathname, searchParams]);

  return (
    <section>
      <ul key="projectList" className="relative flex flex-wrap ">
        <AnimatePresence mode="wait">
          {actualType === 'architecture_interieurs' && (
            <CategoryCard
              key="architecture_interieurs"
              projectsToShow={designEspaceArr?.filter((item) => {
                return item.category === 'interieur';
              })}
              arrLength={
                designEspaceArr?.filter((item) => {
                  return item.category === 'interieur';
                }).length ?? 0
              }
              actualType={actualType}
            />
          )}
          {actualType === 'architecture' && (
            <CategoryCard
              key="architecture"
              projectsToShow={designEspaceArr?.filter((item) => {
                return item.category === 'architecture';
              })}
              arrLength={
                designEspaceArr?.filter((item) => {
                  return item.category === 'architecture';
                }).length ?? 0
              }
              actualType={actualType}
            />
          )}
          {actualType === 'architecture_retail' && (
            <CategoryCard
              key="architecture_retail"
              projectsToShow={designEspaceArr?.filter((item) => {
                return item.category === 'retail';
              })}
              arrLength={
                designEspaceArr?.filter((item) => {
                  return item.category === 'retail';
                }).length ?? 0
              }
              actualType={actualType}
            />
          )}
          {actualType === 'architecture_tertiaire' && (
            <CategoryCard
              key={'architecture_tertiaire'}
              projectsToShow={designEspaceArr?.filter((item) => {
                return item.category === 'tertiaire';
              })}
              arrLength={
                designEspaceArr?.filter((item) => {
                  return item.category === 'tertiaire';
                }).length ?? 0
              }
              actualType={actualType}
            />
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}
