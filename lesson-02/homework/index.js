// Homework

// Create application in order to show 10 random dogs after user clicked on the button.
// Use this API: https://dog.ceo/api/breeds/image/random via `fetch` function
// Dogs should appear below the button
// Dogs should be refreshed each time user clicked on `Show dogs` button
// Create simple UI with CSS
// Forbidden to use any of JS or CSS framework

let btnShowDog = document.getElementById('show_dog');

btnShowDog.addEventListener('click', async function(e) {
	e.preventDefault();

	let response = await fetch('https://dog.ceo/api/breeds/image/random/10');

	if (response.ok) {
  		let dogs = await response.json();

  		let dogsContainer = document.querySelector('.dogs_images');
		dogsContainer.innerHTML = "";

		for (let i = 0; i < dogs.message.length; i++) {
			dogsContainer.insertAdjacentHTML('beforeend', '<img src="' + dogs.message[i] + '" alt="Dog">');
		}
	} else {
  		alert("Ошибка HTTP: " + response.status);
	}
});