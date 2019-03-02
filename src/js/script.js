document.addEventListener("DOMContentLoaded", ()=> {
  if(document.querySelector("#main")) {
    document.querySelector("#main").addEventListener("mousemove", (e)=> {
      document.querySelector("#main-text").style.width = e.clientX/2 + "px";
      document.querySelector("#up").style.width = "calc(1000px + " + e.clientX + "px)";
    }); 
  }
});