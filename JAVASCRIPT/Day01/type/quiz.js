

// const num1 = prompt("첫번째 숫자 입력");
// const num2 = prompt("두번째 숫자 입력");
// console.log(`두 수의 합은 ${Number(num1) + Number(num2)}`);

// const num3 = Number(prompt("세번째 숫자 입력"));
// const num4 = Number(prompt("네번째 숫자 입력"));


// ask : prompt, answer : console

const side = Number(prompt("한 변의 길이를 입력하시오"));
console.log(`정사각형의 넓이는 ${side * side}, 둘레는 ${side*4}`)

const tri1 = Number(prompt("밑변의 길이를 입력하시오"));
const tri2 = Number(prompt("높이를 입력하시오"));
console.log(`정삼각형의 넓이는 ${tri1*tri2/2}`);

const crlc = Number(prompt("반지름을 입력하시오"));
console.log(`원의 넓이는 ${crlc*crlc*3.14}, 둘레는 ${crlc*2*3.14}`);

const age = Number(prompt("출생년도를 입력하시오"));
console.log(`현재 나이 = ${2024 - age + 1}`);

const won = Number(prompt("얼마를 환전할 것인가?"));
console.log(`엔화로 ${won*0.11}엔 입니다.`);