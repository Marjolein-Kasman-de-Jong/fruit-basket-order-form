import './input.css';
import firstLetterToUpperCase from '../../helpers/firstLetterToUpperCase';

function Input({ fieldName, labelText, type, options, formState, handleChange }) {
    return (
        <div className={`input-field ${fieldName}`}>
            <label htmlFor={fieldName}>{type != 'radio' ? firstLetterToUpperCase(labelText) : labelText}</label>
            {/* Text and number inputs */}
            {
                (type === 'text' || type === 'number') && 
                    <input type={type} id={fieldName} name={fieldName} value={formState[fieldName]} onChange={(e) => handleChange(e, e.target.value)} />
            }
            {/* Drop-down list inputs */}
            {
                type === 'select' && 
                    <select id={fieldName} name={fieldName} value={formState[fieldName]} onChange={(e) => handleChange(e, e.target.value)}>
                        <optgroup>
                            {
                            options.map(option => {return <option key={option} value={option}>{option}</option>})
                            }
                        </optgroup>  
                    </select>    
            }
            {/* Radio inputs */}
            {
                type === 'radio' &&
                    <input type={type} id={fieldName} name={fieldName} value={formState[fieldName]} onChange={(e) => handleChange(e, labelText)} />    
            }
            {/* Textarea inputs */}
            {
                type === 'textarea' &&
                    <textarea id={fieldName} name={fieldName} rows="4" cols="30" value={formState[fieldName]} onChange={(e) => handleChange(e, e.target.value)}></textarea>
            }
            {/* Checkbox inputs */}
            {
                type == 'checkbox' &&
                    <input type="checkbox" id={fieldName} name={fieldName} checked={formState[fieldName]} onChange={(e) => handleChange(e, !formState[fieldName])} />
            }
        </div>
    );
}

export default Input;