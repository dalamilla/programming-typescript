import type { PropsButton } from '../types/props';
import './Button.css';

function Button({ onClick, children }: PropsButton) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
