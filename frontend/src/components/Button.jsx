import './Button.scss';

function Button({
  children,
  onClick,
  varient = '',
  className = '',
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${
        varient === 'secondary' ? 'secondary' : 'primary'
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
