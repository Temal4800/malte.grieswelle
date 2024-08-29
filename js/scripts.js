window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -50%',
        });
    };

    // Add custom scroll behavior for About, About Me, and Projects links
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutMeButton = document.querySelector('.btn-primary[href="#about"]');
    const projectsLink = document.querySelector('a[href="#projects"]');
    const cvLink = document.querySelector('a[href="#cv"]');
    const contactLink = document.querySelector('a[href="#contact"]');

    function scrollToSection(event, sectionId) {
        event.preventDefault();
        const section = document.querySelector(sectionId);
        const offset = -30;
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => scrollToSection(e, '#about'));
    }
    if (aboutMeButton) {
        aboutMeButton.addEventListener('click', (e) => scrollToSection(e, '#about'));
    }
    if (projectsLink) {
        projectsLink.addEventListener('click', (e) => scrollToSection(e, '#projects'));
    }
    if (cvLink) {
        cvLink.addEventListener('click', (e) => scrollToSection(e, '#cv'));
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});