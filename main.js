let mobileMenuBtn = document.getElementById("mobileMenuBtn");
let mobileMenu = document.getElementById("mobileMenu");
let age = 23;


// Burger Menu Utilities
mobileMenuBtn.onclick = () => {
    mobileMenuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
}
// Burger Menu Utilities end

// Mobile Menu links
// first dropdown
let dropdownTitleOne = document.getElementById("dropdownTitleOne");
let dropdownOne = document.getElementById("dropdown-one");

dropdownTitleOne.onclick = () => {
    dropdownOne.classList.toggle("is-called");
}


// second dropdown
let dropdownTitleTwo = document.getElementById("dropdownTitleTwo");
let dropdownTwo = document.getElementById("dropdown-two");

dropdownTitleTwo.onclick = () => {
    dropdownTwo.classList.toggle("is-called");
}


// third dropdown
let dropdownTitleThree = document.getElementById("dropdownTitleThree");
let dropdownThree = document.getElementById("dropdown-three");

dropdownTitleThree.onclick = () => {
    dropdownThree.classList.toggle("is-called");
}


// Mobile Menu link End