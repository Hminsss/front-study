// async, await 분기점을 만들기 쉬워진다.

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요');
  await sleep(1000);
  console.log('반갑습니다.');
  return true;
}

process().then((value) => {
  console.log(value);
});

// async/await 문법을 사용할 때에는, 함수를 선언 할 때 함수의 앞부분에 async 키워드를 붙여주세요.
// 그리고 Promise 의 앞부분에 await 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있습니다
