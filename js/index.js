$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(window).height()/2){
            $(".nav-wrapper").css({"background-color":"rgb(248, 248, 248)"});   
            $(".nav-links").css({"padding-right":"0"}); 
            $(".nav-logo").css({"margin-left":"20px"});   
        }
        else{
            $(".nav-wrapper").css({"background-color":"transparent"});
            $(".nav-links").css({"padding-right":"28vw"}); 
            $(".nav-logo").css({"margin-left":"-170px"});   
        }

    })
})