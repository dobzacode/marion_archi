import { cn } from '@/lib/utils';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

export default function ContactInformation({
  openInformation,
  setOpenInformation
}: {
  openInformation: boolean;
  setOpenInformation: (open: boolean) => void;
}) {
  return (
    <div
      className={cn(
        'absolute right-0 top-0 z-[60] flex h-full w-full items-center justify-center bg-tertiary90 p-medium duration-medium ease-in-out',
        !openInformation && 'translate-x-[70vh] '
      )}
    >
      <button className="absolute right-4 top-4" onClick={() => setOpenInformation(false)}>
        <Icon path={mdiClose} size={2} color={'white'}></Icon>
      </button>
      <div className="flex">
        <p className="body w-1/2 text-tertiary1">
          Tu as aussi la possibilité de me contacter au 0606060606 ou à l&apos;adresse mail
          test@test.fr
        </p>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
