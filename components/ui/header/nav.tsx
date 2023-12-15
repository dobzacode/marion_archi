import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React, { FC, HTMLProps } from 'react';
import { v4 } from 'uuid';
import Logo from '../branding/logo';
import NavLink from './nav-link';

interface NavProps extends HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  linkSize: 'small' | 'medium' | 'large' | null | undefined;
  intent:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | null
    | undefined;
}

export const navLinks = [
  { href: '/design-d-espaces', name: 'DESIGN D`ESPACES' },
  { href: '/design-de-service', name: 'DESIGN DE SERVICE' },
  { href: '/contact', name: 'CONTACT' }
];

const Nav: FC<NavProps> = ({ className, linkSize, intent }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <Logo
        href="/"
        className="font-['Distortion_Dos_Analogue'] font-bold tracking-widest "
        intent={intent}
        textType="heading--large"
      >
        MD
      </Logo>
      <ul className="laptopL:gap-large flex justify-center overflow-visible whitespace-nowrap tablet:gap-small  laptop:gap-sub-large">
        <div className="group relative duration-slow" key={v4()}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'absolute -z-20   -translate-y-1/2 overflow-visible fill-primary1 transition-all duration-slow group-hover:fill-primary20',
              pathname === '/design-d-espaces' && '-z-10 fill-primary20'
            )}
          >
            <path
              d="M34.2,-43.8C43.7,-40.3,50.1,-29.3,57.4,-16.4C64.7,-3.5,72.7,11.4,68.6,21.7C64.4,32.1,48.1,37.9,34.6,40.3C21.2,42.8,10.6,41.9,0.5,41.1C-9.5,40.4,-19.1,39.9,-33.3,37.7C-47.6,35.5,-66.5,31.6,-68.1,23C-69.7,14.4,-53.9,1,-47.4,-14.3C-40.9,-29.5,-43.6,-46.7,-37.3,-51.3C-30.9,-55.9,-15.5,-47.9,-1.5,-45.7C12.4,-43.6,24.8,-47.4,34.2,-43.8Z"
              transform="translate(90 115) scale(1.65, 0.8)"
            />
          </svg>
          <NavLink rounded="small" size={linkSize} href={navLinks[0].href} intent={intent}>
            {navLinks[0].name}
          </NavLink>
        </div>

        <div className="group relative " key={v4()}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'absolute -z-20 -translate-y-1/2 overflow-visible fill-primary1 transition-all duration-slow group-hover:fill-secondary20',
              pathname === '/design-de-service' && '-z-10 fill-secondary20'
            )}
          >
            <path
              transform="translate(100 114) scale(1.8, 0.7)"
              className=""
              d="M32,-60.3C39.3,-51.1,41.6,-38.2,44.5,-27.5C47.5,-16.9,51.2,-8.4,56.2,2.9C61.3,14.2,67.6,28.5,61.9,34.4C56.2,40.4,38.4,38,26.1,36.2C13.7,34.4,6.9,33,-3.3,38.8C-13.6,44.6,-27.1,57.5,-40.4,59.9C-53.7,62.3,-66.7,54.2,-66.8,42.4C-66.9,30.7,-54,15.3,-48.5,3.2C-42.9,-8.9,-44.6,-17.8,-40.1,-21.9C-35.6,-26,-24.9,-25.2,-17.1,-34.2C-9.4,-43.2,-4.7,-61.9,3.8,-68.5C12.3,-75.1,24.6,-69.6,32,-60.3Z"
            />
          </svg>
          <NavLink rounded="small" size={linkSize} href={navLinks[1].href} intent={intent}>
            {navLinks[1].name}
          </NavLink>
        </div>

        <div className="group relative " key={v4()}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'absolute -z-20 -translate-y-1/2 overflow-visible fill-primary1 transition-all duration-slow group-hover:fill-tertiary20',
              pathname === '/contact' && '-z-10 fill-tertiary20'
            )}
          >
            <path
              d="M16.6,-33.7C21.7,-19.2,25.9,-14.5,35.1,-6.6C44.4,1.4,58.7,12.5,62.3,26.1C66,39.7,59,55.6,46.8,63.5C34.7,71.3,17.3,71,-0.2,71.3C-17.8,71.6,-35.5,72.5,-43.5,63.3C-51.4,54.1,-49.5,34.8,-56.2,17.5C-63,0.2,-78.3,-15.1,-78,-28.1C-77.6,-41.1,-61.5,-51.8,-45.9,-62.9C-30.3,-73.9,-15.1,-85.3,-4.7,-78.9C5.8,-72.5,11.6,-48.2,16.6,-33.7Z"
              transform="translate(110 115) scale(1.8, 0.9)"
            />
          </svg>
          <NavLink rounded="small" size={linkSize} href={navLinks[2].href} intent={intent}>
            {navLinks[2].name}
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
