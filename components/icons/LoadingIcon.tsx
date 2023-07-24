import classNames from 'classnames';

export interface LoadingIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const LoadingIcon = ({
  size = 32,
  strokeWidth = 4,
  className: customClassName,
}: LoadingIconProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderWidth: strokeWidth,
      }}
      className={classNames(
        customClassName,
        'relative h-8 w-8 animate-spin rounded-full border-4 border-light border-opacity-10'
      )}
    >
      <span
        style={{
          inset: -(strokeWidth / 2),
          borderRightWidth: strokeWidth / 2,
        }}
        className={classNames(
          'absolute inset-[-2px] rounded-full border-0 border-r-2 border-[transparent] border-r-light'
        )}
      ></span>
    </div>
  );
};

export default LoadingIcon;
