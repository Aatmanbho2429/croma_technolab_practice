

$("#changeColor").click(function(){
    $("h1").css("color","purple");
});


$("#changeHide").click(function(){
    $("h1").toggle();
});

$("#fadeAnimate").click(function(){
    $("h1").fadeToggle();
});
$("#slideAnimate").click(function(){
    $("h1").slideToggle();
});
$("#transAnimate").click(function(){
    $("h1").animate({opacity:0.5});
});
$("#chainAnimate").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});