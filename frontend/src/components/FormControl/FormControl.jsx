import { ErrorIcon } from '../../icons';
import './FormControl.scss';

function FormControl({
  name,
  label,
  type,
  placeholder,
  hintText,
  error,
  onChange,
  value,
  ...props
}) {
  return (
    <div className="form__control">
      <label>{label}</label>
      <div className={`form__inputContainer${error ? ' error' : ''}`}>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...props}
        />
        <div className="error-icon">
          <ErrorIcon />
        </div>
      </div>
      {error && <p className="error-text">{error}</p>}

      {hintText && <p className="hint">{hintText}</p>}
    </div>
  );
}

export default FormControl;
