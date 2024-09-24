// arr 함수들 
// map : 바꿔줘
// filter : 걸러줘, 어떠한 조건에 부합하는 요소만 남겨줘

[10, 20, 30, 40, 50].filter((x) => {
    return 30 > x;
}); // 30미만

[10, 20, 30, 40, 50].filter((x) => {
    return x == 20 || x == 40;
}); // 20, 40만

// every : 어떠한 조건에 모든 요소가 부합함?(return Boolean)

[10, 20, 30, 40, 50].every((x) => {
    return x > 5;
}); // true

// some : 어떠한 조건에 하나 요소가 부합함?(return Boolean)

[10, 20, 30, 40, 50].some((x) => {
    return x > 20;
}); // true

// 배열 만들기
// 10칸 만들기[] <- 모두 1로 채움
Array(10).fill(1);
Array(100).fill(1);


Array(10).fill(1).map((x) => {
    return x + 1;
});

// x : 요소, i : 순서
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array(10).fill(1).map((x, i) => {
    return i;
});
