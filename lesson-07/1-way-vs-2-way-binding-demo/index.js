function oneWayBinding() {
  let prefix = 'One way binding value';
  let model = prefix;
  let counter = 0;

  let changeModelButton = document.getElementById('change-model-one-way');
  let modelValue = document.getElementById('one-way-model-value');

  function render() {
    modelValue.innerText = model;
  }

  changeModelButton.addEventListener('click', () => {
    model = `${prefix}-${counter++}`;

    render();
  });

  render();
}

function twoWayBinding() {
  let prefix = 'Two way binding value';
  let model = prefix;
  let counter = 0;

  let changeModelButton = document.getElementById('change-model-two-way');
  let modelValue = document.getElementById('two-way-model-value');
  let input = document.getElementById('two-way-input');

  function render() {
    modelValue.innerText = model;
    input.value = model;
  }

  changeModelButton.addEventListener('click', () => {
    model = `${prefix}-${counter++}`;

    render();
  });

  input.addEventListener('keypress', (e) => {
    model = e.target.value;

    render();
  });

  render();
}

oneWayBinding();
twoWayBinding();
