// 버스 종류
// 마을버스, 시내버스, 고속버스, 심야버스
// 1500  2000    8000    10000
// 경기권, 충청권, 강원권, 제주권
// +2000    +3000   +3000   +10000
// 일반석, 프리미엄석, 넷플석
//  +1000   +3000   +4000
// 나이 13세 이하 20%, 65세 이상 50%

const busChoose = {
    bus : [
        {name : "마을버스", price : 1500},
        {name : "시내버스", price : 2000},
        {name : "고속버스", price : 8000},
        {name : "심야버스", price : 10000},
    ],
    region : [
        {name : "경기권", price : 2000},
        {name : "충청권", price : 3000},
        {name : "강원권", price : 3000},
        {name : "제주권", price : 10000},
    ],
    seat : [
        {name : "일반석", price : 1000},
        {name : "프리미엄석", price : 3000},
        {name : "넷플석", price : 4000},
    ]
};

const busChoose1 = Number(prompt(`${busChoose.bus[0].name}, ${busChoose.bus[1].name}, ${busChoose.bus[2].name}, ${busChoose.bus[3].name}\n 버스를 고르시오(0~3)`));
const busChoose2 = Number(prompt(`${busChoose.region[0].name}, ${busChoose.region[1].name}, ${busChoose.region[2].name}, ${busChoose.region[3].name}\n 행선지를 고르시오(0~3)`));
const busChoose3 = Number(prompt(`${busChoose.seat[0].name}, ${busChoose.seat[1].name}, ${busChoose.seat[2].name}\n 좌석을 고르시오(0~2)`));
const age = Number(prompt(`나이를 입력하시오`));

const msg = `${busChoose.bus[busChoose1].name}, ${busChoose.region[busChoose2].name}, ${busChoose.seat[busChoose3].name}`
const total = busChoose.bus[busChoose1].price + busChoose.region[busChoose2].price + busChoose.seat[busChoose3].price

if(age <= 13){
    console.log(`${msg}, 가격 : ${total * 0.8}`);
} else if(age >= 65){
    console.log(`${msg}, 가격 : ${total * 0.5}`);
} else {
    console.log(`${msg}, 가격 : ${total * 1}`);
}




