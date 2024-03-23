import Image from 'next/image';

export default function Character() {
  return (
    <Image
      className="absolute bottom-0 right-0 "
      src="/thinking-with-bubble.png"
      width="300"
      height="200"
      alt="Personnage en train de réfléchir"
    ></Image>
  );
}
