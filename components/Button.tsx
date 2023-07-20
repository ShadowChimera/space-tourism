'use client';

import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  flat?: boolean;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const Button = ({ flat, className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        className,
        'block rounded bg-light bg-opacity-0 transition-colors',
        'focus-within:bg-opacity-10 hover:bg-opacity-10',
        'active:bg-opacity-20',
        { 'p-3': flat }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
