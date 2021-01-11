// 조건문

//if
const a = 1; // 전역상수

if (a + 1 === 2){
    const a = 2; // 지역상수
    console.log("a + 1 이 2 입니다.");
    console.log("if문 안의 a 값은 " + a);
}
console.log("if문 밖의 a 값은 " + a);

//if else
const b = 10;

if( b > 15){
    console.log('a가 15보다 큽니다');
} else{
    console.log('a가 15보다 크지 않습니다.');
}

// if else if else
const c = 5;

if(a === 5){
    console.log('5입니다.');
} else if (a === 10){
    console.log('10입니다.');
} else{
    console.log('5도 아니고 10도 아닙니다.');
}

//switch case
const device = 'iphone';

switch(device){
    case 'iphone':
        console.log('아이폰!');
        break;
    case 'ipad':
        console.log('아이패드!');
        break;
    case 'galaxy pad':
        colsole.log('갤럭시 패드!')
        break;
    default:
        console.log('모르곘네요...');
}