// Scope의 이해 지역, 전역

const value = 'hello!';

function myFunction() {
  console.log('My Function!: ');
  console.log(value);
}

function otherFunction() {
  console.log('Other Function!: ');
  const value = 'bye !';
  console.log(value);
}

myFunction();
otherFunction();

console.log('Global scope: ');
console.log(value);

function myFunction2() {
  const value = 'bye!';
  const anotherValue = 'world!';
  function functionInsind() {
    console.log('functionInside: ');
    const value = 'hello!';
    console.log(value);
    console.log(anotherValue);
  }
  functionInsind();
}
myFunction2();

// hoisting 아직 선언되지 않은 상수 변수를 끌어올려서 사용하는 기법
mFunction();

function mFunction() {
  console.log('hello world');
}
