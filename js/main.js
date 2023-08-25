// toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // animation that repeats on scroll
        else {
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
})

// Smooth Scroll
$(document).ready(function () {
    $(".link-nav").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top,
        }, 
        8000, 
        function () {
            window.location.hash = hash;
        })}
    })
})


// sending emails
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const statusMessage = document.getElementById("status-message");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        fetch("email.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(message => {
                statusMessage.textContent = message;
                contactForm.reset();
            })
            .catch(error => {
                statusMessage.textContent = "Error al enviar el formulario. Por favor, inténtalo nuevamente.";
            });
    });
});
