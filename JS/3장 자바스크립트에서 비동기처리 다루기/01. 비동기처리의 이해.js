// 동기적 : 순차작업? 비동기적 : 동시작업?

// 동기형태 작업 for문하고 다음작업 함
function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + 'ms');
}

work();
console.log('다음 작업');

// 비동기적 작업
function work2(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
    callback(end - start);
  }, 0);
}

console.log('작업시작');
work2((ms) => {
  console.log('작업이 끝났어요');
  console.log(ms + 'ms 걸렸다해요');
});
console.log('다음 작업');
