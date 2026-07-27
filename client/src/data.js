export const tours = [
  {
    id: 'beach',
    name: 'Beach Safari',
    bookOption: 'Beach Safari — full day',
    description:
      'Hidden coves by small boat, reef snorkeling, a beach grill lunch and a slow sail home at golden hour.',
    duration: '7 hours',
    guests: '10–24',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Snorkelers over turquoise reef water',
    badge: { hot: true, icon: 'Flame', label: 'Most booked' },
    metaIcons: { duration: 'Clock', guests: 'Users', lang: 'Languages' },
  },
  {
    id: 'taste',
    name: 'Taste & View Safari',
    bookOption: 'Taste & View Safari',
    description:
      'Five stops, five kitchens: market ceviche, street arepas, a rooftop tasting and a viewpoint dessert at dusk.',
    duration: '5 hours',
    guests: '10–18',
    price: 74,
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Colorful plated coastal dishes',
    badge: { hot: false, icon: 'Utensils', label: 'Food & sunset' },
    metaIcons: { duration: 'Clock', guests: 'Users', lang: 'Languages' },
  },
  {
    id: 'city',
    name: 'City View Safari',
    bookOption: 'City View Safari',
    description:
      'Old-town lanes, mural stories and three skyline viewpoints — finished with coffee where the locals take theirs.',
    duration: '4 hours',
    guests: '10–20',
    price: 59,
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'City viewpoint at dusk',
    badge: { hot: false, icon: 'Landmark', label: 'Culture walk' },
    metaIcons: { duration: 'Clock', guests: 'Users', lang: 'Languages' },
  },
];

export const galleryShots = [
  ['photo-1544551763-46a013bb70d5', '@sarah.m', 'Beach Safari · 13:15'],
  ['photo-1519046904884-53103b34b206', '@diego.r', 'Beach Safari · 12:48'],
  ['photo-1504674900247-0877df9cc836', '@amara.o', 'Taste & View · 18:02'],
  ['photo-1500375592092-40eb2168fd21', '@kenji.t', 'Beach Safari · 11:20'],
  ['photo-1551024709-8f23befc6f87', '@lucia.v', 'Taste & View · 19:11'],
  ['photo-1480714378408-67cf0d13bc1b', '@marco.p', 'City View · 17:40'],
  ['photo-1506953823976-52e1fdc0149a', '@nina.k', 'Beach Safari · 09:58'],
  ['photo-1468413253725-0d5181091126', '@tom.w', 'Beach Safari · 18:31'],
];

