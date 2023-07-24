'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  animate,
  AnimationSequence,
  AnimationScope,
  useReducedMotion,
  useAnimate,
  AnimationPlaybackControls,
} from 'framer-motion';
import { destinations } from '../data';
import DestinationInfoItem from './DestinationInfoItem';
import type { Swiper as SwiperType } from 'swiper';
import {
  Virtual,
  Controller,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { LoadingIcon } from '@/components/icons';

const Slider = () => {
  const [isReady, setIsReady] = useState(false);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const mainSlidesRef = useRef<Array<HTMLElement | null>>(
    Array.from({ length: destinations.length })
  );
  const controlledSlidesRef = useRef<Array<HTMLElement | null>>(
    Array.from({ length: destinations.length })
  );

  return (
    <div className={classNames('relative')}>
      <div
        className={classNames(
          'absolute inset-0 flex items-start justify-center',
          { hidden: isReady }
        )}
      >
        <LoadingIcon />
      </div>
      <div
        className={classNames(
          { invisible: !isReady },
          // '2xl:flex 2xl:gap-4 2xl:px-40'
          // '2xl:grid 2xl:grid-cols-2 2xl:justify-items-center 2xl:px-40'
          'grid grid-cols-1',
          '2xl:grid-cols-2 2xl:px-35'
        )}
      >
        <div className={classNames('relative z-10')}>
          <Swiper
            onSwiper={setControlledSwiper}
            modules={[Controller]}
            controller={{ control: mainSwiper }}
            spaceBetween={500}
            slidesPerView={1}
            initialSlide={activeIndex}
            loop
          >
            {destinations.map((slideData, index) => (
              <SwiperSlide key={slideData.name}>
                <div
                  ref={(el) => (controlledSlidesRef.current[index] = el)}
                  className={classNames(
                    'relative mx-auto h-42 w-42',
                    'md:h-75 md:w-75',
                    '2xl:h-[27.75rem] 2xl:w-[27.75rem]'
                  )}
                >
                  <Image
                    src={slideData.images.webp ?? slideData.images.png}
                    alt={`${slideData.name} image`}
                    fill
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={classNames(
            'relative z-20',
            '2xl:max-w-[445px] 2xl:place-self-end'
          )}
        >
          <ul
            className={classNames(
              'mb-5 mt-4 flex justify-center gap-7 font-sans-condensed text-2xs text-brand',
              'md:mb-8 md:mt-9 md:gap-9 md:text-sm',
              '2xl:mb-9 2xl:mt-0 2xl:justify-start'
            )}
          >
            {destinations.map((destination, index) => (
              <li key={destination.name}>
                <button
                  onClick={async () => {
                    if (!mainSwiper || index === mainSwiper.realIndex) {
                      return;
                    }
                    const lastIndex = mainSwiper.realIndex;
                    const nextIndex = index;
                    await Promise.all(
                      [
                        mainSlidesRef.current[lastIndex],
                        controlledSlidesRef.current[lastIndex],
                      ].map(async (slide) =>
                        animate(slide!, { opacity: [1, 0] }, {})
                      )
                    );
                    mainSwiper.slideToLoop(nextIndex, 1);
                    await Promise.all(
                      [
                        mainSlidesRef.current[nextIndex],
                        controlledSlidesRef.current[nextIndex],
                      ].map(async (slide) =>
                        animate(slide!, { opacity: [0, 1] }, {})
                      )
                    );
                    [
                      mainSlidesRef.current[lastIndex],
                      controlledSlidesRef.current[lastIndex],
                    ].map(async (slide) =>
                      animate(slide!, { opacity: 1 }, { duration: 0 })
                    );
                  }}
                  className={classNames(
                    'text-loose relative py-3 uppercase transition-colors',
                    'after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-light after:bg-opacity-0 after:transition-colors',
                    'md:py-4',
                    'hover:after:bg-opacity-50',
                    {
                      '!text-light after:!bg-opacity-100':
                        // slideData.name === destination.name,
                        // false,
                        activeIndex === index,
                    }
                  )}
                >
                  {destination.name}
                </button>
              </li>
            ))}
          </ul>
          <Swiper
            onSwiper={(swiper) => {
              setIsReady(true);
              setMainSwiper(swiper);
            }}
            modules={[Controller, Keyboard]}
            controller={{ control: controlledSwiper }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            spaceBetween={500}
            slidesPerView={1}
            initialSlide={activeIndex}
            loop
            onRealIndexChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              console.log('swiper.realIndex', swiper.realIndex);
            }}
          >
            {destinations.map((slideData, index) => (
              <SwiperSlide key={slideData.name}>
                <div
                  ref={(el) => (mainSlidesRef.current[index] = el)}
                  className={classNames(
                    'mx-auto max-w-[375px]',
                    'md:max-w-[573px]',
                    '2xl:max-w-none'
                  )}
                >
                  <h2
                    className={classNames(
                      'font-serif text-2xl uppercase',
                      'md:mb-2 md:text-3xl',
                      '2xl:mb-4 2xl:text-4xl'
                    )}
                  >
                    {slideData.name}
                  </h2>
                  <p
                    className={classNames(
                      'mx-auto text-xs leading-relaxed text-brand',
                      'md:leading-[1.75em]',
                      '2xl:text-md'
                    )}
                  >
                    {slideData.description}
                  </p>
                  <div
                    className={classNames(
                      'mt-8 flex flex-col gap-8 border-t border-dark-various pt-8',
                      'md:mt-12 md:flex-row md:justify-evenly md:pt-7',
                      '2xl:mt-13 2xl:justify-start 2xl:gap-20'
                    )}
                  >
                    {slideData.distance && (
                      <DestinationInfoItem
                        label="AVG. DISTANCE"
                        text={slideData.distance}
                      />
                    )}
                    {slideData.travel && (
                      <DestinationInfoItem
                        label="Est. travel time"
                        text={slideData.travel}
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
