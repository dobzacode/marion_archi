import Footer from '@/components/ui/footer/footer';
import { H1 } from '@/components/ui/text/h1';
import H2 from '@/components/ui/text/h2';
import P from '@/components/ui/text/p';

export async function generateMetadata() {
  return {
    title: 'Politique de Confidentialité | Marion Deleersnyder, Architecte de Confiance',
    description:
      "Consultez les mentions légales du site de Marion Deleersnyder pour obtenir des informations juridiques importantes. Découvrez les conditions d'utilisation, les droits d'auteur et d'autres détails légaux. Notre engagement envers la transparence garantit une expérience en ligne fiable et conforme à la loi."
  };
}

export default function Home() {
  return (
    <main className="slideInFromLeft relative flex flex-col gap-sub-large px-small  text-primary90 mobile-large:px-large">
      <H1
        textType={'heading--extra-large'}
        className="relative z-10 text-primary90   max-mobile-large:text-heading-large max-mobile-large:leading-heading-large mobile-large:text-center tablet:mt-small"
      >
        MENTIONS LEGALES
      </H1>
      <P textType={'body'}>
        Conformément aux directives des articles 6-III et 19 de la Loi numero 2004-575 du 21 juin
        2004 pour la Confiance de l&apos;économie numérique, dite L.C.E.N., nous informons les
        visiteurs du site web : loremipsum.com
        <br />
        <br />
        Les données ci-jointe :
      </P>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          1. Informations légales :
        </H2>
        <P textType={'body'}>
          Le site loremipsum.com est la propriété exclusive de Association de droit local ABJECT
          ACT, qui le propose.
          <br />
          <br /> Association de droit local ABJECT ACT - Numero de téléphone : 0606060606
          <br /> 38 rue du bassin d&apos;Austerlitz 67100 Strasbourg référencée au Registre du
          Commerce et des Sociétés(RCS) au numéro 90439277600020
          <br /> Numéro de TVA Intracommunautaire : FR70904392776 <br></br> Adresse de messagerie
          mail : abject.act@gmail.com
          <br />
          <br /> Le Concepteur et Webmaster du site est : Kittel Corentin <br />
          Adresse de messagerie mail : corentin.kittel@gmail.com
          <br />
          <br /> Hebergeur du site web : Vercel Inc <br />
          Foreign Business Corporation <br />
          Siège Sociale de l&apos;hébergeur : 650 CALIFORNIA ST, FLOOR 7, Suite 06-104 SAN
          FRANCISCO, 94108, CA, United State
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          2. Présentation et principe :
        </H2>
        <P textType={'body'}>
          Tout internaute se connectant et utilisant le site internet : loremipsum.com est considéré
          comme utilisateur du site web. Le site suivant loremipsum.com regroupe différents
          services, en l&apos;état, mis à la disposition des utilisateur. Il est ici précisé que ces
          derniers doivent rester honnête et faire preuve de bonne foi tant envers les différents
          usagés qu&apos;envers le réalisateur du site loremipsum.com. Kittel Corentin
          s&apos;efforce d&apos;indiqué sur le site loremipsum.com des informations les plus
          précises possibles (sous réserve de modifications apportées depuis leur mise en ligne),
          mais ne saurait attester l&apos;exactitude, la finitude et l&apos;actualité des
          informations diffusées sur son site internet, qu&apos;elles soient ou non de son fait. En
          répercussion, l&apos;utilisateur reconnaît se servir des informations données (à titre
          indicatif, non exhaustives et susceptibles d&apos;évoluer) sous sa responsabilité
          exclusive.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          3. Accessibilité :
        </H2>
        <P textType={'body'}>
          Le site internet loremipsum.com est par principe accessible aux utilisateurs 24/24h, 7/7j,
          excepté en cas de maintenance, programmée ou pas, pour les besoins de sa maintenance ou en
          cas de force majeure. En cas d&apos;impossibilité d&apos;accès au service, loremipsum.com
          s&apos;engage à faire de son mieux afin de rétablir l&apos;accès au site suivant et
          tentera alors d&apos;informer au préalable aux utilisateurs Dates & heures de
          l&apos;intervention. N&apos;étant asservi qu&apos;à une servitude de moyen, loremipsum.com
          ne saurait être designé comme responsable des dommages, quelle qu&apos;en soit la nature.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          4. Droit de propriété intellectuelle :
        </H2>
        <P textType={'body'}>
          Abject Act est le propriétaire exclusif de l&apos;intégralité des droits de propriété
          intellectuelle ou détient les droits et autorisations d&apos;usage sur tous les éléments
          accessibles sur le site web, tant sur la structure que sur les articles et textes, images,
          graphismes, icônes, sons, logiciels… Toute reproduction totale ou partielle du site
          suivant loremipsum.com, affichage, modification, mis à jour totalement ou partiellement de
          l&apos;un quelconque de ces éléments, peu importe le moyen ou le procédé utilisé, est
          formellement interdite, sauf autorisation écrite préalable de Abject Act, directeur du
          site même partielle du site loremipsum.com, affichage, edition, mis à jour totalement ou
          partiellement de l&apos;un quelconque de ces éléments, quel que soit le moyen ou la
          technique utilisé, est interdite, sauf autorisation écrite préalable de Abject Act,
          propriétaire du site web au mail suivant : abject.act@gmail.com, sinon elle sera
          considérée de la même manière qu&apos;une contrefaçon et passible de poursuite
          conformément aux dispositions des multiples articles L.335-2 et suivants du Code de
          Propriété Intellectuelle.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          5. Liens Hypertextes :
        </H2>
        <P textType={'body'}>
          Le site web loremipsum.com contient différents URL cliquable vers d&apos;autres sites
          (partenariats, sites sources .) mis en ligne suite à la validation de Kittel Corentin.
          Cependant, Kittel Corentin n&apos;a pas la possibilité de controler l&apos;ensemble des
          élements des différents sites visités et décline donc toute responsabilité de ce fait
          quand aux eventuels risques de contenus illicites.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          6. Protection des personnes et des biens - Maniement des données personnelles :
        </H2>
        <P textType={'body'}>
          <br></br> En France, les données personnelles sont notamment protégées par la loi n° 78-87
          du 6 janvier 1978 ainsi que la loi n° 2004-801 du 6 août 2004, l&apos;article L. 226-13 du
          Code pénal ainsi que la Directive Européenne du 24 octobre 1995.
          <br />
          <br /> Sur le site suivant loremipsum.com, Abject Act ne collecte pas d&apos;informations
          personnelles ( suivant l&apos;article 4 loi n°78-17 du 06 janvier 1978) relatives à
          l&apos;usager que pour la nécéssité de certains services offerts par le site suivant
          loremipsum.com. L&apos;usager offre les informations en pleine conscience de cause,
          notamment lorsqu&apos;il procède par lui-même à leur saisie. Il est donc précisé à
          l&apos;usagé du site interne loremipsum.com le devoir ou non de mentionner ces données. En
          conformité avec les dispositifs des articles 38 et autres de la loi 78-17 du 6 janvier
          1978 concernant l&apos;informatique, aux fichiers et aux différentes libertés, tout
          utilisateur possède un droit d&apos;accès , de rectification, de suppression et
          d&apos;opposition aux informations personnelles le concernant. Pour l&apos;utiliser,
          adressez une demande par mail : abject.act@gmail.com ou alors par lettre manuscrite
          dûement signée, jointe d&apos;une copie du titre d&apos;identité avec signature du
          titulaire du document, en précisant l&apos;adresse à laquelle une réponse devra être
          retournée. <br></br>
          <br /> Aucune information personnelle de l&apos;utilisateur du site web loremipsum.com
          n&apos;est publiée à l&apos;insu de l&apos;utilisateur, échangée, transférée, vendue sur
          n&apos;importe quel support à des tiers.
          <br></br>Le site web loremipsum.com est en conformité avec le RGPD
        </P>
      </div>
      <Footer className="-bottom-sub-large"></Footer>
    </main>
  );
}
