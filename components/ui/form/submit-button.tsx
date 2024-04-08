'use client';

import { useFormStatus } from 'react-dom';
import { BarLoader } from 'react-spinners';
import Button from '../button/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <Button
      className={`group  relative overflow-hidden border border-tertiary90 border-opacity-10  bg-opacity-70 tracking-wide text-tertiary90 duration-extra-slow after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:max-w-0 after:bg-tertiary80 after:duration-extra-slow hover:bg-opacity-0 hover:text-tertiary1 hover:after:max-w-full group-hover:after:text-tertiary1  ${
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
