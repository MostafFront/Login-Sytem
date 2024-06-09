const signupPage = document.getElementById("signupPage");
const signupForm = document.getElementById("signupForm");
const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const emailError = document.getElementById("emailError");

const signinPage = document.getElementById("signinPage");
const signinForm = document.getElementById("signinForm");
const signinEmailInput = document.getElementById("signinEmailInput");
const signinPasswordInput = document.getElementById("signinPasswordInput");

const homePage = document.getElementById("homePage");
const greetingMessage = document.getElementById("greetingMessage");
const username = document.getElementById("username");
const logoutButton = document.getElementById("logoutButton");

let savedUser = {};

function togglePages() {
  signupPage.style.display = (signupPage.style.display === "none") ? "flex" : "none";
  signinPage.style.display = (signinPage.style.display === "none") ? "flex" : "none";
}

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (savedUser.email === email) {
    emailError.style.display = "flex";
    return;
  }

  savedUser = {
    username: username,
    email: email,
    password: password
  };

  emailError.style.display = "none";
  togglePages();
  signinEmailInput.focus();
});

signinForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = signinEmailInput.value;
  const password = signinPasswordInput.value;

  if (email === savedUser.email && password === savedUser.password) {
    // togglePages();
    homePage.style.display = "flex";
    signinPage.style.display = "none";
    // username.textContent = savedUser.username;
    greetingMessage.textContent = "Welcome, " + savedUser.username;
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

logoutButton.addEventListener("click", function() {
  homePage.style.display = "none";
  signinPage.style.display = "flex";
  togglePages();
  emailInput.value = "";
  passwordInput.value = "";
});

document.getElementById("toggleSignIn").addEventListener("click", function(event) {
  event.preventDefault();
  togglePages();
  signinEmailInput.focus();
});

document.getElementById("toggleSignUp").addEventListener("click", function(event) {
  event.preventDefault();
  togglePages();
  usernameInput.focus();
});