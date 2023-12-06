'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function SubSection({
  children,
  href,
  className,
  title,
  custom
}: {
  children?: ReactNode;
  href: string;
  className?: string;
  title: string;
  custom: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, translateX: '-10%' }}
      whileInView={{ opacity: 1, translateX: 0, transition: { type: 'spring' } }}
      viewport={{ margin: '-20% 0px -20% 0px', once: true }}
      custom={custom}
      className={`sub-heading   text-primary90 ${className}`}
    >
      <Link href={href}>
        <h4 className="relative z-0 font-['Distortion_Dos_Analogue'] text-primary80 duration-0 group-hover:z-20">
          {title}
        </h4>
      </Link>
      {children}
    </motion.li>
  );
}
