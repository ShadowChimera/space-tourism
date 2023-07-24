import classNames from 'classnames';
import { mainNav, Pages } from '../constants';
import { padZeros } from '@/utils';
import Slider from './components/Slider';
import { LoadingIcon } from '@/components/icons';
import { Suspense } from 'react';

let pageIndex: number | null = mainNav.findIndex(
  (nav) => nav.name === Pages.destination
);

if (pageIndex < 0) {
  pageIndex = null;
}

const Destination = () => {
  return (
    <main className={classNames('text-center', '2xl:text-start')}>
      <h1
        className={classNames(
          'text-loose mx-auto mb-8 flex justify-center gap-4 font-sans-condensed text-sm uppercase',
          'md:mb-14 md:mt-4 md:max-w-[768px] md:justify-start md:text-xmd',
          '2xl:mb-16 2xl:mt-19 2xl:max-w-[1440px] 2xl:gap-6 2xl:pl-36 2xl:text-lg'
        )}
      >
        {pageIndex && (
          <span className={classNames('font-bold opacity-25')}>
            {padZeros(pageIndex)}
          </span>
        )}
        <span>Pick your destination</span>
      </h1>
      <Slider />
    </main>
  );
};

export default Destination;
