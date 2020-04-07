class AnswerStatus {
	constructor() {
		this.container = document.getElementById('answers-status');
	}

	render(currentIndex, data, setIndex) {
		this.container.innerHTML = '';

		let uList = document.createElement('ul');
		this.container.prepend(uList);

		data.forEach((item, itemIndex) => {
			let itemList = document.createElement('li');
			itemList.id = `answer_status${itemIndex}`;
			if (itemIndex === currentIndex) {
				itemList.className = 'active';
			}
			uList.append(itemList);
			itemList.addEventListener('click', (e) => setIndex(+e.target.id.replace(/\D+/,'')
			));
		});
	}
}

export default AnswerStatus;