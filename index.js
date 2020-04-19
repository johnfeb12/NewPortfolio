
$(function() {

    $('.counter').animate({
        Counter: 100
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    
$(document).ready(function(){
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },6000);
    });
});

    $(function(){
        $(".typed").typed({
            strings: ["Software Developer.", "Software Designer.", "Front End Developer"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 1500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 5,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });

    $(".preload").animate({width: '100%', height: '100%'}, 1000).fadeOut(1000, function() {
  
        $(".content").fadeIn(1000);        
    });
});



