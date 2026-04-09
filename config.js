/**
 * IC Inquiry Site Configuration
 * Borrowed and adapted from the High-Precision Potting Machine website.
 * Edit these values to update your contact and email delivery settings.
 */
const SITE_CONFIG = {
  // Brand
  brand: {
    name: 'HQB IC Sourcing',
    fullName: 'HQB IC Sourcing - Professional Electronics Components Partner',
    domain: 'https://hqb-icsourcing.com',  // Update with your actual domain
    year: 2026
  },

  // EmailJS (form submission - derived from reference site)
  emailjs: {
    serviceId: 'service_cyr2jg8',       // Replace with your EmailJS Service ID
    templateId: 'template_fdj773n',      // Replace with your EmailJS Template ID
    publicKey: 'loeH7DBCwJm48R2kt'      // Replace with your EmailJS Public Key
  },

  // Contact
  contact: {
    email: 'info@mail.hongjunshuke.com', // Replace with your receiving email
    whatsapp: '+86-123-4567-8901',
    whatsappRaw: '8612345678901',        // No spaces, no +
    wechat: 'HQB-Sourcing',
    address: 'Huaqiangbei, Futian District, Shenzhen, China'
  }
};
