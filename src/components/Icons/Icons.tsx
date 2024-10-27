// React
import {MouseEvent} from 'react';

// Types
import {iconsPath} from './Icons.path';

type IconName = keyof typeof iconsPath;

interface IconProps {
  size?: string | number;
  name: IconName;
  className?: string;
  color?: string;
  onClick?: (value?: MouseEvent<SVGSVGElement>) => void;
  disabled?: boolean;
}

function Icon({
  size = 48,
  name,
  className = '',
  color = 'currentColor',
  onClick = () => {
    /* emtpy */
  },
}: Readonly<IconProps>) {
  return (
    <svg
      className={className}
      data-testid={`icon-${name}`}
      onClick={onClick}
      role="icon"
      style={{width: size, height: size}}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconsPath[name]?.map((path, idx) => (
        <path d={path} fillRule="evenodd" key={`path-${idx}`} style={{fill: color}} />
      ))}
    </svg>
  );
}

export type {IconName, IconProps};
export default Icon;
