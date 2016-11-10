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

    // set grid-item vs grid-item-featured class
    if (contentFeed[i].field_featured == 'True'){
      var gridItemClass = 'grid-item grid-item-featured';
    } else {
      var gridItemClass = 'grid-item';
    }

    // Clean up video embed code by removing special characters
    var videoEmbedJson = contentFeed[i].field_video_embed_code;
    var videoEmbed = videoEmbedJson.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');

    // Clean up map embed code by removing special characters
    var mapEmbedJson = contentFeed[i].field_map_embed_code;
    var mapEmbed = mapEmbedJson.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');

    // Loop through the items and add them to the grid
    $('div.grid').append(
      '<div class="' + gridItemClass + '" data-toggle="modal" data-target=".item' + contentFeed[i].nid + '">' +
        '<img class="grid-image" src="' + contentFeed[i].field_thumbnail + '" />' +
        '<div class="grid-text">' +
          '<div class="grid-title">' + contentFeed[i].title + '</div>' +
          '<div class="grid-description">' + contentFeed[i].field_description + '</div>' +
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
              mapEmbed +

            '</div>' +
            '<div class="modal-footer">' +
              '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }
};

renderFeedItems();
