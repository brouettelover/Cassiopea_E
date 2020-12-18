$(document).ready(function(event) {
        $(".Box_starter").one('click',function(){
            var end = 0;
            var fiveSeconds = 5,
            display = $('.Box_starter');
            console.log(startTimer(fiveSeconds, display));
            $(".Box_starter").html("Ready ?");                  
            $(".Box_starter").css('background-image','none');

    });
    $(".Box_starter").on('keypress',function(event){
        E_unicode = event.which;
        if(E_unicode === 101){
            if( $(".Box_starter").hasClass("colorized")  ){
                $(".Box_starter").removeClass("colorized"); 
            }
            else{
                $(".Box_starter").addClass("colorized");
            }
        }
    });
    function startTimer(duration, display) {
        var timer = duration, seconds;
        x = setInterval(function () {
            seconds = parseInt(timer % 60);
            display.text(seconds);   
            if (--timer <= 0) {
                timer = duration;
                return timer;
            }
        }, 1000);
        return x;
    }

});