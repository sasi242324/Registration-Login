// Switch between forms
const registerTitle = document.getElementById("register-title");
const loginTitle = document.getElementById("login-title");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

registerTitle.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

loginTitle.addEventListener("click", () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

// Email format checker
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Registration Validation
document.getElementById("regForm").addEventListener("submit", function (e) {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;

  if (!firstName || !lastName) {
    alert("Please enter your full name.");
    e.preventDefault();
    return;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    e.preventDefault();
    return;
  }
});

// Login Validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!isValidEmail(email)) {
    alert("Please enter a valid email.");
    e.preventDefault();
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    e.preventDefault();
    return;
  }
});
