// makeCoffee 함수 만들기 [커피 준비 - 커피 완료]
// americano, latte, vanilla 함수
// makeCoffee(americano) 

const makeCoffee = (coffee) => {
    console.log("커피 준비");
    coffee();
    console.log("커피 완료");
}
const americano = () => {
    console.log("아메리카노");
    console.log("원두 갈기");
    console.log("샷 내리기 ");
    console.log("얼음 넣기");
    console.log("물 붇기");
    console.log("샷 넣기");
}
const latte = () => {
    console.log("라떼");
    console.log("원두 갈기");
    console.log("샷 내리기 ");
    console.log("얼음 넣기");
    console.log("우유 붇기");
    console.log("샷 넣기");
}
const vanilla = () => {
    console.log("바닐라");
    console.log("원두 갈기");
    console.log("샷 내리기 ");
    console.log("얼음 넣기");
    console.log("우유 붇기");
    console.log("샷 넣기");
    console.log("바닐라 시럽 넣기");
}

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);
makeCoffee(() => {
    console.log("아메리카노");
    console.log("원두 갈기");
    console.log("샷 내리기 ");
    console.log("얼음 넣기");
    console.log("물 붇기");
    console.log("샷 넣기");
    console.log("망고 넣기");
});