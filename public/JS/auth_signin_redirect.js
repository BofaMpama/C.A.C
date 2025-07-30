import { signInWithRedirect } from "firebase/auth";
import { getAuth } from "./auth_main_code.js";
import { provider } from "./auth_google_provider_create.js";

document.getElementById("signup-btn").addEventListener("click", () => {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
});