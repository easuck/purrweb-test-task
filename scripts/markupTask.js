const contactWindow = document.getElementById("contact__window");
const contactCross = document.getElementById("contact__cross");
const heroButtton = document.getElementById("hero__button");

function openContactWindow(){
    contactWindow.style.display = "flex";
}

function closeContactWindow(){
    contactWindow.style.display = "none";
}

heroButtton.onclick = openContactWindow;
contactCross.onclick = closeContactWindow;