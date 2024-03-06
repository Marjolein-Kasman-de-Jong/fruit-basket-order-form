import './App.css'
import { useState } from 'react';

import FruitCounter from './components/fruitcounter/FruitCounter.jsx';
import Button from './components/button/Button.jsx';
import Input from './components/input/Input.jsx';

function App() {
  const fruits = ['aardbeien', 'bananen', 'appels', 'kiwis'];

  const [formState, setFormState] = useState({
    aardbeien: 0,
    bananen: 0,
    appels: 0,
    kiwis: 0,

    firstname: '',
    lastname: '',
    age: 0,
    zip: '',
    delivery: '',
    period: '',
    remarks: '',
    termsandconditions: false,
  });

  function handleChange(e, newValue) {
    const changedFieldName = e.target ? e.target.name : e;

    setFormState(prev => ({
      ...prev,
      [changedFieldName]: newValue,
    }));
  }

  function logForm(e) {
    e.preventDefault();

    for (const [key, value] of Object.entries(formState)) {
      console.log(`${key}: ${value}`);
    }
  }

  return (
    <>
      <header>
        <h1>Fruitmand bezorgservice</h1>
      </header>
      <main>
        <div className='fruit-counters'>
          {fruits.map(fruit => {
            return <FruitCounter key={fruit} fruit={fruit} formState={formState} handleChange={handleChange} />;
          })}
        </div>
        <Button type='reset' fruit={fruits} textContent='reset' formState={formState} handleChange={handleChange}></Button>
      </main>
      <footer>
        <form action='#'>
          <Input fieldName='firstname' labelText='voornaam' type='text' formState={formState} handleChange={handleChange} />
          <Input fieldName='lastname' labelText='achternaam' type='text' formState={formState} handleChange={handleChange} />
          <Input fieldName='age' labelText='leeftijd' type='number' formState={formState} handleChange={handleChange} />
          <Input fieldName='zip' labelText='postcode' type='text' formState={formState} handleChange={handleChange} />
          <Input fieldName='delivery' labelText='bezorgfrequentie' type='select' options={['geen keuze gemaakt', 'iedere week', 'om de week', 'iedere maand']} formState={formState} handleChange={handleChange} />
          <div className="periods">
            <Input fieldName='period' labelText='overdag' type='radio' formState={formState} handleChange={handleChange} />
            <Input fieldName='period' labelText="'s avonds" type='radio' formState={formState} handleChange={handleChange} />
          </div>
          <Input fieldName='remarks' labelText='opmerking' type='textarea' formState={formState} handleChange={handleChange} />
          <Input fieldName='termsandconditions' labelText='ik ga akkoord met de voorwaarden' type='checkbox' formState={formState} handleChange={handleChange} />
          <Button type='submit' textContent='verzend' handleChange={logForm} />
        </form>
      </footer>
    </>
  )
}

export default App
