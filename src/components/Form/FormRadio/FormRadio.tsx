
interface FormRadioProps {
  value: string;
  name?: string;
  onChange: Function;
  onBlur: Function;
  error?: string;
  props: [];
}

const FormRadio = ({
  value,
  name,
  onChange,
  onBlur,
  error,
  props
}: FormRadioProps) => {

  return (
    <div className="form__radio-group">
        
      <div className="form__radio-wrapper"> 
      {props.map((gender) => (
        <div className="form__radio" key={gender.label}>
          <input
            id={gender.label}
            name={name}
            type="radio"
            value={gender.value}
            checked={value === gender.value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label htmlFor={gender.label}>{gender.label}</label>
        </div>
      
      ))}
      </div>
      { error && (
          <div className="form__input-error form__radio-error" >
            { error }
          </div>
        )}
    </div>
  )
}

export default FormRadio;