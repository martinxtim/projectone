$(document).scroll(function() {
  var scrollPosition = $(window).scrollTop();
  
  if (scrollPosition > 155) {
    $('#navbar').addClass('sticky');
  }
  else{
    $('#navbar').removeClass('sticky');
   }	
});
