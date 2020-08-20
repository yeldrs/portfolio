
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });

  $(document).scroll(function () {
    if ($(document).scrollTop() < 50) {
        $('a.nav-about').addClass('link-work');
    } else {
      $('a.nav-about').removeClass('link-work');
      }
});

/*

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
    if ($(document).scrollTop() < 50 ) {
        $('a.nav-link').addClass('link-work');
    } else {
      $('a.nav-link').removeClass('link-work');
    }
  });
  */