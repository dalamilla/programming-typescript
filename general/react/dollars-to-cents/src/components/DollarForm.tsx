import './DollarForm.css';

import dollarImg from '../assets/dollar.png';
import type { PropsDollarForm } from '../types/props';

function DollarForm({ onInputChange }: PropsDollarForm) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <div className="dollar-form">
      <div className="dollar-form-info">
        <img src={dollarImg} className="dollar-form-icon" alt="dollar" />
        <p>Dollars</p>
      </div>
      <input
        type="number"
        className="dollar-form-input"
        onChange={handleChange}
      />
    </div>
  );
}

export default DollarForm;
