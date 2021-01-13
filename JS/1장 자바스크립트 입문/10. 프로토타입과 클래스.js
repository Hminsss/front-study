// 프로토타입과 클래스

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}
Animal.prototype.say = function () {
  // 객체 생성때마다 함수가 만들어지는 것을 방지하고자 프로토 타입을 사용
  console.log(this.sound);
};
const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

// 상속
function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dogs = new Dog('낑낑', '낑낑낑');
dogs.say();

// 클래스

class Animal2 {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    // 자동 프로토타입 등록
    console.log(this.sound);
  }
}

const dog2 = new Animal('개', '멍멍이', '멍멍');
const cat2 = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

class Dog2 extends Animal2 {
  constructor(name, sound) {
    super('개', name, sound);
  }
}

class Cat2 extends Animal2 {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog3 = new Dog2('멍멍이', '멍멍');
const cat3 = new Cat2('야옹이', '야옹');

dog3.say();
cat3.say();
