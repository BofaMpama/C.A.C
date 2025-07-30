import { getAuth, signOut } from "firebase/auth";

document.getElementById("logout-btn").addEventListener("click", () => {
        const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
});
});