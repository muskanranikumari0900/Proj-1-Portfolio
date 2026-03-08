// ====== Mobile Navigation Toggle ======
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

// Toggle the 'active' class to show/hide the menu on mobile
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Close the mobile menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// ====== Simple Form Validation ======
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Function to handle form submission
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();
    
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    } else {
        removeError(nameInput);
    }

    // Validate Email using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        removeError(emailInput);
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message cannot be empty');
        isValid = false;
    } else {
        removeError(messageInput);
    }

    // If all fields are valid, you can process the form (e.g., show a success message)
    if (isValid) {
        alert('Thank you for your message! This is a simple validation demo.');
        // Reset the form fields
        contactForm.reset();
    }
});

// Helper function to show error state
function showError(inputElement, message) {
    const formGroup = inputElement.parentElement; // Get the parent .form-group div
    const errorMsg = formGroup.querySelector('.error-msg'); // Find the specific error-msg element
    
    formGroup.classList.add('error'); // Add error class to parent
    errorMsg.innerText = message; // Update error message text
}

// Helper function to remove error state
function removeError(inputElement) {
    const formGroup = inputElement.parentElement;
    formGroup.classList.remove('error'); // Remove error class from parent
}
