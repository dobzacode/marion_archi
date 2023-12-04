'use client';

import { cn } from '@/lib/utils';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import React, { FC, useState } from 'react';
import Logo from '../branding/logo';
import { navLinks } from './nav';
import NavLink from './nav-link';

interface NavProps {
  children?: React.ReactNode;
  className?: string;
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
  linkSize: 'small' | 'medium' | 'large' | null | undefined;
  size?: 'small' | 'medium' | 'large' | null | undefined;
}

const MobileNav: FC<NavProps> = ({ className, linkSize, intent, size }: NavProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const modalOffset = () => {
    switch (size) {
      case 'small':
        return 'top-large';
      case 'medium':
        return 'top-sub-extra-large';
      case 'large':
        return 'top-extra-large';
    }
  };

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
      <button onClick={() => setShowMenu(!showMenu)}>
        <Icon path={mdiMenu} size={3.5}></Icon>
      </button>
      <div
        className={cn(
          'h-screen w-screen bg-white duration-700',
          'absolute z-10',
          showMenu ? 'left-0' : '-left-[768px] ',
          modalOffset()
        )}
      >
        <ul className={'mt-sub-large flex flex-col justify-center  gap-large'}>
          {navLinks.map((link) => {return <NavLink rounded="small" hover={true} size={linkSize} href={link.href} key={link.name}  intent={intent}>{link.name}</NavLink>})}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;