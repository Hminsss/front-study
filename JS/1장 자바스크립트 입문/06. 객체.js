//객체

const dogs = {
  name: '멍멍이',
  age: 2,
  'key with space': 1,
};

console.log(dogs.name);
console.log(dogs.age);

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
};

const captainAmerica = {
  name: '토니스타크',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카',
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역활을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

// 비구조 할당 1
function print1(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역활을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print1(ironMan);
print1(captainAmerica);

// 비구조 할당 2
function print2({ alias, name, actor }) {
  const text = `${alias}(${name}) 역활을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print2(ironMan);
print2(captainAmerica);

// 객체안에 함수넣기
const dog = {
  name: '멍멍이',
  sound: '멍',
  say: function say() {
    console.log(this.sound);
  },
  /*
    say : function (){
        console.log(this.sound)
    }
    */
  /*
    say(){
        console.log(this.sound)
    }

    화살표 함수는 사용할 수 없음 this를 모르기 때문
    */
};

const cat = {
  name: '냐옹이',
  sound: '냥',
};
cat.say = dog.say;
dog.say();
cat.say();
/*
const catSay = cat.say;
catSay() -> 오류 this를 모르기 때문이다.
*/

// getter와 setter

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다.');
    return this.a + this.b;
  },
};

console.log(numbers.sum);

const dogss = {
  _name: '멍멍이',
  set name(value) {
    console.log('이름이 바뀝니다.');
    this._name = value;
  },
};
dogss._name = '뭉뭉이';
console.log(dogss._name);
dogss.name = '멍뭉이';
console.log(dogss._name);

const num = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('Calculate');
    this.sum = this._a + this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  get a() {
    return this._a;
  },
  set b(value) {
    this._b = value;
    this.calculate();
  },
  get b() {
    return this._b;
  },
};

console.log(num._a);
console.log(num._b);
console.log(num.sum);

num.a = 3;
num.b = 5;

console.log(num.sum);
