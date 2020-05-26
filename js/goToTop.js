$(document).ready(function(){
    console.log($(this).scrollTop());

$(window).scroll(function() {
 
    if($(this).scrollTop() >= 900) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
    
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},800);
     
    });
     
    });