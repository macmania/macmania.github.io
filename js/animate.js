$('document').ready(function($) {

    $('img.jojopic').on({
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
        .add(TweenMax.from("#what-would-hh-say", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#how-is-us-doing", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#serve-me", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#build-me-a-sentence", 1, {autoAlpha:0}));

    var tween1 = new TimelineMax()
        .add(TweenMax.from("#type", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#dataset", 1, {autoAlpha: 0}))
        .add(TweenMax.from("#language", 1, {autoAlpha: 0}));


    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerElement("#what-would-hh-say")
        .setTween(tween);

    new ScrollScene(sceneOptions)
        .addTo(controller)
        .triggerElement("#type")
        .setTween(tween1);

    var button = document.getElementById("menu_btn");
    // add onclick event
    button.onclick = function() {
        $('.sidebar').sidebar('toggle');
    };
});

