import * as React from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';

const buttonStyle = cva(
  'border rounded-full text-base text-center max-w-xs mx-auto',
  {
    variants: {
      isDisabled: {
        false: null,
        true: 'opacity-60 pointer-events-none',
      },
      isSquare: {
        false: null,
        true: 'rounded-none',
      },
    },
    defaultVariants: {
      isDisabled: false,
    },
  }
);

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  square?: boolean;
  disabled?: boolean;
  name?: string;
};

type ButtonAsButton = BaseProps;

type ButtonAsLink = BaseProps & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = (props: ButtonProps) => {
  if ('href' in props) {
    const { href, className, children, disabled, ...rest } =
      props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={buttonStyle({
          isDisabled: disabled,
          className,
        })}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { className, children, disabled, square, name, ...rest } =
    props as ButtonAsButton;
  return (
    <button
      className={buttonStyle({
        isSquare: square,
        className,
      })}
      type='button'
      name={name}
      aria-label={name}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
