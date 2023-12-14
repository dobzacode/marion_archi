import BlobBg from '@/components/contact/blob-bg';
import Character from '@/components/contact/character';
import ContactForm from '@/components/contact/contact-form';
import RecaptchaProvider from '@/components/providers/recaptcha-provider';

export default function Page() {
  return (
    <main className="relative h-[80vh] w-full mobile-large:h-[75vh]  mobile-large:overflow-hidden">
      <RecaptchaProvider>
        <ContactForm></ContactForm>
      </RecaptchaProvider>
      <Character></Character>
      <BlobBg></BlobBg>
    </main>
  );
}
