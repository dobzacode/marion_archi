import { cn } from '@/lib/utils';
import Link from 'next/link';
import P from '../text/p';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'caption slideInFromBottom  absolute bottom-small z-50  flex w-full items-center justify-center gap-extra-small opacity-0 animation-delay-[4s]  mobile-large:gap-medium',
        className
      )}
    >
      <P>© 2023 MTONARCHI</P>
      <nav>
        <ul className="flex w-full justify-around gap-extra-small mobile-large:justify-normal mobile-large:gap-medium [&>li]:backdrop-blur-lg">
          <li>
            <Link href="/legal/confidentialite">
              <span className="hidden mobile-large:block">Politique de confidentialité</span>
              <span className="block mobile-large:hidden">Confidentialité</span>
            </Link>
          </li>
          <li>
            <Link href="/legal/informations">Mentions légales</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
