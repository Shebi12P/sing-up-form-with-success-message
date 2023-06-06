import { checkForEmptyInput } from "./checkForEmptyInput.js";
import { checkForInvalidEmail } from "./checkForInvalidEmail.js";
import { checkForSpaces } from "./checkForSpaces.js";

const invalidEmails = ["plainaddress"
,"#@%^%#$@#$@#.com"
,"@example.com"
,"Joe Smith <email@example.com>"
,"email.example.com"
,"email@example@example.com"
,".email@example.com"
,"email.@example.com"
,"email..email@example.com"
,"あいうえお@example.com"
,"email@example.com (Joe Smith)"
,"email@example"
,"email@-example.com"
,"email@example.web",
"email@111.222.333.44444","email@example..com", "Abc..123@example.com"," much.”more\ unusual”@example.com",
"very.unusual.”@”.unusual.com@example.com"
,`very.”(),:;<>[]”.VERY.”very@\\ "very”.unusual@strange.example.com`
]

const validEmails = [`email@example.com`
,`firstname.lastname@example.com`
,`email@subdomain.example.com`
,`firstname+lastname@example.com`
,`email@123.123.123.123`
,`email@[123.123.123.123]`
,`"email"@example.com`
,`1234567890@example.com`
,`email@example-one.com`
,`_______@example.com
,email@example.name`
,`email@example.museum`
,`email@example.co.jp`
,`firstname-lastname@example.com`]

// for(let invalidEmail of invalidEmails) {
//     console.log(checkForInvalidEmail(invalidEmail), invalidEmail)
// }

for(let validEmail of validEmails) {
    console.log(checkForInvalidEmail(validEmail), validEmail)
}

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    // const inputEmail = document.getElementById("e-mail-input").value;
    // const isEmpty = checkForEmptyInput(inputEmail);
    // const hasSpace = checkForSpaces(inputEmail);
    // const emailIsInvalid = checkForInvalidEmail(inputEmail);
    // console.log(isEmpty, hasSpace, emailIsInvalid);
})
