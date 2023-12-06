import ContactForm from '@/components/contact/contact-form';
import RecaptchaProvider from '@/components/providers/recaptcha-provider';

export default function Page() {
  return (
    <main>
      <RecaptchaProvider>
        <ContactForm></ContactForm>
      </RecaptchaProvider>
    </main>
  );
}
