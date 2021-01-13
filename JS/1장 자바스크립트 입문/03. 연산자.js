// 연산자

// 대입연산자
let value = 1; 
a+=3;
a-=3;

// 산술연산자
let a = 1 + 2 ; 

// 증감연산자
console.log(a++) 
console.log(a)
console.log(++a)

// 논리연산자
// Not !
const a = !true; // false
// And  &&
const b = true && true; // true
const c = false && true; // true
// Or ||
const d = true && false; // true
const e = false && false; // false

//비교연산자
const f = 1;
const g = '1';
const equals1 = f === g; // false 타입검사 o
const equals2 = f == g; //true 타입검사 x

const h = null;
const i = undefined;
const equals3 = h == i; //true
const equals4 = h === i; // false

const notEquals = h != i;
const notEquals2 = h!==i;

const j = 10;
const k = 20;
const l = 30;

console.log(a<=b); // true


//문자열 합치기
const m = '안녕';
const n = '하세요';

console.log(a+b);

