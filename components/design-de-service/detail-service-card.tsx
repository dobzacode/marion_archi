import { cn } from '@/lib/utils';
import { DesignServiceUnitQueryResponse } from '@/sanity/lib/queries';

interface DetailServiceCardProps {
  project: DesignServiceUnitQueryResponse;
}

export default async function DetailServiceCard({ project }: DetailServiceCardProps) {
  return (
    <section
      className={cn(
        'relative  z-40  -mb-medium  w-screen overflow-hidden border-y border-secondary90 border-opacity-10 bg-secondary1 text-secondary99 '
      )}
    ></section>
  );
}
