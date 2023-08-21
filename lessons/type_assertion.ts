const form = document.querySelector("#signupForm") as HTMLInputElement;
const firstName = document.getElementById('firstName') as HTMLInputElement;
const age = document.getElementById('age') as HTMLInputElement;
const gender = document.getElementById("gender") as HTMLInputElement;

//Validation Form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(firstName.value, age.valueAsNumber, gender.value);
})