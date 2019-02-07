$(document).scroll(function() {
  var scrollPosition = $(window).scrollTop();
  
  if (scrollPosition > 155) {
    $('#navbar').addClass('sticky');
  }
  else{
    $('#navbar').removeClass('sticky');
   }	
});



// checks to see if cookie exists on page load. If it DNE we will show banner, hide if it does exist
$(document).ready(function() {
    var visit=GetCookie("test");
    if (visit==null){
        cookiebar();
    }
    $('#close-cookies').click(function(){ 
        $('#cookiebar').addClass('close-cookies');
    });

});

// sets cookie
function setAgreeCookie() {
    var expire=new Date();
    expire=new Date(expire.getTime()+7776000000);
    document.cookie="test=here; expires="+expire;
}

// function used to test if our cookie exists for the user
function GetCookie(name) {
    var arg=name+"=";
    var arglen=arg.length;
    var dclen=document.cookie.length;
    var i=0;

    while (i<dclen) {
        var j=i+arglen;
            if (document.cookie.substring(i,j)==arg)
                return "here";
                i=document.cookie.indexOf(" ",i)+1;
            if (i==0) 
                break;
    }
    return null;
}

// used in document ready function to display the banner
function cookiebar() {
    $('#cookiebar').addClass('display');
}

// click handler for I agree button
$('#close-cookies').click(function(){ 
    setAgreeCookie();
    $('#cookiebar').addClass('close-cookies');
});
