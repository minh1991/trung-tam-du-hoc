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