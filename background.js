chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
	if (change.status == "complete" && tab.url.indexOf('http://www.forocoches.com/foro/showthread.php') === 0) {
	    chrome.pageAction.show(tabId);
	    chrome.tabs.getSelected(null, function(tab) {
	    	chrome.tabs.sendMessage(tab.id, 'gettext', function(text) {
	    		var handleStateChange = function() {
					if (xhr.readyState == 4) {
						chrome.tabs.sendMessage(tab.id, 'settext:' + xhr.responseText);
					}
				};
				
	    		var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
				xhr.open('POST', 'http://r00tserver.net:9100/text/', true);
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.send('text=' + encodeURIComponent(text));
	  		});
		});
	}
});