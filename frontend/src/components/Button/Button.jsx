import './Button.scss';

function Button({
  children,
  onClick,
  primary,
  secondary,
  normal,
  fullWidth,
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`btn${secondary ? ' btn-secondary' : ''}${
        primary ? ' btn-primary' : ''
      }${normal ? ' btn-normal' : ''}${fullWidth ? ' btn-full-width' : ''}${
        className ? ` className` : ''
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
