'use client';

import H3 from '@/components/ui/text/h3';
import P from '@/components/ui/text/p';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BaroudeuseTitleBlock({ className }: { className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ x: '-50%' }}
        animate={{ x: isInView ? 0 : '-50%', transition: { duration: 0.5 } }}
        className="relative h-[25rem] max-mobile-large:-mt-medium max-mobile-large:mb-small"
      >
        <H3
          className=" relative z-50 -rotate-12 font-['Distortion_Dos_Analogue']  text-primary1 "
          textType={'heading'}
        >
          BAROUDEUSE
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
            d="M33.1,-46.9C44.2,-44.4,55.3,-37.4,65.7,-26.5C76,-15.7,85.5,-1,80.7,9.5C75.9,20,56.9,26.4,42.8,30.2C28.8,33.9,19.7,35.1,10,41.1C0.4,47.1,-9.9,57.9,-22.1,60.9C-34.4,63.9,-48.6,59.2,-56.3,49.3C-64.1,39.5,-65.3,24.5,-63.1,11.7C-60.8,-1.1,-55.1,-11.8,-49.8,-22.4C-44.4,-33,-39.5,-43.4,-31.3,-47.2C-23.1,-51.1,-11.5,-48.3,-0.3,-47.9C11,-47.5,22,-49.4,33.1,-46.9Z"
            transform="translate(50 100) scale(1.3, 1.2)"
          />
        </motion.svg>
      </motion.div>
      <div className="relative h-fit ">
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'pointer-events-none absolute top-0 -z-10 -translate-y-1/2 -rotate-12  scale-150 overflow-visible  fill-primary1 stroke-primary80 stroke-[0.5px] transition-all duration-slow'
          )}
        >
          <motion.path
            initial={{ pathLength: 0, pathOffset: 0.3 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              pathOffset: isInView ? 0 : 0.3,
              transition: { duration: 2, ease: 'easeOut', delay: 0.5 }
            }}
            d="M29.1,-45.9C39.9,-38.3,52.3,-33.9,58.9,-25.2C65.6,-16.5,66.4,-3.4,61.5,6.6C56.5,16.5,45.7,23.3,36.7,29.3C27.6,35.2,20.5,40.2,11.4,46.2C2.4,52.2,-8.5,59.2,-16.1,56.3C-23.6,53.4,-27.8,40.6,-37.4,31.4C-47,22.2,-62.1,16.6,-64.7,8.4C-67.3,0.1,-57.4,-10.8,-49.6,-20.4C-41.7,-29.9,-35.7,-38.1,-27.8,-47C-19.9,-55.9,-9.9,-65.4,-0.4,-64.8C9.1,-64.2,18.3,-53.5,29.1,-45.9Z"
            transform="translate(100 80) scale(1, 0.7)"
          />
        </motion.svg>

        <motion.div
          className="translate-y-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0, transition: { duration: 1, delay: 2.5 } }}
        >
          <P
            className="absolute -top-[220px] right-[145px] z-20 rotate-[12deg]  text-primary80  duration-slowest "
            textType="body"
          >
            Rhinocéros
          </P>
          <P
            className="absolute -bottom-small -top-[170px] right-[170px] z-20 rotate-[17deg]    text-primary80  duration-slowest "
            textType="body"
          >
            <strong className="before:bg-primary20">rétro - planning</strong>
          </P>
          <P
            className="absolute -bottom-small  -top-[120px] right-[190px] z-20 rotate-[4deg]  text-primary80  duration-slowest "
            textType="body"
          >
            <strong className="before:bg-primary20">Autonome</strong>
          </P>

          <P
            className="absolute -bottom-small  -top-[100px] right-[250px] z-20 rotate-[12deg]  text-primary80  duration-slowest "
            textType="body"
          >
            Débrouillarde
          </P>
          <P
            className="absolute -bottom-small   -top-[200px] right-[50px] z-20 -rotate-[7deg]  text-primary80  duration-slowest "
            textType="body"
          >
            Anglais
          </P>
        </motion.div>
      </div>
      <div className="relative h-fit   ">
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'pointer-events-none absolute top-0 -z-20 -translate-y-1/2 -rotate-12 scale-150 overflow-visible  fill-none stroke-primary80 stroke-[0.5px] transition-all duration-slow max-tablet:-translate-x-[150px] max-tablet:-translate-y-[400px] max-tablet:pt-large'
          )}
        >
          <motion.path
            initial={{ pathLength: 0, pathOffset: 0.3 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              pathOffset: isInView ? 0 : 0.3,
              transition: { duration: 2, ease: 'easeOut', delay: 0.5 }
            }}
            d="M22.7,-33.5C31.8,-29.5,43.2,-27.2,49.3,-20.6C55.4,-13.9,56.2,-2.9,53.5,6.9C50.9,16.7,44.9,25.2,39,36.1C33.1,47,27.4,60.4,19,61.3C10.6,62.3,-0.5,50.8,-16.4,49.2C-32.4,47.6,-53.2,55.9,-64.8,51.2C-76.5,46.6,-79.1,29.2,-77.7,13.5C-76.4,-2.2,-71.2,-16.2,-62.7,-26C-54.2,-35.9,-42.4,-41.7,-31.4,-44.9C-20.4,-48,-10.2,-48.4,-1.7,-45.8C6.8,-43.2,13.6,-37.5,22.7,-33.5Z"
            transform="translate(140 30) scale(1, 0.6)"
          />
        </motion.svg>

        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0, transition: { duration: 1, delay: 2.5 } }}
        >
          <P
            className="absolute -top-[250px] right-[0px] z-20 -rotate-[12deg] text-primary80 duration-slowest max-tablet:-translate-x-[300px]  max-tablet:-translate-y-[200px] max-tablet:pt-[5rem]"
            textType="body"
          >
            2022<br></br> VOYAGE
          </P>
        </motion.div>
      </div>
      <div className="relative h-fit  max-tablet:-translate-y-[250px] max-tablet:translate-x-[50px] max-tablet:-rotate-90">
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'pointer-events-none absolute top-0 -z-20  -translate-y-1/2 -rotate-[34deg] scale-150 overflow-visible fill-none stroke-primary80 stroke-[0.5px] transition-all duration-slow max-tablet:-translate-x-[130px] max-tablet:-translate-y-[150px] max-tablet:-rotate-[0deg]'
          )}
        >
          <motion.path
            initial={{ pathLength: 0, pathOffset: 0.7 }}
            animate={{
              pathLength: isInView ? 1 : 0,
              pathOffset: isInView ? 0.45 : 0.7,
              transition: { duration: 2, ease: 'easeOut', delay: 0.5 }
            }}
            d="M37.6,-62.4C43.4,-54.7,39.2,-35.4,45.9,-20.9C52.6,-6.5,70.1,3.1,69.5,10.3C69,17.5,50.3,22.4,38.1,28.8C26,35.3,20.5,43.2,11.2,52.4C1.9,61.6,-11.2,72.1,-26.1,74.4C-41,76.6,-57.8,70.6,-62,58C-66.3,45.4,-58.2,26.3,-57.2,10.3C-56.2,-5.7,-62.5,-18.5,-57.7,-25.3C-52.9,-32,-37.1,-32.6,-25.7,-37.7C-14.2,-42.8,-7.1,-52.4,4.4,-59.2C15.9,-66,31.7,-70.1,37.6,-62.4Z"
            transform="translate(70 30) scale(1, 1.2)"
          />
        </motion.svg>
        <motion.div
          className="translate-y-[100px] max-tablet:-translate-x-[300px] max-tablet:rotate-[60deg]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0, transition: { duration: 1, delay: 2.5 } }}
        >
          <P
            className="delay- absolute -top-[400px] right-[480px] z-20  rotate-[12deg]  text-primary80 duration-slowest  "
            textType="body"
          >
            <strong className="before:bg-primary20">Pragues</strong>
          </P>
          <P
            className="absolute -bottom-small -top-[300px] right-[520px] z-20 rotate-[10deg]  text-primary80  duration-slowest  max-tablet:right-[550px] "
            textType="body"
          >
            <strong className="before:bg-primary20">Vienne</strong>
          </P>
          <P
            className="absolute -bottom-small  -top-[230px] right-[520px] z-20 rotate-[4deg]  text-primary80  delay-[300ms] duration-slowest "
            textType="body"
          >
            <strong className="before:bg-primary20">Bratislava</strong>
          </P>

          <P
            className="absolute -bottom-small  -top-[140px] right-[500px] z-20 -rotate-[4deg]  text-primary80  delay-[300ms] duration-slowest "
            textType="body"
          >
            <strong className="before:bg-primary20">Budapest</strong>
          </P>
          <P
            className="absolute -bottom-small  -top-[10px] right-[450px] z-20 -rotate-[4deg] text-primary80 delay-[300ms]  duration-slowest max-tablet:-top-[60px] "
            textType="body"
          >
            <strong className="before:bg-primary20">Croatie</strong>
          </P>
          <P
            className="absolute -bottom-small  right-[250px] top-[50px] z-20 rotate-[15deg] whitespace-nowrap text-primary80  delay-[300ms]  duration-slowest max-tablet:rotate-[5deg] "
            textType="body"
          >
            <strong className="before:bg-primary20">Ile de la réunion</strong>
          </P>
        </motion.div>
      </div>
    </div>
  );
}
