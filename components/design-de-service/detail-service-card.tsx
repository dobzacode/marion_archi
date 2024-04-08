import { cn } from '@/lib/utils';
import SubSection from '../landing/cv-section/sub-section';
import ParallaxBackground from '../ui/div/parallax-background';
import H3 from '../ui/text/h3';
import P from '../ui/text/p';
import { Project } from './project-service-card';

interface DetailServiceCardProps {
  project: Project;
}

export default function DetailServiceCard({ project }: DetailServiceCardProps) {
  return (
    <div
      className={cn(
        'relative  z-40  -mb-medium  w-screen overflow-hidden border-y border-secondary90 border-opacity-10 bg-secondary1 text-secondary99 '
      )}
    >
      <ParallaxBackground
        className=" -z-20 object-cover object-top tablet:h-1/4 laptop:h-1/2"
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
              className=" max-mobile-large:sub-heading relative left-small  top-large font-['Distortion_Dos_Analogue'] text-primary90 mobile-large:leading-[2.6rem]   "
              textType={'heading'}
            >
              {project.project_name}
            </H3>
          </div>
        </div>
        <div className="absolute -z-10 h-full w-full bg-secondary10 bg-opacity-10"></div>
      </div>

      <div className="flex flex-col gap-medium bg-secondary1 pt-medium">
        <P
          textType={'heading'}
          className="relative flex flex-col items-center justify-center gap-small  py-small tablet:flex-row tablet:justify-between tablet:px-medium laptop:px-large"
        >
          <span className="flex   text-center ">
            <strong
              className={cn(
                ' text-center before:z-20 before:h-[103%] before:bg-secondary10 before:delay-[2s] before:duration-medium'
              )}
            >
              <span className="sub-heading relative z-30 text-center ">
                {project.information.localisation?.toUpperCase()}
              </span>
            </strong>
          </span>
          <span className="flex text-center  ">
            <strong
              className={cn(
                ' text-center before:z-20 before:h-[103%] before:bg-secondary10 before:delay-[2s] before:duration-medium'
              )}
            >
              <span className="sub-heading relative z-30 text-center ">
                {project.information.politique?.toUpperCase()}
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
              {project.information.first}
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
              {project.information.second}
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
              {project.information.third}
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
              {project.information.fourth}
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
              {project.information.fifth}
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
              {project.information.sixth}
            </P>
          </SubSection>
        </ul>
      </div>
    </div>
  );
}
