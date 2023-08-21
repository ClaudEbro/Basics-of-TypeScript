"use strict";
const form = document.querySelector("#signupForm");
const firstName = document.getElementById('firstName');
const age = document.getElementById('age');
const gender = document.getElementById("gender");
//Validation Form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(firstName.value, age.valueAsNumber, gender.value);
});
