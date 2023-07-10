import './style.css'

type RomanMap = {[roman: string]: number}

interface FormElements extends HTMLCollection {
  convert: HTMLInputElement
}

const form: HTMLFormElement = document.querySelector('#roman-converter-form')!;
const encodeMessage: HTMLElement = document.querySelector('p')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formElements: FormElements = <FormElements> form.elements;
  if (formElements.convert.value === "") {
    encodeMessage.textContent = "Empty Input!";
  } else {
    encodeMessage.textContent = convertToRoman(formElements.convert.value);
    formElements.convert.value = "";
  }
});

function convertToRoman(num: string) {
  let romanMap: RomanMap = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
  };
  let checkNumber = Number(num)
  let roman = "";

  Object.keys(romanMap).map( (i) => {
      let q = Math.floor(checkNumber / romanMap[i]);
      checkNumber -= q * romanMap[i];
      roman += i.repeat(q);
  });

  return roman;
}
