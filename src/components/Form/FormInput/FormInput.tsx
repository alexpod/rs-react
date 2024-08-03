// import { FormEvent, useState } from 'react'

interface FormInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: Function;
  onBlur: Function;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'danger' | 'warning';
  validation?: boolean
}

const FormInput = ({
  label,
  type,
  value,
  onChange,
  onBlur,
  disabled,
  className,
  placeholder,
  error,
  size,
  variant,
  validation
}: FormInputProps) => {

  const classList = [className, size, variant].filter(Boolean).join(' ')

  return (
    <div className="form__input">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        type={type}
        className={classList || undefined}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
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