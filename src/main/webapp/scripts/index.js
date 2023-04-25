const { interval, Subject } = rxjs;
const { tap, takeUntil } = rxjs.operators;

const inputField = document.querySelector('.time-input');
const clickButton = document.querySelector('#clickButton');
const timerDisplay = document.querySelector('#timerDisplay');

const updateInterval$ = interval(1000 * parseInt(inputField.value));

const stopClick$ = new Subject();

let countdown$;

clickButton.addEventListener('click', () => {
  if (clickButton.textContent === 'Start') {
    const inputInterval = parseInt(inputField.value);
    if (isNaN(inputInterval) || inputInterval <= 0) {
      alert('Please enter a valid interval');
      return;
    }
    
    clickButton.textContent = 'Stop';
    clickButton.classList.remove('start');
    clickButton.classList.add('stop');
    
    let remainingTime = inputInterval;
    timerDisplay.textContent = remainingTime;
    countdown$ = interval(1000).pipe(
      tap(() => {
        remainingTime--;
        timerDisplay.textContent = remainingTime;
        if (remainingTime === 0) {
          browseFolder();
          remainingTime = inputInterval;
          timerDisplay.textContent = remainingTime;
        }
      }),
      takeUntil(stopClick$)
    ).subscribe();
    
    updateInterval$.pipe(
      takeUntil(stopClick$)
    ).subscribe();
  } else {
    clickButton.textContent = 'Start';
    clickButton.classList.remove('stop');
    clickButton.classList.add('start');
    
    stopClick$.next();
    countdown$.unsubscribe();
  }
});