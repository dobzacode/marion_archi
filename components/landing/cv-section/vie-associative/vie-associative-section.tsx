import P from '@/components/ui/text/p';
import { cn } from '@/lib/utils';
import SubSection from '../sub-section';
import VieAssociativeTitleBlock from './vie-associative-title-block';

export default function VieAssociativeSection() {
  return (
    <section className="flex w-full flex-col-reverse items-center justify-center gap-extra-large px-[10px] max-laptop:mt-large max-laptop:h-[115rem] max-laptop:gap-small max-laptop:py-extra-large max-tablet:h-fit tablet:gap-small laptop:absolute laptop:-left-[15%] laptop:bottom-0 laptop:h-[80rem] laptop:pb-extra-large">
      <ol className="-mt-sub-large flex w-[80rem]   flex-col items-center gap-large max-tablet:w-fit tablet:h-[120rem]  tablet:px-large  laptop:gap-extra-large">
        <SubSection
          custom={0}
          title="EMPLOIS"
          className="ml-large flex h-[30rem] flex-col gap-extra-small duration-slowest before:top-[10%]  before:content-['\2022']   max-tablet:ml-0  tablet:w-auto"
          href="/"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'pointer-events-none absolute z-10 -translate-y-1/2 overflow-visible fill-primary1 duration-slow  peer-hover:translate-x-0 peer-hover:fill-primary10 max-laptop:hidden max-laptop:w-[70rem] max-laptop:fill-primary10 tablet:w-auto laptop:-translate-x-[150%]'
            )}
          >
            <path
              className="max-tablet:translate-x-[50px] max-tablet:translate-y-[140px] max-tablet:scale-x-[1.6]
              max-tablet:scale-y-[0.8]"
              d="M33.9,-52.4C43.9,-46.2,52,-36.9,53.6,-26.5C55.1,-16.2,50,-4.9,45.2,4.3C40.4,13.4,36,20.4,31.8,30.5C27.6,40.5,23.6,53.7,15.4,59.1C7.2,64.5,-5.2,62.1,-18.3,59.6C-31.5,57,-45.4,54.2,-50.9,45.5C-56.4,36.7,-53.5,22,-58.5,6.6C-63.5,-8.8,-76.4,-24.8,-74.2,-35.7C-72.1,-46.6,-54.8,-52.5,-39.9,-56.4C-25,-60.4,-12.5,-62.4,-0.3,-61.9C11.9,-61.5,23.8,-58.5,33.9,-52.4Z"
              transform="translate(100 200) scale(1.6, 2)"
            />
          </svg>
          <P
            className="relative z-20 ml-small duration-slowest peer-hover:max-h-[40rem] peer-hover:opacity-100 laptop:max-h-0 laptop:opacity-0 peer-hover:[&>strong:before]:scale-x-100 peer-hover:[&>strong:before]:delay-500"
            textType="body"
          >
            <strong className="before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20 ">
              2016
            </strong>{' '}
            -<span className="underline underline-offset-2">Entrepreneuse</span> - Vente sur
            marchés. Création de stand, scénographie, gestion des stock, relation client.
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20 ">
              2018
            </strong>{' '}
            -<span className="underline underline-offset-2">équipière polyvalente</span> - Mac
            donald - organisation, fast, chaine du froid, considérations sanitaires.
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20 ">
              2019
            </strong>{' '}
            - Alinéa -
            <span className="underline underline-offset-2">employée rayon ameublement</span> -
            Inventaire, encaissements, conseil client, fidélisation.
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20 ">
              2019
            </strong>{' '}
            -<span className="underline underline-offset-2">Association ARTGOS</span> - bénévole -
            Organisation d&apos;événements, expositions.
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20 ">
              2020
            </strong>{' '}
            -<span className="underline underline-offset-2">Fondatrice et bénévole</span> - Lundi
            simple Strasbourg, création de contenu, collecte, rassemblements, cuisine de repas,
            distribution, maraude en soutien aux sans-abris.
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20 ">
              2021
            </strong>{' '}
            -L&apos;ethic bio&apos; - <span className="underline underline-offset-2">employée</span>{' '}
            - accueil client, fidélisation, retail, achalangade rayon, encaissement, ouverture et
            fermeture magasin.
            <br />
            <br />
            <strong className="before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20 ">
              2023
            </strong>{' '}
            - <span className="underline underline-offset-2">étudiante</span> - Préparation au
            concours du CAPET et CAPLP.
            <br />
            <br />
            <strong className=" before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20">
              2023
            </strong>{' '}
            - <span className="underline underline-offset-2">employée</span> - Restauration du
            CROUS, encaissement, gestion des commandes.
          </P>
        </SubSection>
      </ol>
      <VieAssociativeTitleBlock className="laptop relative flex w-[40rem] flex-col pt-[210px]  max-laptop:translate-x-5 "></VieAssociativeTitleBlock>
      <div className="pb-large"></div>
    </section>
  );
}
