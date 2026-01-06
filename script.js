// // Select the element
// const hireButton = document.getElementById('hireBtn');

// // defining the action and adding it
// hireButton.addEventListener('click', () => {
//     alert("Great choice! Let's build something amazing together.");
//     window.location.href = "mailto:asaravind213@gmail.com";
// });

// Action without alert
document.getElementById('hireBtn').addEventListener('click', () => {
    window.location.href = "mailto:asaravind213@gmail.com";
});

// moblie menu toogle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a, nav button');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    menuToggle.innerHTML = nav.classList.contains('active') ? '&#10005' : '&#9776'; 
});