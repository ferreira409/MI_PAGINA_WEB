import { supabase } from "./supabase.js";

const { data } = await supabase.auth.getSession();

if (!data.session) {
  window.location.href = "login.html";
} else {
  const usuario = data.session.user;
  document.getElementById("nombre").textContent = usuario.user_metadata.nombre || "usuario";
  document.getElementById("email").textContent = usuario.email;
}

document.getElementById("btn-salir").addEventListener("click", async () => {
  await supabase.auth.signOut();
  window.location.href = "login.html";
});
