$(function(){
    $.supersized({

        // Functionality
        slide_interval     : 3500,    // Length between transitions
        transition         : 1,    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed   : 1200,    // Speed of transition
        performance        : 1,    // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)

        // Size & Position
        min_width          : 0,    // Min width allowed (in pixels)
        min_height         : 0,    // Min height allowed (in pixels)
        vertical_center    : 1,    // Vertically center background
        horizontal_center  : 1,    // Horizontally center background
        fit_always         : 0,    // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait       : 1,    // Portrait images will not exceed browser height
        fit_landscape      : 0,    // Landscape images will not exceed browser width

        // Components
        slide_links        : 'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides             : [    // Slideshow Images
            {image : 'img/backgrounds/1.jpg'},
            {image : 'img/backgrounds/2.jpg'},
            {image : 'img/backgrounds/3.jpg'},
            {image : 'img/backgrounds/4.jpg'},
            {image : 'img/backgrounds/5.jpg'},
            {image : 'img/backgrounds/6.jpg'},
            {image : 'img/backgrounds/7.jpg'}
        ]

    });

    $('#fullpage').fullpage();
    var sparklehSetting = {
        color: 'rainbow',
        count: 100,
        overlap: 10
    };
    $('.g-title').on('click', function(){
        $(this).velocity({ width: 60, opacity: 0.5}, 1350).velocity({ height: 0, opacity: 1 }, 1500);
        $('body').sparkleh(sparklehSetting);
        setTimeout(function(){
            $('#authorImg').velocity({
                p: { translateY: '-150px', scale: 1.2},
                o: { duration: 500}
            }).velocity({
                p: { translateY: '0' },
                o: { duration: 500, delay: 200 }
            }).velocity({p: {rotateZ: '180deg'}, o:{}}).velocity({p: {rotateZ: '0deg', scale: 1}, o:{}});

        }, 4000);
    });

    $('#authorImg').on('mouseover', function () {
        $(this).addClass('magictime puffIn');
    }).on('mouseout', function(){
        $(this).removeClass('magictime puffIn');
    });

    setInterval(function(){
        $('.g-go-to-lean').toggleClass('magictime tinRightIn');
    }, 2000 );
});