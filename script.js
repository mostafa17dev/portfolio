document.addEventListener('DOMContentLoaded', () => {
    //  smooth scrolling for navigation links
    document.querySelectorAll('.navbar a, .hero a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // const contactForm = document.getElementById('contact-form');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function (e) {
    //         e.preventDefault();

    //         console.log('Form Submitted!');
    //         const formData = new FormData(contactForm);

    //         alert(`Thank you for your message, ${formData.get('name')}! I will get back to you soon.`);

    //         contactForm.reset();
    //     });
    // }

    //  add an 'active' class to the current navigation link on scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // check if the current scroll position is past the top of the section
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});