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
            $(this).attr('src','/img/jojo-after.jpg');
        },
        mouseout : function() {
            $(this).attr('src','/img/jojo-pic.jpg');
        }
    });
    var sceneOptions = {duration: 200, offset: -100};
    var controller = new ScrollMagic();

    //fade designer
    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerHook("onCenter")
        .triggerElement("#designer")
        .setTween(TweenMax.from("#designer", 1, {autoAlpha: 0}));

    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerHook("onCenter")
        .triggerElement("#developer")
        .setTween(TweenMax.from("#developer", 1, {autoAlpha: 0}));

    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerHook("onCenter")
        .triggerElement("#data")
        .setTween(TweenMax.from("#data", 1, {autoAlpha: 0}));

    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerHook("onCenter")
        .triggerElement("#type")
        .setTween(TweenMax.from("#type", 1, {autoAlpha: 0}));

    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerHook("onCenter")
        .triggerElement("#dataset")
        .setTween(TweenMax.from("#dataset", 1, {autoAlpha: 0}));

    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerHook("onCenter")
        .triggerElement("#language")
        .setTween(TweenMax.from("#language", 1, {autoAlpha: 0}));



//
//    var tween = TweenLite.to("#designer",.5, {"visibility": "inherit", opacity: 1});
//    var scene = new ScrollScene({duration: 100, triggerElement: "#trigger2"})
//        .setTween(tween)
//        .addTo(cont);
//    var s2 = new ScrollScene({duration: 50})
//                .setPin('#experiment')
//                .addTo(cont);
//    cont.addScene([
//        scene, s2
//    ])
    //scene.addIndicators();


//    $('#developer').addClass('animated fadeInLeft');
//    $('#data').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//        $(this).addClass('animated fadeInLeft');
//    });

    //var tweenLite = new TweenLite(page2, 1.5, {delay: 10});

});

