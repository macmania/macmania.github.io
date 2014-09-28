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

    var tween = new TimelineMax()
        .add(TweenMax.from("#designer", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#developer", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#data", 1, {autoAlpha: 0}));

    var tween1 = new TimelineMax()
        .add(TweenMax.from("#type", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#dataset", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#language", 1, {autoAlpha: 0}));


    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerElement("#designer")
        .setTween(tween);

    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerElement("#type")
        .setTween(tween1);

    jQuery('.sidebar').sidr();

//    $('.sidebar')
//        .sidebar('toggle');
});

