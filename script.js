
$(document).ready(function(){


$("h1").on({
	mouseenter: function(){
	$(this).hide("slow");
},
mouseleave: function(){
	$(this).show("slow");
}
	});


$("#one").click(function(){
	$("p").toggle(1000);
	});

$("#other").click(function(){
	$("li").fadeToggle(1000);
	});

$("h2").click(function(){
	$("h2").fadeTo(1000,0.5);
});

$("#top").click(function(){
$("#bottom").slideToggle();
});

$("#box").click(function(){
	$("#box").animate({
		left:"350px",
		height:"150px",
		width:"125px"
	});

$("h3").animate({fontSize: '50px'},"slow");
	});

// CALLBACK FUNCTION
$("h4").click(function(){
	$(this).hide(3000, function(){
		alert("POW!");
	});
});


});













