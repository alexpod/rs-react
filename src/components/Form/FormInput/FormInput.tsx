import { FormEvent, useState } from 'react'

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