$(document).ready(function(){

<<<<<<< HEAD
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
=======
var $img = $('#headerimage'),
    imageWidth = $img[0].width, //need the raw width due to a jquery bug that affects chrome
    imageHeight = $img[0].height, //need the raw height due to a jquery bug that affects chrome
    maxWidth = $(window).width(),
    maxHeight = $(window).height(),
    widthRatio = maxWidth / imageWidth,
    heightRatio = maxHeight / imageHeight;
>>>>>>> parent of 61181cd... Made the title card

var ratio = widthRatio; //default to the width ratio until proven wrong

if (widthRatio * imageHeight > maxHeight) {
    ratio = heightRatio;
}

console.write('functional');

//now resize the image relative to the ratio
$img.attr('width', imageWidth * ratio)
    .attr('height', imageHeight * ratio);

//and center the image vertically and horizontally
$img.css({
    margin: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
});

	});

<<<<<<< HEAD
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
=======
>>>>>>> parent of 61181cd... Made the title card
