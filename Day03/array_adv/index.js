// String, Number, Boolean, Array
const arr = ["Samsung", "LG", "Apple", "Google"];

arr.push("Hyundai"); // Hyundai 뒤에 추가
arr.unshift("Hybe"); // Hybe 앞에 추가
arr.pop(); // 맨 뒤에 요소 빼기
arr.shift(); // 맨 앞에 요소 빼기
arr.reverse(); // 배열 거꾸로 ["Google", "Apple", "LG", "Samsung"]
arr.indexOf("LG"); // 몇번째인지 : 1
arr.indexOf("toyota"); // -1
arr.includes("Google"); // true false


// 유저에게 뉴스기사 입력, 찾고싶은 단어 입력
// 있으면 단어가 있습니다!, 없으면 단어가 없습니다.

const news = prompt("뉴스기사");
const word = prompt("찾고싶은 단어 입력");
const words = news.split(" ");
const hasWord = words.includes(word) ?  "단어가 있습니다!" : "단어가 없습니다.";
alert(hasWord);
