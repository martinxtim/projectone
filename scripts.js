$(document).scroll(function() {
  var scrollPosition = $(window).scrollTop();
  
  if (scrollPosition > 155) {
    $('#navbar').addClass('sticky');
  }
  else{
    $('#navbar').removeClass('sticky');
   }	
});

// set cookie
function setAgreeCookie() {
    var expire=new Date();
    expire=new Date(expire.getTime()+7776000000);
    document.cookie="test=here; expires="+expire;
}

$(document).ready(function() {
    var visit=GetCookie("test");
    if (visit==null){
        cookiebar();
    }
    $('#close-cookies').click(function(){ 
        $('#cookiebar').addClass('close-cookies');
    });

});

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

// 
function cookiebar() {
    $('#cookiebar').addClass('display');
}

// click handler for I agree button
$('#close-cookies').click(function(){ 
    setAgreeCookie();
    $('#cookiebar').addClass('close-cookies');
});
