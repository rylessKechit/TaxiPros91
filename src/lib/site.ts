export const SITE = {
  name: 'TAXI Pro 91',
  legalName: 'TAXI Pro 91',
  url: 'https://www.taxipro91.com',
  email: 'contact@taxipro91.com',
  phone: {
    display: '01 80 85 91 91',
    e164: '+33180859191',
    tel: 'tel:+33180859191',
  },
  address: {
    street: '1A avenue du 1er Mai',
    locality: 'Palaiseau',
    postalCode: '91120',
    region: 'Île-de-France',
    country: 'FR',
  },
  geo: {
    headquarters: { lat: 48.7146, lng: 2.2454 },
    serviceCenter: { lat: 48.7308, lng: 2.2737 },
    serviceRadiusMeters: 25000,
  },
  rating: {
    value: '4.9',
    count: '500',
  },
  social: {
    facebook: 'https://www.facebook.com/taxipros91',
    instagram: 'https://www.instagram.com/taxipros91',
  },
  hours: '24h/24, 7j/7',
} as const
