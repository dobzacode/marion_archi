'use client';

import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BlobProps {
  color: string;
  saturation?: number;
  variants?: Variants;
  children: ReactNode;
  className?: string;
}

export default function AnimateBlob({
  color,
  saturation = 10,
  variants,
  children,
  className
}: BlobProps) {
  const stopColor1 = `var(--${color}-color-${saturation})`;
  const stopColor2 = `var(--${color}-color-${saturation + 10})`;

  return (
    <motion.svg
      variants={variants}
      animate="animate"
      initial="initial"
      className={cn('absolute top-0 -z-10 translate-x-1/2 ', className)}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1500 1500"
      width="100%"
      id="blobSvg"
      style={{ opacity: '1' }}
    >
      {' '}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          {' '}
          <stop offset="0%" style={{ stopColor: stopColor1 }}></stop>{' '}
          <stop offset="100%" style={{ stopColor: stopColor2 }}></stop>{' '}
        </linearGradient>{' '}
      </defs>{' '}
      <path id="blob" fill="url(#gradient)" style={{ opacity: '1' }}>
        {children}
      </path>
    </motion.svg>
  );
}
