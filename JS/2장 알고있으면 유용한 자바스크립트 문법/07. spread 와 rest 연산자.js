// Spread 객체 혹은 배열을 펼친다

const slime = {
  name: '슬라임',
};
const cuteSlime = {
  name: '슬라임',
  attribute: 'cute',
};
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple',
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const slime2 = {
  name: '슬라임',
};
const cuteSlime2 = {
  ...slime2, //✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔
  attribute: 'cute',
};
const purpleCuteSlime2 = {
  ...slime2,
  ...cuteSlime2,
  color: 'purple',
};
console.log(slime2);
console.log(cuteSlime2);
console.log(purpleCuteSlime2);
console.log(slime2 === purpleCuteSlime2);

const greenCuteSlime = {
  ...purpleCuteSlime2,
  color: 'green',
};

console.log(greenCuteSlime);
// 이런식으로 하면 객체가 가르키는게 같아짐 위에껀 각자 다른 객체를 보고있음 Spread를 사용했기 때문
const slime3 = {
  name: '슬라임',
};
const cuteSlime3 = slime3;
cuteSlime3.attrubute = 'cute';

const purpleCuteSlime3 = cuteSlime3;
purpleCuteSlime3.color = 'purple';

console.log(slime3);
console.log(cuteSlime3);
console.log(purpleCuteSlime3);
console.log(slime3 === purpleCuteSlime3);

// 배열에서의 spread

const animals = ['개', '고양이', '참새'];
const anothorAnimals = [...animals, '비둘기', ...animals];
console.log(animals);
console.log(anothorAnimals);

//  rest 퍼져있는 속성듫을 모아옴
const purpleCuteSlime4 = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple',
};

const { color, ...rest } = purpleCuteSlime4;
console.log(rest); // color를 제외한 attrubute를 넣음

//배열의 rest rest가 앞으로 올순 없다. 무조건 마지막

const numbers = [0, 1, 2, 3, 4, 5];

const [one, two, ...rests] = numbers;
console.log(rests);

// 함수 파라미터에서의 rest
function sum(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

function sum2(...params) {
  return params.reduce((acc, current) => acc + current, 0);
}

console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 함수 인자에서의 spread

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum2(...numbers2));

// 퀴즈 : 함수에 n개 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요
function max(...params) {
  let maxx = 0;
  for (let num of params) {
    if (num > maxx) {
      maxx = num;
    }
  }
  return maxx;
}

const res = max(1, 2, 3, 4, 30, 6, 7, 8, 10);
console.log(res);

/*
function max(...numbers) {
    return numbers.reduce(
      // acc 이 current 보다 크면 결과값을 current 로 하고
      // 그렇지 않으면 acc 가 결과값
      (acc, current) => (current > acc ? current : acc),
      numbers[0]
    );
  }
  
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);
  
  // 테스트 코드에서 불러오기 위하여 사용하는 코드
  export default max;
  */
