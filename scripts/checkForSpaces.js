export const checkForSpaces = (input) => {
    let hasSpace = false;
    const spacePattern = /\s/;

    if(spacePattern.test(input)) {
        hasSpace = true;
    }

    return hasSpace;
}