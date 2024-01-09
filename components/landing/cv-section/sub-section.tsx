'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function SubSection({
  children,
  href,
  className,
  title,
  custom,
  direction = 'left',
  isProject
}: {
  children?: ReactNode;
  href: string | false;
  className?: string;
  title: string;
  custom: number;
  direction?: 'left' | 'right';
  isProject?: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, translateX: direction === 'left' ? '-10%' : '10%' }}
      whileInView={{ opacity: 1, translateX: 0, transition: { type: 'spring' } }}
      viewport={{ margin: !isProject ? '-18% 0px -18% 0px' : '0px', once: true }}
      custom={custom}
      className={`sub-heading   text-primary90 ${className} gap-sub-medium`}
    >
      {href ? (
        <Link className="peer w-fit " href={href}>
          <h4 className="relative z-20  font-['Distortion_Dos_Analogue'] text-primary80 duration-0 group-hover:z-20">
            {title}
          </h4>
        </Link>
      ) : (
        <h4
          className={cn(
            "peer relative z-20 w-fit cursor-pointer font-['Distortion_Dos_Analogue'] text-primary80 duration-0 group-hover:z-20"
          )}
        >
          {title}
        </h4>
      )}
      {children}
    </motion.li>
  );
}
