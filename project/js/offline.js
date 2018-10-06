// table
$(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
});
// END table
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

//hiệu úng scroll
$(function() {
	$(window).scroll(function(event) {
		console.log($('html').scrollTop());
		var vitrimenu = $('html').scrollTop();
		
		if ((vitrimenu>=20)&&(vitrimenu<2024)) {
			$('#menu-duoi .nav-item.mn-tiengnhatonline').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-tiengnhatonline').removeClass('vitri-line');
		}
		if ((vitrimenu>=2024)&&(vitrimenu<3058)) {
			$('#menu-duoi .nav-item.mn-chungtoise').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-chungtoise').removeClass('vitri-line');
		}
		if ((vitrimenu>=3058)&&(vitrimenu<3541)) {
			$('#menu-duoi .nav-item.mn-trainghiem').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-trainghiem').removeClass('vitri-line');
		}
		if ((vitrimenu>=3541)&&(vitrimenu<4279)) {
			$('#menu-duoi .nav-item.mn-lichkhaigiang').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-lichkhaigiang').removeClass('vitri-line');
		}
		if (vitrimenu>=4279) {
			$('#menu-duoi .nav-item.mn-thuvienanh').addClass('vitri-line');
		} else {
			$('#menu-duoi .nav-item.mn-thuvienanh').removeClass('vitri-line');
		}
		if ((vitrimenu>=20)&&(vitrimenu<2024)) {
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
		if ((vitrimenu>=2024)&&(vitrimenu<3058)) {
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
		if ((vitrimenu>=3058)&&(vitrimenu<3541)) {
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
		if (vitrimenu>=3541) {
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