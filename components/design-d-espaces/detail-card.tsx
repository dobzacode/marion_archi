import { cn } from '@/lib/utils';
import { DesignEspaceUnitQueryResponse } from '@/sanity/lib/queries';
import { EmblaOptionsType } from 'embla-carousel';

interface DetailCardProps {
  project: DesignEspaceUnitQueryResponse;
}

export default function DetailCard({ project }: DetailCardProps) {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, active: true };
  const SLIDE_COUNT = 9;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section
      className={cn(
        'relative z-20  mx-auto -mb-medium w-full overflow-hidden border-y border-primary90 border-opacity-10 bg-primary1 text-primary99 laptop:max-w-[1000px]'
      )}
    ></section>
  );
}
