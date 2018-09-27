
$(function () {
	//hiệu ưng Wow
	new WOW().init();
	//content 1 : animation
	$('#slide2 button').addClass('animated delay-1s flip');
	$('#slide3 button').addClass('animated delay-1s tada');
	$('#slide4 button').addClass('animated delay-1s wobble');
	//content 6 :animation
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
//hiệu úng scroll
$(function() {
	$(window).scroll(function(event) {
		console.log($('html').scrollTop());
		var vitrimenu = $('html').scrollTop();
		if ((vitrimenu>=54)&&(vitrimenu<685)) {
			$('#menu-top .bottom').addClass('menu1');
			$('#logo').addClass('bg-logo1');
			$('#logo img.img-fluid').addClass('logo1');
			$('#menu-duoi .navbar').addClass('navbar1');
			$('#menu-duoi .navbar .menuduoi-content a').addClass('navbar-a');
			
		} else {
			$('#menu-top .bottom').removeClass('menu1');
			$('#logo').removeClass('bg-logo1');
			$('#logo img.img-fluid').removeClass('logo1');
			$('#menu-duoi .navbar').removeClass('navbar1');
			$('#menu-duoi .navbar .menuduoi-content a').removeClass('navbar-a');
			
		}
		if ((vitrimenu>=54)&&(vitrimenu<685)) {
			$('#menu-duoi .navbar .menuduoi-content .mn-vechungtoi').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-vechungtoi').removeClass('vitri-line');
		}
		if ((vitrimenu>=685)&&(vitrimenu<1371)) {
			$('#menu-duoi .navbar .menuduoi-content .mn-chuongtrinh').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-chuongtrinh').removeClass('vitri-line');
		}
		if ((vitrimenu>=1382)&&(vitrimenu<1947)) {
			$('#menu-duoi .navbar .menuduoi-content .mn-phuongphap').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-phuongphap').removeClass('vitri-line');
		}
		if ((vitrimenu>=1947)&&(vitrimenu<3142)) {
			$('#menu-duoi .navbar .menuduoi-content .mn-thuvien').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-thuvien').removeClass('vitri-line');
		}
		if (vitrimenu>=3142) {
			$('#menu-duoi .navbar .menuduoi-content .mn-hinhanh').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-hinhanh').removeClass('vitri-line');
		}
		if ((vitrimenu>=685)&&(vitrimenu<1869)) {
			$('#menu-top .bottom').addClass('menu2');
			$('#logo').addClass('bg-logo2');
			$('#logo img.img-fluid').addClass('logo2');
			$('#menu-duoi .navbar').addClass('navbar2');			
		} else {
			$('#menu-top .bottom').removeClass('menu2');
			$('#logo').removeClass('bg-logo2');
			$('#logo img.img-fluid').removeClass('logo2');
			$('#menu-duoi .navbar').removeClass('navbar2');
			$('#menu-duoi .navbar .menuduoi-content a').removeClass('navbar-a2');			
		}
		if ((vitrimenu>=1869)&&(vitrimenu<3175)) {
			$('#menu-top .bottom').addClass('menu3');
			$('#logo').addClass('bg-logo3');
			$('#logo img.img-fluid').addClass('logo3');
			$('#menu-duoi .navbar').addClass('navbar3');
			$('#menu-duoi .navbar .menuduoi-content a').addClass('navbar-a3');
			
		} else {
			$('#menu-top .bottom').removeClass('menu3');
			$('#logo').removeClass('bg-logo3');
			$('#logo img.img-fluid').removeClass('logo3');
			$('#menu-duoi .navbar').removeClass('navbar3');
			$('#menu-duoi .navbar .menuduoi-content a').removeClass('navbar-a3');
			
		}
		if (vitrimenu>=3175) {
			$('#menu-top .bottom').addClass('menu4');
			$('#logo').addClass('bg-logo4');
			$('#logo img.img-fluid').addClass('logo4');
			$('#menu-duoi .navbar').addClass('navbar4');
			$('#menu-duoi .navbar .menuduoi-content a').addClass('navbar-a4');
			
		} else {
			$('#menu-top .bottom').removeClass('menu4');
			$('#logo').removeClass('bg-logo4');
			$('#logo img.img-fluid').removeClass('logo4');
			$('#menu-duoi .navbar').removeClass('navbar4');
			$('#menu-duoi .navbar .menuduoi-content a').removeClass('navbar-a4');
			
		}
	});;
});

