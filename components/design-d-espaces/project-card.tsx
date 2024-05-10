'use client';

import { DesignEspaceWithUrl } from '@/app/(page)/design-d-espaces/page';
import { cn, encodeUrl } from '@/lib/utils';
import { mdiEyeOffOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import H3 from '../ui/text/h3';

interface ProjectProps extends DesignEspaceWithUrl {
  index: number;
  variants: Variants;
  src: string;
}

export default function ProjectCard({ titre, blurSrc, url, variants, index }: ProjectProps) {
  const searchParams = useSearchParams();

  return (
    <li
      className={cn(
        'relative flex h-full w-full flex-col mobile-large:w-1/3 tablet:w-1/4 laptop:w-1/5'
      )}
    >
      <Link
        href={`/design-d-espaces/${
          searchParams.get('type') ? searchParams.get('type') : 'architecture_interieurs'
        }/${encodeUrl(titre).toLowerCase()}`}
        className={cn(
          'relative z-30 aspect-[4/1] h-full  overflow-hidden mobile-large:aspect-square '
        )}
      >
        <motion.button
          exit="exit"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          className={cn(
            'group relative flex h-full w-full  cursor-pointer items-center justify-center overflow-hidden border-y border-l border-primary90 border-opacity-10 grayscale duration-slow hover:grayscale-0'
          )}
        >
          <Icon
            path={mdiEyeOffOutline}
            className={cn(
              'absolute left-1/2 top-1/2 z-40 -translate-x-[400%] -translate-y-1/2 transform text-primary1 opacity-0 duration-[2s] group-hover:scale-110'
            )}
            size={2.6}
          />
          <H3
            textType={'body'}
            className={cn(
              'max-tablet:caption relative z-10 px-small text-center text-primary1 duration-[2s] group-hover:scale-105  max-tablet:leading-body'
            )}
          >
            <strong className="">{titre}</strong>
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
            src={url}
            blurDataURL={blurSrc}
          ></Image>
        </motion.button>
      </Link>
    </li>
  );
}
