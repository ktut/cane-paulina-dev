// fade in items as necessary
$('.fadein').addClass('fadedin');

// slide up tables on load
$('table').slideUp();

// toggle available units sliding
$(document).on("click",".unit-dropdown",function() {
    $( this ).next("table").slideToggle();
});