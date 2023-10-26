
const menuToggle = document.querySelector('.toggle_icon');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-link');
const closeIcon = document.querySelector('.close_icon');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

navLinks.forEach( (navLink)  => {

    navLinks.addEventListener('click', () =>{
        navMenu.classList.remove('active');
    })
});

