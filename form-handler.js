/**
 * Form Handler for IC Inquiry Site
 * Handles form submissions using EmailJS for client-side delivery.
 * Adapted from the potting machine site's logic.
 */

// Initialize EmailJS
(function() {
    if (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.emailjs.publicKey) {
        emailjs.init(SITE_CONFIG.emailjs.publicKey);
        console.log("EmailJS Initialized for IC Inquiry Site.");
    }
})();

/**
 * Common form submission handler
 * @param {Event} event 
 * @param {string} type - 'General', 'BOM', 'Quote'
 */
async function handleInquiry(event, type = 'General') {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;

    // Change button state
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    // Collect data
    const formData = new FormData(form);
    const body = {};
    formData.forEach((value, key) => {
        body[key] = value;
    });

    // Prepare EmailJS Template Parameters
    // Matches the template 'template_fdj773n' fields
    const templateParams = {
        to_name: 'HQB Sourcing Team',
        to_email: SITE_CONFIG.contact.email,  
        from_name: body.name || body.first_name || 'Anonymous User',
        from_email: body.email || 'no-email@provided.com',
        phone: body.phone || body.whatsapp || 'N/A',
        company: body.company || 'N/A',
        product_interest: body.product || type,
        message: body.message || body.comments || `New ${type} Inquiry from website.`,
        sent_date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }),
        website: SITE_CONFIG.brand.name
    };

    // If there's a file input (like for BOM)
    // Note: EmailJS free plan has file size limits and may require a specific template configuration
    // Here we mainly handle text-based BOM if pasted

    try {
        const response = await emailjs.send(
            SITE_CONFIG.emailjs.serviceId,
            SITE_CONFIG.emailjs.templateId,
            templateParams
        );

        if (response.status === 200) {
            alert("Success! Your inquiry has been sent to our specialists in Huaqiangbei. We will respond within 1 hour.");
            form.reset();
        } else {
            throw new Error("Failed to send inquiry.");
        }
    } catch (error) {
        console.error("Email Error:", error);
        alert("Sorry, there was an error sending your message. Please contact us via WhatsApp: " + SITE_CONFIG.contact.whatsapp);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
    }
}

// Add event listeners when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Contact Form
    const contactForm = document.querySelector('form#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleInquiry(e, 'Contact Us'));
    }

    // BOM Upload Form (Pasted Text)
    const bomForm = document.querySelector('form#bomForm');
    if (bomForm) {
        bomForm.addEventListener('submit', (e) => handleInquiry(e, 'BOM Inquiry'));
    }

    // Quote Cart Form
    const quoteForm = document.querySelector('form#quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => handleInquiry(e, 'Full Quote'));
    }
});
