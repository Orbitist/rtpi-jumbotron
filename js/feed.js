var contentFeed = (function () {
    var contentFeed = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://rtpi.orbitist.com/api/jumbotron_item/basic',
        'dataType': "json",
        'success': function (data) {
            contentFeed = data;
        }
    });
    return contentFeed;
})();

function renderFeedItems() {
  for (var i = 0; i < contentFeed.length; i++) {
    if (contentFeed[i].field_featured == 'true') {
      $('div.featured-grid').append('<p>' + contentFeed[i].title + '</p>');
    } else {
      // Normal Grid
      $('div.grid').append(
        '<div class="grid-item">' +
          '<img class="grid-image" src="' + contentFeed[i].field_thumbnail + '" />' +
          '<div class="grid-text">' +
            '<div class="grid-title">' + contentFeed[i].title + '</div>' +
            '<div class="grid-description"' + contentFeed[i].field_description + '</div>' +
          '</div>' +
        '</div>'
      );
    }
  }
};

renderFeedItems();


var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 200
});
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
