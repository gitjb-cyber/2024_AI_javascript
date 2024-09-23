// 배열을 함수에 넣기

// [1,2,3,4,5] 두배
const double = (x) =>{
    return x * 2;
};
const num = [1,2,3,4,5].map(double);

// [1,2,3,4,5] 홀수면 두배 짝수면 세배
const trp = (x) =>{
    return x % 2 == 1 ? x * 2 : x * 3;
};
const num1 = [1,2,3,4,5].map(trp);

// [1,2,3,4,5] 3이하면 '🍒' 아니면 '🍉'
const fruit = (x) => {
    return x <= 3 ? '🍒' : '🍉';
};
const num2 = [1,2,3,4,5].map(fruit);

// console.log(num);
// console.log(num1);
// console.log(num2);

const fruitArray = ["watermelon", "cherry", "banana", "avocado", "apple", "orange", "pineapple", "strawberry"];

// // 문자 길이가 7글자 이상 대문자, 아님 소문자
// const seven = (x) => {
//     return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
// };
// console.log(fruitArray.map(seven));

// // 알파벳 a가 들어가면 대문자, 아님 소문자
// const aCheck = (x) => {
//     return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
// };
// console.log(fruitArray.map(aCheck));

// // 알파벳 a를 "🍒"로 바꾸기
// const cherry = (x) => {
//     return x.replaceAll("a", "🍒");
// };
// console.log(fruitArray.map(cherry));


const starbucks = [{name : "americano", price : 4500, shots : 2, ingredients : ["wator", "beans"] },
{name : "latte", price : 6000, shots : 2, ingredients : ["milk", "beans"] },
{name : "java chip", price : 6500, shots : 2, ingredients : ["milk", "wheat", "beans"] },
{name : "honey black tea", price : 5700, shots : 1, ingredients : ["grapefruit", "wator", "source"] },
];

// 1. 가을 시즌 이벤트 -> 모든 가격을 10% 할인한 가격
const autumn = starbucks.map((x) => {
    x.price = x.price * 0.9; // 숫자
    return x;
});


// 2. 두유 시즌 이벤트 -> 성분에 두유 강제 추가
const soyMilk = starbucks.map((x) => {
    x.ingredients.push("soy milk"); // 배열[]
    return x;
});

// 3. 스타벅스 아아 기념 -> 이름이 아메리카노 면 2000원 할인, 샷 하나더
const americanoPlus = starbucks.map((x) => {
    if (x.name == "americano"){
        x.price = x.price - 2000;
        x.shots = x.shots + 1;
        return x;
    }else {
        return x;
    }
});

// 4. 인플레이션 -> 모든 가격 20% 추가
const inflation = starbucks.map((x) => {
    x.price = x.price * 1.2;
    return x;
});

// 최종결과 합쳐져서 들어감 
console.log(autumn);
console.log(soyMilk);
console.log(americanoPlus);
console.log(inflation); 
