import classNames from 'classnames';
import Logo from '@/components/icons/Logo';
import Navigation from './Navigation';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className={classNames(
        'flex items-center justify-between p-6 pb-0',
        'md:p-0 md:pl-10',
        '2xl:mt-10 2xl:pl-14'
      )}
    >
      <Link href="/">
        <Logo />
      </Link>
      <div
        className={classNames(
          'z-10 ml-8 hidden h-[1px] w-[30rem] flex-1 translate-x-8 bg-light opacity-25',
          '2xl:block'
        )}
      ></div>
      <Navigation />
    </header>
  );
};

export default Header;
