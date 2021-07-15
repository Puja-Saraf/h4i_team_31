const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li");

menu.addEventListener('click', ()=>{
    navbar.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hmenu.classList.toggle("toggle");
});

