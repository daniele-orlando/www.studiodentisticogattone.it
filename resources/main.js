;(function (undefined) {
        'use strict'

        var go = function () {
        }

        if (document.readyState === 'complete') {
                go()
        } else {
                document.addEventListener('DOMContentLoaded', go)
        }
})()
