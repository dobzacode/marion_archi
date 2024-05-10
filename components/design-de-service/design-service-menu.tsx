'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MenuServiceButton from './menu-service-button';

export default function DesignServiceMenu({}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [actualType, setActualType] = useState<string>('projets');

  useEffect(() => {
    searchParams.get('type')
      ? setActualType(searchParams.get('type') as string)
      : setActualType('projets');
  }, [pathname, searchParams]);

  return (
    <div className="relative left-0 z-40    -mt-large h-[12.5rem]   overflow-hidden border-opacity-10 bg-secondary99    tablet:-mt-sub-large  ">
      <nav className="slideInFromLeft h-full">
        <ul className="flex h-full flex-col  tablet:block">
          <li className="h-full">
            <MenuServiceButton
              className=" border-secondary10 border-opacity-10 "
              customHighlight=" before:h-[90%]"
              svgCss="right-[-0%] -bottom-[100%] tablet:-bottom-[200%] translate-x-[100vw]  origin-[0%_0%] max-laptop:w-[60vw] max-tablet:w-[35vw]"
              placement="top-0 right-0 "
              type="projets"
              label="PROJETS"
              path={pathname}
              isActive={actualType === 'projets'}
            />
          </li>
          <li className="h-full">
            <MenuServiceButton
              customHighlight=" before:h-[90%] before:-rotate-[2deg]"
              className="border-r  border-secondary10 border-opacity-10"
              svgCss="left-[-50%] -bottom-[200%]   origin-[0%_0%] "
              placement="top-0 left-0 "
              translation="translate-x-1/2 translate-y-[100%]"
              type="recherches"
              label="RECHERCHES"
              path={pathname}
              isActive={actualType === 'recherches'}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
