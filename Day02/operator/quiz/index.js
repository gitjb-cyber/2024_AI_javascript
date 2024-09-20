// 1. 출생년도를 물어보고 2005년 이하이면
//  성인, 아니면 미성년자

// 2. 놀이기구 키
//  150cm 이하면 탈 수 없습니다. 아니면 탈 수 있습니다.

// 3. 
const year = Number(prompt("출생연도를 입력"));
const adult = year <= 2005 ? "성인" : "미성년자";
console.log("adult");

const heihgt = Number(prompt("키가 어떻게 됩니까?"));
const short = heihgt <= 150 ? "150cm 이하면 탈 수 있습니다." : "탈 수 있습니다.";
console.log(short);

const num = Number(prompt("10000 ~ 99999 사이의 정수를 입력하시오.")); //12345
const num1 = parseInt(num / 10000);
const num2 = parseInt(num / 1000 - num1 * 10);
const num3 = parseInt(num % 1000 / 100);
const num4 = parseInt(num % 100 / 10);
const num5 = parseInt(num % 10);
console.log(`${num1}만 ${num2}천 ${num3}백 ${num4}십 ${num5}`);

const tictoc = Number(prompt("정수 입력"));
const sec = tictoc % 60;
const min = parseInt(tictoc / 60);
console.log(`${min}분 ${sec}초`);


