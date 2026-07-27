export const AV = {
  s: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  d: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  a: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
  k: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  m: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
}

/** [ticket, guest, avatar, safari, date, guests, payment, total, status] */
export const bookings = [
  ['VA-2851', 'María González', AV.m, 'Beach Safari', 'Aug 8', 12, 'Stripe', '$1,068', 'Confirmed'],
  ['VA-2850', 'Tom Weber', AV.k, 'Taste & View', 'Aug 6', 10, 'PayPal', '$740', 'Pending'],
  ['VA-2849', 'Sarah Mitchell', AV.s, 'Private · City View', 'Aug 5', 18, 'Stripe', '$1,062', 'Private'],
  ['VA-2848', 'Diego Ramírez', AV.d, 'Beach Safari', 'Aug 2', 14, 'Stripe', '$1,246', 'Confirmed'],
  ['VA-2847', 'Amara Osei', AV.a, 'City View', 'Jul 30', 11, 'PayPal', '$649', 'Confirmed'],
  ['VA-2846', 'Lucía Vega', AV.m, 'Taste & View', 'Jul 29', 13, 'Stripe', '$962', 'Pending'],
  ['VA-2845', 'Kenji Tanaka', AV.k, 'Beach Safari', 'Jul 28', 16, 'Stripe', '$1,424', 'Confirmed'],
  ['VA-2844', 'Nina Kovac', AV.s, 'Private · Beach', 'Jul 27', 22, 'PayPal', '$1,958', 'Private'],
  ['VA-2843', 'Marco Polo', AV.d, 'City View', 'Jul 26', 10, 'Stripe', '$590', 'Cancelled'],
  ['VA-2842', 'Ana Sousa', AV.a, 'Taste & View', 'Jul 25', 12, 'Stripe', '$888', 'Pending'],
]

export function tagFor(status) {
  return { Confirmed: 'ok', Pending: 'pend', Private: 'priv', Cancelled: 'cancel' }[status] || 'done'
}

export const galleryQueue = [
  ['photo-1544551763-46a013bb70d5', '@sarah.m', 'Beach Safari · 13:15'],
  ['photo-1519046904884-53103b34b206', '@diego.r', 'Beach Safari · 12:48'],
  ['photo-1504674900247-0877df9cc836', '@amara.o', 'Taste & View · 18:02'],
  ['photo-1500375592092-40eb2168fd21', '@kenji.t', 'Beach Safari · 11:20'],
  ['photo-1551024709-8f23befc6f87', '@lucia.v', 'Taste & View · 19:11'],
  ['photo-1506953823976-52e1fdc0149a', '@nina.k', 'Beach Safari · 09:58'],
]

export const botLogs = [
  ['✅', 'Booking VA-2851 confirmed to María G. (ES)', '12:41'],
  ['⏰', '24h reminder sent · 14 guests · Beach Safari', '12:36'],
  ['📸', 'Photo prompt sent to group VA-2845', '12:29'],
  ['❓', 'FAQ answered: "¿Qué incluye el almuerzo?"', '12:18'],
  ['✅', 'Payment receipt delivered · VA-2850', '12:04'],
  ['🌐', 'Language auto-switched EN→ES · +34 6**', '11:57'],
  ['⚠️', 'Escalated to human · refund request VA-2833', '11:12'],
  ['⏰', '2h reminder sent · City View 15:00 departure', '10:55'],
]

export const tours = [
  {
    id: 'beach',
    name: 'Beach Safari',
    price: 89,
    capacity: '10 – 24',
    occupancy: 88,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'taste',
    name: 'Taste & View Safari',
    price: 74,
    capacity: '10 – 18',
    occupancy: 72,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'city',
    name: 'City View Safari',
    price: 59,
    capacity: '10 – 20',
    occupancy: 64,
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80',
  },
]

export const topGuests = [
  {
    name: 'Sarah Mitchell',
    email: 'sarah@ex.com',
    country: '🇨🇦 Canada',
    trips: 9,
    photos: 212,
    ltv: '$5,410',
    loyalty: 92,
    avatar: AV.s,
  },
  {
    name: 'Amara Osei',
    email: 'amara@ex.com',
    country: '🇬🇧 UK',
    trips: 7,
    photos: 98,
    ltv: '$4,930',
    loyalty: 84,
    avatar: AV.a,
  },
  {
    name: 'Diego Ramírez',
    email: 'diego@ex.com',
    country: '🇲🇽 México',
    trips: 6,
    photos: 175,
    ltv: '$3,880',
    loyalty: 71,
    avatar: AV.d,
  },
  {
    name: 'Kenji Tanaka',
    email: 'kenji@ex.com',
    country: '🇯🇵 Japan',
    trips: 6,
    photos: 64,
    ltv: '$3,540',
    loyalty: 66,
    avatar: AV.k,
  },
  {
    name: 'María González',
    email: 'maria@ex.com',
    country: '🇪🇸 España',
    trips: 6,
    photos: 148,
    ltv: '$3,184',
    loyalty: 60,
    avatar: AV.m,
  },
]

export const VIEW_TITLES = {
  overview: ['Overview', 'Sunday, Jul 27 2026 · All systems operational'],
  bookings: ['Bookings', '214 bookings this month · 3 pending payment'],
  tours: ['Tours', '3 live safaris · avg. occupancy 75%'],
  gallery: ['Gallery queue', 'Guest uploads awaiting moderation'],
  customers: ['Customers', '4,318 guests · 37% repeat rate'],
  bot: ['WhatsApp bot', 'Azul · online · 1.8s avg. response'],
  settings: ['Settings', 'Profile, payments, security & compliance'],
}

export const TEAL = '#2DD8C7'
export const GOLD = '#F0AC48'
export const CORAL = '#FF7A5C'
export const DIM = '#7FA3A8'
export const GRID = 'rgba(142,196,197,.08)'
