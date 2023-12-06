import P from '@/components/ui/text/p';
import { cn } from '@/lib/utils';
import SubSection from '../sub-section';
import VieAssociativeTitleBlock from './vie-associative-title-block';

export default function VieAssociativeSection() {
  return (
    <section className="flex w-full flex-col-reverse items-center justify-center gap-extra-large px-[10px] py-extra-large max-laptop:mt-large tablet:gap-small">
      <ol className="-mt-sub-large flex w-[80rem] flex-col items-center gap-large max-[1298px]:mt-extra-large tablet:px-large  laptop:gap-extra-large">
        <SubSection
          custom={0}
          title="EMPLOIS"
          className="ml-small flex flex-col  gap-extra-small duration-slowest before:top-[10%]  before:content-['\2022']  max-[1298px]:ml-large max-tablet:ml-0  tablet:w-auto"
          href="/"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'pointer-events-none absolute z-10 w-[70rem] -translate-y-1/2 overflow-visible fill-primary1  duration-slow peer-hover:translate-x-0 peer-hover:fill-primary10 max-laptop:hidden max-laptop:fill-primary10 tablet:w-auto laptop:-translate-x-[150%]'
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
            <strong className="before:duration-medium max-laptop:before:bg-primary20 laptop:before:scale-x-0 laptop:before:bg-primary20 ">
              2023
            </strong>{' '}
            - <span className="underline underline-offset-2">employée</span> - Restauration du
            CROUS, encaissement, gestion des commandes.
          </P>
        </SubSection>
      </ol>
      <VieAssociativeTitleBlock className="laptop relative flex w-[40rem] flex-col pt-[210px] max-[1298px]:-translate-x-10 max-laptop:translate-x-5 max-tablet:translate-x-0"></VieAssociativeTitleBlock>
    </section>
  );
}
