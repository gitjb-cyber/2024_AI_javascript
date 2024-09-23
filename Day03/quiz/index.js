// 1. 숫자 입력 홀짝 돌려주는 함수
// 2. 숫자 입력 5의 배수이면 5의 배수, 아니면 아님
// 3. 숫자 입력 1 - 일반 팝콘, 2 - 캬라멜 팝콘, 3 - 치즈 팝콘, 그 외 - 그런거 없음 
// 4. 문자열 3개 넣으면 배열로 돌려주는 함수 


function sniffling(x){
    return x % 2 == 1 ? "홀수" : "짝수";
}

function five(x){
    return x % 5 == 0 ? "5의 배수 입니다." : "5의 배수가 아닙니다.";
}


function popcorn(x){
    if(x == 1){
        return "일반 팝콘";
    }else if(x == 2 ){
        return "캬라멜 팝콘";
    }else if(x == 3){
        return "치즈 팝콘";
    }else{
        return "그런거 없음";
    }
}

function popcorn2(x){
    return `${x} 팝콘`;
}

// 순수성 위배
/*function popcorn1(x){
    if(x == 1){
        console.log("일반 팝콘");
    }else if(x == 2 ){
        console.log("캬라멜 팝콘");
    }else if(x == 3){
        console.log("치즈 팝콘");
    }else{
        console.log("그런거 없음");
    }
}*/

function str(x, y, z){
    return [x, y, z];
}


// 어떤 과일 이름 넣으면 ~~맛 아이스크림 돌려주는 함수
function fruit(x){
    return `${x}맛 아이스크림`;
}

function fruitArray(a, b, c){
    return [a, b, c];
}

// 홀수면 true, 짝수면 false
function oddEven(x){
    return x % 2 == 1;  
}



