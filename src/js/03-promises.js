//todo найважче завдання для мене із тих яке мав нагоду виконувати, максимально мені не зрозумілі мета і суть

//* елемент форми
const formElement = document.querySelector('.form');
//* функція створенняпромісу
function createPromise(position, delay) {
  //* генерування віповіді
  const shouldResolve = Math.random() > 0.3;
  //* функція повертає новостворений проміс через клас ПРОМІС
  return new Promise((resolve, reject) => {
    //* встановлюєтся наймаут де затримка буде отримана у процесі виклику функції
    setTimeout(() => {
      //* якщо TRUE тоді обереться RESOLVE (у 70% випадків згідно формули Math.random()>0.3)
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        //* інакше обереться REJECT
        reject({ position, delay });
      }
    }, delay);
  });
}
//* едемент форми отримує слухача події а він колбек функцію
formElement.addEventListener('submit', event => {
  //* відміна стандартної події форми
  event.preventDefault();
  //* значення з інпутів зчитуємо у момент сабміту форми
    let inputDelay = Number(formElement.delay.value);
    console.log(inputDelay);
    let inputAmount = Number(formElement.amount.value);
    console.log(inputAmount);
    let inputStep = Number(formElement.step.value);
    console.log(inputStep);

    //* цикл FOR де параметри це отримані значення із інпутів
  for (let i = 0; i < inputAmount; i += 1) {
    createPromise(i, inputDelay)
    //* у випадку RESOLVE спрацює наш THEN. помилку він проігнорить
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      //* у випадку помилки, її зловить CATCH
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      //* на кожній ітерації затримка збільшується
    inputDelay += inputStep;
  }
});
