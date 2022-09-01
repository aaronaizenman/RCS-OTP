function userpass_submit(user, pass) {
    console.log("submit button pressed true");
    console.log(user);
    console.log(pass);

    let btn = document.createElement("button");
    btn.innerHTML = "Send 2FA code to my phone.";
    document.body.appendChild(btn);

    return true
}