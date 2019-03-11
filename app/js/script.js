document.addEventListener("DOMContentLoaded", ()=> {
  if(document.querySelector("#main")) {
    document.querySelector("#main").addEventListener("mousemove", (e)=> {
      document.querySelector("#main-text").style.width = e.clientX/2 + "px";
      document.querySelector("#up").style.width = "calc(1000px + " + e.clientX + "px)";
    }); 
  }
  

  if(document.querySelector("#comingSoon")) {
    let comingSoon = document.querySelector("#comingSoon");
    for(let x = 0; x < 35; x++) {
      comingSoon.innerHTML += '<div class="box"></div>';
    }
  
    let box = document.querySelectorAll(".box");
    for(let y = 0; y < box.length; y++) {
      box[y].style.animation = `forBox 5s cubic-bezier(.36,0,.64,.99)  ${y / 100}s infinite alternate`;
    }
  } 
});