import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

formElement.addEventListener('input', throttle(handleInput, 500));
formElement.addEventListener('submit', handleSubmit);

function handleInput() {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  if (!email.value || !message.value) {
    alert('Please fill all fields!');
    return;
  }

  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formElement.reset();
}

const { email, message } = formElement.elements;
let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
email.value = formData.email || '';
message.value = formData.message || '';
