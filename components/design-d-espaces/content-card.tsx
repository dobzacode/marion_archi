'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import H3 from '../ui/text/h3';
import { Project } from './content-section';

interface ContentCardProps extends Project {
  actualType: string;
  index: number;
}

export default function ContentCard({
  project_name,
  information,
  picture,
  index,
  actualType
}: ContentCardProps) {
  const variants = {
    hidden: { y: -1000 },
    visible: (i: number) => ({
      y: 0,
      transition: {
        delay: i * 0.115
      }
    })
  };

  return (
    <li className="relative h-full w-1/5 overflow-hidden">
      <motion.button
        custom={index}
        initial="hidden"
        animate="visible"
        variants={variants}
        className=" group relative flex aspect-square w-full cursor-pointer items-center justify-center border border-primary90 border-opacity-10 grayscale duration-slow hover:grayscale-0"
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
          src={`/assets/${actualType}/${project_name}/banner-${project_name}.jpg`}
        ></Image>
      </motion.button>
    </li>
  );
}
