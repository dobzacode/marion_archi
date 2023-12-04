import { H1 } from '../ui/text/h1';
import H2 from '../ui/text/h2';

export default function HeroSection() {
  return (
    <section className="flex w-full justify-between px-small py-extra-large">
      <div className="relative w-1/2">
        <svg
          className="z-10 max-h-[40rem] w-full overflow-visible fill-primary20 transition-all duration-slow group-hover:fill-primary20"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.9,-61.9C49.2,-56.8,61.4,-49.7,68.7,-39C75.9,-28.4,78,-14.2,72.5,-3.2C67,7.8,53.9,15.7,47.4,27.6C40.9,39.6,41.1,55.6,34.4,58C27.6,60.4,13.8,49.1,-0.4,49.8C-14.6,50.5,-29.2,63.1,-33.6,59.4C-38,55.6,-32.3,35.5,-38.2,22.8C-44.1,10.2,-61.8,5.1,-67.7,-3.4C-73.6,-12,-67.9,-23.9,-59.1,-31.7C-50.4,-39.4,-38.6,-43,-28.3,-49.2C-17.9,-55.4,-9,-64.2,1.7,-67.1C12.3,-70,24.6,-67,36.9,-61.9Z"
            transform="translate(50 50) scale(0.8)"
          />
        </svg>
      </div>
      <div className="relative flex w-1/2 flex-col gap-small pt-small">
        <H1 className="slideInFromRight" textType="heading--large">
          MARION DELEERSNYDER
        </H1>
        <H2 className="slideInFromLeft" textType="heading">
          DESIGNER D&apos;ESPACE & DESIGNER DE SERVICE
        </H2>
      </div>
    </section>
  );
}
