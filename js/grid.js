var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  fitWidth: true,
  gutter: 25
});
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
