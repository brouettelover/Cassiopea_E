$(document).ready(function(event) {
    $(".Box_starter").focus(function(){
        $(".Box_starter").html("Press E");
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

});