import { iconsPath } from './../../components/Icons/Icons.path';

type IconName = keyof typeof iconsPath;

interface IconProps {
  size?: string | number;
  name: IconName;
  className?: string;
  color?: string;
  onClick?: (value?: MouseEvent<SVGSVGElement>) => void;
  disabled?: boolean;
}

export type { IconName, IconProps };
