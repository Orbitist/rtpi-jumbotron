var contentAPI = 'http://rtpi.orbitist.com/api/jumbotron_item/basic';

var contentFeed = (function () {
    var contentData = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': contentAPI,
        'dataType': "json",
        'success': function (data) {
            contentData = data;
        }
    });
    return contentData;
})();

function renderFeedItems() {
  $( ".grid" ).empty();
  for (var i = 0; i < contentFeed.length; i++) {

    // set grid-item vs grid-item-featured class
    if (contentFeed[i].field_featured == 'True'){
      var gridItemClass = 'grid-item grid-item-featured';
    } else {
      var gridItemClass = 'grid-item';
    }

    // Prepare photography
    var itemImages =  contentFeed[i].field_photography;

    // Clean up video embed code by removing special characters
    var videoEmbedJson = contentFeed[i].field_video_embed_code;
    var videoEmbed = videoEmbedJson.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');

    // Clean up map embed code by removing special characters
    var mapEmbedJson = contentFeed[i].field_map_embed_code;
    var mapEmbed = mapEmbedJson.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');

    // Loop through the items and add them to the grid
    $('div.grid').append(
      '<div class="' + gridItemClass + ' grid-cat-' + contentFeed[i].field_jumbotron_item_category + '" data-toggle="modal" data-target=".item' + contentFeed[i].nid + '">' +
        '<img class="grid-image" src="' + contentFeed[i].field_thumbnail + '" />' +
        '<div class="grid-text">' +
          '<div class="grid-title">' + contentFeed[i].title + '</div>' +
          '<div class="grid-description">' + contentFeed[i].field_description + '</div>' +
        '</div><!-- grid-text -->' +
      '</div><!-- grid-item -->' +
      '<div class="modal fade item' + contentFeed[i].nid + '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">' +
        '<div class="modal-dialog modal-lg" role="document">' +
          '<div class="modal-content">' +
            '<div class="modal-header">' +
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
              '<p class="modal-title lead" id="myModalLabel">' + contentFeed[i].title + '</p>' +
            '</div><!-- modal-header -->' +
            '<div class="modal-body">' +

              videoEmbed +
              mapEmbed +
              itemImages +

          '</div><!-- modal-body -->' +
        '</div><!-- modal-content -->' +
      '</div><!-- modal-dialog modal-lg -->' +
    '</div><!-- modal fade item -->'
    );
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

renderFeedItems();
