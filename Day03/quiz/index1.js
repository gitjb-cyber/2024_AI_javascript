// const logIn = prompt("비밀번호 설정");
// const it = logIn.includes("it");
// const it_I = logIn.includes("It");
// alert(it || it_I ? "비밀번호 설정완료" : "비밀번호 설정오류");


// 1. 유저에게 좋아하는 음식 입력, 그 음식 5번 출력

// const food = prompt("좋아하는 음식?");
// alert(food.repeat(5));

// 2. 유저에게 좋아하는 음식, 횟수 입력, 그 만큼 출력

// const food1 = prompt("좋아하는 음식, 몇 번 반복?");
// const food2 = food1.split(" "); // ["음식", "숫자"]
// alert(food2[0].repeat(parseInt(food2[1])));

// // 3. 알파벳 단어 입력, 6글자보다 작으면 소문자, 크면 대문자

// const word = prompt("알파벳 단어 입력");
// word.length > 6 ? alert(word.toUpperCase()) : alert(word.toLowerCase());


// const news = `Freedom of the Press Foundation (FPF) is excited to welcome its Daniel Ellsberg Chair on Government Secrecy, Lauren Harper.
// Last year, FPF announced the creation of the Ellsberg Chair in honor of the legendary whistleblower and FPF co-founder, Daniel Ellsberg, who passed away in June 2023. As the first Ellsberg Chair, Harper’s work will focus on highlighting and fighting the multitude of ways the government keeps secrets — from the press, from the public, and from congressional overseers. Her work will also illuminate how rampant overclassification negatively impacts everything from public health to national security.`

// alert(news.split(" "));

// 1. 유저에게 단어를 입력 -> 소문자면 대문자, 대문자면 소문자

const word = prompt("단어를 입력하세요");
function isUpperCase(str) {
    return str === str.toUpperCase();
}
isUpperCase(word) ? console.log(word.toLowerCase()) : console.log(word.toUpperCase());


// 2. 비밀번호 설정 ->
//      - 길이가 8~20 가 아니면 비밀번호 길이 오류
//      - 시작이 it, IT 로 시작 안하면 비밀번호 시작은 it, IT 로 시작해야함
//      - 특수문자 &#@! 중 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
//  위의 조건이 모두 통과 되면 비밀번호 설정 완료!

const passward = prompt("비밀번호를 설정하시오");
const isLengthValid = passward.length >= 8 && passward.length <= 20;
const isStarIT = passward.startsWith("it") || passward.startsWith("IT");
const hasSpecialChar = passward.includes("&") || passward.includes("#") || passward.includes("@") || passward.includes("!");

if(!isLengthValid){
    alert("비밀번호 길이 오류!");
}else if(!isStarIT){
    alert("비밀번호 시작은 it, IT 로 시작해야함");
}else if(!hasSpecialChar){
    alert("비밀번호에 반드시 특수문자 넣어야함");
}else{
    alert("비밀번호 설정 완료!")
}