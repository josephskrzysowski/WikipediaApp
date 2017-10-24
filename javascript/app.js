$(document).ready(function() {















  // set jquery UI autocomplete
  $('input#input-search').autocomplete({
    source: function(request, response) {
      $.ajax({
        url: "http://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
	  'action': "opensearch",
	  'format': "json",
	  'search': request.term
	},
        success: function(data) {
	  response(data[1]);
	}
      });
    },
    minLength: 2,
    select: function(event, ui) {
      event.preventDefault();
      // clear previuos results
      $('.results').empty();
      // pull results from get call and render
      searchWiki(ui.item.value);
    }
  });

});
