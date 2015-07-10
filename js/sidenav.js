(function(){
  console.log('side nav, yo');
  $('.side-navbar-button .nav-hamburgers').click(function(){
    console.log('click');
    $('.side-navbar-button, .nav-hamburgers').fadeOut();
    $('.side-navbar').delay(1200).css('margin-left', '0px');
  });

  $('.close-button').click(function(){
    $('.side-navbar').css('margin-left', '-250px');
    $('.side-navbar-button, .nav-hamburgers').fadeIn()


  });
})();


