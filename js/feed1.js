var contentAPI = 'https://orbitist.space/rtpi/api/jumbotron_item/basic';

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
  for (var i = 0; i < 25; i++) {

    // prepare webPage
    var webPage = '';
    if (contentFeed[i].field_jumbotron_item_type == "Web Page") {
      webPage = '<iframe' +
                      ' frameborder="0" style="border:0"' +
                      ' src="' + contentFeed[i].field_web_page + '" allowfullscreen>' +
                      '</iframe>';
    }

    // prepare tileLocation
    var tileLocation = '';
    if (contentFeed[i].field_latitude.length > 2) {
      tileLocation = '<iframe' +
                      ' class="tileLocation"' +
                      ' frameborder="0" style="border:0"' +
                      ' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCr6waAMtWgPqOMxkamjFjIwicvXLFmTb4&q=' + contentFeed[i].field_latitude + ',' + contentFeed[i].field_longitude + '&zoom=6&maptype=satellite" allowfullscreen>' +
                      '</iframe>';
    }

    // prepare tileIcon
    var tileIcon = '';
    // Maps
    if (contentFeed[i].field_jumbotron_item_type == "Map" && contentFeed[i].field_thumbnail.length > 2) {
      tileIcon = '<i class="fa fa-map-o tileIcon"></i>';
    } else if (contentFeed[i].field_jumbotron_item_type == "Map" && contentFeed[i].field_thumbnail.length < 2) {
      tileIcon = '<i class="fa fa-map-o tileIcon noThumb"></i>';
    }
    // Post
    if (contentFeed[i].field_jumbotron_item_type == "Post" && contentFeed[i].field_thumbnail.length > 2) {
      tileIcon = '<i class="fa fa-file-text-o tileIcon"></i>';
    } else if (contentFeed[i].field_jumbotron_item_type == "Post" && contentFeed[i].field_thumbnail.length < 2) {
      tileIcon = '<i class="fa fa-file-text-o tileIcon noThumb"></i>';
    }
    // Imagery
    if (contentFeed[i].field_jumbotron_item_type == "Imagery" && contentFeed[i].field_thumbnail.length > 2) {
      tileIcon = '<i class="fa fa-picture-o tileIcon"></i>';
    } else if (contentFeed[i].field_jumbotron_item_type == "Imagery" && contentFeed[i].field_thumbnail.length < 2) {
      tileIcon = '<i class="fa fa-picture-o tileIcon noThumb"></i>';
    }
    // Video
    if (contentFeed[i].field_jumbotron_item_type == "Video" && contentFeed[i].field_thumbnail.length > 2) {
      tileIcon = '<i class="fa fa-video-camera tileIcon"></i>';
    } else if (contentFeed[i].field_jumbotron_item_type == "Video" && contentFeed[i].field_thumbnail.length < 2) {
      tileIcon = '<i class="fa fa-video-camera tileIcon noThumb"></i>';
    }

    // set grid-item vs grid-item-featured class
    if (contentFeed[i].field_featured == 'True'){
      var gridItemClass = 'grid-item grid-item-featured';
    } else {
      var gridItemClass = 'grid-item';
    }

    // Prepare description when appropriate
    var itemDescription = '';
    if (contentFeed[i].field_jumbotron_item_type == "Post") {
      itemDescription = contentFeed[i].field_full_description;
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
        tileIcon +
        '<div class="grid-text">' +
          '<div class="grid-title">' + contentFeed[i].title + '</div>' +
          '<div class="grid-description">' + contentFeed[i].field_description + tileLocation + '</div>' +
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
              itemDescription +
              webPage +

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
