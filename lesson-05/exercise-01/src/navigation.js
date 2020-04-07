class Navigation {
	constructor() {
		this.container = document.getElementById('navigation');
	}

	render(currentIndex, lastDataIndex, setIndex, showResult) {
		this.container.innerHTML = '';

		let btnBack = document.createElement('button');
		btnBack.prepend('< Back');
		btnBack.className = "back btn";
		if (currentIndex === 0) {
			btnBack.disabled = true;
		}
		this.container.prepend(btnBack);
		btnBack.addEventListener('click', () => setIndex(--currentIndex));

		if (currentIndex === lastDataIndex - 1) {
			let btnSubmit = document.createElement('button');
			btnSubmit.prepend('Submit');
			btnSubmit.className = "submit btn";
			this.container.append(btnSubmit);
			btnSubmit.addEventListener('click', () => showResult());
		} else {
			let btnNext = document.createElement('button');
			btnNext.prepend('Next >');
			btnNext.className = "next btn";
			this.container.append(btnNext);
			btnNext.addEventListener('click', () => setIndex(++currentIndex));
		}
	}
}

export default Navigation