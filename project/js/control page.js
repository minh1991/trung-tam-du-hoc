$(document).ready(function(even){
	$('#clock_tokyo').jClocksGMT({
        title: 'Tokyo, Japan',
        offset: '+9',
        dst: true,
        digital: true,
        analog: true,
        timeformat: 'hh:mm A',
        date: true,
        dateformat: 'DD/MM/YYYY',
        skin: 2,
    });
    $('#clock_vn').jClocksGMT({
        title: 'HaNoi, VietNam',
        offset: '+7',
        dst: true,
        digital: true,
        analog: true,
        timeformat: 'hh:mm A',
        date: true,
        dateformat: 'DD/MM/YYYY',
        skin: 5,
    });
});