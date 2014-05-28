$(document).ready(function(){

var $img = $('#headerimage'),
    imageWidth = $img[0].width, //need the raw width due to a jquery bug that affects chrome
    imageHeight = $img[0].height, //need the raw height due to a jquery bug that affects chrome
    maxWidth = $(window).width(),
    maxHeight = $(window).height(),
    widthRatio = maxWidth / imageWidth,
    heightRatio = maxHeight / imageHeight;

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

