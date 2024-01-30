import Link, { LinkProps } from 'next/link';

import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { H1, textVariants } from '../text/h1';
import P from '../text/p';

interface LogoProps extends LinkProps, VariantProps<typeof textVariants> {
  className?: string;
  children?: React.ReactNode;
  src?: string;
  customSetter?: Function;
  linkVisibility?: string;
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
  linkVisibility,
  ...props
}) => {
  const pathname = usePathname();

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

  if (pathname === '/') {
    return (
      <Link className={cn(linkVisibility)} href={href} {...props}>
        <H1
          className={cn(
            textVariants({
              intent,
              textType,
              hover,
              className,
              
            })
          )}
        >
          {children}
        </H1>
      </Link>
    );
  }

  return (
    <Link className={cn(linkVisibility)} href={href} {...props}>
      <P
        className={cn(
          textVariants({
            intent,
            textType,
            hover,
            className
          })
        )}
      >
        {children}
      </P>
    </Link>
  );
};

export default Logo;
