const button = document.querySelector("button");
let state = {
  buttonText: "Initial text"
};
let counter = 0;

function render(state) {
  button.innerText = state.buttonText;
}

(function initialize() {
  window.history.replaceState(state, null, "");
  render(state);
})();

function handleButtonClick() {
  state.buttonText = "I clicked the button!";
  window.history.pushState(state, null, `/test${counter++}`);
  render(state);
}

button.addEventListener("click", handleButtonClick);

window.onpopstate = function (event) {
  if (event.state) { state = event.state; }
  render(state);
};
