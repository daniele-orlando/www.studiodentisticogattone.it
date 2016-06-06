;(function (undefined) {
        'use strict'

        var playVideoHandler = function () {
                var video = document.getElementsByTagName('video')[0]
                video.play()
                document.removeEventListener('touchstart', playVideoHandler)
        }

        var go = function () {
                document.addEventListener('touchstart', playVideoHandler)
        }

        if (document.readyState === 'complete'
            || document.readyState === 'loaded'
            || document.readyState === 'interactive') {
                go()
        } else {
                document.addEventListener('DOMContentLoaded', go)
        }
})()
