
//hiệu úng scroll
$(function() {
	$(window).scroll(function(event) {
		console.log($('html').scrollTop());
		var vitrimenu = $('html').scrollTop();
		
		if ((vitrimenu>=669)&&(vitrimenu<2589)) {
			$('#menu-duoi .nav-item.mn-lotrinhhoctap').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-lotrinhhoctap').removeClass('vitri-line');
		}
		if ((vitrimenu>=2589)&&(vitrimenu<3403)) {
			$('#menu-duoi .nav-item.mn-phuongphaphoc').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-phuongphaphoc').removeClass('vitri-line');
		}
		if ((vitrimenu>=3403)&&(vitrimenu<5111)) {
			$('#menu-duoi .nav-item.mn-chiase').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-chiase').removeClass('vitri-line');
		}
		if ((vitrimenu>=5111)&&(vitrimenu<5624)) {
			$('#menu-duoi .nav-item.mn-giaovien').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-giaovien').removeClass('vitri-line');
		}
		if (vitrimenu>=5624) {
			$('#menu-duoi .nav-item.mn-tuvan').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-tuvan').removeClass('vitri-line');
		}
		if ((vitrimenu>=45)&&(vitrimenu<2589)) {
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
		if ((vitrimenu>=2589)&&(vitrimenu<3403)){
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
		if ((vitrimenu>=3403)&&(vitrimenu<5111))  {
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
		if (vitrimenu>=5111) {
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


//bán khóa học
var input = document.getElementById('soluon');
var cost = document.getElementById('cost');
var giaTien=parseInt(cost.getAttribute('data-cost'));
console.log(giaTien);
input.addEventListener('input',handleOnchange);
function handleOnchange (e){
	
	var number =e.target.value;
	document.getElementById('tongtien').innerHTML = ((number*giaTien).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ₫');


}