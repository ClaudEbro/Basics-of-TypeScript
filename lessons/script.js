"use strict";
const signupForm = document.getElementById('signupForm');
const firstName = document.getElementById('firstName');
const age = document.getElementById('age');
function gift(age) {
    return +age + 3;
}
signupForm.addEventListener("submit", ev => {
    ev.preventDefault();
    if (+age.value < 18) {
        console.log('Inscription rejected');
    }
    else {
        console.log(`
            Welcome ${firstName.value}!
            You are ${+age.value}.
            You will have a present while you get ${gift(+age.value)} years.
        `);
    }
});
