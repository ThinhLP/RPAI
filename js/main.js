//var max = 5;
//var setNextToCurrent = function (current) {
//    var prevPos = current - 1;
//    var nextPos = current + 1;
//    if (current === 1) {
//        prevPos = max;
//    }
//    if (current === max) {
//        nextPos = 1;
//    }
//    var nextOfNext = nextPos + 1;
//    if (nextPos === max) {
//        nextOfNext = 1;
//    }
//    var $prev = $('#img' + prevPos);
//    var $next = $('#img' + nextPos);
//    var $nextNext = $('#img' + nextOfNext);
//    var $curr;
//    if (current === 0) {
//        $curr = $('#img' + max);
//    }
//    else $curr = $('#img' + current);
//    // Reset class
//    $prev.removeClass('prev');
//    $curr.removeClass('current');
//    $next.removeClass('next');
//    // Set new class
//    $next.addClass('current');
//    $curr.addClass('prev');
//    $nextNext.addClass('next');
//    // Set button
//    $('#' + nextPos).addClass('button-active');
//    $('#' + current).removeClass('button-active');
//};
//var setPrevToCurrent = function (current) {
//    var prevPos = current - 1;
//    var nextPos = current + 1;
//    if (current === 1) {
//        prevPos = max;
//    }
//    if (current === max) {
//        nextPos = 1;
//    }
//    var prevOfPrev = prevPos - 1;
//    if (prevPos === 1) {
//        prevOfPrev = max;
//    }
//    var $prev = $('#img' + prevPos);
//    var $next = $('#img' + nextPos);
//    var $prevPrev = $('#img' + prevOfPrev);
//    var $curr = $('#img' + current);
//    // Reset class
//    $prev.removeClass('prev');
//    $curr.removeClass('current');
//    $next.removeClass('next');
//    // Set new class
//    $prev.addClass('current');
//    $curr.addClass('next');
//    $prevPrev.addClass('prev');
//    // Set button
//    $('#' + prevPos).addClass('button-active');
//    $('#' + current).removeClass('button-active');
//};
//// Click button on slider
//$('.slider-button a').on('click', function (e) {
//    e.preventDefault();
//    var selectedPos = parseInt($(this).attr('id'));
//    var currentPos = parseInt($('.button-active').attr('id'));
//    if (selectedPos < currentPos) {
//        var x = setInterval(function () {
//            if (currentPos > selectedPos) {
//                setPrevToCurrent(currentPos--);
//            }
//            else {
//                clearInterval(x);
//            }
//        }, 600);
//        /*for (var i = 0; i < times; i++) {
//    //            setPrevToCurrent(currentPos);
//    setTimeout(setPrevToCurrent(currentPos), 2000);
//    if (currentPos === 1) {
//        currentPos = max;
//    }
//    else currentPos--;
//}*/
//        return;
//    }
//    if (selectedPos > currentPos) {
//        var x = setInterval(function () {
//            if (currentPos < selectedPos) {
//                setNextToCurrent(currentPos++);
//            }
//            else {
//                clearInterval(x);
//            }
//        }, 600);
//        //        for (var i = 0; i < times; i++) {
//        //            //            setNextToCurrent(currentPos);
//        //            setTimeout(setNextToCurrent(currentPos), 2000);
//        //            if (currentPos === max) {
//        //                currentPos = 1;
//        //            }
//        //            else currentPos++;
//        //        }
//        return;
//    }
//});
////Click on slider 
//$('#slider').on('click', function () {
//    for (var i = 1; i <= max; i++) {
//        var $current = $('#img' + i);
//        if ($current.hasClass('current')) {
//            setNextToCurrent(i);
//            break;
//        }
//    }
//});
//// Onload page
//$(function () {
//    // Initial slider
//    setNextToCurrent(0);
//});
////// Next button 
////$('.next-button').on('click', function () {
////    for (var i = 1; i <= max; i++) {
////        var $current = $('#img' + i);
////        if ($current.hasClass('current')) {
////            setNextToCurrent(i);
////            break;
////        }
////    }
////});
////// Previous button
////$('.pre-button').on('click', function () {
////    for (var i = 1; i <= max; i++) {
////        var $current = $('#img' + i);
////        if ($current.hasClass('current')) {
////            setPrevToCurrent(i);
////            break;
////        }
////    }
////});
var times = 1;
var max = 5;
var createNewImage = function () {
    var $newDiv = $('<div class="slide-img">');
    var $newImg = $('<img src="' + $('#img1 img').attr('src') + '">');
    $newDiv.append($newImg);
    $('#slider').append($newDiv);
};
var clickSlider = function () {
    var imgWidth = $('#img1').width();
    if (times === max + 1) {
        $('#slider').css({
            'transition': '0s'
            , 'transform': 'translateX(0)'
        });
        times = 1;
        return;
    }
    times = parseInt($('.button-active').attr('id'));
    $('#slider').css({
        'transition': '1s'
        , 'transform': 'translateX(' + (-1) * times * imgWidth + 'px)'
    });
    $('#' + times).removeClass('button-active');
    $('.slide-detail a').eq(times - 1).removeClass('detail-active');
    if (times === max) {
        $('#1').addClass('button-active');
        $('.slide-detail a').eq(0).addClass('detail-active');
    }
    times++;
    $('#' + times).addClass('button-active');
    $('.slide-detail a').eq(times - 1).addClass('detail-active');
};
// Click on slider
$('#slider').click(clickSlider);
// Click on button's slider
$('.slider-button a').on('click', function (e) {
    e.preventDefault();
    var imgWidth = $('#img1').width();
    var selectedPos = parseInt($(this).attr('id'));
    var currentPos = parseInt($('.button-active').attr('id'));
    if (selectedPos === currentPos) return;
    $('#slider').css({
        'transition': '1s'
        , 'transform': 'translateX(' + (-1) * (selectedPos - 1) * imgWidth + 'px)'
    });
    $('#' + selectedPos).addClass('button-active');
    $('.slide-detail a').eq(selectedPos - 1).addClass('detail-active');
    $('#' + currentPos).removeClass('button-active');
    $('.slide-detail a').eq(currentPos - 1).removeClass('detail-active');
});
// Automatically slide
setInterval(clickSlider, 7000);
//Window resize
$('#slider').resize(function () {
    var imgWidth = $('#img1').width();
    var currentPos = parseInt($('.button-active').attr('id'));
    $('#slider').css('transform', 'translateX(' + (currentPos - 1) * imgWidth * -1 + ')');
});
//Onload
$(function () {
    createNewImage();
});