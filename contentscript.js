chrome.extension.onMessage.addListener(function(command, sender, sendResponse) {
	if (command === 'gettext') {
		sendResponse(
			document.title
			+ ' '
			+ document.getElementById('HOTWordsTxt').innerText
		);
    } else if (command.indexOf('settext:') === 0) {
    	var text = command.substring('settext:'.length + 1);
    	text = text.substring(0, text.length - 1);
    	document.getElementById('qrform').message.value = text;
    }
});