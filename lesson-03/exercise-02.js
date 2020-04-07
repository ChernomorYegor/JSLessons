// Exercise 02: Return the most frequent item in the array

const mostFrequent = (array) => {

		let map = new Map();

		let max = 0, answer = null;

		for (let i = 0; i < array.length; ++i) {
			let key = array[i];
			map.set(key, map.has(key) ? map.get(key) + 1 : 1);
		}

		for (let [key, value] of map) {
			if (value > max) {
				max = value;
				answer = key;
			}
		}

		return answer;
};
