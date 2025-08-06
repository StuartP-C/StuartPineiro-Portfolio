document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.optmenu');
    const currentUrl = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentUrl) {
            link.classList.add('active');
        }
    });
});