import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import ProjectCard, { Project } from './project-card';

interface CategoryCardProps {
  actualType: string;
  arrLength: number;
  projectsToShow: Project[];
}

const CategoryCard: React.FC<CategoryCardProps> = React.memo(
  ({ actualType, arrLength, projectsToShow }: CategoryCardProps) => {
    const variants = useMemo(
      () => ({
        hidden: { y: -1000 },
        visible: (i: number) => ({
          y: 0,
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

    const router = useRouter();
    const pathname = usePathname();

    const handleButtonClick = (id: string) => {
      router.push(`${pathname}?type=${actualType}&project=${id}`, { scroll: false });
    };

    return (
      <>
        {projectsToShow.map((project, index) => {
          return (
            <ProjectCard
              src={`/assets/${actualType}/${project.project_name}/banner-${project.project_name}.jpg`}
              variants={variants}
              handleButtonClick={() => handleButtonClick(project.id)}
              index={index}
              key={project.id}
              {...project}
            ></ProjectCard>
          );
        })}
      </>
    );
  }
);

CategoryCard.displayName = 'ContentCard';

export default CategoryCard;
