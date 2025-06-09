const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB call , cryptography , network

  setTimeout(() => {
    console.log("Async task is comelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

// 2

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise consumed 2");
});

// promise 3

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "aryan", age: 19 });
  }, 1000);
});

promiseThree.then(function (x) {
  console.log(x);
});

// promise 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Aryan", email: "aryan@mail.com" });
    } else {
      reject("Error");
    }
  }, 1000);
});

promiseFour
  .then(function (x) {
    console.log(x);
    return x.userName;
  })
  .then((name) => {
    console.log(name); // get only name
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(function () {
    console.log("this is form finally");
  });

// promise no 5  by async

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "JavaScript", email: "aryan@mail.com" });
    } else {
      reject("Error in Js");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

// --------------------------    this is for Next lec 41

// async function getallUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (E) {
//     console.log("E: ", E);
//   }
// }

// getallUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
