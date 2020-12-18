$(document).ready(function(event) {
        $(".Box_starter").one('click',function(){
            var end = 0;
            var fiveSeconds = 5,
            display = $('.Box_starter');
            startTimer(fiveSeconds, display);
            $(".Box_starter").html("Ready ?");                  
            $(".Box_starter").css('background-image','none');

    });

    function startTimer(duration, display) {
        var timer = duration, seconds;
        var x = setInterval(function () {
            seconds = parseInt(timer % 60);
            display.text(seconds);
            if (--timer < 0) {
                timer = duration;
            }
            if(seconds == 0){
                clearInterval(x);
                display.text("")
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
            }
        }, 1000);
    }

});