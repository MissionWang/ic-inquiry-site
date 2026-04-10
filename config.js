/**
 * IC Inquiry Site Configuration
 * Borrowed and adapted from the High-Precision Potting Machine website (D:\workspace\inquiry-website).
 * Edit these values to update your contact and email delivery settings.
 */
const SITE_CONFIG = {
  // Brand
  brand: {
    name: 'HQB IC Sourcing',
    fullName: 'HQB IC Sourcing - Professional Electronics Components Partner',
    domain: 'https://ic.autodispenserpro.com',  // Your IC site domain
    mainDomain: 'https://ic.autodispenserpro.com',
    year: 2026
  },

  // EmailJS (form submission - inherited from potting machine site)
  emailjs: {
    serviceId: 'service_cyr2jg8',       // Active Service ID
    templateId: 'template_fdj773n',      // Active Template ID
    publicKey: 'loeH7DBCwJm48R2kt'      // Active Public Key
  },

  // Contact (Inherited from potting machine site)
  contact: {
    email: 'info@mail.hongjunshuke.com',
    phone: '+86 15346172906',
    phoneRaw: '+86 15346172906',           // for tel: href
    whatsapp: '+86 15346172906',
    whatsappRaw: '8615346172906',            // for wa.me/ link (no spaces, no +)
    whatsappMessage: "Hi, I'm interested in sourcing IC components from Huaqiangbei.",
    wechat: '13265409026',
    telegram: '+86 15346172906',            // Telegram phone number
    telegramRaw: '+8615346172906',           // for t.me/ link (must include +)
    address: 'Huaqiangbei, Futian District, Shenzhen, China'
  }
};
