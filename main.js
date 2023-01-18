let lm = document.getElementById("m");
let lh = document.getElementById("h");
let ls = document.getElementById("s");
let i = 0;
function run() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  ls.style.transition = `.5s`;
  ls.style.transform = `translate(-50%, -50%) rotate(${s * 6}deg)`;
  lm.style.transform = `translate(-50%, -50%) rotate(${m * 6}deg)`;

  if (s == 59) {
    ls.style.transform = `translate(-50%, -50%) rotate(360deg)`;
    ls.style.transition = `0s`;
    ls.style.transform = `translate(-50%, -50%) rotate(0deg)`;
  }
  if (h >= 12) {
    h = h - 12;
  }
  lh.style.transform = `translate(-50%, -50%) rotate(${h * 30 + m / 2}deg)`;

  setTimeout(run, 1000);
}
run();
