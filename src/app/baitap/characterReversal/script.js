let str = "Trungpham";
const outputElement = document.getElementById('output');

setInterval(() => {
  str = str.slice(-1) + str.slice(0, -1);
  outputElement.textContent = str;
}, 500);