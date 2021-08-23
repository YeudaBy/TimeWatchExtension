var enterBtn = document.getElementById("enter-btn");
var exitBtn = document.getElementById("exit-btn");
var pageUrl = "https://checkin.timewatch.co.il/punch/punch.php";

document.getElementById("cont").style.display = "none";
document.getElementById("tmp").style.display = "block";

function goToPage() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        if (url === pageUrl) {
            location.reload();
        } else {
            chrome.tabs.create({ active: true, url: pageUrl });
        }
    });
}


document.getElementById("tmp-btn").addEventListener("click", function() {
    goToPage();
    chrome.runtime.sendMessage({ action: "exit" });
});