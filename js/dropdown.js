$(document).ready(function(){

$('#action').on('click',function (){

	$('div.action').css("border-radius", '10%');
	$('div.comedy').fadeOut(500);
	$('div.Kids').fadeOut(500);
});

$('#comedy').on('click',function (){

	$('div.Comedy').css("border-radius", '10%');
	$('div.action').fadeOut(500);
	$('div.Kids').fadeOut(500);
});
$('#kids').on('click',function (){

	$('div.Kids').css("border-radius", '10%');
	$('div.comedy').fadeOut(500);
	$('div.action').fadeOut(500);
});
	$('#all').on('click',function (){

	$('div.Kids').fadeIn(500);
	$('div.comedy').fadeIn(500);
	$('div.action').fadeIn(500);
});

});

