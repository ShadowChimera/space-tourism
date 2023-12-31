'use client';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import { backgrounds, mainNav } from '../constants';
import { useEffect, useState } from 'react';

const Background = () => {
  const pathname = usePathname();
  const [bgWidth, setBgWidth] = useState<number | null>(null);

  const currentPage = mainNav.find(
    (nav) =>
      pathname === nav.href ||
      (!nav.href.endsWith('/') && pathname.startsWith(nav.href))
  )?.name as keyof typeof backgrounds;

  const handleScreenResize = () => {
    setBgWidth(window.screen.width);
  };

  useEffect(() => {
    setBgWidth(window.screen.width);

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  if (bgWidth === null || !currentPage || !(currentPage in backgrounds)) {
    return <></>;
  }

  const background = backgrounds[currentPage];
  const bestSrc =
    bgWidth === null
      ? null
      : background.srcset?.reduce(
          (
            best: { src: null | string | StaticImageData; width: number },
            cur
          ) => {
            if (!best.src) {
              return { ...cur };
            }

            if (best.width > bgWidth && cur.width <= best.width) {
              return { ...cur };
            }

            if (
              best.width <= bgWidth &&
              cur.width <= bgWidth &&
              cur.width > best.width
            ) {
              return { ...cur };
            }

            return { ...best };
          },
          {
            src: null,
            width: 0,
          }
        );

  return (
    <div className={classNames('absolute inset-0 z-[-1] min-h-screen')}>
      <Image
        className={classNames('z-[-1] object-cover')}
        src={bestSrc?.src ?? background.src}
        alt=""
        fill
      />
    </div>
  );
};

export default Background;
