import { Link } from 'react-router-dom';
import type { ReactNode, MouseEventHandler } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'red';

type Props = {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit';
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    'bg-royal text-white hover:bg-deep border border-transparent shadow-[0_10px_30px_rgba(8,123,196,0.25)]',
  secondary:
    'bg-transparent text-white border border-white/70 hover:bg-white hover:text-deep',
  outline:
    'bg-transparent text-royal border border-royal/40 hover:border-royal hover:bg-sky',
  outlineLight:
    'bg-transparent text-white border border-white/50 hover:bg-white/10',
  red: 'bg-energy text-white hover:bg-burgundy border border-transparent shadow-[0_10px_30px_rgba(215,25,32,0.25)]',
};

export default function Button({
  children,
  href,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  external,
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 display text-sm font-semibold tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal';

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
