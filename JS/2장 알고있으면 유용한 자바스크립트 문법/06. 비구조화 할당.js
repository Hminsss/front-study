// 비구조화 할당(구조 분해)

//객체의 속성 뽑기와 default값 메기기
const objects = { a: 1, b: 2 };
const objects2 = { c: 1, d: 2 };
const { a, b } = objects;
console.log(a);
console.log(b);

function print({ a = 5, b = 4, c = 3 }) {
  console.log(a);
  console.log(b);
  console.log(c);
}

print(objects);
print(objects2);

const animal = {
  name: '멍멍이',
  type: '개',
};

// 다른이름을 뽑기
const nickname = animal.name;
console.log(nickname);

const { name: nickname2 } = animal;
console.log(nickname2);

// 배열 비구조화 할당

const array = [1, 2, 3];

const one = array[0];
const two = array[1];

console.log(one);
console.log(two);

const [one2, two2, three = 3] = array;

console.log(one2);
console.log(two2);
console.log(three);

// 깊이있는 객체 꺼내기

const deepObject = {
  one: {
    two: {
      name: 'hanmin',
      lang: ['kr', 'en', 'ch'],
    },
  },
  value: 5,
};

// // 방법 1
// const { name, lang } = deepObject.one.two;
// const { value } = deepObject;

// const extracted = {
//   name,
//   lang,
//   value,
// };

// console.log(extracted);

// 방법 2
const {
  one: {
    two: {
      name,
      lang: [lang1, lang2],
    },
  },
  value,
} = deepObject;

const extracted2 = {
  name,
  lang1,
  lang2,
  value,
};

console.log(extracted2);
