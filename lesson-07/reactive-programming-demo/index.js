const {fromEvent} = rxjs;
const {map, filter} = rxjs.operators;

const confCodeInput = document.getElementById('confirmation-code');
const attemptedCode = document.getElementById('attempted-code');

const confCodes$ =
  fromEvent(confCodeInput, 'input')
    .pipe(
      map(e => e.target.value),
      filter(code => code.length === 6)
    );

const subscription = confCodes$.subscribe(
  (value) => attemptedCode.innerText = value,
  (event) => {
    console.warn(`Error: ${event}`);
  },
  () => {
    console.info('Completed!');
  }
);
