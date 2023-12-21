let mobileMenuBtn = document.getElementById("mobileMenuBtn");
let mobileMenu = document.getElementById("mobileMenu");

// Burger Menu Utilities
mobileMenuBtn.onclick = () => {
    mobileMenuBtn.classList.toggle("is-active")
    mobileMenu.classList.toggle("is-active")
}
// Burger Menu Utilities end