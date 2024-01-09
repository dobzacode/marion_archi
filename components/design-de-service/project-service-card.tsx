import { cn } from '@/lib/utils';
import { mdiEyeOffOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import SubSection from '../landing/cv-section/sub-section';
import ParallaxBackground from '../ui/div/parallax-background';
import H3 from '../ui/text/h3';
import P from '../ui/text/p';

export interface Project {
  id: string;
  project_name: string;
  information: {
    localisation?: string;
    politique?: string;
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
    fifth?: string;
    sixth?: string;
    renovation?: number;
    honoraires?: number;
    dimension?: number;
    description?: string;
  };
}

interface ProjectProps extends Project {
  index: number;
  variants: Variants;
  handleButtonClick: () => void;
  src: string;
}

export default function ProjectServiceCard({
  project_name,
  id,
  information,

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
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          className={cn(
            'group relative flex h-full w-full  cursor-pointer items-center justify-center overflow-hidden border-y border-l border-secondary90 border-opacity-10 grayscale duration-slow hover:grayscale-0',
            showMore && 'grayscale-0'
          )}
        >
          <Icon
            path={mdiEyeOffOutline}
            className={cn(
              'absolute left-1/2 top-1/2 z-40 -translate-x-[400%] -translate-y-1/2 transform text-secondary1 opacity-0 duration-[2s] group-hover:scale-110',
              showMore && 'opacity-1 -translate-x-1/2'
            )}
            size={2.6}
          />
          <H3
            textType={'body'}
            className={cn(
              'relative z-10 px-small text-center text-secondary1 duration-[2s]  group-hover:scale-105',
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
            'absolute  top-full z-40   w-screen overflow-hidden border-y border-secondary90 border-opacity-10 bg-secondary1 text-secondary99 shadow-high',
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
                  className=" max-mobile-large:sub-heading relative  left-small top-large font-['Distortion_Dos_Analogue'] text-secondary90   "
                  textType={'heading'}
                >
                  {project_name}
                </H3>
              </div>
            </div>
            <div className="absolute -z-10 h-full w-full bg-secondary10 bg-opacity-10"></div>
          </div>

          <div className="flex flex-col gap-large bg-secondary1 pt-medium">
            <P
              textType={'heading'}
              className="relative flex flex-col items-center justify-center gap-small  py-small tablet:flex-row tablet:justify-between tablet:px-medium laptop:px-large"
            >
              <span className="flex   text-center ">
                <strong
                  className={cn(
                    ' text-center before:z-20 before:h-[103%] before:bg-secondary10 before:delay-[2s] before:duration-medium',
                    searchParams.get('project') === id ? 'before:scale-x-100' : 'before:scale-x-0'
                  )}
                >
                  <span className="sub-heading relative z-30 text-center ">
                    {information.localisation?.toUpperCase()}
                  </span>
                </strong>
              </span>
              <span className="flex text-center  ">
                <strong
                  className={cn(
                    ' text-center before:z-20 before:h-[103%] before:bg-secondary10 before:delay-[2s] before:duration-medium',
                    searchParams.get('project') === id ? 'before:scale-x-100' : 'before:scale-x-0'
                  )}
                >
                  <span className="sub-heading relative z-30 text-center ">
                    {information.politique?.toUpperCase()}
                  </span>
                </strong>
              </span>
            </P>
            <ul className="mb-small flex h-full w-full flex-col justify-center gap-large bg-secondary1 px-small tablet:px-large laptop:ml-large  laptop:flex-row  laptop:flex-wrap laptop:gap-extra-large min-[1300px]:items-center  ">
              <SubSection
                isProject={true}
                href={false}
                custom={0}
                title="1 : PROBLEMATIQUES / ENJEUX"
                className="flex flex-col gap-extra-small duration-slowest  before:top-[10%] before:content-['\2022'] max-tablet:ml-0 laptop:ml-medium laptop:w-[60rem] min-[1300px]:-ml-large    min-[1300px]:w-2/5 min-[1300px]:items-start  "
              >
                <P
                  className="relative z-20 ml-small max-h-[40rem] opacity-100 duration-slowest   [&>strong:before]:scale-x-100 [&>strong:before]:delay-500"
                  textType="body"
                >
                  {information.first}
                  {information.first}
                </P>
              </SubSection>
              <SubSection
                isProject={true}
                href={false}
                custom={0}
                title="2 : OUTILS DE MEDIATIONS, OBSERVATIONS / COMPTAGES"
                className="flex flex-col gap-extra-small duration-slowest before:top-[10%]  before:content-['\2022']  max-[1300px]:mr-large max-tablet:ml-0 laptop:w-[60rem]   min-[1300px]:ml-extra-large min-[1300px]:w-2/5  "
              >
                <P
                  className="relative z-20 ml-small max-h-[40rem] opacity-100 duration-slowest   [&>strong:before]:scale-x-100 [&>strong:before]:delay-500"
                  textType="body"
                >
                  {information.second}
                </P>
              </SubSection>
              <SubSection
                isProject={true}
                href={false}
                custom={0}
                title="3 : PROTOTYPES / ACTIONS TESTS"
                className="flex flex-col gap-extra-small duration-slowest before:top-[10%] before:content-['\2022'] max-tablet:ml-0 laptop:ml-medium laptop:w-[60rem]  laptop:items-end  min-[1300px]:w-2/5 min-[1300px]:items-center  "
              >
                <P
                  className="relative z-20 ml-small max-h-[40rem] opacity-100 duration-slowest   [&>strong:before]:scale-x-100 [&>strong:before]:delay-500"
                  textType="body"
                >
                  {information.third}
                </P>
              </SubSection>
              <SubSection
                isProject={true}
                href={false}
                custom={0}
                title="4 : ECHANGES / ENTRETIENS , LIENS / DIALOGUES"
                className="mb-medium flex flex-col gap-extra-small duration-slowest before:top-[10%] before:content-['\2022'] max-[1300px]:mr-sub-extra-large max-tablet:ml-0 laptop:-ml-medium  laptop:w-[60rem]   min-[1300px]:w-2/5  "
              >
                <P
                  className="relative z-20 ml-small max-h-[40rem] opacity-100 duration-slowest   [&>strong:before]:scale-x-100 [&>strong:before]:delay-500"
                  textType="body"
                >
                  {information.fourth}
                </P>
              </SubSection>
              <SubSection
                isProject={true}
                href={false}
                custom={0}
                title="5: OUTILS DE DIFFUSION / RESTITUTION"
                className="flex flex-col gap-extra-small duration-slowest before:top-[10%] before:content-['\2022'] max-tablet:ml-0 laptop:-ml-sub-medium laptop:w-[60rem]   laptop:items-end  min-[1300px]:w-2/5 min-[1300px]:items-center  "
              >
                <P
                  className="relative z-20 ml-small max-h-[40rem] opacity-100 duration-slowest   [&>strong:before]:scale-x-100 [&>strong:before]:delay-500"
                  textType="body"
                >
                  {information.fifth}
                </P>
              </SubSection>
              <SubSection
                isProject={true}
                href={false}
                custom={0}
                title="6 : PRECONISATIONS"
                className="mb-large flex flex-col gap-extra-small duration-slowest before:top-[10%] before:content-['\2022'] max-tablet:ml-0   laptop:ml-extra-large  laptop:w-[60rem] min-[1300px]:w-2/5  "
              >
                <P
                  className="relative z-20 ml-small max-h-[40rem] opacity-100 duration-slowest   [&>strong:before]:scale-x-100 [&>strong:before]:delay-500"
                  textType="body"
                >
                  {information.sixth}
                </P>
              </SubSection>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </li>
  );
}
