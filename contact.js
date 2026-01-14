const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Full name is required");
    valid = false;
  } else {
    clearError(nameInput);
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email address is required");
    valid = false;
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email address");
    valid = false;
  } else {
    clearError(emailInput);
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message cannot be empty");
    valid = false; 
  } else {
    clearError(messageInput);
  }

  if (valid) {
    alert("Message sent successfully!");
    form.reset();
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.textContent = message;
}

function clearError(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.textContent = "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
