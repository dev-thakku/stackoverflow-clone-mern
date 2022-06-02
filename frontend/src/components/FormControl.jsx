import './FormControl.scss';

function FormControl({
  name,
  label,
  type,
  placeholder,
  hintText,
  onChange,
  value,
  ...props
}) {
  return (
    <div className="form__control">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        {...props}
        onChange={onChange}
        value={value}
      />
      {hintText && <p className="hint">{hintText}</p>}
    </div>
  );
}

export default FormControl;
