// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onFormSubmit);

createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

onSuccess = ({ position, delay }) => {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

onError = ({ position, delay }) => {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

function onFormSubmit(e) {
  e.preventDefault();

  const params = {};

  new FormData(e.target).forEach((value, name) => {
    params[name] = parseInt(value);
  });

  generatePromises(params);
}



function generatePromises({ delay, step, amount }) {
  let delayStep = delay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delayStep).then(onSuccess).catch(onError);
    delayStep += step;
  }
}
