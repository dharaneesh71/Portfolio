$(document).ready(function () {
    $('nav ul li a').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });

    // Initialize Animate.css animations
    $('.animate__animated').waypoint(function () {
        $(this.element).addClass('animate__fadeIn').css('visibility', 'visible');
    }, {
        offset: '80%'
    });
});
