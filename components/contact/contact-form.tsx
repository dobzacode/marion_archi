'use client';
import { contactAction, verifyCaptchaAction } from '@/app/_action';
import Input from '@/components/ui/form/input';
import P from '@/components/ui/text/p';
import { useFormState } from 'react-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { SubmitButton } from '../ui/form/submit-button';
import { H1 } from '../ui/text/h1';

export default function ContactForm({}: {
  // eslint-disable-next-line no-unused-vars
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function updateStatus(previousState: string, formData: FormData) {
    if (!executeRecaptcha) {
      previousState = 'Votre message a bien été envoyé !';
      return previousState;
    }

    const token = await executeRecaptcha('onSubmit');

    const verified = await verifyCaptchaAction(token);

    if (!verified) {
      previousState = 'Une erreur est survenue, veuillez réessayer plus tard.';
      return previousState;
    }
    previousState = await contactAction(formData);
    return previousState;
  }

  const [state, formAction] = useFormState(updateStatus, '');

  return (
    <section className="mx-extra-small flex items-center justify-center pt-small">
      <div className="slideInFromRight glassmorphism-bg flex  w-full flex-col gap-small rounded-small border border-tertiary10 border-opacity-80 p-medium text-tertiary90 opacity-0 animation-delay-1000   mobile-large:mx-0 mobile-large:max-w-[90vw] tablet:w-fit">
        <form action={formAction} className="flex w-full flex-col gap-sub-medium">
          <H1 textType={'sub-heading'} className="">
            Formulaire de contact
          </H1>
          <hr className="mb-1 border border-tertiary10"></hr>
          {state && (
            <P
              textType={'body'}
              className={`${
                state === 'Votre message a bien été envoyé !' ? 'text-tertiary50' : 'text-error50'
              }`}
            >
              {state}
            </P>
          )}
          <div className="flex flex-col gap-small">
            <div className="flex w-full flex-col justify-between  gap-small mobile-large:flex-row  [&>*]:tracking-wide [&>*]:placeholder:tracking-wide">
              <Input
                intent="tertiary"
                className="mobile-large:w-1/2"
                minLength={2}
                maxLength={30}
                required
                type="text"
                id={'firstname'}
                placeholder={'Nom'}
                hiddenlabel="true"
              ></Input>
              <Input
                intent="tertiary"
                className="mobile-large:w-1/2"
                minLength={2}
                maxLength={30}
                required
                type="text"
                id={'lastname'}
                placeholder={'Prénom'}
                hiddenlabel="true"
              ></Input>
            </div>
            <Input
              intent="tertiary"
              required
              type="email"
              id={'email'}
              placeholder={'Email'}
              hiddenlabel="true"
              className="tracking-wide placeholder:tracking-wide"
            ></Input>
            <Input
              intent="tertiary"
              minLength={2}
              maxLength={30}
              required
              type="number"
              id={'phone'}
              placeholder={'Téléphone'}
              hiddenlabel="true"
              className="tracking-wide placeholder:tracking-wide"
            ></Input>
            <Input
              intent="tertiary"
              minLength={10}
              maxLength={500}
              required
              type="textarea"
              id={'demande'}
              placeholder={'Demande'}
              rows={5}
              cols={3}
              hiddenlabel="true"
              className="tracking-wide placeholder:tracking-wide"
            ></Input>
          </div>
          <SubmitButton></SubmitButton>
        </form>
        <P className={`caption  text-center`}>
          Ce site est protégé par reCAPTCHA, les
          <a className="text-tertiary50" href="https://policies.google.com/privacy">
            {' '}
            règles de confidentialité
          </a>{' '}
          et les
          <a className="text-tertiary50" href="https://policies.google.com/terms">
            {' '}
            conditions d&apos;utilisation
          </a>{' '}
          s&apos;y appliquent.
        </P>
      </div>
    </section>
  );
}
