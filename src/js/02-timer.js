// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
//* ел кнопки
let btnStartTimer = document.querySelector('[data-start]');
btnStartTimer.disabled = true;

//* елемент інпуту
let dateInputEl = document.querySelector('#datetime-picker');
let timerDeadLine = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minDate: new Date(),
  minTime: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timerDeadLine = selectedDates[0];
    console.log(timerDeadLine);
    btnStartTimer.disabled = false;
  },
};
btnStartTimer.addEventListener('click', event => {
  let { target } = event;
  if (timerDeadLine >= Date.now()) {
    dateInputEl.disabled = true;
    btnStartTimer.disabled = true;
    timer.start(timerDeadLine);
    return;
  } else {
    alert(`Виберіть дату та час у майбутньому`);
    return;
  }
});
//* ініціалізація календарика
let dateFlatpickrInput = flatpickr('#datetime-picker', options);
//*todo ТАЙМЕР ЗАПИСАНИЙ ОБЄКТОМ
let timer = {
  intervalId: null,
  start(timerDeadLine) {
    intervalId = setInterval(() => {
      let dif = timerDeadLine - Date.now();
      if (dif <= 0) {
        this.stop();
        return;
      }
      let { days, hours, minutes, seconds } = this.convertMs(dif);

      let secondsEl = (document.querySelector('[data-seconds]').textContent =
        this.pad(seconds));
      let minutesEl = (document.querySelector('[data-minutes]').textContent =
        this.pad(minutes));
      let hoursEl = (document.querySelector('[data-hours]').textContent =
        this.pad(hours));
      let daysEl = (document.querySelector('[data-days]').textContent =
        this.pad(days));
    }, 1000);
  },

  stop() {
    clearInterval(intervalId);
  },
  pad(value) {
    return String(value).padStart(2, 0);
  },
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
};
