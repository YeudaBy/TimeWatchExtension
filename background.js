chrome.runtime.onInstalled.addListener(function(details) {
    chrome.runtime.openOptionsPage();
    if (details.reason === "install") {

        console.log("install");
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "exit")
            alert("exit!");
    }
);