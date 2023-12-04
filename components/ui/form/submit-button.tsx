'use client';

import { useFormStatus } from 'react-dom';
import { BarLoader } from 'react-spinners';
import Button from '../button/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <Button
      className={`relative border-b-2 border-info10 `}
      size="small"
      rounded="small"
      type="submit"
      intent="info"
      aria-disabled={pending}
    >
      <p>ENVOYER</p>
      {pending && (
        <BarLoader
          className="bg-info80"
          height="4px"
          cssOverride={{ width: '100%', position: 'absolute', bottom: '0' }}
        ></BarLoader>
      )}
    </Button>
  );
}
