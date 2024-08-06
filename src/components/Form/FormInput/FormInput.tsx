interface FormInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: Function;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'danger' | 'warning';
  icon?: JSX.Element;
}

const FormInput = ({
  label,
  type,
  value,
  onChange,
  disabled,
  className,
  placeholder,
  error,
  size,
  variant,
  icon
}: FormInputProps) => {

  const classList = [className, size, variant].filter(Boolean).join(' ')

  return (
    <div className="form__input">
      <label htmlFor={label}>{label}</label>
      <div className="form__input-field">
        {icon && <div className="form__icon">{icon}</div>}
        <input
          id={label}
          name={label}
          type={type}
          className={classList || undefined}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      { error && (
        <div className="form__input-error" >
          { error }
        </div>
      )}
    </div>
  )
}

export default FormInput;