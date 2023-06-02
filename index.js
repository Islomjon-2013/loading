const counter = document.querySelector(".counter");
const bar = document.querySelector(".loading-bar-front");
let ind = 0;

function updateNum() {
  counter.innerHTML = ind + "%";
  bar.style.width = ind + "%";
  ind++;
  if (ind < 101) {
    setTimeout(updateNum, 20);
  }
}
updateNum();
