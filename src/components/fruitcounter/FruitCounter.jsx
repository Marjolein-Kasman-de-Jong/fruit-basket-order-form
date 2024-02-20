import './fruitcounter.css';
import Button from '../button/Button';
import firstLetterToUpperCase from '../../helpers/firstLetterToUpperCase';

function FruitCounter({ fruit, formState, handleChange }) {
    return (
        <div className="fruit-counter">
            {firstLetterToUpperCase(fruit)}
            <div className="counter">
                <Button type='button' fruit={fruit} textContent='-' formState={formState} handleChange={handleChange} />
                <p>{formState[fruit]}</p>
                <Button type='button' fruit={fruit} textContent='+' formState={formState} handleChange={handleChange} />
            </div>
        </div>
    );
}

export default FruitCounter;