// ==UserScript==
// @name         Yugalab unit name fixed to top.
// @namespace    http://yugalab.sakura.ne.jp/archives/mrstunit/
// @version      0.1
// @description  ユガラボ様のユニット個別ページでユニット名とスペックを同時に見るためのスクリプト
// @author       @rakousan / rakou1986
// @match        http://yugalab.sakura.ne.jp/archives/mrstunit/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $(document).ready(function(){
        var unitname = $("h4");
        var fixed = {"position": "fixed",
                     "top": "0",
                     "left": "0",
                     "width": "100%",
                     "background-color": "aliceblue",
                     "z-index": "2",
                    };
        var release = {};
        Object.assign(release, fixed);
        Object.keys(release).forEach(function(value, idx, array) {
            var key = value;
            release[key] = "";
        });
        var scroll_offset = unitname.offset().top;

        var polling = function(){
                if (scroll_offset < $(window).scrollTop()) {
                    unitname.css(fixed);
                } else {
                    unitname.css(release);
                }
            };

        // scrollイベントは負荷が高そうなので長い間隔で定期実行
        var polling_id = setInterval(polling, 500);
    });
})();
