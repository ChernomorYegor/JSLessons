// Exercise 06: Create a function to generate a random digits from 1 to 10. It should have a timeout with 3 seconds. It should be wrapped into Promise. If a number from 1 to 5 - it should be resolved successfully. If a number from 6 to 10 - it should be resolved with error.

function generateNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {

		}, 3000);
	});
}

(async () => {
	try {
		let number = await generateNumber();
	} catch (e)
})