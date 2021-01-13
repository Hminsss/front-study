// 단축평가 논리 계산법(Short-circuit evaluation)
// 논리 연산자를 이용하여 코드를 더 짧게 쓰는 방법

const dog = {
  name: '멍멍이',
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name);

// 앞쪽이 true이면 뒤쪽이 출력됨
console.log(true && 'hello'); // truthy 출력
console.log(false && 'hello'); // falsy false 출력
console.log('hello' && 'bye'); // truthy bye 출력
console.log(null && 'hello'); // falsy null출력
console.log(undefined && 'hello'); // falsy undefined 출력

// or 연산자

const namelessDog = {
  name: '',
};

function getNames(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다.';
  }
  return name;
}

const name2 = getNames(namelessDog);
console.log(name2);

function getNamess(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

// 앞쪽이 false 이면 출력
console.log(true || 'hello'); // truthy true 출력
console.log(false || 'hello'); // falsy hello 출력
console.log('hello' || 'bye'); // truthy hello 출력
console.log(null || 'hello'); // falsy hello출력
console.log(undefined || 'hello'); // falsy hello 출력
