import './style.css'

interface FormElements extends HTMLCollection {
  checkText: HTMLInputElement
}

const form: HTMLFormElement = document.querySelector('#palindrome-form')!;
const encodeMessage: HTMLElement = document.querySelector('p')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formElements: FormElements = <FormElements> form.elements;
  if (formElements.checkText.value === "") {
    encodeMessage.textContent = "Empty Message!";
  } else {
    encodeMessage.textContent = String(palindrome(formElements.checkText.value)).toUpperCase();
    formElements.checkText.value = "";
  }
});

function palindrome(str: string) {
  let word = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  return word === word.split("").reverse().join("");
}
