const hamburgerButton = document.getElementById('hamburger');
const navBarLinks = document.getElementById('nav-bar-links');

function toggleButton () {
    navBarLinks.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);