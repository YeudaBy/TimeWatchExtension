function loadDetails() {
    chrome.storage.local.get(['companyCode', 'userName', 'password'], function(result) {
        document.getElementById("compKeyboard").value = (result.companyCode);
        document.getElementById("nameKeyboard").value = (result.userName);
        document.getElementById("pwKeyboard").value = (result.password);
    });
}


loadDetails();

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(5).then(() => {
    var inputs = document.getElementsByTagName('input')
    for (item in inputs) {
        if (inputs[item].type == "image") {
            inputs[item].click();
        }
    };
});