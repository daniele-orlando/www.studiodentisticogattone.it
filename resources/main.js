;(function (undefined) {
        'use strict'

        var go = function () {
                var video = document.getElementsByTagName('video')[0]

                var playVideoHandler = function() {
                        video.play()
                        document.removeEventListener('touchstart', playVideoHandler)
                }

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
