function job() {
  return new Promise(function(resolve, reject) {
    reject();
  });
}

let promise = job();

promise

  .then(function() {
    console.log('Success 1');
  })

  .then(function() {
    console.log('Success 2');
  })

  .then(function() {
    console.log('Success 3');
  })

  .catch(function() {
    console.log('Error 1');
  })

  .then(function() {
    console.log('Success 4');
  });

// What is the output of the code above ?

// Error 1
// Success 1, Error 1
// Success 1, Success 2, Success 3, Success 4
// Success 1, Success 2, Success 3, Error 1, Success 4
// Error 1, Success 1, Success 2, Success 3, Success 4
// Error 1, Success 4
