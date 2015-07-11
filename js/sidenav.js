(function(){
  console.log('side nav, yo');
  $('.side-navbar-button').click(function(){
    console.log('click');
    $(this).fadeOut();
    $('.side-navbar').delay(1200).css('margin-left', '0px');
  });

  $('.close-button').click(function(){
    $('.side-navbar').css('margin-left', '-265px');
    $('.side-navbar-button').fadeIn()


  });
})();


