export const checkForInvalidEmail = (email) => {
    let emailIsInvalid = false;
    const validEmailPattern = /^[a-z0-9!#$%&'*+-/=?^_`{|}"]+@{1}[a-z0-9-\.]+[a-z]$/i;
    const twoOrMorePeriodsInRow = /\.{2,}/;
    const periodAtBegining = /^\./;
    const periodBeforeAtSign = /\.@/;

    if(!validEmailPattern.test(email)) {
        emailIsInvalid = true;
    }

    if(twoOrMorePeriodsInRow.test(email)) {
        emailIsInvalid = true;
    }

    if(periodAtBegining.test(email)) {
        emailIsInvalid = true;
    }

    if(periodBeforeAtSign.test(email)) {
        emailIsInvalid = true;
    }

    return emailIsInvalid;
}