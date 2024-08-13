interface FormButtonProps {
  type: 'submit' | 'reset' | 'button';
  text: string;
  disabled?: boolean;
  className?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'danger' | 'warning';
}

const FormButton = ({
  type,
  text,
  disabled,
  className,
  error,
  size,
  variant
}: FormButtonProps) => {

  const classList = [className, size, variant].filter(Boolean).join(' ')

  return (
    <div className="form__input">
      <button
        type={type}
        className={classList || undefined}
        disabled={disabled}
      >{text}</button>
      { error && (
        <div className="form__input-error" >
          { error }
        </div>
      )}
    </div>
  )
}

export default FormButton;