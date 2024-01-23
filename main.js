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

// BRANDS AUTO SLIDER
let clonedImages = document.querySelector(".brands-slider").cloneNode(true);
document.querySelector(".brands").appendChild(clonedImages);
// BRANDS AUTO SLIDER END



// ---- Feedback Dots Slider
let btnOne = document.getElementById("btn-one");
let btnTwo = document.getElementById("btn-two");
let btnThree = document.getElementById("btn-three");
let btnFour = document.getElementById("btn-four");
let testimonialPusherAgent = document.getElementById("testimonial-one-pusher");
console.log(testimonialPusherAgent);

btnOne.onclick = () => {
    testimonialPusherAgent.style.marginLeft = "40%"
    btnOne.style.fontWeight = "bold";

    btnTwo.style.fontWeight = "normal";
    btnThree.style.fontWeight = "normal";
    btnFour.style.fontWeight = "normal";

}

btnTwo.onclick = () => {
    testimonialPusherAgent.style.marginLeft = "20%"
    btnTwo.style.fontWeight = "bold";

    btnOne.style.fontWeight = "normal";
    btnThree.style.fontWeight = "normal";
    btnFour.style.fontWeight = "normal";
}
btnThree.onclick = () => {
    testimonialPusherAgent.style.marginLeft = "0%"
    btnThree.style.fontWeight = "bold";

    btnOne.style.fontWeight = "normal";
    btnTwo.style.fontWeight = "normal";
    btnFour.style.fontWeight = "normal";
}

btnFour.onclick = () => {
    testimonialPusherAgent.style.marginLeft = "-20%"
    btnFour.style.fontWeight = "bold";

    btnOne.style.fontWeight = "normal";
    btnTwo.style.fontWeight = "normal";
    btnThree.style.fontWeight = "normal";
}
// ---- Feedback Dots Slider END