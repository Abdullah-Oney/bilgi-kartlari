const cards = [
  "İnsan beyni yaklaşık 86 milyar nöron içerir.",
  "Bir ahtapotun üç kalbi vardır.",
  "Güneş ışığı Dünya’ya yaklaşık 8 dakika 20 saniyede ulaşır."
];

let index = 0;

const textEl = document.getElementById("text");
const counterEl = document.getElementById("counter");

function update() {
  textEl.textContent = cards[index];
  counterEl.textContent = `${index + 1} / ${cards.length}`;
  localStorage.setItem("lastIndex", index);
}

function next() {
  index = (index + 1) % cards.length;
  update();
}

function prev() {
  index = (index - 1 + cards.length) % cards.length;
  update();
}

function randomCard() {
  index = Math.floor(Math.random() * cards.length);
  update();
}

// swipe (mobil)
let startX = 0;

document.getElementById("card").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.getElementById("card").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) next();
  if (endX - startX > 50) prev();
});

// load
index = Number(localStorage.getItem("lastIndex")) || 0;
update();
