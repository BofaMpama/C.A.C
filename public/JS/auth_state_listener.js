// JS/auth_state_listener.js
import { auth } from "./auth_main_code.js";
import { onAuthStateChanged } from "firebase/auth";

window.addEventListener("DOMContentLoaded", () => {
  const loginBtns = document.querySelectorAll("#login-btn");
  const signupBtns = document.querySelectorAll("#signup-btn");
  const logoutBtn = document.getElementById("logout-btn");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      loginBtns.forEach(btn => btn.classList.add("hidden"));
      signupBtns.forEach(btn => btn.classList.add("hidden"));
      logoutBtn?.classList.remove("hidden");
    } else {
      loginBtns.forEach(btn => btn.classList.remove("hidden"));
      signupBtns.forEach(btn => btn.classList.remove("hidden"));
      logoutBtn?.classList.add("hidden");
    }
  });
});
