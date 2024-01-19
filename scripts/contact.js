const contactWindow = document.getElementById("contact");
const contactCross = document.getElementById("contact__cross");
const heroButton = document.getElementById("hero__button");
const headerButton = document.getElementById("header__button");
const footerButton = document.getElementById("footer__button");
const aboveFooterButton = document.getElementById("aboveFooter__button");

function openContactWindow(){
    contactWindow.style.display = "flex";
}

function closeContactWindowAndReset(){
    contactWindow.style.display = "none";
    form.reset();
    defaultStyles();
}

heroButton.onclick = openContactWindow;
headerButton.onclick = openContactWindow;
aboveFooterButton.onclick = openContactWindow;
footerButton.onclick = openContactWindow;
contactCross.onclick = closeContactWindowAndReset;

const form = document.getElementById("form");
const formError = document.getElementById("form__error");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const nameField = document.getElementById("nameField");
const emailField = document.getElementById("emailField");
const phoneField = document.getElementById("phoneField");

form.addEventListener('submit', (e) => {
    let errorCount = 0;
    if(nameInput.value === '' || nameInput.value == null){
        e.preventDefault();
        nameError.style.display = "block";
        nameField.style.border = "1px solid var(--Additional-02)";
        errorCount++;
    }
    if(emailInput.value === '' || emailInput.value == null){
        e.preventDefault();
        emailError.style.display = "block";
        emailField.style.border = "1px solid var(--Additional-02)";
        errorCount++;
    }
    if(phoneInput.value === '' || phoneInput.value == null){
        e.preventDefault();
        phoneError.style.display = "block";
        phoneField.style.border = "1px solid var(--Additional-02)";
        errorCount++;
    }
    if(errorCount != 0){
        formError.style.display = "block";
    }
    if(errorCount == 0){
        e.preventDefault();
        closeContactWindowAndReset();
        openThanksWindow();
    }
})

function defaultStyles(){
    nameError.style.display = "none";
    nameField.style.border = "1px solid var(--Grayscale-20)";
    emailError.style.display = "none";
    emailField.style.border = "1px solid var(--Grayscale-20)";
    phoneError.style.display = "none";
    phoneField.style.border = "1px solid var(--Grayscale-20)";
    formError.style.display = "none";
}

const thanksWindow = document.getElementById("thanks");
const thanksCross = document.getElementById("thanks__cross");
const thanksButton = document.getElementById("thanks__button");

function closeThanksWindow(){
    thanksWindow.style.display = "none";
}

function openThanksWindow(){
    thanksWindow.style.display = "flex";
}

thanksCross.onclick = closeThanksWindow;
thanksButton.onclick = closeThanksWindow;