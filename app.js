$(document).ready(function() {
    $(".image").mouseover(function() {
        $(this).next(".caption").fadeIn();
    });
    $(".image").mouseleave(function() {
        $(this).next(".caption").hide();
    });
    $("a").click(function(){
        $("html, body").animate({
            scrollTop: $( $.attr(this, "href") ).offset().top
        }, 500);
        return false;
    });
    
    $("#myCarousel").carousel();
});