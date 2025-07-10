import './index.css';

interface IElectronAPI {
  getRandom: () => Promise<number>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

let dice = 1;
const app = document.querySelector<HTMLDivElement>('#app');

app.innerHTML = `
    <img src="img/dice_${dice}.png" alt="Dice one" id=dice></img>
    <button id="roll" type="button">Roll!</button>
`;

const button = document.querySelector<HTMLButtonElement>('#roll');

button.addEventListener('click', async () => {
  dice = await window.electronAPI.getRandom();
  const dice_img = document.querySelector<HTMLImageElement>('#dice');
  dice_img.src = `img/dice_${dice}.png`;
});
