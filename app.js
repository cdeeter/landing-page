$(document).ready(function() {
    $(".image").mouseover(function() {
        $(this).next(".caption").fadeIn();
    });
    $(".image").mouseleave(function() {
        $(this).next(".caption").hide();
    });
    
    $("#myCarousel").carousel();
});