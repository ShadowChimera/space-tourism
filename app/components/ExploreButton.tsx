'use client';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import usePulseAnimation from '@/hooks/usePulseAnimation';

const ExploreButton = () => {
  const [buttonScope, backgroundScope, animationController] =
    usePulseAnimation();

  return (
    <motion.button
      ref={buttonScope}
      onMouseEnter={() => {
        animationController?.stop();
      }}
      onMouseLeave={() => {
        animationController?.restart();
      }}
      className={classNames(
        'group relative rounded-full bg-light px-[1.78125rem] py-[3.96875rem] font-serif text-xmd uppercase tracking-[0.0625em] text-dark',
        'before:absolute before:inset-0 before:z-[-1] before:scale-100 before:rounded-full before:bg-light before:bg-opacity-10 before:transition-transform',
        'hover:before:scale-[1.65] hover:before:motion-safe:animate-pulse',
        'md:px-[2.9375rem] md:py-[6.40625rem] md:text-xl',
        '2xl:px-[3.9375rem] 2xl:py-[7.40625rem]'
      )}
    >
      <motion.span
        ref={backgroundScope}
        className={classNames(
          'absolute inset-0 z-10 scale-[0] rounded-full border border-[#f3f3f3] border-opacity-100 bg-brand bg-opacity-10'
        )}
      ></motion.span>
      <span className={classNames('relative z-20')}>Explore</span>
    </motion.button>
  );
};

export default ExploreButton;
