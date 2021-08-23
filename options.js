function details() {

    var comp = document.getElementById("comp").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    chrome.storage.local.set({ companyCode: comp, userName: user, password: pass });

    console.log("set-up user details:");
    console.log({ companyCode: comp, userName: user });
}

document.getElementById("show-pass").addEventListener("click", function() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
});

document.getElementById("save-btn").addEventListener("click", function() {
    details();
    alert("הפרטים נשמרו בהצלחה!");
    document.location.replace("https://checkin.timewatch.co.il/punch/punch.php");
});