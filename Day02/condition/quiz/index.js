// CGV 프로그램

// 1. 영화 고르기 - ["베테랑2", "에일리언", "사랑의하츄핑"]
// 2. 좌석 등급 고르기 - Standard[10000], couple[20000], premi[15000], economy[8000]
// 3. 팝콘 고르기 - 일반[6000], 캬라멜[6500], 치즈[6500], 반반[7000]
// 4. 음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
// 5. 나이 입력 - 13세 이하면 30% 할인, 60세 이상 20% 할인(영화만)
// 콘솔 - 영화, 좌석, 팝콘, 음료, 총 금액 입니다.


const movie = {
        name : ["베테랑2", "에일리언", "사랑의하츄핑"],
        seat : [
        {name : "Standard", price : 10000},
        {name : "Couple", price : 20000},
        {name : "Premi", price : 15000},
        {name : "Economy", price : 8000},
    ],
};

const shop = {
    popcorn: [
        {name : "일반 팝콘", price : 6000},
        {name : "캬라멜 팝콘", price : 6500},
        {name : "치즈 팝콘", price : 6500},
        {name : "반반 팝콘", price : 7000},
    ],
    beverage: [
        {name : "탄산", price : 2000},
        {name : "에이드", price : 3000},
        {name : "커피", price : 3000},
    ],
};

const movieChoose = Number(prompt(`${movie.name} 중 영화를 고르세요 (0~2)`));
const seatChoose = Number(prompt(`${movie.seat[0].name}, ${movie.seat[1].name}, ${movie.seat[2].name}, ${movie.seat[3].name} 중  고르세요 (0~3)`));
const popcornChoose = Number(prompt(`${shop.popcorn[0].name}, ${shop.popcorn[1].name}, ${shop.popcorn[2].name}, ${shop.popcorn[3].name}, 중  고르세요 (0~3)`));
const beverageChoose = Number(prompt(`${shop.beverage[0].name}, ${shop.beverage[1].name}, ${shop.beverage[2].name} 중  고르세요 (0~2)`));
const age = Number(prompt("나이"));


const total = movie.seat[seatChoose].price + shop.popcorn[popcornChoose].price + shop.beverage[beverageChoose].price;
const msg = `${movie.name[movieChoose]}, ${movie.seat[seatChoose].name}, ${shop.popcorn[popcornChoose].name}, ${shop.beverage[beverageChoose].name}`;

if(age <= 13){
    const total = movie.seat[seatChoose].price * 0.7 + shop.popcorn[popcornChoose].price + shop.beverage[beverageChoose].price;
    console.log(`${msg}, 총 금액: ${total}`);
} else if(age >= 60){
    const total = movie.seat[seatChoose].price * 0.8 + shop.popcorn[popcornChoose].price + shop.beverage[beverageChoose].price;
    console.log(`${msg}, 총 금액: ${total}`);
} else{
    const total = movie.seat[seatChoose].price * 1 + shop.popcorn[popcornChoose].price + shop.beverage[beverageChoose].price;
    console.log(`${msg}, 총 금액: ${total}`);
}

// const movie = ["베테랑2", "에일리언", "사랑의하츄핑"]
// const movie1 = Number(prompt("영화 : 1 베테랑2, 2 에일리언, 3 사랑의하츄핑"));
// const set1 = Number(prompt("좌석"));

// const set = {
//     Standard : 10000, 
//     couple : 20000, 
//     premi : 15000, 
//     economy : 8000,
// };
// if (set1 == 0){
//     const set2 = set.Standard;
// }else if(set2 == 1){
//     const set2 = set.couple;
// }else if(set2 == 2){
//     const set2 = set.premi;
// }else {
//     const set2 = set.economy;
// }
// const snect1 = Number(prompt("팝콘"));
// const snect = {
//     일반: 6000, 
//     캬라멜: 6500, 
//     치즈: 6500, 
//     반반: 7000,
// };
// if (snect1 == 0){
//     const snect2 = snect.일반;
// }else if(snect1 == 1){
//     const snect2 = snect.캬라멜;
// }else if(snect1 == 2){
//     const snect2 = snect.치즈;
// }else {
//     const snect2 = snect.반반;
// }

// const drink1 = Number(prompt("음료"));
// const drink = {
//     탄산: 2000, 
//     에이드: 3000, 
//     커피: 3000,
// }
// if (drink1 == 0){
//     const drink2 = drink.일반;
// }else if(drink1 == 1){
//     const drink2 = drink.캬라멜;
// }else if(drink1 == 2){
//     const drink2 = drink.치즈;
// }else {
//     const drink2 = drink.반반;
// }

// const age = Number(prompt("나이"));
// if(age < 13){
//     set2 = set2 * 0.3;
// }else if(age > 60){
//     set2 = set2 *0.2;
// } else{
//     set2 = set2
// }
// const sum = set2 + snect2 + drink2;
// console.log(`${movie[movie1]}, ${set2}, ${snect2}, ${drink2}, 총금액 ${sum}`);





