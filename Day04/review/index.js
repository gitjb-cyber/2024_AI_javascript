// 1. [10, 20, 30, 40, 50]을 30이하면 100더하기, 아니면 200 더하기
const arr = [10, 20, 30, 40, 50];
arr.map((x) => {
    return x <= 30 ? x + 100 : x + 200;
});

// 2. ["americano", "latte", "vanilla", "mocha", "mint", "tea"]
//  - 5글자 이하면 대문자, 아니면 '☕'

const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];
coffee.map((x) => x.length <= 5 ? x.toUpperCase() : "☕");

// 1줄 일때 return 없애기 가능
const add = (x, y) => x + y;
const sub = (x, y) => x - y;

// 2줄 이상 X
const mul =  (x, y) => {
    const a = '123';
    return x*y;
};