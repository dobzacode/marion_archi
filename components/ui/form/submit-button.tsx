'use client';

import { useFormStatus } from 'react-dom';
import { BarLoader } from 'react-spinners';
import Button from '../button/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`group  relative overflow-hidden border  border-tertiary90 border-opacity-10  bg-opacity-70 tracking-wide text-tertiary80 duration-500  hover:bg-tertiary90 hover:text-tertiary1 hover:shadow-tertiary-low   ${
        pending ? 'pointer-events-none' : ''
      }`}
      size="small"
      rounded="small"
      type="submit"
      hover={true}
      intent="pastelTertiary"
      aria-disabled={pending}
    >
      Envoyer
      {pending && (
        <BarLoader
          className="bg-tertiary50 text-tertiary40"
          height="2px"
          cssOverride={{ width: '100%', position: 'absolute', bottom: '0' }}
        ></BarLoader>
      )}
    </Button>
  );
}
