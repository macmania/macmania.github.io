/**
 * Created by jojofabe on 9/28/14.
 */
/*jslint        browser: true,      continue: true,
 devel: true,    indent: 2,          maxerr: 50,
 newcap: true,   nomen: true,        plusplus: true,
 regexp: true,   sloppy: true,       vars: false,
 white: true
 */

/* global $, spa */

var menu = (function(){
    var
        configMap = {
        //append this menu options on the right
        menu_html : String() +
            '<div class="ui thin left sidebar" id="side_menu">'+
            '<a class="item side active" id="home" >Home</a>' +
            '<a class="item side" id="projects">Side Projects</a>' +
            '<a class="item" id="opensource">Open Source</a>' +
            '<a class="item side" id="blog">Blog</a>' +
            '<a class="item side" id="coursework">Coursework</a></div>',
        menu_extend_time: 450,
        menu_rectract_time: 300
        },
        stateMap = {
            $container: null,
            is_menu_retracted: true
        },
        jqueryMap = {},
        setJqueryMap, toggleButton, onClickMenu, initModule;

    setJqueryMap = function() {
        var $container = stateMap.$container;
        jqueryMap = {
            $container: $container,
            $menubtn: $('#menu_btn'),
            $body: $('body')
        };
    };

    toggleButton = function (do_extend) {
        if(do_extend){
            //jqueryMap.$body.animate()
            jqueryMap.$body.append(configMap.menu_html);
            return true;
            $('.sidebar')
            .sidebar('toggle');

        }
        jqueryMap.$body.removeChild("#side_menu");
        return true;
    };

    onClickMenu = function(event){
        toggleButton(stateMap.is_menu_retracted);
        return false;
    };

    initModule = function($container){
        stateMap.$container = $container;
        setJqueryMap();
        stateMap.is_menu_retracted = true;
        jqueryMap.$menubtn
            .attr('title', "click to see menu options")
            .click(onClickMenu);
    };
    return {initModule:initModule}
}());