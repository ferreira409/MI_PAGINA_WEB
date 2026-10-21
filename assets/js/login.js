import { supabase } from "./supabase.js";

const form = document.getElementById("form-login");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  mensaje.textContent = "Ingresando...";
  mensaje.className = "mensaje";

  const { error } = await supabase.auth.signInWithPassword({
    email: form.email.value.trim(),
    password: form.password.value,
  });

  if (error) {
    mensaje.textContent = "Correo o contraseña incorrectos.";
    mensaje.className = "mensaje error";
    return;
  }

  window.location.href = "perfil.html";
});
