// alert('Hello world')
const loginform = document.querySelector(`#login`);

const loginSuccess = document.querySelector(`#loginSuccess`);

loginform.addEventListener('submit' ,function(event){
    event.preventDefault();
    const loginData = new FormData(loginform)

    console.log(
        loginData.get(`username`),
        loginData.get(`password`)
    )
    loginSuccess.textContent="YOU ARE LOGIN SUCCESSFULLY🎅🍾"
    window.location.href = "./profile.html";
})