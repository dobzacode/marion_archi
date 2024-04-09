'use client';

import { buttonVariants } from '@/components/ui/button/button';
import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-[80vh] w-screen flex-col items-center justify-center gap-medium px-small text-neutral90">
      <H1 textType="heading--extra-large">500</H1>
      <P textType="body" className="max-w-[400px] text-center">
        Oops, une erreur est survenue. Veuillez vérifier l&apos;URL ou revenir à la page
        d&apos;accueil.
      </P>
      <Link
        className={buttonVariants({ size: 'small', rounded: 'small', intent: 'pastelNeutral' })}
        href="/"
      >
        RETOUR À LA PAGE D&apos;ACCUEIL
      </Link>
    </main>
  );
}
