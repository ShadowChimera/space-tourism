import classNames from 'classnames';
import ExploreButton from './components/ExploreButton';

export default function Home() {
  return (
    <main
      className={classNames(
        'mx-auto mt-6 flex flex-col items-center gap-20 p-6',
        'md:mt-20 md:gap-40',
        '2xl:mt-60 2xl:flex-row 2xl:justify-around',
        '2xl:max-w-[1440px]'
      )}
    >
      <div
        className={classNames(
          'max-w-[20.4375rem] text-center',
          'md:max-w-[27.75rem]',
          '2xl:text-start'
        )}
      >
        <h1 className={classNames('uppercase')}>
          <span
            className={classNames(
              'text-loose block font-sans-condensed text-sm text-brand',
              'md:text-xmd',
              '2xl:text-lg'
            )}
          >
            SO, YOU WANT TO TRAVEL TO
          </span>
          <span
            className={classNames(
              'my-4 block font-serif text-3xl leading-tight',
              'md:my-6 md:text-5xl md:leading-none',
              '2xl:leading-[normal]'
            )}
          >
            SPACE
          </span>
        </h1>
        <p
          className={classNames(
            'text-xs leading-relaxed text-brand',
            'md:text-sm md:leading-7',
            '2xl:text-md 2xl:leading-8'
          )}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <ExploreButton />
    </main>
  );
}
