import { checkForEmptyInput } from "./formValidation/checkForEmptyInput.js";
import { checkForInvalidEmail } from "./formValidation/checkForInvalidEmail.js";
import { changeDOM } from "./utils/changeDOM.js";

const submitButton = document.getElementById("submit-button");
//Gets the value of --reduced-motion from css variable
//Then checks if the value is equal to true setting the variable as boolean

submitButton.addEventListener("click", () => {
    // const USER_PREFERS_REDUCED_MOTION = getComputedStyle(document.documentElement).getPropertyValue("--reduced-motion") == "true";
    // const USER_PREFERS_REDUCED_MOTION = true;
    const inputEmail = document.getElementById("email-input").value;
    const isEmpty = checkForEmptyInput(inputEmail);
    const emailIsInvalid = checkForInvalidEmail(inputEmail);
    const emailInputGroup = document.getElementById("email-input-group");
    // console.log(USER_PREFERS_REDUCED_MOTION)
    
    if(isEmpty || emailIsInvalid) {
        emailInputGroup.setAttribute("data-invalid-email", "true");
        return;
    }
    emailInputGroup.setAttribute("data-invalid-email", "false");
    
    // if(USER_PREFERS_REDUCED_MOTION) return;  
    
    changeDOM();
})
