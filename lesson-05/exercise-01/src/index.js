import AnswerStatus from './answerStatus';
import Questions from './questions';
import Navigation from './navigation';

import data from './data.json';

class App {
	constructor() {
		this.answerStatus = new AnswerStatus();
		this.questions = new Questions();
		this.navigation = new Navigation();

		this.currentIndex = 0;
		this.userAnswers = [];
		this.result = 0;
	}

	setIndexAndRefresh(index) {
		this.currentIndex = index;
		this.render();
	}

	setUserAnswers(answer) {
		this.userAnswers[this.currentIndex] = answer;
	}

	showResult() {
		this.calculateResult();
		if (confirm(`Your result = ${this.result}. Do you want to restart?`)) {
			location.reload();
		}
	}

	calculateResult() {
		this.userAnswers.forEach((item,itemIndex) => {
			if (item.join(',') === data[itemIndex].correctAnswers.join(',')) {
				this.result++;
			}
		});
	}

	render() {
    	this.answerStatus.render(this.currentIndex, data, this.setIndexAndRefresh.bind(this));
    	this.questions.render(this.currentIndex, data, this.userAnswers, this.setUserAnswers.bind(this));
		this.navigation.render(this.currentIndex, data.length, this.setIndexAndRefresh.bind(this), this.showResult.bind(this));
	}
}

let app = new App();
app.render();