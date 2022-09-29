// Задание 1 - переключатель цветов
// Выполняй это задание в файлах 01-color-switcher.html и 01-color-switcher.js. Посмотри демо видео работы переключателя.
// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

console.log(btnStart);

btnStart.addEventListener('click', onStartBtn);
btnStop.addEventListener('click', onStopBtn);

function onStartBtn(e) {
  e.target.classList.toggle('green');
  // e.target.setAttribute('disabled', true);
  window.document.body.style.background = getRandomHexColor();
}

function onStopBtn(e) {
  e.target.classList.toggle('red');
  window.document.body.style.background = ''
}
