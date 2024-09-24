// // 1. 3의 배수만
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) =>{
//     return x % 3 == 0;
// });

// // 2. 4~8 만
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) =>{
//     return x >= 4 || x <= 8;
// });


// const fruitArray = [
//     "watermelon", 
//     "cherry",
//     "avocado",
//     "apple",
//     "orange",
//     "pineapple",
//     "strawberry",
// ];

// // 3. 알파벳 o가 들어있는 것만
// fruitArray.filter((x) => {
//     return x.includes("o");
// });

// // 4. 문자 길이 6글자 이상만
// fruitArray.filter((x) => {
//     return x.length >= 6;
// });

// // 5. 문자 길이 짝수만, 대문자화
// // 메소드 체이닝(method chaining) 함수 다음 함수
// fruitArray.filter((x) => {
//     return x.length % 2 == 0;
// }).map((x) => {
//     return x.toUpperCase();
// });

// 유저에게 정수 n(최대숫자), k(배수)를 입력 받으면 이하 도출
// n = 10, k = 3 -> [3, 6, 9]
// n = 15, k = 5 -> [5, 10, 15]

// const maximum = Number(prompt("최대 숫자 입력"));
// const drainage = Number(prompt("배수 입력"));
// const test = (maximum, drainage) => {
//     return Array(maximum).fill(0).map((x, i) => {
//     return i + 1;
// }).filter((x) => {
//     return x % drainage == 0;
// });
// };

// todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"]
// finished = [false, false, true, true]
// todolist에서 false인 애들만 살리기
// --> newDoTolist = ["점심먹기", "복습하기"]

// const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// const finished = [false, false, true, true];

// // 함수화 [패턴화]
// const newDoTolist = (todolist, finished) => {
//     return todolist.filter((x, i) => {
//         return !finished[i]; // true 만 제외
//     });
// };  //--> newDoTolist = ["점심먹기", "복습하기"]


// x기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화 시킨거 .split("x");
// "oxooxoxxox" [1, 2, 1, 0, 1, 0]
// ["o", "oo", "o", "", "o", ""]

// "xabcxdefxghi" [0, 3, 3, 3]
const word = "xabcxdefxghi";
const xDivide = (word) => word.split("x").map((x) => x.length);

// // 모음 : a e i o u 는 대문자
// const fruits = ["melon", "kiwi", "apple", "banana", "orange"];
// fruits.map((x) => { //"melon", "kiwi", "apple", "banana", "orange"
//     return x.split("").map((x) => {
//         return i = x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' ? x.toUpperCase() : x;
// })
// }

// 모음 : a e i o u 는 대문자
const fruits = ["melon", "kiwi", "apple", "banana", "orange"];
const vowels = ["a", "e", "i", "o", "u"];
fruits.map((x) => 
    x
        .split("") // [['m', 'e', 'l', 'o', 'n'], ['k', ...], ...]]
        .map((y) => vowels.some((v) => v == y) ? x.toUpperCase() : x)
);

// 1 ~ 100 까지 만들고, 369 만들기
// [1, 2, "👏"]
// 알고리즘 문제 풀때
// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서

const num = ["3", "6", "9"];
const thr = Array(100).fill(1).map((x, i) => String(i + 1))
.map((x) => x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x);