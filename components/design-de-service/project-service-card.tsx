'use client';

import { DesignServiceWithUrl } from '@/app/(page)/design-de-service/page';
import { cn, encodeUrl } from '@/lib/utils';
import { mdiEyeOffOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import H3 from '../ui/text/h3';

interface ProjectProps extends DesignServiceWithUrl {
  index: number;
  variants: Variants;
  src: string;
}

export default function ProjectServiceCard({ titre, index, variants, url, blurSrc }: ProjectProps) {
  const searchParams = useSearchParams();

  return (
    <li
      className={cn('relative flex w-full flex-col mobile-large:w-1/3 tablet:w-1/4 laptop:w-1/5')}
    >
      <Link
        href={`/design-de-service/${
          searchParams.get('type') ? searchParams.get('type') : 'recherches'
        }/${encodeUrl(titre).toLowerCase()}`}
        className={cn(
          'relative z-30 aspect-[4/1] overflow-hidden  mobile-large:aspect-square mobile-large:h-full '
        )}
      >
        <motion.div
          exit="exit"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          className={cn(
            'group relative flex h-full w-full  cursor-pointer items-center justify-center overflow-hidden border-y border-l border-secondary90 border-opacity-10 grayscale duration-slow hover:grayscale-0'
          )}
        >
          <Icon
            path={mdiEyeOffOutline}
            className={cn(
              'absolute left-1/2 top-1/2 z-40 -translate-x-[400%] -translate-y-1/2 transform text-secondary1 opacity-0 duration-[2s] group-hover:scale-110'
            )}
            size={2.6}
          />
          <H3
            textType={'body'}
            className={cn(
              'max-tablet:caption relative z-10 px-small text-center text-secondary1 duration-[2s] group-hover:scale-105  max-tablet:leading-body '
            )}
          >
            {titre}
          </H3>

          <div
            className={cn(
              'absolute h-full w-full overflow-hidden bg-black bg-opacity-70 duration-slow group-hover:bg-opacity-50'
            )}
          ></div>
          <Image
            className="-z-10 object-cover duration-slow group-hover:scale-105"
            fill
            alt={`${titre} picture`}
            placeholder="blur"
            blurDataURL={blurSrc}
            src={url}
          ></Image>
        </motion.div>
      </Link>
    </li>
  );
}
