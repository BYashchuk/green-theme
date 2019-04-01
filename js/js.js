$("#mobile-menu").click(function () {
    $(".mobile-menu").slideToggle("slow");
});

$("#mobile-user").click(function () {
    $(".mobile-user").slideToggle("slow");
});

$(".hat").click(function () {
    $(".menu-out").toggle();

});

$('.js-active li > a').click(function () {
    $('li').removeClass();
    $(this).parent().addClass('activer');
});

$(".map").click(function () {
    $(".map").css('display', 'none');
});

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);