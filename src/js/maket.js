$(function() {
  $('.toggles button').click(function() {
    var get_id = this.id;
    var get = $('.posts .' + this.id);
    $('.post').not(get).hide(500);
    get.show(500);
  });
  $('#showall').click(function() {
    $('.post').show(500);
  });

  if ($(window).width() < 420) {
    $(".owl-carousel").owlCarousel({
      items:3
    });
  } else {
    $(".owl-carousel").owlCarousel({
      items:7
    });
  }

});