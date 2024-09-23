// f(g(x))
// 요리법(재료) -> 음식
// callback : 함수 안에 함수 넣기

const cook = (recipe) => {
    console.log("요리 시작!");
    recipe();
    console.log("요리 끝!");
};

const maratang = () => {
    console.log("재료 담기");
    console.log("물 끓이기");
    console.log("소스 투하");
    console.log("재료 넣기");
    console.log("불 끄기");
    console.log("재료 담기");
};
const taco = () => {
    console.log("살사 소스 준비");
    console.log("나초칩");
    console.log("또띠아 준비");
    console.log("고기 올리기");
    console.log("소스 뿌리기");
};
const ramen = () => {
    console.log("물 끓이기");
    console.log("면 넣기");
    console.log("스프 넣기");
    console.log("계란넣기");
};

cook(maratang);
cook(taco);
cook(ramen);

const skill = (magic) => {
    console.log("스킬 사용");
    magic();
    console.log("스킬 완료");
}

const fire = () => {
    console.log("불 마법 사용");
}
const ice = () => {
    console.log("얼음 마법 사용");
}
const tree = () => {
    console.log("자라나라 나무나무");
}