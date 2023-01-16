let  lm = document.getElementById('m')
let  lh = document.getElementById('h')
let  ls = document.getElementById('s')
function run() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  console.log(h,m,s);
  ls.style.transform = `translate(-50%, -50%) rotate(${s*6}deg)`;
  lm.style.transform = `translate(-50%, -50%) rotate(${m*6}deg)`;
  if (h >= 12) {
    h =h-12
  }
  lh.style.transform = `translate(-50%, -50%) rotate(${h*30+m/2}deg)`;
console.log(h*30/m*6);







  setTimeout(run,1000)
}
run();