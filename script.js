$(document).ready(function(){
if($(window).width() >= 1201) {
  $('.embedded-mood').hide().fadeIn(600).delay(300).effect( "bounce", { times: 2, direction: "up", distance: 5 }, 300 );
  $('.mrg').delay(1200).animate({right:230}, 300).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.cake').delay(1500).animate({right:500}, 300).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.slots').delay(600).animate({top:115}, 300).effect( "bounce", { times: 1, direction: "up", distance: 5 }, 300 );
  $('.box').hide().delay(1800).show("slide", { direction: "down" }, 600);
  $('.embedded-mood h1').hide().delay(2000).show("slide", { direction: "down" }, 300);
  $('.embedded-mood h2').hide().delay(2200).show("slide", { direction: "down" }, 300);
  $('.embedded-mood .btn-primary').hide().delay(2400).show("slide", { direction: "down" }, 300);
} else if ($(window).width() >= 961) {
  $('.embedded-mood').hide().fadeIn(600).delay(300).effect( "bounce", { times: 2, direction: "up", distance: 5 }, 300 );
  $('.mrg').delay(1200).animate({right:200}, 300).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.cake').delay(1500).animate({right:450}, 300).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.slots').delay(600).animate({top:115}, 300).effect( "bounce", { times: 1, direction: "up", distance: 5 }, 300 );
  $('.box').hide().delay(1800).show("slide", { direction: "down" }, 600);
  $('.embedded-mood h1').hide().delay(2000).show("slide", { direction: "down" }, 300);
  $('.embedded-mood h2').hide().delay(2200).show("slide", { direction: "down" }, 300);
  $('.embedded-mood .btn-primary').hide().delay(2400).show("slide", { direction: "down" }, 300);
} else if ($(window).width() >= 768) {
  $('.embedded-mood').hide().fadeIn(600);
  $('.mrg').delay(600).animate({right:30}, 300).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.cake').delay(900).animate({right:220}, 300).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.slots').hide();
  $('.box').hide().delay(1200).show("slide", { direction: "down" }, 600);
  $('.embedded-mood h1').hide().delay(1400).show("slide", { direction: "down" }, 300);
  $('.embedded-mood h2').hide().delay(1600).show("slide", { direction: "down" }, 300);
  $('.embedded-mood .btn-primary').hide().delay(1800).show("slide", { direction: "down" }, 300);
} else if ($(window).width() >= 10) {
  $('.embedded-mood').hide().fadeIn(600);
  $('.mrg').delay(600).animate({right:20}, 300).effect( "bounce", { times: 1, direction: "right", distance: 5 }, 300 );
  $('.cake').hide();
  $('.slots').hide();
  $('.box').hide().delay(900).show("slide", { direction: "down" }, 600);
  $('.embedded-mood h1').hide().delay(1100).show("slide", { direction: "down" }, 300);
  $('.embedded-mood h2').hide().delay(1300).show("slide", { direction: "down" }, 300);
  $('.embedded-mood .btn-primary').hide().delay(1500).show("slide", { direction: "down" }, 300);
};
});
