// 조건문 (조건에 맞으면 코드 실행)
const num = Number(prompt("숫자 입력"));

if (num > 0) {
    console.log("입력한 값은 양수임");
} else if(num == 0){
    console.log("0임");
} else {
    console.log("입력한 값은 음수임");
}
console.log("프로그램 끝");


// 수학 시험점수 프로그램
const math = Number(prompt("수학 점수 입력"));
if (math >= 90) {
    console.log("A");
} else if (math >= 80){
    console.log("B");
} else if (math >= 70){
    console.log("C");
} else if (math >= 60){
    console.log("D");
} else {
    console.log("수강 철회(or 군대런)");
}

// 숫자를 입력 -> 양의 홀짝, 0, 양의 홀짝
const num1 = Number(prompt("숫자 입력"));
if (num1 > 0) {
    if (num1 % 2 == 0){
        console.log("양의 짝수");
    } else {
        console.log("양의 홀수");
    }
} else if(num1 == 0) {
    console.log("0임");
} else {
    if (num1 % 2 == 0){
        console.log("음의 짝수");
    } else {
        console.log("음의 홀수");
    }
}

const isPositive = num1 > 0;    
const isNegative = num1 < 0;
const isOdd = num1 % 2 == 1;
const isEven = num1 % 2 == 0;