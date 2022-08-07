'use strict'

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
navToggleBtn.addEventListener("click", function () {
    header.classList.toggle("nav-active");
    this.classList.toggle('active')
})

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', function () {
        header.classList.toggle("nav-active");
        navToggleBtn.classList.toggle('active')
    })
}

/**
 * back to top
 */
 const backTopBtn = document.querySelector("[data-back-to-top]");
 window.addEventListener("scroll", function(){
    if(window.scrollY >= 100){
        backTopBtn.classList.add("active");
    }else {
        backTopBtn.classList.remove("active")
    }
 })