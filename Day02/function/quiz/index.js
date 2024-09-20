function hello(x){
    return `hello ${x}님!`;
}

function ping(x){
    return `${x}핑!`;
}

function lucky(x){
    return `${x}이라니 러키비키 잖아😝`
}

function square(x, y){
    return x ** y;
}

function date(x){ // 20240920
    year = x / 10000;
    month = x % 10000 / 100;
    day = x % 100;
    return `${year}년 ${month}월 ${day}일`;
}

function mbti(x){ // enfj
    if (x.substr(0) == "e"){
        m = "외향적"
        if (x.substr(1) == "n"){
            b = "감각적"
            if (x.substr(2) == "t"){
                t = "이성적"
                if(x.substr(3) == "j"){
                    i = "계획적"
                }else{
                    i = "즉흥적"
                }
            }else {
                t = "감성적"
                if(x.substr(3) == "j"){
                    i = "계획적"
                }else{
                    i = "즉흥적"
                }
            }
        }else{
            b = "직관적"
            if (x.substr(2) == "t"){
                t = "이성적"
                if(x.substr(3) == "j"){
                    i = "계획적"
                }else{
                    i = "즉흥적"
                }
            }
        }
    }else {
        m = "내향적"
        if (x.substr(1) == "n"){
            b = "감각적"
            if (x.substr(2) == "t"){
                t = "이성적"
                if(x.substr(3) == "j"){
                    i = "계획적"
                }else{
                    i = "즉흥적"
                }
            }
        }
    }

    return `${m} ${b} ${t} ${i}`;
}

function mbti1(a, b, c, d){
    const mbtiMap = {
        e : "외향적",
        i : "내향적",
        s : "감각적",
        n : "직관적",
        t : "이성적",
        f : "감성적",
        j : "계획적",
        p : "즉흥적",
    }
    return `${mbtiMap[a]}, ${mbtiMap[b]}, ${mbtiMap[c]}, ${mbtiMap[d]} 이시군요!`
}


function zodiac(x){
    const target = x % 12;
    const animal = {
        0: "원숭이",
        1: "닭",
        2: "개",
        3: "돼지",
        4: "쥐",
        5: "소",
        6: "호랑이",
        7: "토끼",
        8: "용",
        9: "뱀",
        10: "말",
        11: "양",
    }

    return `${animal[target]}띠!`
}






