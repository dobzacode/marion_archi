'use client';

import Icon from '@mdi/react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React, { FC, useEffect, useRef, useState } from 'react';

import { mdiClose, mdiMenu } from '@mdi/js';
import useBetterMediaQuery from '@/components/hooks/use-better-media-query';
import { Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from '../branding/logo';
import NavLink from './nav-link';
import { navLinks } from './nav';


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
  const isMobileLargePlus = useBetterMediaQuery('(min-width: 500px)');

  const [showMenu, setShowMenu] = useState<boolean>(false);





  const navRef = useRef();
  const footerRef = useRef();

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
    <>
      <header className={cn(className)}>
       <nav>
            <ul className={'flex gap-large'}>
              {navLinks.map((link, i) => {
                return (
                  <NavLink                                
                    intent={intent}
                    key={link.name}
                    hover={true}
                    size={linkSize}                
                    href={link.href}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </ul>
          </nav>  
      </header> 
    </>
  );
};

export default MobileNav;
