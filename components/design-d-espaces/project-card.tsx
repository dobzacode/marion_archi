import { cn } from '@/lib/utils';
import { mdiEyeOffOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { EmblaOptionsType } from 'embla-carousel';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import EmblaCarousel from '../ui/div/carousel/embla-carousel';
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

  const [showMore, setShowMore] = useState<boolean>(Boolean(searchParams.get('project') === id));

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectFromParams = searchParams.get('project');
    if (projectFromParams !== id) {
      setShowMore(false);
    }
  }, [searchParams, id]);

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, active: true };
  const SLIDE_COUNT = 9;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  // -left-[100%] -left-[200%] -left-[300%] -left-[400%] -right-[10%] -right-[20%] -right-[30%] -right-[40%]
  // laptop:-left-[100%] laptop:-left-[0%] laptop:-left-[200%] laptop:-left-[300%] laptop:-left-[400%] laptop:-right-[10%] laptop:-right-[20%] laptop:-right-[30%] laptop:-right-[40%]
  // tablet:-left-[100%] tablet:-left-[0%] tablet:-left-[200%] tablet:-left-[300%] tablet:-left-[400%] tablet:-right-[10%] tablet:-right-[20%] tablet:-right-[30%] tablet:-right-[40%]
  // mobile-large:-left-[100%] mobile-large:-left-[0%] mobile-large:-left-[200%] mobile-large:-left-[300%] mobile-large:-left-[400%] mobile-large:-right-[10%] mobile-large:-right-[20%] mobile-large:-right-[30%] mobile-large:-right-[40%]

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
            'group relative flex h-full w-full  cursor-pointer items-center justify-center overflow-hidden border-y border-l border-primary90 border-opacity-10 grayscale duration-slow hover:grayscale-0',
            showMore && 'grayscale-0'
          )}
        >
          <Icon
            path={mdiEyeOffOutline}
            className={cn(
              'absolute left-1/2 top-1/2 z-40 -translate-x-[400%] -translate-y-1/2 transform text-primary1 opacity-0 duration-[2s] group-hover:scale-110',
              showMore && 'opacity-1 -translate-x-1/2'
            )}
            size={2.6}
          />
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
            'absolute  top-full z-40   w-screen overflow-hidden border-y border-primary90 border-opacity-10 bg-primary1 text-primary99 shadow-high',
            `laptop:-left-[${(index % 5) * 100}%] tablet:-left-[${
              (index % 4) * 100
            }%] mobile-large:-left-[${(index % 3) * 100}%]`,
            !showMore && 'z-[35]'
          )}
        >
          <ParallaxBackground
            className=" -z-20 object-cover object-top tablet:h-1/4 laptop:h-1/2"
            src="/assets/architecture_interieurs/INTERIEUR/banner-interieur.jpg"
            alt={`${project_name} picture`}
          ></ParallaxBackground>

          <div className="relative h-[30rem] w-screen overflow-hidden laptop:h-[40rem]">
            <div
              className={`
              absolute top-0 w-[30rem] -rotate-12 items-center justify-center mobile-large:w-[40rem]`}
            >
              <div className="relative">
                <H3
                  className=" max-mobile-large:sub-heading relative  left-small top-large font-['Distortion_Dos_Analogue'] text-primary90   "
                  textType={'heading'}
                >
                  {project_name}
                </H3>
              </div>
            </div>
            <div className="absolute -z-10 h-full w-full bg-primary10 bg-opacity-10"></div>
          </div>
          <div className="flex w-full flex-col gap-sub-large bg-primary1 pb-[2px] pt-sub-large tablet:pl-small laptop:pl-medium">
            <P
              textType={'heading'}
              className="relative flex flex-wrap justify-between gap-small px-small tablet:px-0 laptop:px-medium"
            >
              <span>BUDGET</span>
              <span className="flex w-full flex-wrap justify-between gap-extra-small mobile-large:gap-medium tablet:w-4/6 tablet:gap-medium tablet:pr-small laptop:w-3/5 laptop:pr-medium">
                <strong
                  className={cn(
                    ' before:z-20 before:bg-primary10 before:delay-[2s] before:duration-medium ',
                    searchParams.get('project') === id ? 'before:scale-x-100' : 'before:scale-x-0'
                  )}
                >
                  <span className="sub-heading relative z-30 leading-sub-heading">
                    RENOVATION {information.renovation}K
                  </span>
                </strong>
                <strong
                  className={cn(
                    ' relative before:z-20 before:rotate-[-1deg] before:bg-primary10 before:delay-[2.2s] before:duration-medium',
                    searchParams.get('project') === id ? 'before:scale-x-100' : 'before:scale-x-0'
                  )}
                >
                  <span className="sub-heading relative z-30 leading-sub-heading">
                    HONORAIRES {information.honoraires}K
                  </span>
                </strong>
                <strong
                  className={cn(
                    ' relative before:z-20 before:rotate-[3deg] before:bg-primary10 before:delay-[2.4s] before:duration-medium',
                    searchParams.get('project') === id ? 'before:scale-x-100' : 'before:scale-x-0'
                  )}
                >
                  <span className="sub-heading relative z-30 leading-sub-heading">
                    {information.dimension} M²{' '}
                  </span>
                </strong>
              </span>
            </P>
            <div className=" flex flex-wrap-reverse justify-around gap-medium tablet:flex-nowrap tablet:gap-small">
              <P textType={'body'} className="px-small tablet:w-2/3 tablet:px-0 ">
                {information.description}
                {information.description}
                {information.description}
              </P>
              <div className="relative h-[40rem] w-full overflow-hidden tablet:w-[50rem] ">
                <Image
                  src={'/assets/architecture_interieurs/INTERIEUR/schema.jpg'}
                  alt={`${project_name} schéma`}
                  fill
                  className="object-cover"
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-primary1">
            <div className="w-full">
              <EmblaCarousel
                imageArr={[
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
                  '/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg'
                ]}
                slides={SLIDES}
                options={OPTIONS}
              />
            </div>
          </div>
        </div>
      </CSSTransition>
    </li>
  );
}
