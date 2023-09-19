
import PropTypes from 'prop-types';

function InputField({ placeholder , value, onChange, label,type})
 {
  return <div>
        <label htmlFor="email" className="text-base text-gray-600 ">{label}</label>
        <input
            type={type}
            id={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border border-gray-400 px-2 py-3 my-3 w-full"
        />
  </div>;
}

export default InputField

InputField.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    type: PropTypes.string
    }
