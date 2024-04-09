import BlobBg from '@/components/contact/blob-bg';
import ContactForm from '@/components/contact/contact-form';
import RecaptchaProvider from '@/components/providers/recaptcha-provider';
import Footer from '@/components/ui/footer/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contactez MTONARCHI | Marion Deleersnyder, Architecte d'Espace et de Service",
  description:
    "Contactez MTONARCHI et Marion Deleersnyder pour discuter de vos projets de design d'espace et de service. Utilisez notre formulaire de contact pour exprimer vos idées, demandes et besoins. Collaborons pour transformer votre vision en réalité architecturale. Nous sommes impatients de donner vie à vos projets."
};

export default function Page() {
  return (
    <>
      <main className="no-scroll relative h-[100vh] max-h-[80vh]  w-full  max-tablet:-mt-large mobile-large:h-[80vh]">
        <RecaptchaProvider>
          <ContactForm></ContactForm>
        </RecaptchaProvider>

        <BlobBg></BlobBg>
      </main>
      <Footer></Footer>
    </>
  );
}
