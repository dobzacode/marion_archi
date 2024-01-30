'use client';

import Logo from '@/components/ui/branding/logo';

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-green-400">
      <Logo
        href="/"
        className=" flex scale-[400%] items-start  pt-medium text-heading-sub-extra-large font-thin leading-[60px]"
        intent={'black'}
        textType="heading--large"
      >
        <span>m</span>
        <span className="flex origin-top-left scale-[44%] flex-col gap-[-2px] pt-8 font-light">
          ton
          <br />
          archi
        </span>
      </Logo>
    </div>
  );
}
