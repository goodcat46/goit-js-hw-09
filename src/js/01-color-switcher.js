function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let btnStart = document.querySelector('[data-start]')
console.log(btnStart);
let btnStop = document.querySelector('[data-stop]')
console.log(btnStop);
let bodyEl = document.querySelector('body')
let intervalId = null
btnStart.addEventListener('click', ()=> {
  intervalId = setInterval(el => {
    let randomColor = getRandomHexColor()
    bodyEl.style.backgroundColor = randomColor
  }, 1000)
  console.log('Зміну кольору запущено');
  btnStart.disabled = true
})

btnStop.addEventListener('click', ()=> {
  clearInterval(intervalId)
  console.log('Зміну кольору зупинено');
  btnStart.disabled = false
})




