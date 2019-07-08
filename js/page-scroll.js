$(document).ready(function(){
    $(".content").height($("body").height() - $(".header").innerHeight() - $(".footer").innerHeight());

    $(".content").css("padding-top", $(".header").innerHeight());
})