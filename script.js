// Gallery Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {

    // Lightbox functionality for gallery
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const masonryItems = document.querySelectorAll('.masonry-item img');

    // Open lightbox when clicking on gallery images
    masonryItems.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            caption.innerHTML = this.alt;
        });
    });

    // Close lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // If using Formspree, the form will submit naturally
            // This is just for showing a loading state
            const submitButton = contactForm.querySelector('.submit-button');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
        });

        // Note: For the form to work, you need to:
        // 1. Sign up at https://formspree.io
        // 2. Create a form and get your form ID
        // 3. Replace YOUR_FORM_ID in contact.html with your actual Formspree form ID
    }
});
