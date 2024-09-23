// 일반함수 General Function[구문법]
function add(x, y){
    return x + y;
}
function substract(x, y){
    return x - y;
}

// Arrow Function[신문법]
// () => {}
const add1 = (x, y) => {return x+y;};
const substract1 = (x, y) => {return x-y;};

// ~~과일 넣으면 ~~맛 아이스크림 돌려주는 함수
const ice = (fruit) => {return `${fruit}맛 아이스크림`;}; 

// 문자 3개 넣으면 배열로 돌려주는 함수
const makeArr = (x, y, z) => {return [x, y, z];};

// 숫자를 넣으면 홀수인지 짝수인지 알려주는 함수
const oddEven = (num) => {return num % 2 == 1 ? "홀수" : "짝수";};