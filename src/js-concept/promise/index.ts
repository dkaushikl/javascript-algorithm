// https://www.javascripttutorial.net/es6/javascript-promises/
// https://www.javascripttutorial.net/es6/promise-chaining/
//

// Promise is the best way to handle all the asynchrous operation
// Asynchronous means it can be wait until you have final outcome.

// A promise is an object that returns a value in the future.
// A promise starts in the pending state and ends in either fulfilled state or rejected state.
// Use then() method to schedule a callback to be executed when the promise is fullfiled, and catch() method to schedule a callback to be invoked when the promise is rejected.
// Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.

// Promises.all used to check whether all the promises is resolved or rejected. it takes promise array as an input.
// - rejects as soon as a promise within the iterable object rejected.

// Promise.allSettled method returns a promise that resolves after all of the given promises have either fulfilled or rejected.
// - returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// Promise.any it returns first value of resolved. if there is no any resolved promise then it returns error executor.

// Promise.race method check all the promise whether it is resolved or not. if it is resolved then it returns fastest resolved values.
// - if there is an faster and it returns a error message then it will return in catch block.

function isCompleted(completed) {
  // to create a promise, you use the promise constructor:
  return new Promise((resolve, reject) => {
    // check whether user has completed course
    setTimeout(() => {
      if (completed) {
        // if completed then return resolve
        resolve('it has been completed.');
      } else {
        // if completed then return resolve
        reject('it has been still working.');
      }
    }, 4000);
  });
}

isCompleted(true)
  .then(
    success => console.log(success),
    error => console.log(error)
  )
  .finally(() => console.log('it`s finally method'));

// Promise Chaining -> it means you can call promise multiple times and return result of last executed of then method.

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 2);
//         }, 3 * 1000);
//     });
// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 3);
//         }, 3 * 1000);
//     });
// }).then(result => console.log(result));

// function getUser(userId) {
//     return new Promise((resolve, reject) => {
//         console.log('Get the user from the database.');
//         setTimeout(() => {
//             resolve({
//                 userId: userId,
//                 username: 'admin'
//             });
//         }, 1000);
//     })
// }

// function getServices(user) {
//     return new Promise((resolve, reject) => {
//         console.log(`Get the services of ${user.username} from the API.`);
//         setTimeout(() => {
//             resolve(['Email', 'VPN', 'CDN']);
//         }, 3 * 1000);
//     });
// }

// function getServiceCost(services) {
//     return new Promise((resolve, reject) => {
//         console.log(`Calculate the service cost of ${services}.`);
//         setTimeout(() => {
//             resolve(services.length * 100);
//         }, 2 * 1000);
//     });
// }

// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then(console.log);

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 30);
// });

// promise3.then((result) => {
//     console.log(result);
// })
