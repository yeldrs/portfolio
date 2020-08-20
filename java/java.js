
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

/*  $(window).on('load',function(){
    $('#modal-error').modal('show');
});
*/