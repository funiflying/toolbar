requirejs.config({
    paths:{
        jquery:'jquery-1.10.2.min',
        bootstrap:"dist/js/bootstrap",
        angular:"angular.min"
    }
});
requirejs(['jquery','validate'],function($,validate){

    $(".scroll-top").on("click",function(){
        $("html,body").animate({scrollTop:0},800)

    });

    $(window).on('scroll',function(e){
            if($(window).scrollTop()>$(window).height()){
                $(".scroll-top").css("display","block");
            }
            else{
                $(".scroll-top").css("display","none");
            }

    })


});