var main = function() {
	$(".day").on("click", function(){
		$(this).next(".hourly").toggle();
		$(this).find(".weekday").find(".glyphicon-plus").toggleClass("glyphicon-minus");
	});

  
};

$(document).ready(main);