import { cn } from '@/lib/utils';
import Link from 'next/link';
import P from '../text/p';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'caption absolute  bottom-small  z-50 flex w-full items-center justify-center gap-extra-small mobile-large:gap-medium',
        className
      )}
    >
      <P>© 2023 Marion Deleersnyder</P>
      <nav>
        <ul className="flex gap-extra-small mobile-large:gap-medium [&>li]:backdrop-blur-lg ">
          <li>
            <Link href="/legal/confidentialite">Politique de confidentialité</Link>
          </li>
          <li>
            <Link href="/legal/informations">Mentions légales</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
