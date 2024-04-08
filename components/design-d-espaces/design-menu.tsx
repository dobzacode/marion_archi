'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MenuButton from './menu-button';

export default function DesignMenu({}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [actualType, setActualType] = useState<string>('architecture_interieurs');

  useEffect(() => {
    searchParams.get('type')
      ? setActualType(searchParams.get('type') as string)
      : setActualType('architecture_interieurs');
  }, [pathname, searchParams]);

  return (
    <div className="relative left-0  z-40 -mt-large h-[40rem]  w-full overflow-hidden border-opacity-10 bg-primary99   tablet:-mt-sub-large   ">
      <nav className="slideInFromLeft h-full">
        <ul className="flex h-full flex-col tablet:block">
          <li className="h-full">
            <MenuButton
              customHighlight="max-mobile-medium:before:h-[90%] max-mobile-medium:before:left-[12px] before:h-[90%]"
              className="border-b border-r border-primary10 border-opacity-10 mobile-large:whitespace-nowrap "
              svgCss="left-0 -top-full translate-x-[-20vw] origin-[0%_0%]"
              placement="left-0 top-0"
              translation="translate-x-1/2 translate-y-[20%] max-laptop:translate-y-[30%] max-laptop:translate-x-[10%]"
              type="architecture_interieurs"
              label="ARCHITECTURE INTERIEURS"
              customScale="scale-x-[250%] scale-y-[300%]"
              path={pathname}
              isActive={actualType === 'architecture_interieurs'}
            />
          </li>
          <li className="h-full">
            <MenuButton
              customHighlight="before:rotate-[-1deg]  before:h-[90%]"
              className="border-b  border-primary10 border-opacity-10"
              svgCss="-right-[100%] -top-full translate-x-[100vw] origin-[0%_0%] tablet:w-[35vw] w-[90vw]"
              translation="-translate-x-1/2 translate-y-[100%]"
              placement="right-0 top-0"
              customScale="scale-x-[400%] scale-y-[300%]"
              type="architecture_retail"
              label="ARCHITECTURE RETAIL"
              path={pathname}
              isActive={actualType === 'architecture_retail'}
            />
          </li>
          <li className="h-full">
            <MenuButton
              className=" border-primary10 border-opacity-10"
              customHighlight=" before:h-[90%]"
              svgCss="right-[-0%] -bottom-[200%] translate-x-[100vw]  origin-[0%_0%] max-laptop:w-[60vw] max-tablet:w-[35vw]"
              placement="right-0 bottom-0"
              type="architecture"
              label="ARCHITECTURE"
              path={pathname}
              isActive={actualType === 'architecture'}
            />
          </li>
          <li className="h-full">
            <MenuButton
              customHighlight=" before:h-[90%] before:w-[90vw] min-[480px]:before:w-[90vw] min-[400px]:before:w-[78vw] before:min-[645px]:w-[100%] tablet:before:w-[42vw] min-[1300px]:before:w-[40vw] before:rotate-[-2deg] max-[1300px]:before:left-[10px] min-[1300px]:before:left-[16px]"
              className="border-r  border-primary10 border-opacity-10"
              svgCss="left-[-50%] -bottom-[200%]   origin-[0%_0%] "
              placement="left-0 bottom-0"
              translation="translate-x-1/2 translate-y-[100%]"
              type="architecture_tertiaire"
              label="ARCHITECTURE ESPACES DE TRAVAIL TERTIAIRES"
              path={pathname}
              isActive={actualType === 'architecture_tertiaire'}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
