// alert('javaScript works')
// select form by name
const registerForm = document.querySelector('#register-form');
const message = document.querySelector(`#message`);
// Handle form  submit event

// registerForm.addEventListener('click' ,function(){

// })



registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(registerForm)
    console.log(
        formData.get(`username`),
        formData.get(`email`),
        formData.get(`password`)

    )
    // Save user information
    // Save comfirmation email
    // Display success message 
    message.textContent=`YOU HAVE LOGIN SUCCESSFULLY`;
});




function fullName(firstName, lastName) {
    return (`${firstName}  ${lastName}`);
}
const myfullName = fullName('Philip', 'Quaicoe')

console.log(myfullName);