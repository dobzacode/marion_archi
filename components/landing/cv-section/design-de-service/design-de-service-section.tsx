import P from '@/components/ui/text/p';
import { cn } from '@/lib/utils';
import SubSection from '../sub-section';
import DesignDeServiceTitleBlock from './design-de-service-title-block';

export default function DesignDeServiceSection() {
  return (
    <section className="flex w-full translate-x-20 flex-row-reverse flex-wrap-reverse justify-center gap-extra-large px-[10px] py-extra-large max-laptop:mt-large max-tablet:-mt-large max-tablet:gap-extra-large tablet:gap-small">
      <ol className="-mt-sub-large flex w-[50rem] flex-col items-center gap-large  max-[1298px]:mt-extra-large max-laptop:-translate-x-20 tablet:px-large laptop:gap-extra-large  min-[1298px]:translate-x-[15%]">
        <SubSection
          direction={'right'}
          custom={0}
          title="PROJETS"
          className="flex flex-col gap-extra-small  duration-slowest before:top-[10%] before:content-['\2022']  max-[1298px]:ml-small  max-tablet:ml-0 tablet:ml-large  tablet:w-auto"
          href="/"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'pointer-events-none absolute z-10 w-[43.75rem] -translate-y-1/2 overflow-visible fill-tertiary1  duration-slow group-hover:translate-x-0 group-hover:fill-tertiary10 max-laptop:hidden max-laptop:fill-tertiary10 tablet:w-auto laptop:-translate-x-[-150%]'
            )}
          >
            <path
              className="max-tablet:translate-x-[50px] max-tablet:translate-y-[140px] max-tablet:scale-x-[1.6]
              max-tablet:scale-y-[0.8]"
              d="M27.2,-49.1C32.9,-43.9,33.4,-31.7,41.2,-22.4C48.9,-13.1,63.7,-6.5,65.1,0.8C66.5,8.1,54.3,16.2,48.9,29.5C43.4,42.7,44.7,61.2,37.7,68.5C30.6,75.8,15.3,72.1,3.7,65.7C-7.9,59.3,-15.9,50.3,-21.7,42.3C-27.6,34.3,-31.4,27.3,-37.9,20.4C-44.4,13.5,-53.6,6.8,-56.7,-1.8C-59.9,-10.4,-57,-20.8,-49.6,-26.1C-42.1,-31.3,-30.1,-31.4,-21.1,-34.7C-12.1,-38,-6,-44.5,2.4,-48.6C10.8,-52.7,21.5,-54.3,27.2,-49.1Z"
              transform="translate(85 170) scale(1.8, 1.4)"
            />
          </svg>
          <P
            className="relative z-20 ml-small duration-slowest group-hover:max-h-[25rem] group-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 group-hover:[&>strong:before]:scale-x-100 group-hover:[&>strong:before]:delay-500"
            textType="body"
          >
            <strong className="before:duration-medium max-laptop:before:bg-tertiary20 laptop:before:scale-x-0 laptop:before:bg-tertiary20 ">
              2020
            </strong>{' '}
            -<span className="underline underline-offset-2">Workshop</span> - PIB <br />- Projet
            innovant pour Bernwiller - Questionner le territoire, déceler les enjeux politiques,
            sociaux, outils de médiation, démarche projet en innovation sociale, co-construction de
            prototypes, test Insitu, dialogue avec les habitant, réponse design.
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-tertiary20 laptop:before:scale-x-0 laptop:before:bg-tertiary20 ">
              2021
            </strong>{' '}
            -<span className="underline underline-offset-2">Résidence design</span> - S&apos;BOKAL -
            collaboration comcom Sauer Pechelbronn et PNRVN <br /> Quel avenir pour un territoire,
            quels enjeux ? Co-construire l&apos;avenir d&apos;un territoire, cibler les besoins,
            enquêter, collecter, prototyper, organiser des atelier, cartographier,scénariser,
            simuler, federer, ont été mes missions lors de cette résidence.
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-tertiary20 laptop:before:scale-x-0 laptop:before:bg-tertiary20 ">
              2021
            </strong>{' '}
            -<span className="underline underline-offset-2">Projet de diplôme DSAA</span> - La
            fabrique rurale - forme de design social, réintroduire les pratiques communautaire
            domestique en milieu rural pour favoriser les échanges intergénérationels. Recherche de
            partenariats, collaboration, investisseurs, artisans.
          </P>
        </SubSection>
        <SubSection
          direction={'right'}
          custom={1}
          title="RECHERCHES"
          className="relative flex flex-col gap-extra-small duration-slowest before:top-[5%] before:content-['\2022']  tablet:-ml-large min-[1298px]:ml-medium "
          href="/"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'pointer-events-none absolute  z-10 w-[43.75rem] -translate-y-1/2 overflow-visible fill-tertiary1 transition-all duration-slow group-hover:translate-x-0 group-hover:fill-tertiary10 max-laptop:hidden max-laptop:fill-tertiary10 tablet:w-auto laptop:-translate-x-[-150%]'
            )}
          >
            <path
              className="max-tablet:translate-x-[50px] max-tablet:translate-y-[140px] max-tablet:scale-x-[1.6]
              max-tablet:scale-y-[0.8]"
              d="M28.4,-47.8C35,-45.4,37.3,-34.1,48,-24.7C58.7,-15.2,77.8,-7.6,80.1,1.3C82.4,10.3,67.9,20.5,54.7,25.7C41.5,30.8,29.7,30.9,20.8,33C11.9,35.2,6,39.4,1.7,36.3C-2.5,33.3,-4.9,23,-12.4,20.1C-19.8,17.1,-32.2,21.5,-43.7,19.3C-55.1,17.2,-65.4,8.6,-63.5,1.1C-61.7,-6.4,-47.5,-12.9,-41.3,-23.9C-35,-35,-36.7,-50.6,-31.1,-53.6C-25.5,-56.6,-12.8,-46.9,-0.9,-45.3C10.9,-43.7,21.8,-50.2,28.4,-47.8Z"
              transform="translate(80 170) scale(1.4, 1.4)"
            />
          </svg>
          <P
            className="relative  z-20 ml-small duration-slowest  group-hover:max-h-[25rem] group-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 group-hover:[&>strong:before]:scale-x-100 group-hover:[&>strong:before]:delay-500"
            textType="body"
          >
            <strong className="before:duration-medium max-laptop:before:bg-tertiary20 laptop:before:scale-x-0 laptop:before:bg-tertiary20 ">
              2019
            </strong>{' '}
            -<span className="underline underline-offset-2">Oeuvre plastique</span> - Ou IN Po{' '}
            <br />- Ouvroir d&apos;installation potentielle, réalisation d&apos;artefact au cours
            d&apos;un quartier de Strasbourg, utilisation machine découpe laser, vinyle, fabrication
            de maquettes, prototypes, prise de vues
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-tertiary20 laptop:before:scale-x-0 laptop:before:bg-tertiary20 ">
              2022
            </strong>{' '}
            -<span className="underline underline-offset-2">Stage</span> - Laurent Callot - <br />{' '}
            Pratique photographie - projet, recherche autour du cyanotype
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-tertiary20 laptop:before:scale-x-0 laptop:before:bg-tertiary20 ">
              2019
            </strong>{' '}
            -<span className="underline underline-offset-2">Stage</span> - Lisa Débat - Pratique de
            la céramique - tant comme matière pour créer de l&apos;objet d&apos;usage, matière pour
            imprimer, mouler, extruder, la recherche par la matière. Collaboration projet
            architecture intérieure
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-tertiary20 laptop:before:scale-x-0 laptop:before:bg-tertiary20 ">
              2021
            </strong>{' '}
            -
            <span className="underline underline-offset-2">
              Rédaction d&apos;un mémoire de recherche
            </span>{' '}
            - Faire disparaître les tâches, pratiques, partages et espaces - Documenter,
            questionner, analyser, par l&apos;expérimentation, le test inSitu, la co-pratique du
            desgin. architecture intérieure
          </P>
        </SubSection>
      </ol>
      <DesignDeServiceTitleBlock className="laptop relative flex w-[25rem] flex-col pt-[210px] max-[1298px]:-translate-x-[24%] max-laptop:-translate-x-10 max-tablet:-translate-x-10"></DesignDeServiceTitleBlock>
    </section>
  );
}
