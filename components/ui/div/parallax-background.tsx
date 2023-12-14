'use client';

import { cn, dynamicBlurDataUrl } from '@/lib/utils';
import Image from 'next/image';
import { Ref, useEffect, useState } from 'react';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

function TempComp({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [blurSrc, setBlurSrc] = useState<string>(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  );

  const parallax = useParallax({
    translateY: [-60, -10],

    speed: 0.1
  });

  useEffect(() => {
    const fetchBlurData = async () => {
      const blurImg = await dynamicBlurDataUrl(src);
      setBlurSrc(blurImg);
    };
    fetchBlurData();
  });

  return (
    <Image
      ref={parallax.ref as Ref<HTMLImageElement>}
      alt={alt}
      className={cn('', className)}
      placeholder="blur"
      blurDataURL={blurSrc}
      fill
      priority={true}
      src={src}
    ></Image>
  );
}

export default function ParallaxBackground({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <ParallaxProvider>
      <TempComp className={className} alt={alt} src={src}></TempComp>
    </ParallaxProvider>
  );
}
