$(function() {
	//hiệu ưng Wow
	new WOW().init();
	//content 1 : animation
	$('#slide2 button').addClass('animated delay-1s flip');
	$('#slide3 button').addClass('animated delay-1s tada');
	$('#slide4 button').addClass('animated delay-1s wobble');
	//content 6 :animation
	$('.lentop img').addClass('animated slower infinite shake');
});




$(function () {
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

//countdow
var countDownDate = new Date("Oct 31, 2018 00:00:00").getTime();
var countDownFunction = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now ;
    var days = Math.floor(distance /(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000 ));
    document.getElementById('countdown').innerHTML = (days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    if(distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("countdown").innerHTML = "Comming Soon";
      }
    }, 1000);

// map SVG
$(function() {
	$('#list-23').hover(function() {
		 $('#region-23 path').addClass('map-light');

	}, function() {
		$('#region-23 path').removeClass('map-light');
	});
// end 
	$('#list-12').hover(function() {
		 $('#region-12 path').addClass('map-light');

	}, function() {
		$('#region-12 path').removeClass('map-light');
	});
// end 
	$('#list-40').hover(function() {
		 $('#region-40 path').addClass('map-light');

	}, function() {
		$('#region-40 path').removeClass('map-light');
	});
// end 
$('#list-07').hover(function() {
		 $('#region-07 path').addClass('map-light');

	}, function() {
		$('#region-07 path').removeClass('map-light');
	});
// end 
$('#list-21').hover(function() {
		 $('#region-21 path').addClass('map-light');

	}, function() {
		$('#region-21 path').removeClass('map-light');
	});
// end 
$('#list-01').hover(function() {
		 $('#region-01 path').addClass('map-light');

	}, function() {
		$('#region-01 path').removeClass('map-light');
	});
// end 
$('#list-34').hover(function() {
		 $('#region-34 path').addClass('map-light');

	}, function() {
		$('#region-34 path').removeClass('map-light');
	});
// end 
$('#list-14').hover(function() {
		 $('#region-14 path').addClass('map-light');

	}, function() {
		$('#region-14 path').removeClass('map-light');
	});
// end 
$('#list-26').hover(function() {
		 $('#region-26 path').addClass('map-light');

	}, function() {
		$('#region-26 path').removeClass('map-light');
	});
// end 
$('#list-47').hover(function() {
		 $('#region-47 path').addClass('map-light');

	}, function() {
		$('#region-47 path').removeClass('map-light');
	});
// end 
$('#list-27').hover(function() {
		 $('#region-27 path').addClass('map-light');

	}, function() {
		$('#region-27 path').removeClass('map-light');
	});
// end
$('#list-11').hover(function() {
		 $('#region-11 path').addClass('map-light');

	}, function() {
		$('#region-11 path').removeClass('map-light');
	});
// end 
$('#list-22').hover(function() {
		 $('#region-22 path').addClass('map-light');

	}, function() {
		$('#region-22 path').removeClass('map-light');
	});
// end 
$('#list-09').hover(function() {
		 $('#region-09 path').addClass('map-light');

	}, function() {
		$('#region-09 path').removeClass('map-light');
	});
// end 
$('#list-13').hover(function() {
		 $('#region-13 path').addClass('map-light');

	}, function() {
		$('#region-13 path').removeClass('map-light');
	});
// end
	
});

// back to top
$(function(){
$(window).scroll(function () {
if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
else $(".lentop").fadeOut();
});
$(".lentop").click(function () {
$("body,html").animate({scrollTop: 0}, "slow");
});
});

//hiệu úng scroll
$(function() {
	$(window).scroll(function(event) {
		console.log($('html').scrollTop());
		var vitrimenu = $('html').scrollTop();
		if ((vitrimenu>=1579)&&(vitrimenu<2078)) {
			$('#menu-duoi .navbar .menuduoi-content .mn-vechungtoi').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-vechungtoi').removeClass('vitri-line');
		}
		if ((vitrimenu>=2078)&&(vitrimenu<2796)) {
			$('#menu-duoi .navbar .menuduoi-content .mn-chuongtrinh').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-chuongtrinh').removeClass('vitri-line');
		}
		if ((vitrimenu>=2796)&&(vitrimenu<3255)) {
			$('#menu-duoi .navbar .menuduoi-content .mn-phuongphap').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-phuongphap').removeClass('vitri-line');
		}
		if ((vitrimenu>=3255)&&(vitrimenu<4927)) {
			$('#menu-duoi .navbar .menuduoi-content .mn-thuvien').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-thuvien').removeClass('vitri-line');
		}
		if (vitrimenu>=4927) {
			$('#menu-duoi .navbar .menuduoi-content .mn-hinhanh').addClass('vitri-line');
		} else {
			$('#menu-duoi .navbar .menuduoi-content .mn-hinhanh').removeClass('vitri-line');
		}
		if ((vitrimenu>=54)&&(vitrimenu<748)) {
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
		if ((vitrimenu>=748)&&(vitrimenu<2078)) {
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
		if ((vitrimenu>=2078)&&(vitrimenu<3255)) {
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
		if (vitrimenu>=3255) {
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
	});
});

// Định vị click menu
$(document).ready(function() {
	$('html').scrollspy({target:'#menu-duoi'});
	$('#menu-duoi .navbar .menuduoi-content a').click(function(event) {
		var vitriclick = $(this).attr('href');
		var toadoclick = $(vitriclick).offset().top;
		console.log(toadoclick);
		$('html').animate({scrollTop:toadoclick}, 500);
		return false;
	});;
});