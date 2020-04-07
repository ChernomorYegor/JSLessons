class Questions {
	constructor() {
		this.container = document.getElementById('questions');
	}

	writeUserAnswer(currentIndex, setUserAnswers) {
		let userAnswer = [];
		let inputs = document.getElementsByName(`answers${currentIndex}`);
		inputs.forEach((item, itemIndex) => {
			if (item.checked) {
				userAnswer.push(itemIndex + 1);
			}
		});
		setUserAnswers(userAnswer);
	}

	render(currentIndex, data, userAnswers, setUserAnswers) {
		this.container.innerHTML = '';

		this.container.insertAdjacentHTML('afterbegin', `<p>${data[currentIndex].question}</p>`);

		data[currentIndex].answers.forEach((item, itemIndex) => {
			let answerWrapper = document.createElement('div');
			let answerItem = document.createElement('label');
			answerItem.innerText = `${data[currentIndex].answers[itemIndex].title}`;
			let answerInput = document.createElement('input');
			answerInput.name = `answers${currentIndex}`;
			answerInput.type = data[currentIndex].multiple ? 'checkbox' : 'radio';
			if(userAnswers[currentIndex]) {
				userAnswers[currentIndex].forEach((answer) => {
					if (answer === itemIndex + 1) {
						answerInput.checked = true;
					}
				});
			}
			answerItem.prepend(answerInput);
			answerWrapper.append(answerItem);
			this.container.append(answerWrapper);

			answerInput.addEventListener('change', this.writeUserAnswer.bind(this, currentIndex, setUserAnswers));
		});
	}
}

export default Questions;