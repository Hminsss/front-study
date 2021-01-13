// 함수의 기본 파라미터

function calculateCircleArea(r) {
  const radius = r || 1; // 함수의 기본 파라미터
  return Math.PI * radius * radius;
}

const area = calculateCircleArea(4);
console.log(area);

function calculateCircleArea2(r = 1) {
  // 함수의 기본 파라미터
  return Math.PI * r * r;
}

const calculateCircleArea3 = (r = 1) => Math.PI * r * r;
