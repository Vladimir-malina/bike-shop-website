let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let passwordCheckInput = document.getElementById("password-check");
let button = document.getElementById("button");

button.addEventListener("click", submitProcess);

function submitProcess(e) {

  let emailValue = emailInput.value;
  let nameValue = nameInput.value;
  let passwordValue = passwordInput.value;
  let passwordCheckValue = passwordCheckInput.value;

  if (passwordValue !== passwordCheckValue) {
    e.preventDefault();
    alert("Password confirmation does not match");
  } else {
    let user = {};
    user.name = nameValue;
    user.email = emailValue;
    user.password = passwordValue;

    for (i = 0; i < localStorage.length; i++) {
      let user = JSON.parse(localStorage.getItem(`user${i}`));
      if (user.email === emailValue) {
        e.preventDefault();
        alert("user with same email already exist");
        return;
      }
    }
    localStorage.setItem(`user${localStorage.length}`, JSON.stringify(user));
  }
}


