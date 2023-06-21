import { checkForEmptyInput } from "./formValidation/checkForEmptyInput.js";
import { checkForInvalidEmail } from "./formValidation/checkForInvalidEmail.js";
import { changeDOM } from "./utils/changeDOM.js";
import { changeAnimation } from "./utils/changeAnimation.js";
import { changeVisibility } from "./utils/changeVisibility.js";
import { getAnimationTimeInMiliSeconds } from "./utils/getAnimationTime.js";

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    const inputEmail = document.getElementById("email-input").value;
    const isEmpty = checkForEmptyInput(inputEmail);
    const emailIsInvalid = checkForInvalidEmail(inputEmail);
    const emailInputGroup = document.getElementById("email-input-group");
    
    if(isEmpty || emailIsInvalid) {
        emailInputGroup.setAttribute("data-invalid-email", "true");
        return;
    }
    emailInputGroup.setAttribute("data-invalid-email", "false");
    
    changeDOM();
});

const successButton = document.querySelector(".button--success");

successButton.addEventListener("click", () => {
    const successCard = document.querySelector(".card--success");
    const animationTime = getAnimationTimeInMiliSeconds();
    let animationEndState = getComputedStyle(successCard).getPropertyValue("--end-animation");
    let animationStartState = getComputedStyle(successCard).getPropertyValue("--start-animation");

    console.log(animationEndState, animationStartState);
    successCard.style.setProperty("--start-animation", animationEndState);
    successCard.style.setProperty("--end-animation", animationStartState); 
    
    changeAnimation(successCard, true);

    setTimeout(()=> {
        changeVisibility(successCard, false);
    }, animationTime)
});