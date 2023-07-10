import './style.css'

interface FormElements extends HTMLCollection {
  message: HTMLInputElement
}

const form: HTMLFormElement = document.querySelector('#cipher-form')!;
const encodeMessage: HTMLElement = document.querySelector('p')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formElements: FormElements = <FormElements> form.elements;
  if (formElements.message.value === "") {
    encodeMessage.textContent = "Empty Message!";
  } else {
    encodeMessage.textContent = caesarCipher(formElements.message.value);
    formElements.message.value = "";
  }
});

function caesarCipher(code: string) {
  return code.replace(/([A-M])|([N-Z])/g, (letter, state) => {
    if(state){
      return String.fromCharCode(letter.charCodeAt(0) + 13);
    } else {
      return String.fromCharCode(letter.charCodeAt(0) - 13);
    }
  });
}
