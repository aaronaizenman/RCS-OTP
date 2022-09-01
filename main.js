function userpass_submit(user, pass) {
    console.log("submit button pressed true");
    console.log(user);
    console.log(pass);

    let btn = document.createElement("button");
    btn.innerHTML = "Send 2FA code to my phone.";
    btn.type = "submit";
    btn.onclick = function () {
        console.log("2FA generation button has been clicked")
    }
    document.getElementById("formdiv").appendChild(btn);

    return true
}