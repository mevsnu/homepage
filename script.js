document.querySelector('#hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('#nav-links');
    const overlay = document.querySelector('#overlay');

    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        document.body.classList.add('drawer-active');
    } else {
        document.body.classList.remove('drawer-active');
    }

    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('drawer-active');
    });
});






