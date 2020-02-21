$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('telascrollwhite');
  } else {
    $('nav').removeClass('telascrollwhite');
  }
});