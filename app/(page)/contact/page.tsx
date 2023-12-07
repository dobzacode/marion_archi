import BlobBg from '@/components/contact/blob-bg';
import ContactForm from '@/components/contact/contact-form';
import RecaptchaProvider from '@/components/providers/recaptcha-provider';

export default function Page() {
  return (
    <main className="relative h-screen w-full">
      <RecaptchaProvider>
        <ContactForm></ContactForm>
      </RecaptchaProvider>
      <BlobBg></BlobBg>
    </main>
  );
}