export const testimonials = [
  {
    quote:
      '"The WhatsApp bot felt like having a local friend organizing everything. Our group of 14 didn\'t lift a finger."',
    name: 'Sarah Mitchell',
    detail: 'Beach Safari · Toronto',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      '"Reservamos en español, pagamos en línea y las fotos del grupo aparecieron al instante. Impecable."',
    name: 'Diego Ramírez',
    detail: 'Taste & View · CDMX',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      '"We pre-booked a private City View for our company retreat. Payment, reminders, gallery — everything just worked."',
    name: 'Amara Osei',
    detail: 'Private group · London',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
];

export const steps = [
  {
    icon: 'CalendarCheck',
    title: 'Pick & pay',
    text: 'Choose a safari, a date and your group of 10+. Pay securely with card or PayPal.',
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp confirms',
    text: 'Our AI concierge messages your ticket, meeting point and a briefing in your language.',
  },
  {
    icon: 'Camera',
    title: 'Share the day',
    text: 'Upload photos from the tour link — they appear in your group\'s live gallery instantly.',
  },
  {
    icon: 'Sparkles',
    title: 'Keep the memories',
    text: 'After the tour, the bot sends your gallery album and a little thank-you discount.',
  },
];

export const botFeatures = [
  {
    icon: 'CheckCheck',
    title: 'Instant confirmations',
    text: 'Ticket, map pin and weather note, seconds after payment.',
  },
  {
    icon: 'AlarmClock',
    title: 'Smart reminders',
    text: '24-hour and 2-hour nudges so nobody misses the boat.',
  },
  {
    icon: 'ImagePlus',
    title: 'Photo prompts',
    text: '"We\'re at the reef — share your best shot!" straight into the live gallery.',
  },
  {
    icon: 'Languages',
    title: 'English & Español',
    text: 'Azul replies in whichever language you write.',
  },
];

export const chatBubbles = [
  {
    type: 'bot',
    delay: '.2s',
    html: '¡Hola María! 🎉 Your <b>Beach Safari</b> for <b>12 guests</b> on <b>Aug 8</b> is confirmed. Ticket: VA-2841.',
    time: '10:02',
  },
  {
    type: 'user',
    delay: '.9s',
    html: 'Perfect! Where do we meet?',
    time: '10:03',
  },
  {
    type: 'bot',
    delay: '1.6s',
    html: 'Marina Dock 3, 8:45 AM — here\'s the map pin 📍 Sunny, 29°C. Bring reef-safe sunscreen!',
    time: '10:03',
  },
  {
    type: 'bot',
    delay: '2.4s',
    html: '📸 You\'re at Playa Escondida! Upload your favorite shot to today\'s live gallery → vistaazul.co/live/2841',
    time: '13:15',
  },
  {
    type: 'user',
    delay: '3.1s',
    html: 'Done! Best day ever 🐠',
    time: '13:22',
  },
];

export const faqItems = [
  {
    question: 'What if our group is smaller than 10?',
    answer:
      'Group departures need 10+ guests, but you can pre-book a private tour for smaller groups — the concierge will quote you instantly on WhatsApp.',
  },
  {
    question: 'Can I reschedule my booking?',
    answer:
      'Yes — free rescheduling up to 48 hours before departure. Just message Azul on WhatsApp with your ticket number.',
  },
  {
    question: 'How do photo uploads work?',
    answer:
      "During the tour you'll get a link on WhatsApp. Photos you upload are reviewed by our team (usually under 2 minutes) and then appear in your group's live gallery.",
  },
  {
    question: '¿Puedo reservar en español?',
    answer:
      '¡Claro! Todo el sitio, los pagos y el concierge de WhatsApp funcionan completamente en español.',
  },
  {
    question: 'Is my payment secure?',
    answer:
      'All payments run through Stripe or PayPal over SSL. We never store your card details on our servers.',
  },
];

export const activityFeed = [
  {
    icon: 'CheckCircle2',
    bg: '#E1F7EB',
    color: '#12A150',
    text: 'Booking VA-2841 confirmed',
    time: 'Jul 21 · 10:02',
  },
  {
    icon: 'CreditCard',
    bg: '#E3F5F4',
    color: '#0FA3A0',
    text: 'Payment of $1,068 received',
    time: 'Jul 21 · 10:01',
  },
  {
    icon: 'Image',
    bg: '#FCF1DC',
    color: '#B07514',
    text: '14 photos approved to gallery',
    time: 'Jun 14 · 19:40',
  },
  {
    icon: 'Gift',
    bg: '#FFE9E5',
    color: '#FF6B5C',
    text: '+120 loyalty points earned',
    time: 'Jun 14 · 19:00',
  },
  {
    icon: 'MessageCircle',
    bg: '#E3F5F4',
    color: '#0FA3A0',
    text: 'Azul sent your tour album',
    time: 'Jun 15 · 09:12',
  },
  {
    icon: 'Calendar',
    bg: '#EDF1F3',
    color: '#0A3D4A',
    text: 'Reminder: Beach Safari in 12 days',
    time: 'Jul 26 · 08:00',
  },
];

export const bookingRows = [
  {
    ticket: 'VA-2841',
    safari: 'Beach Safari',
    safariShort: 'Beach Safari',
    type: 'Group',
    date: 'Aug 8, 2026',
    guests: 12,
    total: '$1,068',
    status: 'ok',
    statusLabel: 'Confirmed',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=200&q=80',
    action: 'ticket',
  },
  {
    ticket: 'VA-2790',
    safari: 'Taste & View',
    safariShort: 'Taste & View',
    type: 'Group',
    date: 'Jun 14, 2026',
    guests: 10,
    total: '$740',
    status: 'done',
    statusLabel: 'Completed',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80',
    action: 'album',
  },
  {
    ticket: 'VA-2712',
    safari: 'City View',
    safariShort: 'City View',
    type: 'Group',
    date: 'Apr 3, 2026',
    guests: 11,
    total: '$649',
    status: 'done',
    statusLabel: 'Completed',
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=200&q=80',
    action: 'album',
  },
  {
    ticket: 'VA-2650',
    safari: 'Beach Safari',
    safariShort: 'Beach Safari',
    type: 'Group',
    date: 'Dec 27, 2025',
    guests: 14,
    total: '$1,246',
    status: 'done',
    statusLabel: 'Completed',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=200&q=80',
    action: null,
  },
  {
    ticket: 'VA-2604',
    safari: 'City View',
    safariShort: 'City View',
    type: 'Private',
    date: 'Oct 9, 2025',
    guests: 16,
    total: '$944',
    status: 'done',
    statusLabel: 'Completed',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=200&q=80',
    action: null,
  },
];

export const invoices = [
  {
    id: 'INV-1187',
    booking: 'VA-2841 · Beach',
    method: 'Visa •4921',
    date: 'Jul 21, 2026',
    amount: '$1,068',
    status: 'ok',
    statusLabel: 'Paid',
  },
  {
    id: 'INV-1102',
    booking: 'VA-2790 · Taste',
    method: 'PayPal',
    date: 'Jun 2, 2026',
    amount: '$740',
    status: 'ok',
    statusLabel: 'Paid',
  },
  {
    id: 'INV-1044',
    booking: 'VA-2712 · City',
    method: 'Visa •4921',
    date: 'Mar 20, 2026',
    amount: '$649',
    status: 'ok',
    statusLabel: 'Paid',
  },
  {
    id: 'INV-0989',
    booking: 'VA-2650 · Beach',
    method: 'Visa •4921',
    date: 'Dec 12, 2025',
    amount: '$1,246',
    status: 'ok',
    statusLabel: 'Paid',
  },
];

export const photoSamples = [
  {
    id: 'photo-1544551763-46a013bb70d5',
    name: 'reef-snorkel.jpg',
    status: 'Live ✓',
    tagClass: 'ok',
  },
  {
    id: 'photo-1500375592092-40eb2168fd21',
    name: 'sunset-sail.jpg',
    status: 'Live ✓',
    tagClass: 'ok',
  },
  {
    id: 'photo-1551024709-8f23befc6f87',
    name: 'rooftop-toast.jpg',
    status: 'In review',
    tagClass: 'pend',
  },
];

export const livePhotoThumbs = [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80',
];
