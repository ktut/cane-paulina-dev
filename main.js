
// on load:
$( document ).ready(function() {
    // fade in items as necessary
    $('.fadein').addClass('fadedin');

    // slide up tables
    $('div.table').slideUp();
});

// toggle available units sliding
$(document).on("click",".unit-dropdown",function() {
    $( this ).next("div.table").slideToggle();
});

//Smooth scrolling with links
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});