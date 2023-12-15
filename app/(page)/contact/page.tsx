import BlobBg from '@/components/contact/blob-bg';
import Character from '@/components/contact/character';
import ContactForm from '@/components/contact/contact-form';
import RecaptchaProvider from '@/components/providers/recaptcha-provider';
import Footer from '@/components/ui/footer/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contactez Marion Deleersnyder | Architecte du Design d'Espace et de Service",
  description:
    "Contactez Marion Deleersnyder pour discuter de vos projets de design d'espace et de service. Utilisez notre formulaire de contact pour exprimer vos idées, demandes et besoins. Collaborons pour transformer votre vision en réalité architecturale. Nous sommes impatients de donner vie à vos projets."
};

export default function Page() {
  return (
    <>
      <main className="relative h-[100vh] w-full mobile-large:h-[80vh]  mobile-large:overflow-hidden">
        <RecaptchaProvider>
          <ContactForm></ContactForm>
        </RecaptchaProvider>
        <Character></Character>
        <BlobBg></BlobBg>
      </main>
      <Footer></Footer>
    </>
  );
}
