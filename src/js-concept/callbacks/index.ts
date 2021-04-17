// Asynchronous callback functions
// Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

// callback hell is the method to use callback as multiple chaining. use callback again and again inside the function. however, code optimization and for better code it has been mentioned that use promise and async-await is best option than callback hell.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isOddNumber(num) {
//     return num % 2;
// }

// const oddNumber = numbers.filter(isOddNumber);
// console.log(oddNumber);

// 1- method

function download() {
  log('download');
  setTimeout(() => {
    console.log('23000');
  }, 23000);
}

function process() {
  log('process');
}

let url = '';
download(url);
process(url);

// async callback function
function download(url, callback?) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);

    // process the picture once it is completed
    callback(url);
  }, 3000);
}

function process(picture) {
  setTimeout(() => {
    console.log(`Processing ${picture}`);
  }, 3000);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);

// 2- method

function download(url, callback?) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
    // process the picture once it is completed
    callback(url);
  }, 3000);
}

download(url, () => {
  console.log(`Processing ....`);
});
