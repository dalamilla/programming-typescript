import type { Cent } from './cent';

export interface PropsCentsDetails {
  cents: Cent[];
}

export interface PropsButton {
  onClick: () => void;
  children: string;
}

export interface PropsDollarForm {
  onInputChange: (value: string) => void;
}
