chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
	console.log("button clicked");
}

chrome.tabs.excuteScript(null,{file:'button.js',});

