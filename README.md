```javascript
var deobfuscate = function(s) {
	return s.replace(/[a-zA-Z{å÷ýàÝ]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+25)?c:c-26);}).replace(/@/g, '?').replace(/\//g,'.').replace(/\[/g, 'Z');
}
$('.obfuscated-content').children().each(function(index, elem) {
	var $elem = $(elem);
	if ($elem.hasClass('obfuscated')) {
		$elem.text(deobfuscate($elem.text()));
		$("#laterpay-replacement").append($elem);
	};
});
```

```javascript
(function ($) {
    var defaults = {
        callback: function () { },
        runOnLoad: true,
        frequency: 100,
        previousVisibility : null
    };

    var methods = {};
    methods.checkVisibility = function (element, options) {
        if (jQuery.contains(document, element[0])) {
            var previousVisibility = options.previousVisibility;
            var isVisible = element.is(':visible');
            options.previousVisibility = isVisible;
            if (previousVisibility == null) {
                if (options.runOnLoad) {
                    options.callback(element, isVisible);
                }
            } else if (previousVisibility !== isVisible) {
                options.callback(element, isVisible);
            }

            setTimeout(function() {
                methods.checkVisibility(element, options);
            }, options.frequency);
        } 
    };

    $.fn.visibilityChanged = function (options) {
        var settings = $.extend({}, defaults, options);
        return this.each(function () {
            methods.checkVisibility($(this), settings);
        });
    };
})(jQuery);

$('.ua-detected').visibilityChanged({
    callback: function(element, visible) {
       $('.close-button').click();
    },
    runOnLoad: false,
    frequency: 100
});
```
