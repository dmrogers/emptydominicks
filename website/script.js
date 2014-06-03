$(document).ready(function(){


$( "a" ).hover(
    function () {
        $( this ).addClass("hover")
    },
    function () {
        $( this ).removeClass("hover")
    });   

$( "li" ).hover(
    function () {
        $( this ).addClass("hover")
    },
    function () {
        $( this ).removeClass("hover")
    },
    function () {
      $( "body" ).css('cursor', 'pointer')
    });   

$("#a").click(
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

$(function() {
    $("img.lazy").lazyload({
        threshold : 500
    });
});


});