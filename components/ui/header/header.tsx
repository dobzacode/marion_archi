import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import MobileNav from './mobile-nav';
import Nav from './nav';

const sectionVariants = cva('', {
  variants: {
    size: {
      small: 'h-large',
      medium: 'h-sub-extra-large',
      large: 'h-extra-large'
    },
    intent: {
      neutral: 'bg-neutral90 text-neutral1 ',
      pastelPrimary:
        'bg-primary40 text-primary1 border-primary80 dark:border-primary1  dark:text-primary1',
      pastelSecondary: 'bg-secondary40 text-secondary1 border-secondary80',
      pastelTertiary: 'bg-tertiary40 text-tertiary1 border-tertiary80',
      pastelSuccess: 'bg-success40 text-success1 border-success80',
      pastelError: 'bg-error40 text-error1 border-error80 dark:border-error1  dark:text-error1',
      pastelWarning: 'bg-warning40 text-warning1 border-warning 80',
      pastelInfo: 'bg-info40 text-info1 border-info80',
      pastelNeutral: 'bg-neutral40 text-neutral1 border-neutral80'
    }
  }
});
interface HeaderProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof sectionVariants> {
  children?: React.ReactNode;
  textColor:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | null
    | undefined;
}

function Header({ children, className, size, intent, textColor, ...props }: HeaderProps) {
  return (
    <header className={cn(sectionVariants({ className, size, intent }))} {...props}>
      {children}
      <Nav
        linkSize="small"
        intent={textColor}
        className="slideInFromTop hidden w-full items-center justify-between gap-sub-large bg-primary1 px-small opacity-0 animation-delay-[1.6s] max-laptop-large:pl-large laptop:flex laptop-large:gap-large laptop-large:px-large"
      ></Nav>
      <MobileNav
        linkSize="small"
        intent={textColor}
        size={size}
        className="slideInFromTop relative z-50 flex w-full items-center justify-between bg-primary1 px-small animation-delay-[1.6s] mobile-large:gap-large mobile-large:px-medium laptop:hidden"
      ></MobileNav>
    </header>
  );
}

export { Header, sectionVariants };
