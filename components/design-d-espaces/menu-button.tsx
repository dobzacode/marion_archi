'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import useBetterMediaQuery from '../hooks/use-better-media-query';

interface MenuButtonProps {
  type: string;
  label: string;
  path: string;
  isActive: boolean;
  placement: string;
  svgCss: string;
  customScale?: string;
  translation?: string;
  className?: string;
  customHighlight?: string;
}

export default function MenuButton({
  type,
  label,
  path,
  isActive,
  placement,
  svgCss,
  customScale = 'scale-x-[500%] scale-y-[600%]',
  translation = `translate-x-1/2 translate-y-[100%]`,
  customHighlight,
  className
}: MenuButtonProps) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`${path}?type=${type}`);
  };

  const isTablet = useBetterMediaQuery('(max-width: 768px)');

  return !isTablet ? (
    <button
      onClick={handleButtonClick}
      className={cn(
        'py-sh-full group relative flex h-full w-full items-center justify-center border-primary80 duration-slow  tablet:absolute tablet:h-1/2  tablet:w-1/2  tablet:py-0  ',
        placement,
        isActive && 'hover:z-10',
        !isActive && ' backdrop-grayscale',
        !isActive && 'z-40',
        className
      )}
    >
      <div className=" body mobile-large:sub-heading  peer relative z-20 px-small text-primary80 duration-medium group-hover:z-50 group-hover:scale-110">
        <strong
          className={cn(
            'text-white duration-[2s] before:rotate-1 before:scale-x-0 before:bg-primary20 before:bg-blend-difference before:duration-slow ',
            customHighlight,
            isActive
              ? 'z-40 text-primary90 before:scale-x-100 before:bg-primary1 before:duration-[2s]'
              : ''
          )}
        >
          {label}
        </strong>
      </div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'pointer-events-none absolute z-10  w-[65vw] overflow-visible fill-primary20  stroke-[0.5px] duration-[2s] laptop:w-[45vw] min-[1300px]:w-[35vw] ',
          svgCss,
          isActive ? translation : 'grayscale',
          isActive && customScale,
          isActive && 'z-10'
        )}
      >
        <path
          className=""
          d="M27.2,-49.1C32.9,-43.9,33.4,-31.7,41.2,-22.4C48.9,-13.1,63.7,-6.5,65.1,0.8C66.5,8.1,54.3,16.2,48.9,29.5C43.4,42.7,44.7,61.2,37.7,68.5C30.6,75.8,15.3,72.1,3.7,65.7C-7.9,59.3,-15.9,50.3,-21.7,42.3C-27.6,34.3,-31.4,27.3,-37.9,20.4C-44.4,13.5,-53.6,6.8,-56.7,-1.8C-59.9,-10.4,-57,-20.8,-49.6,-26.1C-42.1,-31.3,-30.1,-31.4,-21.1,-34.7C-12.1,-38,-6,-44.5,2.4,-48.6C10.8,-52.7,21.5,-54.3,27.2,-49.1Z"
          transform="translate(0 -2) "
        />
      </svg>
    </button>
  ) : (
    <button
      onClick={handleButtonClick}
      className={cn(
        'group  relative flex h-full w-full items-center justify-center border-primary80 duration-slow  tablet:absolute tablet:h-1/2  tablet:w-1/2  tablet:py-0  ',
        placement,
        isActive && 'hover:z-10',
        !isActive && ' backdrop-grayscale',
        !isActive && 'z-40',
        className
      )}
    >
      <div className="mobile-large:sub-heading  body peer  relative z-20 px-small text-primary80 duration-medium group-hover:scale-110 ">
        <strong
          className={cn(
            'text-white duration-[2s] before:rotate-1 before:scale-x-0  before:bg-blend-difference before:duration-slow ',
            customHighlight,
            isActive
              ? 'z-40 text-primary90 before:scale-x-100 before:bg-primary1 before:duration-[2s]'
              : ''
          )}
        >
          {label}
        </strong>
      </div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'pointer-events-none absolute z-10  w-[65vw] overflow-visible fill-primary20  stroke-[0.5px] duration-[2s] laptop:w-[45vw] min-[1300px]:w-[35vw] ',
          svgCss,
          isActive ? translation : 'grayscale',
          isActive && customScale,
          isActive && 'z-10'
        )}
      >
        <path
          className=""
          d="M27.2,-49.1C32.9,-43.9,33.4,-31.7,41.2,-22.4C48.9,-13.1,63.7,-6.5,65.1,0.8C66.5,8.1,54.3,16.2,48.9,29.5C43.4,42.7,44.7,61.2,37.7,68.5C30.6,75.8,15.3,72.1,3.7,65.7C-7.9,59.3,-15.9,50.3,-21.7,42.3C-27.6,34.3,-31.4,27.3,-37.9,20.4C-44.4,13.5,-53.6,6.8,-56.7,-1.8C-59.9,-10.4,-57,-20.8,-49.6,-26.1C-42.1,-31.3,-30.1,-31.4,-21.1,-34.7C-12.1,-38,-6,-44.5,2.4,-48.6C10.8,-52.7,21.5,-54.3,27.2,-49.1Z"
          transform="translate(0 -2) "
        />
      </svg>
    </button>
  );
}
