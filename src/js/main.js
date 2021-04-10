$(function(){

    $('.down-link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#content-items').offset().top }, 900, );
      e.preventDefault();
    });

    $('.main-menu__icon').on('click', function() {
        $('.main-header__nav').toggleClass('active');
    });
    
});