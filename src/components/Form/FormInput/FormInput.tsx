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
  variant
}: FormInputProps) => {

  return (
    <div className="form__input">
      <label htmlFor="{ label }">{ label }</label>
      <input
        type={ type }
        className={ className }
        value={ value }
        onChange={() => {}}
        placeholder={placeholder}
        size={size}
        variant={variant}
        disabled={disabled}
      />
      { error && (
        <div className="form__input-error" >
          { error }
        </div>
      )}
    </div>
  )
}

export default FormInput;