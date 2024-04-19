//Change the color of the place holder in the select element
const selectElement = document.querySelector("select");
selectElement.addEventListener('change', function() {
    if(this.value === "0"){
        this.classList.add('placeholder');
    }else{
        this.classList.remove('placeholder');
    }
});
//Trigger the change event for initial styling
const changeEvent = new Event('change');
selectElement.dispatchEvent(changeEvent);


//Form submission and error handling

const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit");

const inputs = contactForm.querySelectorAll("input[required]");
inputs.forEach(input => input.addEventListener('input',showValid));
selectElement.addEventListener('change',showValid);

function showValid(event){
    const field = event.target;
    const selectedValue = field.value; 
    
    field.classList.remove("valid-input", "invalid-input");

    if(selectedValue !== "0" && field.validity.valid){
        field.classList.add("valid-input");
    }else{
        field.classList.add("invalid-input");
    }

}

submitButton.addEventListener('click',submit);

function submit(event){
    //Remove default messages
    event.preventDefault();
    //Remove error messages if already displayed
    resetErrorMessage();
    let hasInvalidInput = false;

    //Check the validity of the inputs
    for(let input of inputs){
        if(!input.validity.valid){
            displayErrorMessage(input,getErrorMessage(input));
            hasInvalidInput = true;
        }
    }
    if(!selectElement.validity.valid){
        displayErrorMessage(selectElement,getErrorMessage(selectElement));
        hasInvalidInput = true;
    }

}

function resetErrorMessage() {
    const errorMessages = document.querySelectorAll(".error");
    //Remove error messages
    errorMessages.forEach(error => error.style.display = "none");
    //Remove colored borders
    contactForm.querySelectorAll("input").forEach(input => {
        input.classList.remove("invalid-input");
    })
    selectElement.classList.remove("invalid-input");
}

function getErrorMessage(input){
    const errorMessages = {
        required: "\u26A0 Este campo es obligatorio",
        maxlength: `\u26A0 El número máximo de caracters es ${input.maxLength}`,
        email: "\u26A0 Porfavor ingresa una dirección de correo electrónico válida",
        tel: "\u26A0 Por favor introduce un número telefónico válido"
    }

    if (input.validity.valueMissing) { return errorMessages.required; }
    if (input.validity.tooLong) { return errorMessages.maxlength; }
    if (input.validity.typeMismatch) { return errorMessages.email; }
    if (input.validity.patternMismatch) { return errorMessages.tel;}
}
function displayErrorMessage(input, message){
    input.classList.add("invalid-input");
    const errorMessage = document.createElement("p");
    errorMessage.className = "error";
    errorMessage.textContent = message;
    input.parentNode.appendChild(errorMessage);
}
