// operator 연산자
// 산술 연산자 (+, -, *, /, %, **)
const a1 = 1 + 1;
const a2 = 10 - 1;
const a3 = 2 * 4;
const a4 = 3 ** 3; // 제곱 3^3 = 27
const a5 = 6 / 2;
const a6 = 8 % 3;
const a7 = -19; // 부호 반대 연산자

const a8 = "치즈" + "떡볶이"; // 문자열 연결 연산자
const a9 = 10 + "인분"; // 암묵적 타입변환 + 문자열 연결 연산

// 대입 연산자 (=)
const b = "롤";
const b1 = b + "정병겜";

// 비교 연산자[Boolean 타입 귀결] (< > <= >= == != ===)
const c = 5 > 3; // true
const c1 = 5 < 3; // flase
const c2 = 5 >= 3; // true
const c3 = 5 <= 3; // flase
const c4 = 1 == 1; // true
const c5 = 1 != 1; // flase
const c6 = 1 === 1; // 타입까지 같니? (1 == "1" 은 true)

// 논리 연산자 (&&[and], ||[or], ![not])
// &&[and] : 모두 true 여야 true
const d = 5 > 1 && 3 > 1; // true
const d1 = 5 > 1 && 5 < 3; // false

// ||[or] : 하나만 true 면 true
const d2 = 5 < 2 || 3 < 1 || 1 == 1; // true

// ![not]
const d3 = !false; // true
const d4 = !!false; // false
const d5 = !"장원영"; // false 암묵적 불리언화
const d6 = !(5 > 1 && 3 > 1); // false

// 삼항 연산자 (?)
const e = 10 > 5 ? "아이유" : "윤하"; // 아이유
const e1 = 3 < 1 ? "혜리" : "덕선"; // 덕선













