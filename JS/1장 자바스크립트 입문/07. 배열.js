// 배열

const array = [1, 2, 3, 4, 5, 'hahaha', true]; // 여러 타입의 자료가 같이 들어갈 수 있다.

console.log(array);
console.log(array[5]); // 인덱스
console.log(array[7]);

const objects = [
  { 1: '멍멍이', 2: '멍' },
  { 1: '야옹이', 2: '냥' },
]; // 객체를 넣을수 도 있다.
console.log(objects[1]);
console.log(objects.length); // 배열의 길이 반환

objects.push({
  // push 쓰면 배열의 맨 뒤에 넣는다.
  1: '꼬꼬',
  2: '꼬끼오',
});

console.log(objects);

console.log(objects.length);
