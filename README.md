```javascript
var deobfuscate = function(s) {
	return s.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+25)?c:c-26);});
}
$('.obfuscated-content').children().each(function(index, elem) {
	var $elem = $(elem);
	if ($elem.hasClass('obfuscated')) {
		$elem.text(deobfuscate($elem.text()));
		$("#laterpay-replacement").append($elem);
	};
});
```