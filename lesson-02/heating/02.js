function job(state) {
  return new Promise(function(resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = job(true);

promise

  .then(function(data) {
    console.log(data);

    return job(false);
  })

  .catch(function(error) {
    console.log(error);

    return 'Error caught';
  })

  .then(function(data) {
    console.log(data);

    return job(true);
  })

  .catch(function(error) {
    console.log(error);
  });

//What is the output of the code above?

// error, success, Error caught
// success, error, success, error
// error, Error caught, success
// success, success
// success, error, Error caught
