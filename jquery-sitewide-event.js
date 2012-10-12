// jQuery Sitewide Event Firer
// Fire a callback after some time has passed, no matter the user has been browsing your website the counter always resumes from previous state
// version 0.1b
// by Nico Fantino

; (function($) {
    $.sitewideEvent = function(options, callback) {

        var defaults = {
            cookieName: 'jQtimer',
            cookieExpires: null,
            cookiePath: '/',
            interval: 1000,
            fireAt: 6000,
            callback: null
        };

        if (typeof options == 'function') 
            var callback = options;

        var options = $.extend(defaults, options);

        this.checkTimer = function() {

            var startFrom = $.cookie(options.cookieName);

            if (startFrom == null) {
                var theDate = options.cookieExpires;
                $.cookie(options.cookieName, options.interval + ',expireDate=' + theDate, {
                    expires: theDate,
                    path: options.cookiePath
                });
                startFrom = $.cookie(options.cookieName);
            }

            theDate = new Date(startFrom.split(',expireDate=')[1]);
            startFrom = startFrom.split(',expireDate=')[0];

            if (parseInt(startFrom) >= options.fireAt) {
                $.cookie(options.cookieName, options.interval + ',expireDate=' + theDate, {
                    expires: theDate,
                    path: options.cookiePath
                });
                if (typeof callback == 'function') {
                    callback.call(this);
                } else if (typeof options.callback == 'function') {
                    options.callback.call(this);
                }

            } else {
                $.cookie(options.cookieName, (parseInt(startFrom) + options.interval) + ',expireDate=' + theDate, {
                    expires: theDate,
                    path: options.cookiePath
                });
            }
        };

        this.start = function() {
            var timerr = setInterval(this.checkTimer, options.interval);
        };

        if (typeof $.cookie !== 'function')
            $.getScript('https://raw.github.com/carhartl/jquery-cookie/v1.2/jquery.cookie.js', this.start());
        else
            this.start();
    }
})(jQuery);