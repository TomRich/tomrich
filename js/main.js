//Off Canvas Nav
$(".menu-link").click(function(){
  $("#menu").toggleClass("active");
  $(".container").toggleClass("active");
});

//Scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Social Colours 
$(document).ready(function () {
  $('#email').hover(function () {
    $('#contact').css("background-color", "#de4438");
  });
  $('#email').mouseleave(function () {
    $('#contact').css("background-color", "#2D2D2D");
  });
  $('#youtube').hover(function () {
    $('#contact').css("background-color", "#e02927");
  });
  $('#youtube').mouseleave(function () {
    $('#contact').css("background-color", "#2D2D2D");
  });
  $('#twitter').hover(function () {
    $('#contact').css("background-color", "#4090FF");
  });
  $('#twitter').mouseleave(function () {
    $('#contact').css("background-color", "#2D2D2D");
  });
  $('#gplus').hover(function () {
    $('#contact').css("background-color", "#dd4b39");
  });
  $('#gplus').mouseleave(function () {
    $('#contact').css("background-color", "#2D2D2D");
  });
  $('#linkedin').hover(function () {
    $('#contact').css("background-color", "#3351a5");
  });
  $('#linkedin').mouseleave(function () {
    $('#contact').css("background-color", "#2D2D2D");
  });
});