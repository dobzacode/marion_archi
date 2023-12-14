import BlobBg from '@/components/contact/blob-bg';
import Character from '@/components/contact/character';
import ContactForm from '@/components/contact/contact-form';
import RecaptchaProvider from '@/components/providers/recaptcha-provider';
import Footer from '@/components/ui/footer/footer';

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
