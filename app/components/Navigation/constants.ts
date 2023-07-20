import { Variants } from 'framer-motion';

export const animationVariants: Variants = {
  visible: {
    visibility: 'visible',
    zIndex: 50,
    translateX: 0,
  },
  hidden: {
    translateX: '100%',
    transitionEnd: {
      visibility: 'hidden',
      zIndex: -50,
    },
  },
};
