// 함수
function add1(a, b) {
  return a + b;
}

const sum = add1(1, 2);

console.log(sum);

function hello(name) {
  console.log('Hello, ' + name + ' !');
}

hello('hanmin');

// `` 로 문자열 합치기 ( 개 편 함 )
function hello2(name) {
  console.log(`Hello, ${name} !`);
}

hello2('hanmin');

// getGrade
function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score === 89) {
    return 'B+';
  } else if (score >= 80) {
    return 'B';
  } else if (score === 79) {
    return 'C+';
  } else if (score >= 70) {
    return 'C';
  } else if (score === 69) {
    return 'D+';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// 화살표 함수
const add = (a, b) => {
  return a + b;
};
/*
const add = (a,b)=> a+b;
*/

const hello1 = (name) => {
  return `hello, ${name} !`;
};

console.log(hello1('hm'));
