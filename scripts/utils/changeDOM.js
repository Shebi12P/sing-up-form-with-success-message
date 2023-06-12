import { getAnimationTimeInMiliSeconds } from "./getAnimationTime.js";
import { changeAnimation } from "./changeAnimation.js";
import { changeVisibility } from "./changeVisibility.js";

export const changeDOM = () => {
    const animationTimeInMiliSeconds = getAnimationTimeInMiliSeconds();
    const formCard = document.querySelector(".card--form");
    const successCard = document.querySelector(".card--success");

    changeAnimation(formCard, true);

    setTimeout(() => {
        changeAnimation(formCard, false);
        changeVisibility(formCard, false);

        changeAnimation(successCard, true);
        changeVisibility(successCard, true);

        setTimeout(()=> {
            changeAnimation(successCard, false);
        }, animationTimeInMiliSeconds);

    }, animationTimeInMiliSeconds);
}