import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ParallaxBackground from '../ui/div/parallax-background';
import H3 from '../ui/text/h3';
import P from '../ui/text/p';

export interface Project {
  id: string;
  project_name: string;
  information: {
    renovation: number;
    honoraires: number;
    dimension: number;
    description: string;
  };
}

interface ProjectProps extends Project {
  index: number;
  variants: Variants;
  handleButtonClick: () => void;
  src: string;
}

export default function ProjectCard({
  project_name,
  id,
  information,
  handleButtonClick,
  variants,
  index,
  // eslint-disable-next-line no-unused-vars
  src
}: ProjectProps) {
  const searchParams = useSearchParams();

  const [showMore, setShowMore] = useState<boolean>(Boolean(searchParams.get('project')));

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectFromParams = searchParams.get('project');
    if (projectFromParams !== id) {
      setShowMore(false);
    }
  }, [searchParams, id]);

  // -left-[100%] -left-[200%] -left-[300%] -left-[400%] -right-[10%] -right-[20%] -right-[30%] -right-[40%]

  return (
    <li
      className={cn('relative flex w-full flex-col mobile-large:w-1/3 tablet:w-1/4 laptop:w-1/5')}
    >
      <div
        className={cn(
          'relative z-30 aspect-[3/1] overflow-hidden  mobile-large:aspect-square mobile-large:h-full ',
          showMore && 'z-[25]'
        )}
      >
        <motion.button
          exit="exit"
          onClick={() => {
            setShowMore(!showMore);
            handleButtonClick();
          }}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          className={cn(
            'group relative flex h-full w-full  cursor-pointer items-center justify-center overflow-hidden border border-primary90 border-opacity-10 grayscale duration-slow hover:grayscale-0',
            showMore && 'grayscale-0'
          )}
        >
          <H3
            textType={'body'}
            className={cn(
              'relative z-10 px-small text-center text-primary1 duration-[2s]  group-hover:scale-105',
              showMore && 'translate-x-[150%] opacity-0'
            )}
          >
            <strong className="">{project_name.toUpperCase()}</strong>
          </H3>

          <div
            className={cn(
              'absolute h-full w-full overflow-hidden bg-black bg-opacity-70 duration-slow group-hover:bg-opacity-50',
              showMore && ' '
            )}
          ></div>
          <Image
            className="-z-10 object-cover duration-slow group-hover:scale-105"
            fill
            alt={`${project_name} picture`}
            src={'/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg'}
          ></Image>
        </motion.button>
      </div>

      <CSSTransition
        unmountOnExit
        nodeRef={contentRef}
        in={showMore}
        timeout={2000}
        classNames={'slide-in'}
      >
        <div
          ref={contentRef}
          className={cn(
            'absolute  top-full z-40 h-screen  w-screen overflow-hidden border-y border-primary90 border-opacity-10 bg-primary1 text-primary99 shadow-high',
            `-left-[${(index % 5) * 100}%]`,
            !showMore && 'z-[35]'
          )}
        >
          <ParallaxBackground
            className=" -z-20 h-[50%] object-cover object-top"
            src="/assets/architecture_interieurs/INTERIEUR/banner-interieur.jpg"
            alt={`${project_name} picture`}
          ></ParallaxBackground>

          <div className="relative h-[40rem] w-screen overflow-hidden">
            <div
              className={`- }%]
              absolute top-0 w-[40rem] -rotate-12 items-center justify-center`}
            >
              <div className="relative">
                <H3
                  className=" relative  left-small top-large font-['Distortion_Dos_Analogue'] text-primary90   "
                  textType={'heading'}
                >
                  {project_name}
                </H3>
              </div>
            </div>
            <div className="absolute -z-10 h-full w-full bg-primary10 bg-opacity-10"></div>
          </div>
          <div className="flex w-full flex-col gap-medium bg-primary1 p-medium">
            <P textType={'heading'} className="relative flex justify-between gap-small">
              <span>BUDGET</span>
              <strong
                className={cn(
                  ' before:z-20 before:bg-primary10 before:delay-[2s] before:duration-medium ',
                  searchParams.get('project') === id ? 'before:scale-x-100' : 'before:scale-x-0'
                )}
              >
                <span className="sub-heading relative z-30">
                  RENOVATION {information.renovation}K
                </span>
              </strong>
              <strong
                className={cn(
                  ' relative before:z-20 before:rotate-[-1deg] before:bg-primary10 before:delay-[2.2s] before:duration-medium',
                  searchParams.get('project') === id ? 'before:scale-x-100' : 'before:scale-x-0'
                )}
              >
                <span className="sub-heading relative z-30">
                  HONORAIRES {information.honoraires}K
                </span>
              </strong>
              <strong
                className={cn(
                  ' relative before:z-20 before:rotate-[3deg] before:bg-primary10 before:delay-[2.4s] before:duration-medium',
                  searchParams.get('project') === id ? 'before:scale-x-100' : 'before:scale-x-0'
                )}
              >
                <span className="sub-heading relative z-30">{information.dimension} M² </span>
              </strong>
            </P>
            <div className="mx-extra-large flex justify-around gap-small">
              <P textType={'body'} className="max-w-[70%]">
                {information.description}
                {information.description}
                {information.description}
              </P>
              <div className="relative h-[40rem] w-[50rem] overflow-hidden rounded-small">
                <Image
                  src={'/assets/architecture_interieurs/INTERIEUR/schema.jpg'}
                  alt={`${project_name} schéma`}
                  fill
                  className="object-cover"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </li>
  );
}
