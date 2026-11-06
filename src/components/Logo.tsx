import { Link } from 'react-router-dom';
import logo from '@/assets/logo/three-star-fuels-logo.png';

type Props = {
  className?: string;
  imgClassName?: string;
  withEffect?: boolean;
  to?: string;
};

/**
 * Official Three Star Fuels logo.
 * Replace `src/assets/logo/three-star-fuels-logo.png` to update branding site-wide.
 */
export default function Logo({
  className = '',
  imgClassName = '',
  withEffect = true,
  to = '/',
}: Props) {
  const content = (
    <span
      className={`logo-shell inline-flex items-center rounded-sm bg-white p-1.5 ring-1 ring-sky ${className}`}
    >
      <img
        src={logo}
        alt="Three Star Fuels"
        width={180}
        height={180}
        className={`h-11 w-auto object-contain sm:h-12 ${withEffect ? 'logo-effect' : ''} ${imgClassName}`}
        decoding="async"
      />
    </span>
  );

  if (to) {
    return (
      <Link to={to} aria-label="Three Star Fuels home" className="shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}
