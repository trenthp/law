$(document).foundation();

$(document).ready(function(){

	new Maplace({
		show_markers: true,
		locations: [{
			lat: 45.6297529, 
			lon: -122.6718371,
			zoom: 16
		}]
	}).Load();

	console.log('Page Loaded. Lets Do this!');

});