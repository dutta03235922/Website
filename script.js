// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (Mobile View)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload

    // Fetch form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('form-status');

    // Simple validation feedback animation
    if(name && email && message) {
        statusDiv.style.color = "green";
        statusDiv.innerText = `Thank you, ${name}! Your message has been sent successfully.`;
        
        // Reset the form field inputs
        document.getElementById('contact-form').reset();
    } else {
        statusDiv.style.color = "red";
        statusDiv.innerText = "Please fill out all fields before submitting.";
    }
});
