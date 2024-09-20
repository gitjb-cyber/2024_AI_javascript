// 기본 타입 : String, Number, Boolean, Null, Undefined
// 참조 타입 : Array

// Array(배열) : []
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]);

// 서브웨이 빵[플랫, 화이트, 위트]
// 치즈 [슈레드, 모짜렐라, 아메리칸치즈]
// 소스 [머스타드, 핫칠리, 소금, 후추, 스언, 홀레]
// 쿠키 [화이트, 초코, 아몬드]
// 음료 [콜라, 제로콜라, 스프라이트, 커피]
// 최종메뉴 플랫 - 모짜렐라 - 소금 - 아몬드쿠키 - 콜라

const bread = ["플랫", "화이트", "위트"];
const cheese = ["슈레드", "모짜렐라", "아메리칸치즈"];
const source = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cookie = ["화이트", "초코", "아몬드"];
const drink = ["콜라", "제로콜라", "스프라이트", "커피"];

const num1 = Number(prompt("메뉴를 고르시오. 0 플랫, 1 화이트, 2 위트"));
const num2 = Number(prompt("메뉴를 고르시오. 0 슈레드, 1 모짜렐라, 2 아메리칸치즈"));
const num3 = Number(prompt("메뉴를 고르시오. 0 머스타드, 1 핫칠리, 2 소금, 3 후추, 4 스언, 5 홀레"));
const num4 = Number(prompt("메뉴를 고르시오. 0 화이트, 1 초코, 2 아몬드"));
const num5 = Number(prompt("메뉴를 고르시오. 0 콜라, 1 제로콜라, 2 스프라이트, 3 커피"));

console.log(`최종 메뉴는 ${bread[num1]}-${cheese[num2]}-${source[num3]}-${cookie[num4]}-${drink[num5]}`);