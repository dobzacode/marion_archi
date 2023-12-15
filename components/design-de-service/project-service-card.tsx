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

  // -left-[100%] -left-[200%] -left-[300%] -left-[400%] -right-[10%] -right-[20%] -right-[30%] -right-[40%]
  // laptop:-left-[100%] laptop:-left-[200%] laptop:-left-[300%] laptop:-left-[400%] laptop:-right-[10%] laptop:-right-[20%] laptop:-right-[30%] laptop:-right-[40%]
  // tablet:-left-[100%] tablet:-left-[200%] tablet:-left-[300%] tablet:-left-[400%] tablet:-right-[10%] tablet:-right-[20%] tablet:-right-[30%] tablet:-right-[40%]
  // mobile-large:-left-[100%] mobile-large:-left-[200%] mobile-large:-left-[300%] mobile-large:-left-[400%] mobile-large:-right-[10%] mobile-large:-right-[20%] mobile-large:-right-[30%] mobile-large:-right-[40%]

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
            'text-secondary99  absolute top-full   z-40 w-screen overflow-hidden border-y border-secondary90 border-opacity-10 bg-secondary1 shadow-high',
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
                className="flex flex-col gap-extra-small duration-slowest  before:top-[10%] before:content-['\2022'] max-tablet:ml-0 laptop:-ml-large laptop:w-[60rem] laptop:items-end    min-[1300px]:w-2/5 min-[1300px]:items-start  "
              >
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'pointer-events-none absolute z-10 w-[70rem] -translate-y-1/2 overflow-visible fill-secondary1  duration-slow hover:translate-x-0 hover:fill-secondary10 peer-hover:translate-x-0 peer-hover:fill-secondary10 max-laptop:hidden max-laptop:fill-secondary10 tablet:w-auto laptop:-translate-x-[150%]'
                  )}
                >
                  <path
                    className="max-tablet:translate-x-[50px] max-tablet:translate-y-[140px] max-tablet:scale-x-[1.6]
              max-tablet:scale-y-[0.8]"
                    d="M27.2,-49.1C32.9,-43.9,33.4,-31.7,41.2,-22.4C48.9,-13.1,63.7,-6.5,65.1,0.8C66.5,8.1,54.3,16.2,48.9,29.5C43.4,42.7,44.7,61.2,37.7,68.5C30.6,75.8,15.3,72.1,3.7,65.7C-7.9,59.3,-15.9,50.3,-21.7,42.3C-27.6,34.3,-31.4,27.3,-37.9,20.4C-44.4,13.5,-53.6,6.8,-56.7,-1.8C-59.9,-10.4,-57,-20.8,-49.6,-26.1C-42.1,-31.3,-30.1,-31.4,-21.1,-34.7C-12.1,-38,-6,-44.5,2.4,-48.6C10.8,-52.7,21.5,-54.3,27.2,-49.1Z"
                    transform="translate(85 130) scale(1.6, 0.8)"
                  />
                </svg>
                <P
                  className="relative z-20 ml-small duration-slowest peer-hover:max-h-[40rem] peer-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 peer-hover:[&>strong:before]:scale-x-100 peer-hover:[&>strong:before]:delay-500"
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
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'pointer-events-none absolute  z-10 w-[70rem] -translate-y-1/2 overflow-visible fill-secondary1 transition-all duration-slow peer-hover:translate-x-0 peer-hover:fill-secondary10 max-laptop:hidden max-laptop:fill-secondary10 tablet:w-auto laptop:translate-x-[200%]'
                  )}
                >
                  <path
                    className="max-tablet:translate-x-[50px] max-tablet:translate-y-[140px] max-tablet:scale-x-[1.6]
              max-tablet:scale-y-[0.8]"
                    d="M28.4,-47.8C35,-45.4,37.3,-34.1,48,-24.7C58.7,-15.2,77.8,-7.6,80.1,1.3C82.4,10.3,67.9,20.5,54.7,25.7C41.5,30.8,29.7,30.9,20.8,33C11.9,35.2,6,39.4,1.7,36.3C-2.5,33.3,-4.9,23,-12.4,20.1C-19.8,17.1,-32.2,21.5,-43.7,19.3C-55.1,17.2,-65.4,8.6,-63.5,1.1C-61.7,-6.4,-47.5,-12.9,-41.3,-23.9C-35,-35,-36.7,-50.6,-31.1,-53.6C-25.5,-56.6,-12.8,-46.9,-0.9,-45.3C10.9,-43.7,21.8,-50.2,28.4,-47.8Z"
                    transform="translate(80 130) scale(1.3, 1)"
                  />
                </svg>
                <P
                  className="relative z-20 ml-small duration-slowest peer-hover:max-h-[40rem] peer-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 peer-hover:[&>strong:before]:scale-x-100 peer-hover:[&>strong:before]:delay-500"
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
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'pointer-events-none absolute z-10 w-[70rem] -translate-y-1/2 overflow-visible fill-secondary1 transition-all duration-slow peer-hover:translate-x-0 peer-hover:fill-secondary10 max-laptop:hidden max-laptop:fill-secondary10 tablet:w-auto laptop:-translate-x-[150%]'
                  )}
                >
                  <path
                    d="M36.2,-70.6C40.5,-60.3,33.1,-37.6,37.7,-23.7C42.4,-9.9,59.2,-4.9,67.5,4.8C75.9,14.6,75.8,29.1,68.8,39C61.9,48.9,48,54.1,35.4,51.5C22.8,48.8,11.4,38.4,3,33.2C-5.5,28.1,-10.9,28.3,-15.4,26.2C-19.8,24.1,-23.3,19.8,-25.4,15C-27.6,10.3,-28.5,5.1,-36,-4.3C-43.4,-13.8,-57.5,-27.5,-55.1,-32C-52.8,-36.4,-34.1,-31.6,-22.2,-37.4C-10.3,-43.2,-5.1,-59.8,5.4,-69.2C16,-78.6,32,-80.8,36.2,-70.6Z"
                    transform="translate(60 145) scale(1.8, 0.8)"
                  />
                </svg>
                <P
                  className="relative z-20 ml-small duration-slowest peer-hover:max-h-[40rem] peer-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 peer-hover:[&>strong:before]:scale-x-100 peer-hover:[&>strong:before]:delay-500"
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
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'pointer-events-none absolute z-10 w-[70rem] -translate-y-1/2 overflow-visible  fill-secondary1 transition-all duration-slow peer-hover:translate-x-0 peer-hover:fill-secondary10 max-laptop:hidden max-laptop:fill-secondary10 tablet:w-auto laptop:translate-x-[200%]'
                  )}
                >
                  <path
                    d="M23.5,-43.4C30.2,-36.8,35.3,-30.1,40.6,-22.8C45.8,-15.6,51.2,-7.8,50.6,-0.3C50,7.1,43.4,14.2,42,28C40.5,41.8,44.2,62.3,38,69.3C31.9,76.3,15.9,69.8,-0.1,70C-16.2,70.2,-32.4,77.3,-44.2,73.5C-56,69.8,-63.3,55.3,-61.3,41.2C-59.2,27.2,-47.9,13.6,-39.4,4.9C-31,-3.8,-25.4,-7.7,-21.2,-10.9C-17,-14.1,-14.1,-16.7,-10.8,-25.3C-7.4,-33.9,-3.7,-48.5,2.3,-52.5C8.4,-56.6,16.8,-50.1,23.5,-43.4Z"
                    transform="translate(90 120) scale(1.8, 0.8)"
                    className="max-tablet:translate-x-[85px] max-tablet:translate-y-[122px] max-tablet:scale-x-[1.8]
                max-tablet:scale-y-[0.8]"
                  />
                </svg>
                <P
                  className="relative z-20 ml-small duration-slowest peer-hover:max-h-[40rem] peer-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 peer-hover:[&>strong:before]:scale-x-100 peer-hover:[&>strong:before]:delay-500"
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
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'pointer-events-none absolute z-10 w-[70rem] -translate-y-1/2 overflow-visible fill-secondary1  duration-slow peer-hover:translate-x-0 peer-hover:fill-secondary10 max-laptop:hidden max-laptop:fill-secondary10 tablet:w-auto laptop:-translate-x-[150%]'
                  )}
                >
                  <path
                    className="max-tablet:translate-x-[50px] max-tablet:translate-y-[140px] max-tablet:scale-x-[1.6]
              max-tablet:scale-y-[0.8]"
                    d="M27.2,-49.1C32.9,-43.9,33.4,-31.7,41.2,-22.4C48.9,-13.1,63.7,-6.5,65.1,0.8C66.5,8.1,54.3,16.2,48.9,29.5C43.4,42.7,44.7,61.2,37.7,68.5C30.6,75.8,15.3,72.1,3.7,65.7C-7.9,59.3,-15.9,50.3,-21.7,42.3C-27.6,34.3,-31.4,27.3,-37.9,20.4C-44.4,13.5,-53.6,6.8,-56.7,-1.8C-59.9,-10.4,-57,-20.8,-49.6,-26.1C-42.1,-31.3,-30.1,-31.4,-21.1,-34.7C-12.1,-38,-6,-44.5,2.4,-48.6C10.8,-52.7,21.5,-54.3,27.2,-49.1Z"
                    transform="translate(85 130) scale(1.6, 0.8)"
                  />
                </svg>
                <P
                  className="relative z-20 ml-small duration-slowest peer-hover:max-h-[40rem] peer-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 peer-hover:[&>strong:before]:scale-x-100 peer-hover:[&>strong:before]:delay-500"
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
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'pointer-events-none absolute z-10 w-[70rem] -translate-y-1/2 overflow-visible fill-secondary1  duration-slow peer-hover:translate-x-0 peer-hover:fill-secondary10 max-laptop:hidden max-laptop:fill-secondary10 tablet:w-auto laptop:translate-x-[200%]'
                  )}
                >
                  <path
                    className="max-tablet:translate-x-[50px] max-tablet:translate-y-[140px] max-tablet:scale-x-[1.6]
              max-tablet:scale-y-[0.8]"
                    d="M27.2,-49.1C32.9,-43.9,33.4,-31.7,41.2,-22.4C48.9,-13.1,63.7,-6.5,65.1,0.8C66.5,8.1,54.3,16.2,48.9,29.5C43.4,42.7,44.7,61.2,37.7,68.5C30.6,75.8,15.3,72.1,3.7,65.7C-7.9,59.3,-15.9,50.3,-21.7,42.3C-27.6,34.3,-31.4,27.3,-37.9,20.4C-44.4,13.5,-53.6,6.8,-56.7,-1.8C-59.9,-10.4,-57,-20.8,-49.6,-26.1C-42.1,-31.3,-30.1,-31.4,-21.1,-34.7C-12.1,-38,-6,-44.5,2.4,-48.6C10.8,-52.7,21.5,-54.3,27.2,-49.1Z"
                    transform="translate(85 130) scale(1.6, 0.8)"
                  />
                </svg>
                <P
                  className="relative z-20 ml-small duration-slowest peer-hover:max-h-[40rem] peer-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 peer-hover:[&>strong:before]:scale-x-100 peer-hover:[&>strong:before]:delay-500"
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
