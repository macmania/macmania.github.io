var spa = (function($){
    var configMapSlider = {
        extended_height:  100,
        extended_title: 'Click to retract',
        retracted_height: 40,
        retracted_title: 'Click to extend',
        template_html_slider: '<div class="spa-slider"><h1>Hello</h1><\/div>'
    },$chatSlider, toggleSlider, onClickSlider, initModule;

    //declares the other variables
    toggleSlider = function()
    {
        var slider_height = $chatSlider.height()

        if(slider_height === configMapSlider.retracted_height){
            $chatSlider
                .animate(
                {height: configMapSlider.extended_height }
            )
                .attr('title', configMapSlider.extended_title);
            return true;
        }
        else if (slider_height === configMapSlider.extended_height) {
            $chatSlider
                .animate({height: configMapSlider.retracted_height})
                .attr('title', configMapSlider.retracted_title);
            return true;
        }
        //don't take action if the slider is doing its job
        return false;
    }

    //when user clicks on the slider, this pops up
    onClickSlider = function(event){
        toggleSlider();
        return false;
    };

    initModule = function($container){
        $container.html(configMapSlider.template_html_slider);
        $chatSlider = $container.find('.spa-slider'); //finds this particular div and stores them to the chat-slider
        //initializes the height and width of the chat slider
        $chatSlider
            .attr('title', configMapSlider.retracted_title)
            .click(onClickSlider);
        return true;
    };
    return {initModule : initModule};
}(jQuery));

jQuery(document).ready( function() { spa.initModule(jQuery('#spa')); });



$('document').ready(function($) {

    $('img').on({
        'mouseover' : function() {
            $(this).attr('src','/Images/jojo-after.jpg');
        },
        mouseout : function() {
            $(this).attr('src','/Images/jojo-pic.jpg');
        }
    });

    $('#developer').addClass('animated fadeInLeft');
    $('#data').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).addClass('animated fadeInLeft');
    });


    var controller = new ScrollMagic();
});