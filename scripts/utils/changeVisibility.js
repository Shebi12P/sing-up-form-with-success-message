export const changeVisibility = (element, shouldBeVisible) => {
    element.setAttribute("data-visible", shouldBeVisible);
}