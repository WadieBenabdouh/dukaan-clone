let mobileMenuBtn = document.getElementById("mobileMenuBtn");
let mobileMenu = document.getElementById("mobileMenu");

// Burger Menu Utilities
mobileMenuBtn.onclick = () => {
    mobileMenuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
}
// Burger Menu Utilities end

// Mobile Menu links
let dropdownTitleOne = document.getElementById("dropdownTitleOne");
let dropdownOne = document.getElementsById("dropdown-one");

dropdownTitleOne.onclick = () => {
    dropdownOne.classList.toggle("is-called");
}

// Mobile Menu link End