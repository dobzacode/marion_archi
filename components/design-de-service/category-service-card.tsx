import { DesignServiceWithUrl } from '@/app/(page)/design-de-service/page';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useMemo } from 'react';
import useBetterMediaQuery from '../hooks/use-better-media-query';
import ProjectCard from './project-service-card';

interface CategoryCardProps {
  actualType: string;
  arrLength: number;
  projectsToShow: DesignServiceWithUrl[] | undefined;
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

    const secondVariants = {
      hidden: { y: 0, opacity: 0 },
      visible: () => ({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0
        }
      })
    };

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    if (!projectsToShow) return null;

    if (isMobile) {
      return (
        <>
          {projectsToShow.map((project, index) => {
            return (
              <Suspense>
                <ProjectCard
                  src={project.url}
                  variants={!searchParams.get('project') ? mobileVariants : secondVariants}
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
                variants={!searchParams.get('project') ? variants : secondVariants}
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
