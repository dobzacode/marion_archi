import Link, { LinkProps } from 'next/link';

import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { FC } from 'react';
import { textVariants } from '../text/h1';
import H3 from '../text/h3';

interface LogoProps extends LinkProps, VariantProps<typeof textVariants> {
  className?: string;
  children?: React.ReactNode;
  src?: string;
  customSetter?: Function;
}

const Logo: FC<LogoProps> = ({
  className,
  children,
  textType,
  intent,
  hover,
  href = '/',
  src,
  customSetter,
  ...props
}) => {
  if (src)
    return (
      <Link href={href} {...props}>
        <Image
          className={className}
          placeholder="blur"
          blurDataURL={src}
          alt={`Abject act logo`}
          src={src}
          width={40}
          height={40}
          sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
        ></Image>
      </Link>
    );

  return (
    <Link href={href} {...props}>
      <H3
        className={cn(
          textVariants({
            className,
            intent,
            textType,
            hover
          })
        )}
      >
        {children}
      </H3>
    </Link>
  );
};

export default Logo;
