'use client';

import { DesignEspaceWithUrl } from '@/app/(page)/design-d-espaces/page';
import React, { Suspense, useMemo } from 'react';
import useBetterMediaQuery from '../hooks/use-better-media-query';
import ProjectCard from './project-card';

interface CategoryCardProps {
  actualType: string;
  arrLength: number;
  projectsToShow: DesignEspaceWithUrl[] | undefined;
}

const CategoryCard: React.FC<CategoryCardProps> = React.memo(
  ({ arrLength, projectsToShow }: CategoryCardProps) => {
    const isMobile = useBetterMediaQuery('(max-width: 500px)');

    const variants = useMemo(
      () => ({
        hidden: { y: -1000 },
        visible: (i: number) => ({
          y: 0,

          opacity: 1,
          transition: {
            delay: i * 0.115
          }
        }),
        exit: (i: number) => ({
          y: -1000,
          transition: {
            delay: (arrLength - i - 1) * 0.115
          }
        })
      }),
      [arrLength]
    );

    const mobileVariants = useMemo(
      () => ({
        hidden: { opacity: 0 },
        visible: () => ({
          opacity: 1,
          transition: { duration: '2s' }
        }),
        exit: (i: number) => ({
          x: 1000,
          transition: {
            delay: (arrLength - i - 1) * 0.115
          }
        })
      }),
      [arrLength]
    );

    if (!projectsToShow) return null;

    if (isMobile) {
      return (
        <>
          {projectsToShow.map((project, index) => {
            return (
              <Suspense>
                <ProjectCard
                  src={project.url}
                  variants={mobileVariants}
                  index={index}
                  key={project._id}
                  {...project}
                ></ProjectCard>
              </Suspense>
            );
          })}
        </>
      );
    }

    return (
      <>
        {projectsToShow.map((project, index) => {
          return (
            <Suspense>
              <ProjectCard
                src={project.url}
                variants={variants}
                index={index}
                key={project._id}
                {...project}
              ></ProjectCard>
            </Suspense>
          );
        })}
      </>
    );
  }
);

CategoryCard.displayName = 'ContentCard';

export default CategoryCard;
