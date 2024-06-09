document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
  
    toggleBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
  
    // Smooth scrolling for nav links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.classList.remove('active');
  
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
  });