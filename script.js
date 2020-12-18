$(document).ready(function(event) {
        $(".Box_starter").one('click',function(){
            var fiveSeconds = 3;
            display = $('.Box_starter');
            startTimer(fiveSeconds, display);
            //Remove the box image
            display.html("Ready ?");                  
            display.css('background-image','none');

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
                display.text("Press e");
                display.addClass("green");
                display.on('keypress',function(event){
                    E_unicode = event.which; //which est l'unicode de la touche e
                    if(E_unicode === 101){
                        display.text("wait");
                        if( display.hasClass("colorized")  ){
                            display.removeClass("colorized"); 
                        }
                        else{
                            display.addClass("colorized");
                            display.removeClass("green");
                        }
                    }
                });            
            }
        }, 1000); // 1000 miliseconds
    }

});