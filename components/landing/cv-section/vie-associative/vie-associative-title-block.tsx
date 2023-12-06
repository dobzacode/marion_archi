'use client';

import H3 from '@/components/ui/text/h3';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function VieAssociativeTitleBlock({ className }: { className: string }) {
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
          className=" relative z-50 rotate-12 font-['Distortion_Dos_Analogue']  text-primary1 max-mobile-large:translate-x-28 max-mobile-large:translate-y-28 max-mobile-large:rotate-2"
          textType={'heading'}
        >
          VIE ASSOCIATIVE & <br className="mobile-large:hidden"></br>
          PROFESSIONNELLE ETUDIANTE
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
            d="M30.5,-54.9C37.2,-43.1,38.9,-30.8,49.2,-19.2C59.5,-7.7,78.4,3.2,83.9,16.8C89.3,30.4,81.1,46.8,68,55.2C54.9,63.7,37,64.2,21.3,65.5C5.7,66.9,-7.6,69.1,-16.5,63.2C-25.3,57.4,-29.7,43.4,-39.5,33.5C-49.3,23.5,-64.5,17.5,-73.1,6.1C-81.6,-5.3,-83.3,-22.1,-75,-31.7C-66.7,-41.4,-48.2,-43.9,-34,-52.3C-19.9,-60.7,-9.9,-75.2,1,-76.7C11.9,-78.2,23.7,-66.8,30.5,-54.9Z"
            transform="translate(80 60) scale(1.8, 1.2)"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
