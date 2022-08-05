import { throttle } from "lodash";

const form = document.querySelector(".feedback-form");
const email = document.querySelector(`input[name="email"]`);
const message = document.querySelector(`textarea[name="message"]`);

const localStorage_Key = 'feedback-form-state';

form.addEventListener("input", throttle( e => {
    const objectToSave = { email: form.elements.email.value, message: form.elements.message.value };
    localStorage.setItem(localStorage_Key, JSON.stringify(objectToSave));
      
}, 500));

form.addEventListener("submit", e => {
    e.preventDefault();
    const { elements: { email, message }, } = e.currentTarget;
    console.log({ email: email.value, message: message.value});
    // można też bezpośrednio dać: console.log({ email: form.elements.email.value, message: form.elements.message.value });
    e.currentTarget.reset();
    localStorage.removeItem(localStorage_Key);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const storageData = load(localStorage_Key);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}