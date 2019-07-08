$(document).ready(function(){
    if (window.innerHeight){
        winHeight = window.innerHeight;
    }
    else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight;
    }
    
    if (document.documentElement && document.documentElement.clientHeight){
        winHeight = document.documentElement.clientHeight;
    }
    
    var headerHeight = $(".header").innerHeight();
    var footerHeight = $(".footer").innerHeight();
    var contentHeight = winHeight;
    
    // console.log(contentHeight);
    // console.log(winHeight);
    // console.log(headerHeight);
    // console.log(footerHeight);

    $(".content").height(contentHeight);

    $(".content").css("padding-top", headerHeight);

    $(".content").css("padding-bottom", footerHeight);
})