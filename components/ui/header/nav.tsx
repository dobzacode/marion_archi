'use client';
import React, { FC, HTMLProps } from 'react';
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
  { href: '/contact', name: 'CONTACT' },
];

const Nav: FC<NavProps> = ({ className, linkSize, intent }) => {
  return (
    <nav className={className}>
      <Logo
        href="/"
        className="font-bold tracking-widest"
        intent={intent}
        textType="heading"
      >
       MD
      </Logo>
      <ul className="laptopL:gap-large flex justify-center tablet:gap-small laptop:gap-sub-large whitespace-nowrap">
        {navLinks.map((link) => {return <NavLink rounded="small" hover={true} size={linkSize} href={link.href} key={link.name}  intent={intent}>{link.name}</NavLink>})}
      </ul>
    </nav>
  );
};

export default Nav;
