(function() {
	$.get('/api/league', function(response) {
		$('h1').html(response);
	})
})();
