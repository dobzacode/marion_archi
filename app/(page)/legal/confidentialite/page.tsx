import Footer from '@/components/ui/footer/footer';
import { H1 } from '@/components/ui/text/h1';
import H2 from '@/components/ui/text/h2';
import P from '@/components/ui/text/p';

export async function generateMetadata() {
  return {
    title: 'Politique de Confidentialité | Marion Deleersnyder, Architecte de Confiance',
    description:
      'Découvrez comment nous protégeons votre vie privée sur le site de Marion Deleersnyder. Consultez notre politique de confidentialité pour comprendre comment nous traitons vos informations. Nous nous engageons à assurer la sécurité et la transparence dans toutes nos interactions en ligne.'
  };
}

export default async function HomePage() {
  return (
    <main className="slideInFromBottom relative flex flex-col gap-sub-large px-small  text-primary99 mobile-large:px-large">
      <H1
        textType={'heading--extra-large'}
        className="relative z-10 break-words text-primary90   max-mobile-large:text-heading-large max-mobile-large:leading-heading-large mobile-large:text-center tablet:mt-small"
      >
        POLITIQUE DE CONFIDENTIALITE
      </H1>

      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          1. Objectif de la politique de confidentialité :
        </H2>
        <P textType={'body'}>
          L&apos;objectif de la politique de confidentialité est de vous informer sur la manière
          dont nous traitons vos données personnelles ainsi que les informations suivantes :
        </P>
        <ul className=" body flex flex-col gap-extra-small pl-small">
          {[
            '- Les données personnelles que nous recueillerons',
            "- L'utilisation des données recueillis",
            '- Qui a accès aux données recueillies',
            '- Les droits des utilisateurs du site'
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <P textType={'body'}>
          Cette politique de confidentialité fonctionne parallèlement aux conditions générales
          d&apos;utilisation de notre site.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          2 .Lois applicables
        </H2>
        <P textType={'body'}>
          Conformément à la RGPD, cette politique de confidentialité est conforme aux règlements
          suivants.
          <br></br>
          Les données à caractère personnel doivent être :
        </P>
        <ul className=" body flex flex-col gap-extra-small pl-small">
          {[
            '- Traitées de manière licite, loyale et transparente au regard de la personne concerné (licéité, loyauté, transparence)',
            "- Collectées pour des finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités; le traitement ultérieur à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques n'est pas considéré, conformément à l'article 89, paragraphe 1, comme incompatible avec les finalités initiales (limitation des finalités)",
            '- Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données)',
            '- Exactes et, si nécessaire, tenues à jour; toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder (exactitude)',
            "- Conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées; les données à caractère personnel peuvent être conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques conformément à l'article 89, paragraphe 1, pour autant que soient mises en œuvre les mesures techniques et organisationnelles appropriées requises par le règlement afin de garantir les droits et libertés de la personne concernée (limitation de la conservation)",
            "- Traitées de façon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les degâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées (intégrité et confidentialité)"
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <P textType={'body'}>
          Le traitement n&apos;est licite que si, et dans la mesure où, au moins une des conditions
          suivantes est remplie :
        </P>
        <ul className=" body flex flex-col gap-extra-small pl-small">
          {[
            '- La personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques',
            "- Le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci",
            "- Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique",
            "- Le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement",
            '- Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.'
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <P textType={'body'}>
          Pour les résidents de l&apos;État de Californie, cette politique de confidentialité vise à
          se conformer à la California Consumer Privacy Act (CCPA). S&apos;il y a des incohérences
          entre ce document et la CCPA, la législation de l&apos;État s&apos;appliquera. Si nous
          constatons des incohérences, nous modifierons notre politique pour nous conformer à la loi
          pertinente.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          3. Consentement
        </H2>
        <P textType={'body'}>
          Les utilisateurs conviennent qu&apos;en utilisant notre site, ils consentent à :
        </P>
        <ul className=" body flex flex-col gap-extra-small pl-small">
          {[
            '- Les conditions énoncées dans la présente politique de confidentialité',
            "- La collecte, l'utilisation et le traitement de leurs données personnelles"
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          4. Données collectées automatiquement
        </H2>
        <P textType={'body'}>Aucune donnée n&apos;est collectée automatiquement</P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          5. Données recueillies de manière non automatique
        </H2>
        <P textType={'body'}>
          Nous pouvons également collecter les données suivantes lorsque vous effectuez certaines
          fonctions sur notre site :
        </P>
        <ul className=" body flex flex-col gap-extra-small pl-small">
          {['- Prénom et nom', '- Email', '- Téléphone'].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <P textType={'body'}>
          Ces données peuvent être recueillies au moyen des formulaires de contact présents sur
          notre site. Veuillez noter que nous ne collectons que les données qui nous aident à
          atteindre l&apos;objectif énoncé dans cette politique de confidentialité. Nous ne
          recueillerons pas de données supplémentaires sans vous en informer au préalable.
          <br />
          <br />
          Veuillez noter que nous ne collectons que les données qui nous aident à atteindre
          l&apos;objectif énoncé dans cette politique de confidentialité. Nous ne recueillerons pas
          de données supplémentaires sans vous en informer au préalable.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          6. Utilisation des données personnelles
        </H2>
        <P textType={'body'}>
          Les données personnelles recueillies sur notre site seront utilisées uniquement aux fins
          précisées dans la présente politique ou indiquées sur les pages pertinentes de notre site.
          Nous n&apos;utiliserons pas vos données au-delà de ce que nous divulguerons.
          <br></br>
        </P>

        <P textType={'body'}>
          Les données que nous recueillons lorsque l&apos;utilisateur exécute certaines fonctions
          peuvent être utilisées aux fins suivantes :
        </P>
        <ul className=" body flex flex-col gap-extra-small pl-small">
          <li>- Contact à des buts commerciaux</li>
        </ul>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          7. Qui a accès aux données recueillies ?
        </H2>
        <P textType={'body'}>
          <strong>Le titulaire du site internet ainsi que son Webmaster</strong>
          <br />
          <br />
          <strong>Autres divulgations</strong>
          <br />
          Nous ne vendrons ni ne partagerons vos données avec des tiers, sauf dans les cas suivants
          :
        </P>
        <ul className=" body flex flex-col gap-extra-small pl-small">
          {[
            "- Si la loi l'exige",
            '- Si cela est nécessaire pour toute procédure judiciaire',
            '- Pour prouver ou protéger nos droits légaux'
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <P textType={'body'}>
          Si vous suivez des hyperliens de notre site vers un autre site, veuillez noter que nous ne
          sommes pas responsables et n&apos;avons pas de contrôle sur leurs politiques et pratiques
          de confidentialité.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          8. Durée de stockage des données personnelles
        </H2>
        <P textType={'body'}>
          Nous ne conservons pas les données des utilisateurs au-delà de ce qui est nécessaire pour
          atteindre les fins pour lesquelles elles sont recueillies.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          9. Dispositif garantissant la sécurité des données personnelles
        </H2>
        <P textType={'body'}>
          Afin d&apos;assurer la protection de votre sécurité, nous utilisons le protocole de
          sécurité de la couche transport pour transmettre des renseignements personnels dans notre
          système.
          <br></br>
          <br></br>
          Toutes les données stockées dans notre système sont bien sécurisées et ne sont accessibles
          qu&apos;à nos membres. Nos membres sont liés par des accords de confidentialité stricts et
          une violation de cet accord entraînerait la radiation du membre.
          <br></br>
          <br></br>
          Alors que nous prenons toutes les précautions raisonnables pour nous assurer que nos
          données d&apos;utilisateur sont sécurisées et que les utilisateurs sont protégés, il reste
          toujours du risque de préjudice. L&apos;Internet en sa totalité peut être, parfois, peu
          sûr et donc nous sommes incapables de garantir la sécurité des données des utilisateurs
          au-delà de ce qui est raisonnablement pratique. Mineurs
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          10. Mineurs ?
        </H2>
        <P textType={'body'}>
          Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des mineurs
          aux fins de la collecte de données. Les mineurs doivent avoir le consentement d&apos;un
          représentant légal pour que leurs données soient recueillies, traitées et utilisées.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          11. Droits des utilisateurs
        </H2>
        <P textType={'body'}>
          En vertu du RGPD, les utilisateurs ont les droits suivants en tant que personnes
          concernées :
        </P>{' '}
        <ul className=" body flex flex-col gap-extra-small pl-small">
          {[
            "- Droit d'accès",
            '- Droit de rectification',
            "- Droit à l'effacement",
            '- Droit de restreindre le traitement',
            "- Droit de s'opposer au traitement",
            '- Droit à la portabilité des données',
            '- Droit de déposer une plainte'
          ].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <P textType={'body'}>
          Vous trouverez de plus amples informations sur ces droits au chapitre 3 (art 12-23) du
          RGPD.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          12. Comment modifier, supprimer ou contester les données recueillies
        </H2>
        <P textType={'body'}>
          Si vous souhaitez que vos renseignements soient supprimés ou modifiés d&apos;une façon ou
          d&apos;une autre, veuillez communiquer avec notre agent de protection de la vie privée ici
          :
        </P>
        <ul className=" body flex flex-col gap-extra-small pl-small">
          {['- Kittel Corentin', '- corentin.kittel@gmail.com', '- 0672357606'].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          13. Modifications
        </H2>
        <P textType={'body'}>
          Cette politique de confidentialité peut être modifiée à l&apos;occasion afin de maintenir
          la conformité avec la loi et de tenir compte de tout changement à notre processus de
          collecte de données. Nous recommandons à nos utilisateurs de vérifier notre politique de
          temps à autre pour s&apos;assurer qu&apos;ils soient informés de toute mise à jour. Au
          besoin, nous pouvons informer les utilisateurs par courriel des changements apportés à
          cette politique.
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium">
        <H2 textType="heading--sub-large" className="font-thin">
          14. Contact
        </H2>
        <P textType={'body'}>
          Si vous avez des questions à nous poser, n&apos;hésitez pas à communiquer avec nous en
          utilisant ce qui suit :
          <br />
          <br />
          - Marion Deleersnyder
          <br />
          - mtonarchi.contact@gmail.com
          <br />- 0635336011
        </P>
      </div>
      <Footer className="-bottom-sub-large"></Footer>
    </main>
  );
}
