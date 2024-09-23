// short circuit

// || [or]
const a = false || true; //true
const b = false || "치즈" // "치즈"
const c = undefined || "자바스크립트" // "자바스크립트"

const username = prompt("유저 이름 입력");
alert(`${username || "Guest"}님 환영합니다.`);

function popcorn(x){
    const menu = {
        1 : "일반 팝콘",
        2 : "캬라멜 팝콘",
        3 : "치즈 팝콘",
    };
    return menu[x] || "그런거 없음";
}

// && [and]
const d = true && "탕수육"; // 탕수육
const e = false && "탕후루"; // false

const isLoggin = prompt("비밀번호 입력") == "1234";
isLoggin && alert("주인님 ㅎㅇ");






