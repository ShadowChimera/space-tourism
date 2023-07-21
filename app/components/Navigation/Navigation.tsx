'use client';
import classNames from 'classnames';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { padZeros } from '@/utils';
import { mainNav } from '../../constants';
import { MenuIcon, CloseIcon } from '@/components/icons';
import Button from '@/components/Button';
import { animationVariants } from './constants';

const Navigation = () => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Button
        className={classNames('md:hidden')}
        flat
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <MenuIcon />
      </Button>

      <motion.nav
        initial="hidden"
        animate={isOpened ? 'visible' : 'hidden'}
        transition={{ ease: 'easeIn', duration: 0.2 }}
        variants={animationVariants}
        className={classNames(
          'fixed inset-y-0 right-0 z-50 w-64 bg-light bg-opacity-[0.04] font-sans-condensed text-sm backdrop-blur-2xl',
          'md:text-2xs md:!visible md:static md:!z-auto md:w-fit md:!translate-x-0 md:px-12',
          '2xl:pl-32 2xl:pr-44 2xl:text-sm'
        )}
      >
        <div className={classNames('mb-6 px-6 py-6', 'md:hidden')}>
          <Button
            className={classNames('ml-auto')}
            onClick={() => setIsOpened(false)}
            flat
          >
            <CloseIcon />
          </Button>
        </div>
        <ul
          className={classNames(
            'flex flex-col gap-5',
            'md:flex-row md:gap-9',
            '2xl:gap-12'
          )}
        >
          {mainNav.map((nav, index) => (
            <li key={nav.href}>
              <Link
                href={nav.href}
                className={classNames(
                  'text-loose relative flex gap-3 px-8 py-2.5 uppercase',
                  'after:absolute after:inset-y-0 after:right-0 after:w-1 after:bg-light after:bg-opacity-0 after:transition-colors',

                  'focus-within:after:bg-opacity-50 hover:after:bg-opacity-50',
                  'active:after:bg-opacity-100',
                  { 'after:!bg-opacity-100': pathname.startsWith(nav.href) },

                  'md:px-0 md:py-10',
                  'md:after:inset-x-0 md:after:bottom-0 md:after:top-auto md:after:h-1 md:after:w-full'
                )}
              >
                <span
                  className={classNames(
                    'font-bold',
                    'md:hidden',
                    '2xl:inline-block'
                  )}
                >
                  {padZeros(index)}
                </span>
                <span>{nav.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default Navigation;
