$(document).ready(function(){

<<<<<<< HEAD
  var win = $(window),
      fullscreen = $('#headerimage'),
      image = fullscreen.find('fadingsign.jpg"'),
      imageWidth = image.width(),
      imageHeight = image.height(),
      imageRatio = imageWidth / imageHeight;

  win.bind({
    load: function() {
      resizeImage();
    },
    resize: function() {
      resizeImage();
    }
  });

});


  function resizeImage() {
    var winWidth = win.width(),
        winHeight = win.height(),
        winRatio = winWidth / winHeight;
  
    if(winRatio > imageRatio) {
      image.css({
        width: winWidth,
        height: Math.round(winWidth / imageRatio)
      });
    } else {
      image.css({
        width: Math.round(winHeight * imageRatio),
        height: winHeight
      });
    }
  }
=======
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
>>>>>>> FETCH_HEAD
