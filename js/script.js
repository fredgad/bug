$(function() {
  $("#main").mousemove((e)=> {
    $("#main-text").css({'width' : e.clientX/2 + "px"});
    $("#up").css({'width' : "calc(1000px + " + e.clientX + "px)"});
  }); 
});