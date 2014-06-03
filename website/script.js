$(document).ready(function(){


$( "a" ).hover(
    function () {
        $( this ).addClass("hover")
    },
    function () {
        $( this ).removeClass("hover")
    });   

$(function() {
    $("img.lazy").lazyload({
        threshold : 500
    });
});


});