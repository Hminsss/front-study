// Truthy와 Falsy 참같은것 거짓같은것 ?

function print(person) {
  if (!person) {
    // null checking \ person === undefined || person === null
    console.log('undefined');
    return;
  }
  console.log(person.name);
}

const person = {
  name: 'Jhon',
};

print(person);
print();

// ✔ falsy한 값들 나머지는 거의 truthy
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

const value = { a: 1 };

if (value) {
  console.log('value가 trythy 하네요');
}

// truthy falsy 값 알아보기 !! 붙이기
