// Promise es6에서의 비동기처리를 쉽게 하기위한 장치

function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

// increaseAndPrint(0, (n) => {
//   increaseAndPrint(n, (n) => {
//     increaseAndPrint(n, (n) => {
//       increaseAndPrint(n, (n) => {
//         increaseAndPrint(n, (n) => {
//           console.log('작업 끝!');
//         });
//       });
//     });
//   });
// });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('result'); // 성공하는 상황
  }, 1000);
});

myPromise.then((result) => {
  console.log(result);
});

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error()); // 실패하는 상황
//   }, 2000);
// });

// myPromise2
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

function increaseAndPrint2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint2(0)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .catch((e) => {
    console.error(e);
  });
