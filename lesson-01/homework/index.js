// Homework: Implement rates calculator. There are 2 selects - with source rate and destination rate, input for sum. Rates should be in the array. It should not be a possibility to choose the same currencies.

let rates = [1, 0.39, 0.35, 30.19]; 

let selectSource = document.getElementById('source_rate');
let selectDest = document.getElementById('dest_rate');
let input = document.getElementById('sum_input');

function ratesFunc() {
	let sumInput = input.value;
	let rateSource = rates[selectSource.value];
	let rateDest = rates[selectDest.value];

	let result = (rateDest * sumInput / rateSource).toFixed(2);

	if (!input.value) {
		document.getElementById('result').innerHTML = '';
	}
	else {
		document.getElementById('result').innerHTML = ` = ${result} ${selectDest.options[selectDest.selectedIndex].text}`;
	}
}

input.addEventListener('input', ratesFunc);

selectSource.addEventListener('change', (e) => {
	let optionsSelectDest = Array.from(selectDest.options);
	optionsSelectDest.find(option => option.hasAttribute('disabled')).removeAttribute('disabled');

	let selectOptionSource = e.target.value;
	selectDest.options[selectOptionSource].setAttribute('disabled', 'disabled');

	if (input.value) {
		return ratesFunc();
	}
});

selectDest.addEventListener('change', (e) => {
	let optionsSelectSource = Array.from(selectSource.options);
	optionsSelectSource.find(option => option.hasAttribute('disabled')).removeAttribute('disabled');
	
	let selectOptionDest = e.target.value;
	selectSource.options[selectOptionDest].setAttribute('disabled', 'disabled');

	if (input.value) {
		return ratesFunc();
	}
});