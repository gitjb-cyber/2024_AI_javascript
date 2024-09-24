// 빨주노초파남보 박스 2000번 반복
const container = document.createElement("div");
container.classList.add("container");

// ["red", "orange", "yellow", "green", "blue", "indigo", "purple"].forEach(
//   (v) => {
//     const box = document.createElement("div");
//     box.classList.add("box");
//     box.style.backgroundColor = v;
//     document.body.appendChild(box);
//   }
// );

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
Array(2000)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % colors.length];
    container.appendChild(box);
  });

document.body.appendChild(container);
