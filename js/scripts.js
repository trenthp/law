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


	//$('.panel1,.panel2,.panel3,.panel4').on('click', function(){
	//	if ($(this).hasClass('active')){
	//	  $('#accordian-sign').html('<h6>- minimize</h6>'); 
	//	}else{
	//	  $('#accordian-sign').html('<h6>+ maxamize</h6>'); 
	//	}	
	//});

	

	console.log('Page Loaded. Lets Do this!');

});