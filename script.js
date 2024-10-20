document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropbtn');
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        });
    });

    // Hide navbar on scroll down, show on scroll up
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            document.querySelector('.navbar').style.top = '-100px';
        } else {
            document.querySelector('.navbar').style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});