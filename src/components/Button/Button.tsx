import {ButtonProps} from '../../types/components/button';

const Button = ({
  text,
  disabled = false,
  rounded = 'none',
  type = 'filled',
  variant = 'primary',
  size = 'md',
  onClick,
}: ButtonProps) => {
  const buttonSize = () => {
    if (size === 'md') {
      return 'w-[90%] md:w-[40%] lg:w-[20%] py-2';
    } else if (size === 'lg') {
      return 'w-[100%] md:w-[60%] lg:w-[40%] py-4';
    } else {
      return 'w-[70%] md:w-[60%] lg:w-[10%] py-1';
    }
  };

  const buttonTypeAndVariant = () => {
    if (disabled) {
      return 'bg-gray-300 pointer-events-none';
    }
    if (type === 'filled' && variant === 'primary') {
      return 'bg-sky-800 border-none';
    } else if (type === 'outlined' && variant === 'primary') {
      return 'border border-sky-800 border-2 bg-transparent';
    } else if (type === 'outlined' && variant === 'secondary') {
      return 'border border-gray-800 border-2 bg-transparent';
    } else if (type === 'filled' && variant === 'secondary') {
      return 'bg-gray-800 border-none';
    }
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonSize()} ${buttonTypeAndVariant()} text-white text-center mt-6 py-2 rounded-${rounded} hover:bg-gray-700`}
    >
      {text}
    </button>
  );
};

export default Button;
