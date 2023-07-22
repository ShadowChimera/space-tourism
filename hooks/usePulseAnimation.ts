import {
  animate,
  AnimationSequence,
  AnimationScope,
  useReducedMotion,
  useAnimate,
  AnimationPlaybackControls,
} from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';

export interface AnimationController {
  clear: () => void;
  stop: () => void;
  restart: () => void;
}

const getAnimationSequences = (
  buttonScope: AnimationScope,
  borderScope: AnimationScope
) => {
  const buttonSequence: AnimationSequence = [
    [
      buttonScope.current,
      { scale: [1, 0.95] },
      { delay: 4, duration: 0.15, ease: 'easeIn' },
    ],
    [
      buttonScope.current,
      { scale: [0.95, 1] },
      { delay: 0.1, duration: 0.15, ease: 'easeOut' },
    ],
    [buttonScope.current, { scale: [1, 1] }, { duration: 0.85 }],
  ];
  const borderSequence: AnimationSequence = [
    [borderScope.current, { scale: [0, 0.95] }, { delay: 4, duration: 0.25 }],
    [
      borderScope.current,
      { scale: [0.95, 1.65], opacity: [1, 0] },
      { duration: 1 },
    ],
  ];

  return [buttonSequence, borderSequence];

  // const buttonAnimation = animate(buttonSequence, {
  //   repeat: Infinity,
  // });

  // const borderAnimation = animate(borderSequence, {
  //   repeat: Infinity,
  // });

  // return [buttonAnimation, borderAnimation];
};

const usePulseAnimation: () => [
  AnimationScope<any>,
  AnimationScope<any>,
  AnimationController | null
] = () => {
  const shouldReduceMotion = useReducedMotion();
  const [containerScope] = useAnimate();
  const [backgroundScope] = useAnimate();
  const containerAnimationRef = useRef<AnimationPlaybackControls | null>(null);
  const backgroundAnimationRef = useRef<AnimationPlaybackControls | null>(null);
  const animationController = useRef<AnimationController | null>(null);

  const clearAnimation = useCallback(() => {
    containerAnimationRef.current?.cancel();
    backgroundAnimationRef.current?.cancel();
  }, []);
  const stopAnimation = useCallback(() => {
    containerAnimationRef.current?.cancel();
    backgroundAnimationRef.current?.cancel();
  }, []);
  const restartAnimation = useCallback(() => {
    animationController.current?.clear();

    if (shouldReduceMotion) {
      return;
    }

    const [buttonSequence, borderSequence] = getAnimationSequences(
      containerScope,
      backgroundScope
    );

    containerAnimationRef.current = animate(buttonSequence, {
      repeat: Infinity,
    });
    backgroundAnimationRef.current = animate(borderSequence, {
      repeat: Infinity,
    });
  }, [containerScope, backgroundScope, shouldReduceMotion]);

  animationController.current = useMemo(
    () => ({
      clear: clearAnimation,
      stop: stopAnimation,
      restart: restartAnimation,
    }),
    [clearAnimation, stopAnimation, restartAnimation]
  );

  useEffect(() => {
    animationController.current?.restart();

    return () => {
      animationController.current?.clear();
    };
  });

  return [containerScope, backgroundScope, animationController.current];
};

export default usePulseAnimation;
