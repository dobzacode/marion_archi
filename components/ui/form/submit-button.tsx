'use client';

import { useFormStatus } from 'react-dom';
import { BarLoader } from 'react-spinners';
import Button from '../button/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <Button
      className={`relative  overflow-hidden ${pending ? 'pointer-events-none' : ''}`}
      size="small"
      rounded="small"
      type="submit"
      hover={true}
      intent="pastelPrimary"
      aria-disabled={pending}
    >
      <p className="text-primary90">ENVOYER</p>
      {pending && (
        <BarLoader
          className="bg-primary50 text-primary40"
          height="2px"
          cssOverride={{ width: '100%', position: 'absolute', bottom: '0' }}
        ></BarLoader>
      )}
    </Button>
  );
}
