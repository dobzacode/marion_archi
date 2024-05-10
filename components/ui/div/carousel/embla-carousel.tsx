'use client';

import { imageByIndex } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { DotButton, NextButton, PrevButton } from './embla-carousel-arrows-dot-button';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import NextJsImage from './nextjs-image';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  imageArr: string[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const lightboxSlides = props.imageArr.map((item) => ({
    src: item,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item, width: 320, height: 213 },
      { src: item, width: 640, height: 426 },
      { src: item, width: 1200, height: 800 },
      { src: item, width: 2048, height: 1365 },
      { src: item, width: 3840, height: 2560 }
    ]
  }));

  return (
    <>
      <div className="embla relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ">
            {slides.map((index) => (
              <div
                onClick={() => {
                  openLightbox(index);
                }}
                className="embla__slide mr-1 aspect-square h-[25rem]  cursor-pointer rounded-extra-small"
                key={index}
              >
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <Image
                  fill
                  className="object-cover"
                  src={imageByIndex(props.imageArr, index)}
                  alt={`Slide ${index + 1}`}
                ></Image>
              </div>
            ))}
          </div>
          <div className="embla__buttons">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div>
        </div>

        <div className="embla__dots ">
          {scrollSnaps.map((_: any, index: number) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>

      <Lightbox
        index={currentImage}
        open={lightboxIsOpen}
        close={() => closeLightbox()}
        plugins={[Zoom]}
        slides={lightboxSlides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
};

export default EmblaCarousel;
