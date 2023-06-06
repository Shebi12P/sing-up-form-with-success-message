export const checkForInvalidEmail = (email) => {
    let emailIsInvalid = false;
    // [a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]*
    const validEmailPattern = /[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]@[a-z]{2,}.[a-z]{2,}/;

    if(!validEmailPattern.test(email)) {
        emailIsInvalid = true;
    }

    return emailIsInvalid;
}