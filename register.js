
let btnRegis = document.getElementById("regis")


btnRegis.addEventListener("submit", function(e){

// let RegistBtn = document.getElementById("RegistBtn")
// RegistBtn.addEventListener('click', ()=> {
// //     window.location.href="home.html"
// // });
        
        // window.open("http://127.0.0.1:5500/home.html")
        e.preventDefault()
        //  window.location.pathname = "./home.html";

        // let btnRegis = document.getElementById("regis");

        const usernameError = document.getElementById("usernameError");
        const emailError = document.getElementById("emailError");
        const ageError = document.getElementById("ageError");
        const passwordError = document.getElementById("passwordError");
        const confirmError = document.getElementById("confirmError");
        const phoneError = document.getElementById("phoneError");

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("passconfirm");
  const phone = document.getElementById("phone");




  if (username.value.trim() === "") {
    usernameError.textContent = "Username cannot be empty";
    return;
  } else {
    usernameError.textContent = "";
  }

  
  if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    emailError.textContent = "Invalid email format";
    return; 
  } else {
    emailError.textContent = "";
  }

  if (isNaN(number.value) || number.value < 18) {
    ageError.textContent = "you are not old enough";
    return; 
  } else {
    ageError.textContent = "";
  }


  if (password.value.trim() === "") {
        passwordError.textContent = "Password cannot be empty";
    return; 
  } else {
    passwordError.textContent = "";
  }

  if (confirmPassword.value.trim() === "") {
    confirmError.textContent = "Confirm password cannot be empty";
    return; }
    else if (password.value.trim().length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        return; 
  } else if (confirmPassword.value !== password.value) {
    confirmError.textContent = "Passwords do not match";
    return; 
    
  } else {
    confirmError.textContent = "";
  }
  if (isNaN(phone.value)) {
    phoneError.textContent = "Invalid Phone Number";
    return; 
  } else {
    phoneError.textContent = "";
  }

  const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
let genderSelected = false;

if (!maleRadio.checked && !femaleRadio.checked) {
  alert("Please select your gender. Ur not GENDERLESS");
  return;
} else {
  genderSelected = true;
}

  

  alert("Registration successful!");
  window.location.pathname = "./home.html";
});




