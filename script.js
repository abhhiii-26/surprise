const REAL = "261125";
const PREVIEW = "preview20";
const target = new Date("January 01, 2026 00:00:00").getTime();

const passwordScreen = document.getElementById("passwordScreen");
const countdownView = document.getElementById("countdownView");
const finalView = document.getElementById("finalView");
const countdown = document.getElementById("countdown");
const music = document.getElementById("music");
const slide = document.getElementById("slide");

function unlock() {
  const v = document.getElementById("pass").value;
  music.play();

  if (v === REAL) {
    passwordScreen.style.display = "none";
    countdownView.style.display = "flex";
  } 
  else if (v === PREVIEW) {
    passwordScreen.style.display = "none";
    finalView.style.display = "flex";
    confetti();
  }
}

/* ===== COUNTDOWN TIMER ===== */
setInterval(() => {
  const d = target - Date.now();

  if (d <= 0) {
    countdownView.style.display = "none";
    finalView.style.display = "flex";
    confetti();
  }

  countdown.innerText =
    Math.floor(d / 86400000) + "d " +
    Math.floor(d / 3600000) % 24 + "h " +
    Math.floor(d / 60000) % 60 + "m " +
    Math.floor(d / 1000) % 60 + "s";
}, 1000);

/* ===== SLIDESHOW ===== */
const imgs = [
  "photo.jpg.jpeg",
  "photo2.jpg.jpeg",
  "photo3.jpg.jpeg",
  "photo4.jpg.jpeg",
  "photo5.jpg.jpeg",
  "photo6.jpg.jpeg",
  
];

let i = 0;
setInterval(() => {
  slide.style.opacity = 0;
  setTimeout(() => {
    i = (i + 1) % imgs.length;
    slide.src = imgs[i];
    slide.style.opacity = 1;
  }, 200);
}, 2500);

/* ===== CONFETTI ===== */
function confetti() {
  setInterval(() => {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerHTML = ["🎉","🎊","✨","🎆"][Math.random() * 4 | 0];
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 6000);
  }, 150);
}
