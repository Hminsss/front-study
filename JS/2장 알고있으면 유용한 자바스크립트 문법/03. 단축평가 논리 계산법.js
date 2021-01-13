// 단축평가 논리 계산법(Short-circuit evaluation)
// 논리 연산자를 이용하여 코드를 더 짧게 쓰는 방법

const dog = {
  name: '멍멍이',
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}
