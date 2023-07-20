import classNames from 'classnames';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div
      className={classNames(
        'grid min-h-screen content-center justify-center text-center'
      )}
    >
      <h1
        className={classNames(
          'mb-8 flex flex-col font-serif  text-2xl',
          'md:flex-row md:gap-4'
        )}
      >
        <span className={classNames('font-bold')}>404</span>
        <span>Not Found</span>
      </h1>
      <Link
        href="/"
        className={classNames(
          'font-sans-condensed text-xmd',
          'hover:underline'
        )}
      >
        Return to home
      </Link>
    </div>
  );
};

export default NotFound;
