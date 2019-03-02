$(function() {

$("#home").click(()=> {
  forSecond("#first");
});
$("#top-angle, #first-arrow, #special").click(()=> {
  forSecond("#second");
});
$("#second-angle, #second-arrow, #prod").click(()=> {
  forSecond("#third");
});
$("#third-angle, #third-arrow, #share").click(()=> {
  forSecond("#fourth");
});

function forSecond(addres) {
  this.add = addres;
  let x = $('body').scrollTop(), z = $(this.add).offset().top

  if (x < $(this.add).offset().top - 26) {
    $('body').scrollTop(x+=25);
    requestAnimationFrame(()=> {
      forSecond(this.add);
    });
  } else if (x > $(this.add).offset().top + 26) {
    $('body').scrollTop(x-=25);
    requestAnimationFrame(()=> {
      forSecond(this.add);
    });
  }
};
  
 



  

});
