var mummenschanz = function(source, elem) {
	$.ajax({
	   url: source,
	   type: 'GET',
	   crossDomain: true,
	   success: function(data) {
	   		debugger;
	   		$(data).find('p').each(function(i, e) {
	   			console.log(e);
	   		});
	   		// List of ps from url
	   }
	});

	// prev next in elem
}

$(window.getSelection().anchorNode.parentNode).click(function(event) {
	var src = "http://www.spiegel.de";
	var elem = $(event.target);
	mummenschanz(src, elem);
});

// mumm
// pack to session storage

// schanz
// unpack to selection