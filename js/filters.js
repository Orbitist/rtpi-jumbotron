function filterGrid(cat) {
  if (cat == 'art') {
    $(".grid-cat-Art").css("display", "block");
    $(".grid-cat-Education").css("display", "none");
    $(".grid-cat-Conservation").css("display", "none");
    $(".grid").css("left", "calc(50% - 100px)");
  }
  if (cat == 'education') {
    $(".grid-cat-Art").css("display", "none");
    $(".grid-cat-Education").css("display", "block");
    $(".grid-cat-Conservation").css("display", "none");
    $(".grid").css("left", "calc(50% - 100px)");
  }
  if (cat == 'conservation') {
    $(".grid-cat-Art").css("display", "none");
    $(".grid-cat-Education").css("display", "none");
    $(".grid-cat-Conservation").css("display", "block");
    $(".grid").css("left", "calc(50% - 100px)");
  }
  if (cat == 'all') {
    $(".grid-cat-Art").css("display", "block");
    $(".grid-cat-Education").css("display", "block");
    $(".grid-cat-Conservation").css("display", "block");
    $(".grid").css("left", "0px");
  }
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    fitWidth: true,
    gutter: 25
  });
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
};
