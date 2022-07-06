$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(window).height()){
            $(".nav-wrapper").css({"background-color":"rgb(248, 248, 248)"});   
        }
        else{
            $(".nav-wrapper").css({"background-color":"transparent"});
        }

    })
})