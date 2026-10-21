import { supabase } from "./supabase.js";

const form = document.getElementById("form-registro");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  mensaje.textContent = "Registrando...";
  mensaje.className = "mensaje";

  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { nombre } },
  });

  if (error) {
    mensaje.textContent = "Error: " + error.message;
    mensaje.className = "mensaje error";
    return;
  }

  mensaje.textContent = "¡Registro exitoso! Revisa tu correo para confirmar la cuenta.";
  mensaje.className = "mensaje exito";
  form.reset();
});
