const ham = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
ham.addEventListener("click", toggle);
nav.addEventListener("click", toggle);
function toggle(){
    ham.src = ham.src.includes("resources/icons/icons8-close-100.png") 
      ? "resources/icons/icons8-close-100.png" 
      : "resources/icons/icons8-menu-squared-100.png";
    nav.classList.toggle("show");
}