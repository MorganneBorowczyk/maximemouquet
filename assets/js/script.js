$(document).ready(function(){

  // Reduce header on scroll
  $(window).scroll(function(){
    setTimeout(function(){
      if ($(window).scrollTop() > 100) {
        $('header').addClass('scrolled')
      } else {
        $('header').removeClass('scrolled')
      }
    }, 300);
  });

});
