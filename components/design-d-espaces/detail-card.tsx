import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import EmblaCarousel from '../ui/div/carousel/embla-carousel';
import ParallaxBackground from '../ui/div/parallax-background';
import H3 from '../ui/text/h3';
import P from '../ui/text/p';
import { Project } from './project-card';

interface DetailCardProps {
  project: Project;
  
}

export default function DetailCard({ project }: DetailCardProps) {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, active: true };
  const SLIDE_COUNT = 9;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section
      className={cn(
        'relative z-40   w-screen overflow-hidden border-y border-primary90 border-opacity-10 bg-primary1 text-primary99 '
      )}
    >
      <ParallaxBackground
        className="  -z-20 object-cover object-top tablet:h-1/4 laptop:h-1/2"
        src="/assets/architecture_interieurs/INTERIEUR/banner-interieur.jpg"
        alt={`${project.project_name} picture`}
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
              {project.project_name}
            </H3>
          </div>
        </div>
        <div className="absolute -z-10 h-full w-full bg-primary10 bg-opacity-10"></div>
      </div>
      <div className="flex w-full flex-col gap-sub-large bg-primary1 px-medium py-sub-large">
        <P
          textType={'heading'}
          className="relative flex flex-wrap justify-between gap-small px-small tablet:px-0 laptop:px-medium"
        >
          <span>BUDGET</span>
          <span className="flex w-full flex-wrap justify-between gap-extra-small mobile-large:gap-medium tablet:w-4/6 tablet:gap-medium tablet:pr-small laptop:w-3/5 laptop:pr-medium">
            <strong
              className={cn(
                ' before:z-20 before:bg-primary10 before:delay-[2s] before:duration-medium '
              )}
            >
              <span className="sub-heading relative z-30 leading-sub-heading">
                RENOVATION {project.information.renovation}K
              </span>
            </strong>
            <strong
              className={cn(
                ' relative before:z-20 before:rotate-[-1deg] before:bg-primary10 before:delay-[2.2s] before:duration-medium'
              )}
            >
              <span className="sub-heading relative z-30 leading-sub-heading">
                HONORAIRES {project.information.honoraires}K
              </span>
            </strong>
            <strong
              className={cn(
                ' relative before:z-20 before:rotate-[3deg] before:bg-primary10 before:delay-[2.4s] before:duration-medium'
              )}
            >
              <span className="sub-heading relative z-30 leading-sub-heading">
                {project.information.dimension} M²{' '}
              </span>
            </strong>
          </span>
        </P>
        <div className=" flex flex-wrap-reverse justify-around gap-medium tablet:flex-nowrap tablet:gap-small">
          <P textType={'body'} className="px-small tablet:w-2/3 tablet:px-0 ">
            {project.information.description}
            {project.information.description}
            {project.information.description}
          </P>
          <div className="relative h-[40rem] w-full overflow-hidden rounded-small tablet:w-[55rem]">
            <Image
              src={'/assets/architecture_interieurs/INTERIEUR/schema.jpg'}
              alt={`${project.project_name} schéma`}
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
    </section>
  );
}
