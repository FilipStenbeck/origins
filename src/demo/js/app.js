(function() {
	$.get('/api/leagues', function(response) {
		$('h1').html(response);
	})
})();