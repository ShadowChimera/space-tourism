import classNames from 'classnames';

const ExploreButton = () => {
  return (
    <button
      className={classNames(
        'rounded-full bg-light px-[1.78125rem] py-[3.96875rem] font-serif text-xmd uppercase tracking-[0.0625em] text-dark',
        'md:px-[2.9375rem] md:py-[6.40625rem] md:text-xl',
        '2xl:px-[3.9375rem] 2xl:py-[7.40625rem]'
      )}
    >
      Explore
    </button>
  );
};

export default ExploreButton;
