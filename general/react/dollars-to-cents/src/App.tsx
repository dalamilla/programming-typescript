import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import DollarForm from './components/DollarForm';
import CentsDetails from './components/CentsDetails';
import arrow from './assets/arrow.png';
import type { Cent } from './types/cent';

function App() {
  const [dollars, setDollars] = useState(0);
  const [cents, setCents] = useState([
    { type: 'Quarter', value: 25, quantity: 0 },
    { type: 'Dime', value: 10, quantity: 0 },
    { type: 'Nickel', value: 5, quantity: 0 },
    { type: 'Penny', value: 1, quantity: 0 },
  ]);

  const Convert = () => {
    let totalCents = dollars * 100;

    setCents(
      cents.map((cent: Cent) => {
        const quantity = Math.floor(totalCents / cent.value);
        totalCents = totalCents % cent.value;
        return { ...cent, quantity: quantity };
      }),
    );
  };

  const handleDollarForm = (value: string) => {
    setDollars(Number(value));
  };

  return (
    <div className="app">
      <h1>Convertion</h1>
      <div className="app-convert">
        <DollarForm onInputChange={handleDollarForm} />
        <img src={arrow} className="app-convert-arrow" alt="arrow" />
        <CentsDetails cents={cents} />
      </div>
      <Button onClick={Convert}>Convert</Button>
    </div>
  );
}

export default App;
