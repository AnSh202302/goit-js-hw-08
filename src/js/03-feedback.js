import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let dataForm = {};
function onInput(e) {
  dataForm.email = email.value;
  dataForm.message = message.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

let data = JSON.parse(localStorage.getItem(LOCAL_KEY));
if (data) {
  email.value = data.email;
  message.value = data.message;
} else {
  email.value = '';
  message.value = '';
}

function onSubmit(e) {
  e.preventDefault();
  localStorage.clear();
  console.log(`email: ${email.value}; message: ${message.value}`);
  email.value = '';
  message.value = '';
}
