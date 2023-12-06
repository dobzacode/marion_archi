'use client';
import { contactAction, verifyCaptchaAction } from '@/app/_action';
import Input from '@/components/ui/form/input';
import P from '@/components/ui/text/p';
import { useFormState } from 'react-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { SubmitButton } from '../ui/form/submit-button';

export default function ContactForm({}: {
  // eslint-disable-next-line no-unused-vars
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function updateStatus(previousState: string, formData: FormData) {
    if (!executeRecaptcha) {
      previousState = 'Erreur';
      return previousState;
    }

    const token = await executeRecaptcha('onSubmit');

    const verified = await verifyCaptchaAction(token);

    if (!verified) {
      previousState = 'Erreur';
      return previousState;
    }
    previousState = await contactAction(formData);
    return previousState;
  }

  const [state, formAction] = useFormState(updateStatus, '');

  return (
    <form action={formAction} className="flex w-full flex-col gap-small">
      {state && (
        <P
          textType={'body'}
          className={`${state === 'success' ? 'text-success50' : 'text-error50'}`}
        >
          {state}
        </P>
      )}
      <div className="flex w-full flex-col justify-between  gap-small mobile-large:flex-row">
        <Input
          intent="black"
          className="mobile-large:w-1/2"
          minLength={2}
          maxLength={30}
          required
          type="text"
          id={'firstname'}
          placeholder={'firstname'}
          hiddenlabel="true"
        ></Input>
        <Input
          intent="black"
          className="mobile-large:w-1/2"
          minLength={2}
          maxLength={30}
          required
          type="text"
          id={'lastname'}
          placeholder={'lastname'}
          hiddenlabel="true"
        ></Input>
      </div>
      <Input
        intent="black"
        required
        type="email"
        id={'email'}
        placeholder={'Email'}
        hiddenlabel="true"
      ></Input>
      <Input
        intent="black"
        minLength={2}
        maxLength={30}
        required
        type="text"
        id={'subject'}
        placeholder={'subject'}
        hiddenlabel="true"
      ></Input>
      <Input
        intent="black"
        minLength={10}
        maxLength={500}
        required
        type="textarea"
        id={'message'}
        placeholder={'Message'}
        rows={5}
        cols={3}
        hiddenlabel="true"
      ></Input>
      <SubmitButton></SubmitButton>
    </form>
  );
}
