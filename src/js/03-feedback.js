import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', throttle(inputHandle, 700));
form.addEventListener('submit', submitHandle);

let dataInfo = JSON.parse(localStorage.getItem(localStorageKey)) || {};
const { email, message } = form.elements;
reloadAll();

function inputHandle(evt) {
  dataInfo = { email: email.value, message: message.value };
  localStorage.setItem(localStorageKey, JSON.stringify(dataInfo));
};

function reloadAll() {
  if (dataInfo) {
    email.value = dataInfo.email || '';
    message.value = dataInfo.message || '';
  }
};

function submitHandle(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  if (email.value === '' || message.value === '') {
    return alert('Необхідно заповнити всі поля!');
  }

  localStorage.removeItem(localStorageKey);
  evt.currentTarget.reset();
  dataInfo = {};
}