'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import architecture from '@/lib/design-d-espaces/architecture.json';
import architecture_interieurs from '@/lib/design-d-espaces/architecture_interieurs.json';
import architecture_retail from '@/lib/design-d-espaces/architecture_retail.json';
import architecture_tertiaire from '@/lib/design-d-espaces/architecture_tertiaire.json';
import { AnimatePresence } from 'framer-motion';
import CategoryCard from './category-card';

export default function ContentSection() {
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
              projectsToShow={architecture_interieurs}
              arrLength={architecture_interieurs.length}
              actualType={actualType}
            />
          )}
          {actualType === 'architecture' && (
            <CategoryCard
              key="architecture"
              projectsToShow={architecture}
              arrLength={architecture.length}
              actualType={actualType}
            />
          )}
          {actualType === 'architecture_retail' && (
            <CategoryCard
              key="architecture_retail"
              projectsToShow={architecture_retail}
              arrLength={architecture_retail.length}
              actualType={actualType}
            />
          )}
          {actualType === 'architecture_tertiaire' && (
            <CategoryCard
              key={'architecture_tertiaire'}
              projectsToShow={architecture_tertiaire}
              arrLength={architecture_tertiaire.length}
              actualType={actualType}
            />
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}
