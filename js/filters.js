function filterGrid(cat) {
  if (cat == 'art') {
    $( ".grid-cat-Art" ).css('opacity', '1');
    $( ".grid-cat-Education" ).css('opacity', '.3');
    $( ".grid-cat-Conservation" ).css('opacity', '.3');
  }
  if (cat == 'education') {
    $( ".grid-cat-Education" ).css('opacity', '1');
    $( ".grid-cat-Art" ).css('opacity', '.3');
    $( ".grid-cat-Conservation" ).css('opacity', '.3');
  }
  if (cat == 'conservation') {
    $( ".grid-cat-Conservation" ).css('opacity', '1');
    $( ".grid-cat-Education" ).css('opacity', '.3');
    $( ".grid-cat-Art" ).css('opacity', '.3');
  }
  if (cat == 'all') {
    $( ".grid-cat-Conservation" ).css('opacity', '1');
    $( ".grid-cat-Education" ).css('opacity', '1');
    $( ".grid-cat-Art" ).css('opacity', '1');
  }
};


// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
