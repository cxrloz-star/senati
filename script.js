const form = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#form-message");
const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener("click", () => {
  const showing = password.type === "text";
  password.type = showing ? "password" : "text";
  togglePassword.textContent = showing ? "Ver" : "Ocultar";
  togglePassword.setAttribute("aria-label", showing ? "Mostrar contraseña" : "Ocultar contraseña");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#email-error").textContent = "";
  document.querySelector("#password-error").textContent = "";
  message.textContent = "";
  message.classList.remove("success");

  let valid = true;
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    document.querySelector("#email-error").textContent = "Ingresa un correo electrónico válido.";
    valid = false;
  }
  if (password.value.length < 6) {
    document.querySelector("#password-error").textContent = "La contraseña debe tener al menos 6 caracteres.";
    valid = false;
  }
  if (!valid) return;

  message.textContent = "Formulario validado. Conecta este login con tu backend para autenticar usuarios.";
});

document.querySelector("#forgot-link").addEventListener("click", (event) => {
  event.preventDefault();
  message.classList.remove("success");
  message.textContent = "Contacta al administrador para recuperar tu acceso.";
});
