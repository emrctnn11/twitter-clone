interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  onClick,
  large,
  disabled,
  outline,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        disabled:opacity-50
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? 'w-full' : ''}
        ${secondary ? 'bg-white' : 'bg-sky-500'}
        ${secondary ? 'text-black' : 'text-white'}
        ${secondary ? 'border-black' : 'border-sky-500'}
        ${large ? 'text-xl' : 'text-md'}
        ${large ? 'px-5' : 'px-4'}
        ${large ? 'py-3' : 'py-2'}
        ${outline ? 'bg-transparent' : ''}
        ${outline ? 'border-white' : ''}
        ${outline ? 'text-white' : ''}
    `}
    >{label}</button>
  );
};

export default Button;
