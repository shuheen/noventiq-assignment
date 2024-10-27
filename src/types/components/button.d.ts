interface ButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary';
  type?: 'filled' | 'outlined';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export { ButtonProps };
