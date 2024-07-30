
interface FormRadioProps {
  label: string;
  value: string;
  name?: string;
  onChange: Function;
  error?: string;
  validation?: boolean
}

const FormRadio = ({
  label,
  value,
  name,
  onChange,
  error,
  validation
}: FormRadioProps) => {

  return (
    <div className="form__radio">
      <input
        id={label}
        name={name}
        type="radio"
        value={value}
        onChange={onChange}
      />
      <label htmlFor={label}>{label}</label>
      { !validation && (
        <div className="form__radio-error" >
          { error }
        </div>
      )}
    </div>
  )
}

export default FormRadio;