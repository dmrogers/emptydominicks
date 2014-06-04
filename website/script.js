$(document).ready(function(){


$( "a" ).hover(
    function () {
        $( this ).addClass("hover"),
        console.log("hovered")
    },
    function () {
        $( this ).removeClass("hover")
    });   

/*$('#subtitle').waypoint(function(direction) {
    $("#navbar").animate({
      left:"0",
    }, 200, function() {
      //animation complete
    });
});*/

$( "li" ).hover(
    function () {
        $( this ).addClass("hover")
    },
    function () {
        $( this ).removeClass("hover")
    }
);   

/*$("#a").click(
    function() {
        $('html, body').animate({
           scrollTop: $("#subtitle").offset().top
    }, 2000);
});

$("#b").click(
    function() {
        $('html, body').animate({
           scrollTop: $("#poverty").offset().top
    }, 2000);
});

$("#c").click(
    function() {
        $('html, body').animate({
           scrollTop: $("#anchor").offset().top
    }, 2000);
});

$("#d").click(
    function() {
        $('html, body').animate({
           scrollTop: $("#health").offset().top
    }, 2000);
});

$("#e").click(
    function() {
        $('html, body').animate({
           scrollTop: $("#sanity").offset().top
    }, 2000);
});
*/


$(function() {
    $("img.lazy").lazyload({
        threshold : 500
    });
});



});