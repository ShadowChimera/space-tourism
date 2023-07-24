import classNames from 'classnames';

export const LoadingIcon = () => {
  return (
    <div
      className={classNames(
        'relative h-8 w-8 animate-spin rounded-full border-4 border-light border-opacity-10',
        'after:absolute after:inset-[-2px] after:rounded-full after:border-0 after:border-r-2 after:border-[transparent] after:border-r-light'
      )}
    ></div>
  );
};

export default LoadingIcon;
