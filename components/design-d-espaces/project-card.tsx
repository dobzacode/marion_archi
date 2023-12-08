import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import H3 from '../ui/text/h3';

export interface Project {
  id: string;
  project_name: string;
  information: {
    renovation: number;
    honoraires: number;
    dimension: number;
    description: string;
  };
}

interface ProjectProps extends Project {
  index: number;
  variants: Variants;
  handleButtonClick: () => void;
  src: string;
}

export default function ProjectCard({
  project_name,
  id,
  information,
  handleButtonClick,
  variants,
  index,
  src
}: ProjectProps) {
  const [showMore, setShowMore] = useState<boolean>(false);

  const searchParams = useSearchParams();

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectFromParams = searchParams.get('project');
    if (projectFromParams !== id) {
      setShowMore(false);
    }
  }, [searchParams, id]);

  // -left-[100%] -left-[200%] -left-[300%] -left-[400%]

  return (
    <li className={cn('relative flex w-1/5 flex-col')}>
      <div className={cn('relative z-30 aspect-square  h-full overflow-hidden')}>
        <motion.button
          exit="exit"
          onClick={() => {
            setShowMore(!showMore);
            handleButtonClick();
          }}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="group relative flex h-full w-full cursor-pointer items-center justify-center border border-primary90 border-opacity-10 grayscale duration-slow hover:grayscale-0"
        >
          <H3 textType={'heading'} className="relative z-10 px-small text-center text-primary1">
            <strong className="before:inset-y-1/2 before:h-[100%] before:w-[calc(100%_+_40px)] before:-translate-x-2 before:-translate-y-1/2 before:rotate-3 before:scale-x-0 before:bg-primary90 before:duration-slow group-hover:before:scale-x-100">
              {project_name.toUpperCase()}
            </strong>
          </H3>
          <div className="absolute h-full w-full bg-primary90 bg-opacity-30 duration-slow group-hover:bg-primary20 group-hover:bg-opacity-0"></div>
          <Image
            className="-z-10 object-cover"
            fill
            alt={`${project_name} picture`}
            src={src}
          ></Image>
        </motion.button>
      </div>

      <CSSTransition
        unmountOnExit
        nodeRef={contentRef}
        in={showMore}
        timeout={2000}
        classNames={'slide-in'}
      >
        <div
          ref={contentRef}
          className={cn(
            'absolute  top-full z-40 h-screen w-screen overflow-hidden bg-white',
            `-left-[${(index % 5) * 100}%]`,
            !showMore && 'z-[35]'
          )}
        >
          <H3
            className=" relative left-small top-large  -rotate-12 font-['Distortion_Dos_Analogue']  text-primary90 "
            textType={'heading'}
          >
            {project_name}
          </H3>
          <div className="flex w-1/4 items-center justify-center"></div>
        </div>
      </CSSTransition>
    </li>
  );
}
