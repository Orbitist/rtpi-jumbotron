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
