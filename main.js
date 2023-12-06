let lm = document.getElementById("m");
let lh = document.getElementById("h");
let ls = document.getElementById("s");
let p = document.querySelector("p");
let span = document.querySelector("span");
let i = 0;

function run() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDate();
  let mo = today.getMonth();
  let y = today.getFullYear();

  ls.style.transition = `.5s`;
  ls.style.transform = `translate(-50%, -50%) rotate(${s * 6}deg)`;
  lm.style.transform = `translate(-50%, -50%) rotate(${m * 6 + s / 10}deg)`;

  if (s == 59) {
    ls.style.transform = `translate(-50%, -50%) rotate(360deg)`;
    setTimeout(() => {
      ls.style.transition = `0s`;
      ls.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    }, 500);
    run;
  }
  if (m == 59) {
    lm.style.transform = `translate(-50%, -50%) rotate(360deg)`;
    setTimeout(() => {
      lm.style.transition = `0s`;
      lm.style.transform = `translate(-50%, -50%) rotate(0deg)`;
    }, 500);
    run;
  }
  if (h >= 12) {
    h = h - 12;
  }
  lh.style.transform = `translate(-50%, -50%) rotate(${h * 30 + m / 2}deg)`;

  p.innerHTML = `${y}/${mo + 1}/${d}`;



  setTimeout(run, 1000);
}

run()