'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import P from '../ui/text/p';

export default function DesignMenu({}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [actualType, setActualType] = useState<string | null>(null);

  useEffect(() => {
    setActualType(searchParams.get('type'));
  }, [pathname, searchParams]);

  return (
    <div className="absolute left-0 h-1/2 w-full overflow-hidden border-y-2 border-primary80 bg-primary1">
      <nav>
        <ul>
          <li>
            <button
              className={cn(
                'absolute left-0 top-0  z-30 flex h-1/2 w-1/2 items-center justify-center duration-slow',
                actualType === 'archi_interieurs' || !searchParams.get('type')
                  ? 'grayscale-0'
                  : 'grayscale'
              )}
              onClick={() => {
                router.push(`${pathname}?type=archi_interieurs`);
              }}
            >
              <P className="heading--sub-large relative z-20 font-['Distortion_Dos_Analogue'] text-primary80 duration-0 group-hover:z-20">
                ARCHITECTURE INTERIEURS
              </P>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  'pointer-events-none absolute z-10 w-[70rem] translate-x-1/2 translate-y-1/2 overflow-visible  fill-primary20  stroke-[0.5px] duration-slow '
                )}
              >
                <path
                  className=""
                  d="M27.2,-49.1C32.9,-43.9,33.4,-31.7,41.2,-22.4C48.9,-13.1,63.7,-6.5,65.1,0.8C66.5,8.1,54.3,16.2,48.9,29.5C43.4,42.7,44.7,61.2,37.7,68.5C30.6,75.8,15.3,72.1,3.7,65.7C-7.9,59.3,-15.9,50.3,-21.7,42.3C-27.6,34.3,-31.4,27.3,-37.9,20.4C-44.4,13.5,-53.6,6.8,-56.7,-1.8C-59.9,-10.4,-57,-20.8,-49.6,-26.1C-42.1,-31.3,-30.1,-31.4,-21.1,-34.7C-12.1,-38,-6,-44.5,2.4,-48.6C10.8,-52.7,21.5,-54.3,27.2,-49.1Z"
                  transform="translate(0 0) "
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              className={cn(
                'absolute right-0 top-0 z-30 flex h-1/2 w-1/2 items-center justify-center grayscale  duration-slow',
                actualType === 'archi_retail' && 'grayscale-0'
              )}
              onClick={() => {
                router.push(`${pathname}?type=archi_retail`);
              }}
            >
              {' '}
              <P className="heading--sub-large relative z-20 font-['Distortion_Dos_Analogue'] text-primary80 duration-0 group-hover:z-20">
                ARCHITECTURE RETAIL
              </P>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  'pointer-events-none absolute z-10 w-[70rem] translate-x-1/2 translate-y-1/2 overflow-visible   fill-primary20 duration-slow '
                )}
              >
                <path
                  d="M28.4,-47.8C35,-45.4,37.3,-34.1,48,-24.7C58.7,-15.2,77.8,-7.6,80.1,1.3C82.4,10.3,67.9,20.5,54.7,25.7C41.5,30.8,29.7,30.9,20.8,33C11.9,35.2,6,39.4,1.7,36.3C-2.5,33.3,-4.9,23,-12.4,20.1C-19.8,17.1,-32.2,21.5,-43.7,19.3C-55.1,17.2,-65.4,8.6,-63.5,1.1C-61.7,-6.4,-47.5,-12.9,-41.3,-23.9C-35,-35,-36.7,-50.6,-31.1,-53.6C-25.5,-56.6,-12.8,-46.9,-0.9,-45.3C10.9,-43.7,21.8,-50.2,28.4,-47.8Z"
                  transform="translate(0 -10) "
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              className={cn(
                'absolute bottom-0 right-0  z-10 flex h-1/2 w-1/2 items-center justify-center grayscale  duration-slow',
                actualType === 'archi' && 'grayscale-0'
              )}
              onClick={() => {
                router.push(`${pathname}?type=archi`);
              }}
            >
              {' '}
              <P className="heading--sub-large relative z-30 font-['Distortion_Dos_Analogue'] text-primary80 duration-0 group-hover:z-20">
                ARCHITECTURE
              </P>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  'pointer-events-none absolute z-10 w-[70rem] translate-x-1/2 translate-y-1/2 overflow-visible   fill-primary20 duration-slow '
                )}
              >
                <path
                  d="M36.2,-70.6C40.5,-60.3,33.1,-37.6,37.7,-23.7C42.4,-9.9,59.2,-4.9,67.5,4.8C75.9,14.6,75.8,29.1,68.8,39C61.9,48.9,48,54.1,35.4,51.5C22.8,48.8,11.4,38.4,3,33.2C-5.5,28.1,-10.9,28.3,-15.4,26.2C-19.8,24.1,-23.3,19.8,-25.4,15C-27.6,10.3,-28.5,5.1,-36,-4.3C-43.4,-13.8,-57.5,-27.5,-55.1,-32C-52.8,-36.4,-34.1,-31.6,-22.2,-37.4C-10.3,-43.2,-5.1,-59.8,5.4,-69.2C16,-78.6,32,-80.8,36.2,-70.6Z"
                  transform="translate(0 0) "
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              className={cn(
                'absolute bottom-0 left-0  z-40  flex h-1/2 w-1/2 items-center justify-center grayscale  duration-slow',
                actualType === 'archi_tertiaire' && 'grayscale-0'
              )}
              onClick={() => {
                router.push(`${pathname}?type=archi_tertiaire`);
              }}
            >
              {' '}
              <P className="heading--sub-large relative z-20 font-['Distortion_Dos_Analogue'] text-primary80 duration-0 group-hover:z-20 ">
                ARCHITECTURE ESPACES DE TRAVAIL TERTIARES
              </P>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  'pointer-events-none absolute z-10 w-[70rem] translate-x-1/2 translate-y-1/2 overflow-visible   fill-primary20 duration-slow '
                )}
              >
                <path
                  d="M23.5,-43.4C30.2,-36.8,35.3,-30.1,40.6,-22.8C45.8,-15.6,51.2,-7.8,50.6,-0.3C50,7.1,43.4,14.2,42,28C40.5,41.8,44.2,62.3,38,69.3C31.9,76.3,15.9,69.8,-0.1,70C-16.2,70.2,-32.4,77.3,-44.2,73.5C-56,69.8,-63.3,55.3,-61.3,41.2C-59.2,27.2,-47.9,13.6,-39.4,4.9C-31,-3.8,-25.4,-7.7,-21.2,-10.9C-17,-14.1,-14.1,-16.7,-10.8,-25.3C-7.4,-33.9,-3.7,-48.5,2.3,-52.5C8.4,-56.6,16.8,-50.1,23.5,-43.4Z"
                  transform="translate(0 0) "
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
