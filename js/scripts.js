//twitter
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){
		js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);
	}}(document, 'script', 'twitter-wjs');
//google map
function initMap() {
	var myLatLng = {lat: 38.993888, lng: -77.031391};
	var	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 10
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "My Location"
	});
}
//DOM ready
$(document).ready(function(){
	//Submit button
	$("#submit").on("click", function(){
			console.log("clicked");
			var comment = $("#message").val();
			console.log(comment);
			if(comment < 1) {
				$("#message").css("border", "2px solid red");
				}
			else{
				$("#visible-comment").html("Message sent: " + comment);
				$("#message").hide();};
				return false;
			});
	//message box
	$("#message").on("keyup", function(){
		console.log("Keyup successful!");
		var charCount = $("#message").val().length;
		console.log(charCount);
		$("#char-count").html(charCount);
		if(charCount > 50) {
			$("#char-count").css("color", "red");
		} 
		else{
			$("#char-count").css("color", "black");
		};
	});
	//smooth scrolling
	var $root = $('html, body'); 
		$('.navbar-nav a').click(function(){
			var href = $.attr(this, 'href'); 
			$root.animate({
				scrollTop: $(href).offset().top
			}, 500, function() {
				window.location.hash = href;
				}); return false;
	});
	//tooltips
	$(function(){
		$("#CF").tooltip();
		$('[data-toggle="tooltip"]').tooltip();
	});
	//Stellar
	$.stellar();
	//Work section
	//Row 1
	for(var i = 0; i < works.length; ++i) {$("#row1").append("\
		<div class='col-lg-3 col-md-3 col-sm-6 col-xs-6'>\
			<a href="+ works[i].URL +" class='work-img'>\
				<img class='img-responsive' src='"+ works[i].pic + "'>\
				<span class='info'><p class='proj-title'>Title:</p>"+ works[i].title + "</span>\
			</a>\
		</div>\
		");
		$(".work-img").mouseenter(function() {
			$(".info", this).show();
		}).mouseleave(function() {
			$(".info", this).hide()
		});
		var images = $("#row1 img");
		if(i%2 === 0) {
			$(images[i]).css("border", "2px solid DodgerBlue");
		} else {
			$(images[i]).css("border", "2px ForestGreen solid");
		};
	};
	//Row 2
	for(var i = 0; i < apps.length; ++i) {$("#row2").append("\
		<div class='col-lg-3 col-md-3 col-sm-6 col-xs-6'>\
			<a href="+ apps[i].URL +" class='work-img'>\
				<img class='img-responsive' src='"+ apps[i].pic + "'>\
				<span class='info'><p class='proj-title'>Title:</p>"+ apps[i].title + "</span>\
			</a>\
		</div>\
		");
		$(".work-img").mouseenter(function() {
			$(".info", this).show();
		}).mouseleave(function() {
			$(".info", this).hide()
		});
		var images = $("#row2 img");
		if(i%2 === 0) {
			$(images[i]).css("border", "2px solid DodgerBlue");
		} else {
			$(images[i]).css("border", "2px ForestGreen solid");
		};
	};
});





