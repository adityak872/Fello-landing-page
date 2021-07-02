$(window).scroll(function(){
    console.log("active")
    
    if ($(this).scrollTop() > 95) {
       $('.infoHeader').addClass('animate__animated animate__zoomIn');
    } else {
       $('.infoHeader').removeClass('animate__animated animate__zoomIn ');
    }
});