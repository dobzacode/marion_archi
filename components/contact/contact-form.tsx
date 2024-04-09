'use client';
import { contactAction, verifyCaptchaAction } from '@/app/_action';
import Input from '@/components/ui/form/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import P from '@/components/ui/text/p';
import { cn } from '@/lib/utils';
import { mdiCloseCircle, mdiInformation } from '@mdi/js';
import Icon from '@mdi/react';
import { useEffect, useState } from 'react';
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

  const [openInformation, setOpenInformation] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) return body.classList.add('no-scroll');
  });

  return (
    <section className=" mx-extra-small flex h-fit items-center justify-center pt-small ">
      <div
        className={cn(
          'slideInFromRight glassmorphism-bg relative flex  w-full flex-col gap-small rounded-small border border-tertiary10 border-opacity-80 p-small text-tertiary90 opacity-0 animation-delay-1000 mobile-large:mx-0   mobile-large:max-w-[90vw] tablet:w-fit tablet:p-medium'
        )}
      >
        <div className={cn('flex flex-col gap-small duration-medium')}>
          <form action={formAction} className="flex w-full flex-col gap-sub-medium">
            <div className="flex justify-between">
              <H1 textType={'sub-heading'} className="">
                Formulaire de contact
              </H1>
              <Popover>
                <PopoverTrigger
                  onClick={() => {
                    setOpenInformation(!openInformation);
                  }}
                >
                  <Icon
                    id="informationButton"
                    className="animate-bounce"
                    path={!openInformation ? mdiInformation : mdiCloseCircle}
                    size={1.6}
                  ></Icon>
                </PopoverTrigger>
                <PopoverContent side="right">
                  <p className="body w-[16rem] break-words">
                    Tu as aussi la possibilité de me contacter au 0635336011 ou à l&apos;adresse
                    mail mtonarchi.contact@gmail.com !
                  </p>
                </PopoverContent>
              </Popover>
            </div>
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
            <div className="flex flex-col gap-extra-small">
              <div className="flex w-full flex-col justify-between  gap-extra-small mobile-large:flex-row  [&>*]:tracking-wide [&>*]:placeholder:tracking-wide">
                <Input
                  intent="tertiary"
                  className="max-tablet:py-2 max-tablet:text-caption max-tablet:placeholder:text-caption mobile-large:w-1/2"
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
                  className="max-tablet:py-2 max-tablet:text-caption max-tablet:placeholder:text-caption mobile-large:w-1/2"
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
                className="tracking-wide placeholder:tracking-wide max-tablet:py-2 max-tablet:text-caption max-tablet:placeholder:text-caption "
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
                className="tracking-wide placeholder:tracking-wide max-tablet:py-2 max-tablet:text-caption max-tablet:placeholder:text-caption"
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
                className="tracking-wide placeholder:tracking-wide max-tablet:py-2 max-tablet:text-caption max-tablet:placeholder:text-caption"
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
      </div>
    </section>
  );
}
