import './button.css';

function Button({ type, fruit, textContent, formState, handleChange }) {
    return (
        <button
            type={type}
            textContent={textContent}
            formState={formState}
            name={type === 'button' ? fruit : `${type}-button`}
            // Plus and minus button
            disabled={textContent === '-' && formState[fruit] === 0}
            onClick={
                (type === 'button') ? ((textContent === '-') ? (e) => handleChange(e, formState[fruit] - 1) : (e) => handleChange(e, formState[fruit] + 1)) :
                // Reset button 
                (type === 'reset') ? () => fruit.map(item => handleChange(item, 0)) :
                        // Submit button
                        (type === 'submit') && function (e) {handleChange(e)}
            }
        >
            {textContent}
        </button>
    );
}

export default Button;