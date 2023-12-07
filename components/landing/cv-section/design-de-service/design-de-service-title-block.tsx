'use client';

import useBetterMediaQuery from '@/components/hooks/use-better-media-query';
import H3 from '@/components/ui/text/h3';
import P from '@/components/ui/text/p';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DesignDeServiceTitleBlock({ className }: { className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const isTablet = useBetterMediaQuery('(max-width:768px)');

  const strokeVariants = !isTablet
    ? {
        initial: { pathLength: 0, pathOffset: 0.3 },
        animate: {
          pathLength: isInView ? 1 : 0,
          pathOffset: isInView ? 0 : 0.3,
          transition: { duration: 2, ease: 'easeOut', delay: 0.5 }
        }
      }
    : { initial: { pathLength: 1, pathOffset: 0 } };

  const secondStrokeVariants = !isTablet
    ? {
        initial: { pathLength: 0, pathOffset: 0.9 },
        animate: {
          pathLength: isInView ? 1 : 0,
          pathOffset: isInView ? 0 : 0.9,
          transition: { duration: 2, ease: 'easeOut', delay: 0.5 }
        }
      }
    : { initial: { pathLength: 1, pathOffset: 0 } };

  const textVariants = !isTablet
    ? {
        initial: { opacity: 0 },
        animate: { opacity: isInView ? 1 : 0, transition: { duration: 1, delay: 2.5 } }
      }
    : { initial: { opacity: 1 } };

  const mainDivVariants = !isTablet
    ? {
        initial: { x: '-50%' },
        animate: { x: isInView ? 0 : '-50%', transition: { duration: 0.5 } }
      }
    : { initial: { x: 0 } };

  return (
    <div ref={ref} className={className}>
      <div className="relative h-fit max-[1298px]:-translate-x-[50%] max-[1298px]:translate-y-10 max-laptop:-translate-y-[0vw] max-laptop:translate-x-[-15vw] max-tablet:-translate-y-16  max-tablet:translate-x-10 max-mobile-large:w-[40rem] max-mobile-large:-translate-y-20 max-mobile-large:translate-x-10">
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'pointer-events-none absolute top-0 -z-10 -translate-y-1/2  -rotate-12 scale-150 overflow-visible fill-none stroke-primary80 stroke-[0.5px] transition-all duration-slow'
          )}
        >
          <motion.path
            {...strokeVariants}
            d="M31.8,-48.5C44.2,-41.4,59.4,-37.8,71.1,-27.9C82.7,-18,90.8,-1.9,83.9,8.6C76.9,19,54.9,23.8,41.9,33.2C28.9,42.6,24.8,56.7,16.9,60.1C9,63.6,-2.7,56.4,-15,52.3C-27.3,48.2,-40.2,47.1,-50.7,40.7C-61.2,34.3,-69.3,22.7,-73.2,9.2C-77.1,-4.2,-76.9,-19.6,-68,-27.7C-59,-35.7,-41.5,-36.5,-28.7,-43.4C-16,-50.3,-8,-63.4,0.8,-64.7C9.7,-66,19.3,-55.6,31.8,-48.5Z"
            transform="translate(90 50) scale(1, 1)"
          />
        </motion.svg>

        <motion.div {...textVariants}>
          <P
            className="absolute -top-[270px] right-[145px] z-20 rotate-[12deg]  text-primary80  duration-slowest "
            textType="body"
          >
            Scénographie
          </P>
          <P
            className="absolute -bottom-small -top-[220px] right-[80px] z-20 rotate-[17deg]    text-primary80  duration-slowest "
            textType="body"
          >
            <strong className="before:bg-primary20">Prototypes</strong>
          </P>
          <P
            className="absolute -bottom-small  -top-[220px] right-[190px] z-20 rotate-[4deg]  text-primary80  duration-slowest "
            textType="body"
          >
            <strong className="before:bg-primary20">Résidence design</strong>
          </P>
          <P
            className="absolute -bottom-small -top-[170px] right-[300px] z-20 -rotate-[12deg] text-primary80 duration-slowest max-mobile-medium:-top-[170px] max-mobile-medium:right-[320px]  max-mobile-medium:w-[10rem] mobile-medium:whitespace-nowrap"
            textType="body"
          >
            <strong className="before:bg-primary20">Co-construction</strong>
          </P>
          <P
            className="absolute -bottom-small -top-[68px]  right-[300px] z-20 -rotate-[12deg] text-primary80 duration-slowest  "
            textType="body"
          >
            <strong className="before:bg-primary20">Médiation</strong>
          </P>
          <P
            className="absolute -bottom-small  -top-[160px] right-[180px] z-20 -rotate-[2deg]  text-primary80  duration-slowest "
            textType="body"
          >
            Cartographie
          </P>
          <P
            className="absolute -bottom-small   -top-[150px] right-[50px] z-20 -rotate-[7deg]  text-primary80  duration-slowest "
            textType="body"
          >
            Cyanotypes
          </P>
          <P
            className="absolute -bottom-small -top-[90px] right-[80px] z-20 -rotate-[14deg]   text-primary80  duration-slowest   "
            textType="body"
          >
            Découpe laser/vinyle
          </P>
          <P
            className="absolute -bottom-small -top-[120px]  right-[200px] z-20 rotate-[8deg] text-primary80 duration-slowest "
            textType="body"
          >
            <strong className="before:bg-primary20">Pédagogie</strong>
          </P>
          <P
            className="absolute -bottom-small -top-[108px]  right-[350px] z-20 -rotate-[12deg] text-primary80 duration-slowest  max-mobile-medium:-top-[30px] max-mobile-medium:right-[170px] max-mobile-medium:rotate-6"
            textType="body"
          >
            <strong className="before:bg-primary20">Lightroom</strong>
          </P>
        </motion.div>
      </div>
      <div className="max-mobile-large:-translate-y-10 max-mobile-medium:-translate-y-2">
        <motion.div
          {...mainDivVariants}
          className="relative h-[25rem] max-mobile-large:-mt-medium max-mobile-large:mb-small"
        >
          <H3
            className=" relative z-50 -rotate-12 font-['Distortion_Dos_Analogue']  text-primary1 max-mobile-large:translate-x-10 max-mobile-large:translate-y-12 "
            textType={'heading'}
          >
            DESIGNER DE <br className="mobile-large:hidden"></br> SERVICE &{' '}
            <br className="mobile-large:hidden"></br>DESIGNER{' '}
            <br className="mobile-large:hidden"></br>
            DES POLITIQUES PUBLIQUES
          </H3>
          <motion.svg
            initial={{ fillOpacity: 0 }}
            animate={{
              fillOpacity: isInView ? 1 : 0,
              transition: { duration: 0.7 }
            }}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'pointer-events-none absolute  z-10  -translate-y-1/2 overflow-visible fill-primary80 '
            )}
          >
            <path
              d="M42.9,-65.1C50.5,-61.9,48,-41.4,49.7,-26.1C51.4,-10.8,57.3,-0.9,56.8,8.7C56.3,18.4,49.5,27.7,41.3,34.1C33.1,40.5,23.5,44,12.2,52.2C0.9,60.3,-12.1,73.1,-24.7,74C-37.3,75,-49.4,64.1,-55.3,51.3C-61.3,38.4,-61.2,23.6,-62.5,9.5C-63.8,-4.6,-66.4,-18.1,-60.3,-25.9C-54.1,-33.6,-39.2,-35.8,-27.7,-37.1C-16.2,-38.5,-8.1,-39.2,4.8,-46.6C17.7,-54,35.3,-68.2,42.9,-65.1Z"
              transform="translate(100 65) scale(1.9, 1.2)"
            />
          </motion.svg>
        </motion.div>
        <div className="relative h-fit -rotate-12 max-[1298px]:-translate-y-48 max-[1298px]:translate-x-[79%] max-laptop:-translate-y-[5vw] max-laptop:translate-x-[15vw] max-tablet:-translate-x-10 max-tablet:-translate-y-2 max-mobile-large:-translate-x-10">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'pointer-events-none absolute  top-0 z-10  -translate-y-1/2 scale-150 overflow-visible fill-none stroke-primary80 stroke-[0.5px] transition-all duration-slow'
            )}
          >
            <motion.path
              {...secondStrokeVariants}
              d="M39.6,-60.2C50.6,-62.4,58,-50.1,63,-37.6C67.9,-25.2,70.3,-12.6,64.3,-3.5C58.2,5.6,43.8,11.3,34.1,15.5C24.4,19.7,19.5,22.5,14.6,25.9C9.8,29.4,4.9,33.3,-1.5,35.9C-7.8,38.5,-15.7,39.6,-20.5,36.2C-25.4,32.8,-27.2,24.8,-38.3,18C-49.3,11.2,-69.4,5.6,-77.4,-4.6C-85.5,-14.9,-81.4,-29.8,-69.5,-35C-57.6,-40.3,-38,-36,-25.1,-32.7C-12.2,-29.4,-6.1,-27.2,4.1,-34.3C14.4,-41.5,28.7,-58.1,39.6,-60.2Z"
              transform="translate(120 110) scale(1)"
            />
          </svg>
          <motion.div {...textVariants}>
            <P
              className="absolute -bottom-small -right-14 z-20 font-normal text-primary80 duration-slowest  max-mobile-large:-bottom-sub-large max-mobile-large:right-16"
              textType="sub-heading"
            >
              2021 <br className="p-small mobile-large:hidden"></br>{' '}
              <span className="max-mobile-large:hidden">- </span>
              DSAA DESIGN DE SERVICE
            </P>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
