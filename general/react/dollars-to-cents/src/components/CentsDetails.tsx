import './CentsDetails.css';

import centImg from '../assets/cent.png';
import type { Cent } from '../types/cent';
import type { PropsCentsDetails } from '../types/props';

function CentsDetails({ cents }: PropsCentsDetails) {
  return (
    <div className="cents">
      {cents.map((cent: Cent) => (
        <div className="cent-details">
          <div className="cent-details-info">
            <img src={centImg} className="cent-details-info-icon" alt="cent" />
            <p>{cent.type}</p>
          </div>
          <div className="cent-details-info-qty">
            <p>{cent.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CentsDetails;
