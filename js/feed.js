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
    $('div.items').append('<p>' + contentFeed[i].title + '</p>');
  }
};

renderFeedItems();
