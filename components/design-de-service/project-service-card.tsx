import { cn, encodeUrl } from '@/lib/utils';
import { mdiEyeOffOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import H3 from '../ui/text/h3';

export interface Project {
  id: string;
  project_name: string;
  information: {
    localisation?: string;
    politique?: string;
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
    fifth?: string;
    sixth?: string;
    renovation?: number;
    honoraires?: number;
    dimension?: number;
    description?: string;
  };
}

interface ProjectProps extends Project {
  index: number;
  variants: Variants;
  handleButtonClick: () => void;
  src: string;
}

export default function ProjectServiceCard({
  project_name,
  id,

  // eslint-disable-next-line no-unused-vars
  src
}: ProjectProps) {
  const searchParams = useSearchParams();

  const [showMore, setShowMore] = useState<boolean>(Boolean(searchParams.get('project') === id));

  useEffect(() => {
    const projectFromParams = searchParams.get('project');
    if (projectFromParams !== id) {
      setShowMore(false);
    }
  }, [searchParams, id]);

  return (
    <li
      className={cn('relative flex w-full flex-col mobile-large:w-1/3 tablet:w-1/4 laptop:w-1/5')}
    >
      <Link
        href={`/design-de-service/${
          searchParams.get('type') ? searchParams.get('type') : 'recherches'
        }/${encodeUrl(project_name)}`}
        className={cn(
          'relative z-30 aspect-[3/1] overflow-hidden  mobile-large:aspect-square mobile-large:h-full ',
          showMore && 'z-[25]'
        )}
      >
        <div
          className={cn(
            'group relative flex h-full w-full  cursor-pointer items-center justify-center overflow-hidden border-y border-l border-primary90 border-opacity-10 grayscale duration-slow hover:grayscale-0'
          )}
        >
          <Icon
            path={mdiEyeOffOutline}
            className={cn(
              'absolute left-1/2 top-1/2 z-40 -translate-x-[400%] -translate-y-1/2 transform text-primary1 opacity-0 duration-[2s] group-hover:scale-110',
              showMore && 'opacity-1 -translate-x-1/2'
            )}
            size={2.6}
          />
          <H3
            textType={'body'}
            className={cn(
              'relative z-10 px-small text-center text-primary1 duration-[2s]  group-hover:scale-105',
              showMore && 'translate-x-[150%] opacity-0'
            )}
          >
            <strong className="">{project_name.toUpperCase()}</strong>
          </H3>

          <div
            className={cn(
              'absolute h-full w-full overflow-hidden bg-black bg-opacity-70 duration-slow group-hover:bg-opacity-50',
              showMore && ' '
            )}
          ></div>
          <Image
            className="-z-10 object-cover duration-slow group-hover:scale-105"
            fill
            alt={`${project_name} picture`}
            src={'/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg'}
          ></Image>
        </div>
      </Link>
    </li>
  );
}
