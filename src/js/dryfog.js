onload = ()=> {
  //Variables
  let wrap = document.getElementById("wrap"),
  rngWidth = document.getElementById("rngWidth"),
  rngHeight = document.getElementById("rngHeight"),
  cont = document.getElementById("cont"),
  bttn = document.getElementById("bttn"),
  turn = document.getElementById("turn"),
  tran = document.getElementById("tran"),   
  num = document.getElementById("num"),
  width = wrap.offsetWidth,
  height = wrap.offsetHeight;

//Events
bttn.addEventListener("click", ()=> {
  cut(num.value);
  console.log(num.value);
});
turn.addEventListener("click", ()=> {
  anim("turn", "2");
});
tran.addEventListener("click", ()=> {
  anim("tran", "1");
});
rngWidth.addEventListener("input", ()=> {
  cut(rngWidth.value);
  console.log(rngWidth.value);
});

//Functions
function cut(size) {
  //Clean container
  cont.innerHTML = '';

  //Fill container
  for(let x = 0; x < size; x++) {
      cont.innerHTML += '<div class="part"></div>';
  }

  let parts = document.getElementsByClassName("part"),   
  pud = 100 / num.value,
  pos = 0;

  for(let y = 0; y < parts.length; y++) {
      parts[y].style.width = width / num.value + "px";
      parts[y].style.height = height + "px";

  pos += pud; 
  parts[y].style.backgroundSize = num.value * 100 + "%"; parts[y].style.backgroundPosition = pos + "% 0";
  }
}

function anim(animType, animSpeed) {
  let parts = document.getElementsByClassName("part");
  for(let x = 0;x < parts.length; x++) {
      parts[x].style.animation = `${animType} ${animSpeed}s linear ${x/50}s`;
  }
} 


}