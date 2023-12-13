import * as React from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';

const buttonStyle = cva(
  'glitter-border px-5 py-2.5 rounded-full w-max text-sm',
  {
    variants: {
      isDisabled: {
        false: null,
        true: 'opacity-60 pointer-events-none',
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
};

type ButtonAsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = BaseProps & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = (props: ButtonProps) => {
  if ('href' in props && !('target' in props)) {
    const { href, className, children, ...rest } = props;
    return (
      <Link href={href} className={buttonStyle({ className })} {...rest}>
        {children}
      </Link>
    );
  }

  const { className, children, disabled, ...rest } = props as ButtonAsButton;
  return (
    <button
      className={buttonStyle({
        isDisabled: disabled,
        className,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
