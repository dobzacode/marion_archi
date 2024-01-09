import { buttonVariants } from '@/components/ui/button/button';
import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import Link from 'next/link';

export const metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default async function NotFound() {
  return (
    <main className="flex h-[80vh] w-screen flex-col items-center justify-center gap-medium px-small text-neutral90">
      <H1 textType="heading--extra-large">404</H1>
      <P textType="body" className="max-w-[400px] text-center">
        La page que vous recherchez n&apos;existe pas. Veuillez vérifier l&apos;URL ou revenir à la
        page d&apos;accueil.
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
