// 배열 내장함수


// 배열안의 원소들로 일괄적인 작업하기 forEach
const superheroes = [
    '아이언맨',
    '캡틴아메리카',
    '토르',
    '닥터 스트레인지'
]

function print(hero){
    console.log(hero)
}

superheroes.forEach(print)

// map

const array = [1,2,3,4,5,6,7,8];
const squared = []

array.forEach(n =>{
    squared.push(n*n)
})

console.log(squared)

const square = n => {
    return n*n
}
const squared2 = array.map(square)
// const squared2 = array.map(n => n*n)
console.log(squared2)

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
]

const texts = items.map(item => item.text)

console.log(texts)

//index of
const index = superheroes.indexOf('토르')
console.log(index)

// find index 특정 조건에서 인덱스 번호를 알고싶을 때
const todos =[
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    }, 
]
const indexs = todos.findIndex(todo => todo.id === 3)
console.log(indexs)

//filter 특정 조건을 만족하는 원소를 찾아 새로운 배열을 만듬

const tasksNotDone = todos.filter(todo => todo.done === false)
console.log(tasksNotDone)

// shift 앞 인덱스 빠짐
const numbers = [10, 20, 30, 40, 50]
console.log(numbers)
numbers.shift()
console.log(numbers)

// pop 뒤 인덱스 빠짐
numbers.pop()
console.log(numbers)

// unshift 앞 인덱스 추가
numbers.unshift(5)
console.log(numbers)

// push 뒤 인덱스 추가

// concat 배열 합치기

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const concated = arr1.concat(arr2)
console.log(concated)

// join 배열안의 값을 문자열 형태로 합
console.log(arr1.join())
console.log(arr1.join(' '))
console.log(arr1.join('--'))

// splice 배열에서 특수 항목을 제거
const num1 = [10,20,30,40]
const index1 = num1.indexOf(30);
const spliced = num1.splice(index1, 1) // index가 2인것 부터 1개 떼서 가져옴
console.log(num1)
console.log(spliced)

// slice 기존 것은 건들이지 않음
const sliced = num1.slice(0,1);
console.log(num1)
console.log(sliced)

// reduce
const num2 = [1, 2, 3, 4, 5]
const sum = num2.reduce((accumulator , current) => accumulator + current, 0 ) // accumulator의 초기값 = 0 이고 current에 배열하나씩 들어가서 더해짐
console.log(sum)

const avr = num2.reduce((accumulator , current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length
    }
    return accumulator + current
}, 0 ) // a

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc,current) => {
    if (acc[current]){
        acc[current] += 1
    } else {
        acc[current] = 1;
    }
    return acc;
}, {})

console.log(counts)

// 퀴즈

function countBiggerThanTen(numbers){
    let cot = 0
    for (let  i of numbers){
        if(i > 10){
            cot+=1
        }
    }
    return cot
}

const count1 = countBiggerThanTen([1,2,3,5,10,20,30,40,50,60])
console.log(count1)