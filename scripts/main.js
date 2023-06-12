import { checkForEmptyInput } from "./formValidation/checkForEmptyInput.js";
import { checkForInvalidEmail } from "./formValidation/checkForInvalidEmail.js";
import { changeDOM } from "./utils/changeDOM.js";

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    const inputEmail = document.getElementById("e-mail-input").value;
    const isEmpty = checkForEmptyInput(inputEmail);
    const emailIsInvalid = checkForInvalidEmail(inputEmail);
    const emailInputGroup = document.getElementById("email-input-group");
    
    if(isEmpty || emailIsInvalid) {
        emailInputGroup.setAttribute("data-invalid-email", "true");
        return;
    }
    else {
        emailInputGroup.setAttribute("data-invalid-email", "false");
        changeDOM();
    }
})
