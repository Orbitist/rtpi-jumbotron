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

    var videoEmbedJson = contentFeed[i].field_video_embed_code;
    var videoEmbed = videoEmbedJson.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')

    if (contentFeed[i].field_featured == 'true') {
      $('div.featured-grid').append('<p>' + contentFeed[i].title + '</p>');
    } else {
      $('div.grid').append(
        '<div class="grid-item" data-toggle="modal" data-target=".item' + contentFeed[i].nid + '">' +
          '<img class="grid-image" src="' + contentFeed[i].field_thumbnail + '" />' +
          '<div class="grid-text">' +
            '<div class="grid-title">' + contentFeed[i].title + '</div>' +
            '<div class="grid-description"' + contentFeed[i].field_description + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="modal fade item' + contentFeed[i].nid + '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">' +
          '<div class="modal-dialog modal-lg" role="document">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<h4 class="modal-title" id="myModalLabel">Modal title</h4>' +
              '</div>' +
              '<div class="modal-body">' +

                videoEmbed +


              '</div>' +
              '<div class="modal-footer">' +
                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }
  }
};

renderFeedItems();

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  fitWidth: true,
  gutter: 5
});
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
