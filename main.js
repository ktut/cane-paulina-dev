
// slide up tables
// $('div.table').slideUp();

// on load:
$( document ).ready(function() {
    // fade in items as necessary
    $('.fadein').addClass('fadedin');
});

// toggle available units sliding
$( document ).on("click",".unit-dropdown.active",function() {
    // $( this ).next("div.table").slideToggle();
    $( this ).hide();
});

$( document ).on("click",".test",function() {
    $( this ).hide();
});

//Smooth scrolling with links
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});