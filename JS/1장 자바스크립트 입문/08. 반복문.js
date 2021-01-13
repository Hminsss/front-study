// 반복문

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
} // 증가

for (let i = 10; i > 0; i--) {
  console.log(i);
} // 감소

const names = ['a', 'b', 'c'];

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// while
let j = 0;

while (j < 10) {
  console.log(j);
  j++;
}

let isFun = false;
let k = 0;
while (isFun === false) {
  console.log(k);
  k++;
  if (k === 31) {
    isFun = true;
  }
}

// for of 배열을 다룰 떄 주로 사용
const nums = [10, 20, 30, 40, 50];

for (let numss of nums) {
  console.log(numss);
}

// for in 객체를 다룰 때 주로 사용

const doggy = {
  name: '멍멍이',
  sound: '멍',
  age: 2,
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}

// continue

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
  if (i === 5) break;
}

// 문제
function sumOf(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}
const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

// 퀴즈
function biggerThanThree(numbers) {
  let arrays = [];
  for (let i of numbers) {
    if (i > 3) {
      arrays.push(i);
    }
  }
  return arrays;
}

const a = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(a));
