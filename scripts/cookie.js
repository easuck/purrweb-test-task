const cross = document.getElementById("cookie__cross");
const cookie = document.getElementById("cookie");
const acceptButton = document.getElementById("cookie__accept");
const declineButton = document.getElementById("cookie__decline");

function closeCookie(){
    cookie.style.display = "none";
}

cross.onclick = closeCookie;
declineButton.onclick = closeCookie;
acceptButton.onclick = closeCookie;