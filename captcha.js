let captchaText = document.getElementById("captchaText");
let captchaEnter = document.getElementById("captchaEnter");
let refreshbtn = document.getElementById("refreshbtn");
let checkbtn = document.getElementById("checkbtn");

let chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let captcha;

function generateCaptcha() {
    captcha = ""
    for (i = 0; i < 7; i++) {
        let index = Math.floor(Math.random() * chars.length)
        captcha = captcha + chars[index]
    }
    captchaText.value = captcha;
    captchaEnter.value=""
}

generateCaptcha();

function validateCaptcha() {
    if (captcha === captchaEnter.value) {
        alert("Valid captch !!!Success")
    }
    else {
        alert("Invalid Captcha");
    }
    captchaEnter.value=""
}

refreshbtn.addEventListener('click', generateCaptcha);
checkbtn.onclick = validateCaptcha;