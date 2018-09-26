$(function () {
	//hiệu ưng Wow
	new WOW().init();
	//content 1 : animation
	$('#slide2 button').addClass('animated delay-1s flip');
	$('#slide3 button').addClass('animated delay-1s tada');
	$('#slide4 button').addClass('animated delay-1s wobble');
	//content 6 
	$('#content6 button').addClass('animated delay-1s zoomIn');


	//set hiệu ứng isotope
	// init Isotope
var $grid = $('.imgshow').isotope({
  // options
  itemSelector: 'li',
  layoutMode: 'masonry'
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

	//xử lý control buttons
	$('#control-buttons ul li a').click(function(event) {
		$('#control-buttons a').removeClass('control-buttons-clicked');
		$(this).addClass('control-buttons-clicked');
		var filter = $(this).data('category');
		//console.log(filter);
		$('.imgshow').isotope({ filter: filter })
		return false;
	});
});