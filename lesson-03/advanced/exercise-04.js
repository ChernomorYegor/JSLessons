// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

const removeAdjacentDuplicates = (string) => {
	let array = string.split('');
	let map = new Map();

	for (let i = 0; i < array.length; i++) {
		let keyPrev = array[i-1];
		let key = array[i];
		if (map.has(key) && keyPrev === key) {
			map.delete(key);
		} else {
			map.set(key, 1);
		}
		console.log(map);
	}

	let keysMap = Array.from(map.keys());
	console.log(keysMap);
	return keysMap.join('');


	// && map.get(keyPrev) === key
};