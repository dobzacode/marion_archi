'use client';

import useBetterMediaQuery from '@/components/hooks/use-better-media-query';
import H3 from '@/components/ui/text/h3';
import P from '@/components/ui/text/p';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DesignEspaceTitleBlock({ className }: { className: string }) {
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
    : {
        initial: { pathLength: 0, pathOffset: 0.3 },
        animate: {
          pathLength: isInView ? 1 : 0,
          pathOffset: isInView ? 0 : 0.3,
          transition: { duration: 2, ease: 'easeOut', delay: 0.5 }
        }
      };

  const secondStrokeVariants = !isTablet
    ? {
        initial: { pathLength: 0, pathOffset: 0.9 },
        animate: {
          pathLength: isInView ? 1 : 0,
          pathOffset: isInView ? 0 : 0.9,
          transition: { duration: 2, ease: 'easeOut', delay: 0.5 }
        }
      }
    : {
        initial: { pathLength: 0, pathOffset: 0.9 },
        animate: {
          pathLength: isInView ? 1 : 0,
          pathOffset: isInView ? 0 : 0.9,
          transition: { duration: 2, ease: 'easeOut', delay: 0.5 }
        }
      };

  const textVariants = !isTablet
    ? {
        initial: { opacity: 0 },
        animate: { opacity: isInView ? 1 : 0, transition: { duration: 1, delay: 2.5 } }
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: isInView ? 1 : 0, transition: { duration: 1, delay: 2.5 } }
      };

  const mainDivVariants = !isTablet
    ? {
        initial: { x: '-50%' },
        animate: { x: isInView ? 0 : '-50%', transition: { duration: 0.5 } }
      }
    : {
        initial: { x: '-50%' },
        animate: { x: isInView ? 0 : '-50%', transition: { duration: 0.5 } }
      };

  return (
    <div ref={ref} className={className}>
      <div className="relative h-fit  max-[1298px]:-translate-x-[50%] max-[1298px]:-translate-y-16 max-laptop:-translate-y-[10vw] max-laptop:translate-x-[-15vw] max-tablet:-translate-y-16  max-tablet:translate-x-10 max-mobile-large:w-[25rem] max-mobile-large:-translate-y-10 max-mobile-large:translate-x-32">
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'pointer-events-none absolute top-0 -z-10 -translate-y-1/2  -rotate-12 scale-150 overflow-visible fill-none stroke-tertiary80 stroke-[0.5px] transition-all duration-slow'
          )}
        >
          <motion.path
            {...strokeVariants}
            d="M28.2,-59.8C31.2,-47.1,24.7,-28.8,25.1,-17.9C25.5,-7,32.9,-3.5,37.1,2.5C41.4,8.4,42.7,16.9,40.2,24.2C37.6,31.4,31.4,37.5,24.1,43.4C16.8,49.4,8.4,55.1,1.9,51.9C-4.6,48.6,-9.2,36.3,-15.5,29.8C-21.9,23.3,-29.9,22.6,-41,18.6C-52.1,14.6,-66.3,7.3,-73.5,-4.2C-80.8,-15.6,-81,-31.3,-70,-35.6C-59.1,-39.8,-37,-32.8,-23.4,-39.4C-9.9,-46.1,-5,-66.4,3.8,-73C12.6,-79.6,25.2,-72.5,28.2,-59.8Z"
            transform="translate(100 80) scale(1.2, 1)"
          />
        </motion.svg>

        <motion.div {...textVariants}>
          <P
            className="absolute -top-[220px] right-[145px] z-20 rotate-[12deg]  text-tertiary80  duration-slowest "
            textType="body"
          >
            Rhinocéros
          </P>
          <P
            className="absolute -bottom-small -top-[170px] right-[170px] z-20 rotate-[17deg]    text-tertiary80  duration-slowest "
            textType="body"
          >
            <strong className="before:bg-tertiary20">AutoCAD</strong>
          </P>
          <P
            className="absolute -bottom-small  -top-[120px] right-[190px] z-20 rotate-[4deg]  text-tertiary80  duration-slowest "
            textType="body"
          >
            <strong className="before:bg-tertiary20">Sketchup</strong>
          </P>
          <P
            className="absolute -bottom-small  -top-[120px] right-[300px] z-20 -rotate-[12deg]  text-tertiary80  duration-slowest "
            textType="body"
          >
            <strong className="before:bg-tertiary20">Indesign</strong>
          </P>
          <P
            className="absolute -bottom-small -top-[68px]  right-[350px] z-20 -rotate-[12deg] text-tertiary80 duration-slowest  max-mobile-medium:-top-[70px]  max-mobile-medium:right-[320px] max-mobile-medium:rotate-[10deg]"
            textType="body"
          >
            <strong className="before:bg-tertiary20">Photoshop</strong>
          </P>
          <P
            className="absolute -bottom-small  -top-[75px] right-[250px] z-20 rotate-[12deg]  text-tertiary80  duration-slowest "
            textType="body"
          >
            Mac Os
          </P>
          <P
            className="absolute -bottom-small   -top-[75px] right-[140px] z-20 rotate-[7deg]  text-tertiary80  duration-slowest "
            textType="body"
          >
            Flamingo
          </P>
          <P
            className="absolute -bottom-small -top-[30px] right-[80px] z-20 -rotate-[7deg]   text-tertiary80  duration-slowest  max-[1298px]:right-[190px] "
            textType="body"
          >
            Microsoft
          </P>
        </motion.div>
      </div>
      <motion.div
        {...mainDivVariants}
        className="relative  h-[15.625rem]  max-mobile-large:-mt-medium max-mobile-large:mb-small"
      >
        <H3
          className=" relative z-50 max-w-[16ch] -rotate-12 font-['Distortion_Dos_Analogue']  text-tertiary1 max-mobile-large:translate-x-28 max-mobile-large:translate-y-28 max-mobile-large:rotate-2"
          textType={'heading'}
        >
          ARCHITECTE D&apos;INTERIEUR ET DESIGNER <br className="mobile-large:hidden"></br>
          D&apos;ESPACES
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
            'pointer-events-none absolute  z-10  -translate-y-1/2 overflow-visible fill-tertiary80 '
          )}
        >
          <path
            d="M24.3,-37.5C37,-34.8,56.4,-39.3,63.7,-34.3C70.9,-29.2,66,-14.6,64.9,-0.6C63.9,13.4,66.9,26.9,61.2,34.6C55.4,42.3,41.1,44.3,29.4,44.6C17.8,45,8.9,43.7,-2.3,47.6C-13.4,51.5,-26.8,60.6,-32.6,56.9C-38.4,53.2,-36.6,36.6,-40.2,25C-43.8,13.4,-52.8,6.7,-56.7,-2.2C-60.5,-11.1,-59.2,-22.3,-55.8,-34.2C-52.4,-46.2,-46.9,-59,-37.3,-63.5C-27.7,-67.9,-13.8,-64,-4,-57C5.8,-50.1,11.7,-40.2,24.3,-37.5Z"
            transform="translate(80 100) scale(1.7, 1.2)"
          />
        </motion.svg>
      </motion.div>
      <div className="relative h-fit -rotate-12 max-[1298px]:-translate-y-48 max-[1298px]:translate-x-[79%] max-laptop:-translate-y-[2vw] max-laptop:translate-x-[15vw] max-tablet:translate-x-10 max-tablet:translate-y-5 max-mobile-large:translate-x-7">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'pointer-events-none absolute  top-0 z-10  -translate-y-1/2 scale-150 overflow-visible fill-none stroke-tertiary80 stroke-[0.5px] transition-all duration-slow'
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
            className="absolute -bottom-small right-0 z-20 font-normal text-tertiary80 duration-slowest  max-mobile-large:-bottom-sub-large max-mobile-large:right-16"
            textType="sub-heading"
          >
            2018 <br className="p-small mobile-large:hidden"></br>{' '}
            <span className="max-mobile-large:hidden">-</span> BTS DESIGN ESPACE
          </P>
        </motion.div>
      </div>
    </div>
  );
}
