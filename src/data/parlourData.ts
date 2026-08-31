import { ServiceItem, BeautyPlan, GalleryItem, BlogPost, Testimonial } from '../types';

export const PARLOUR_INFO = {
  name: 'Priyanka Beauty Parlour',
  tagline: 'Enhance Your Natural Beauty',
  description: 'Priyanka Beauty Parlour offers professional makeup, hair styling, skincare, bridal beauty and salon services with personalized care and premium beauty products.',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  whatsappNumber: '919876543210',
  email: 'info@priyankabeautyparlour.com',
  address: 'Shop No. 12, Crystal Plaza, Near Orchid Avenue, Mumbai, Maharashtra 400053',
  googleMapsUrl: 'https://maps.google.com/?q=Mumbai,Maharashtra',
  openingHours: {
    weekdays: '10:00 AM – 8:30 PM',
    saturday: '9:30 AM – 9:00 PM',
    sunday: '10:00 AM – 7:30 PM',
    closedDay: 'Tuesday (Open for prior Bridal bookings)',
  },
  stats: [
    { label: 'Happy Clients', value: '500+', numeric: 500, suffix: '+' },
    { label: 'Years Experience', value: '5+', numeric: 5, suffix: '+' },
    { label: 'Beauty Services', value: '20+', numeric: 20, suffix: '+' },
    { label: 'Client Satisfaction', value: '100%', numeric: 100, suffix: '%' },
  ],
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    pinterest: 'https://pinterest.com',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'hair',
    description: 'Expert blow-dry, modern curling, sleek ironing, and signature occasion hairstyles crafted to complement your outfit and facial features.',
    startingPrice: 499,
    duration: '45 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    benefits: ['Thermal heat protection', 'High-shine serum finish', 'Long-lasting hold for all day events']
  },
  {
    id: 'hair-cutting',
    name: 'Hair Cutting & Trimming',
    category: 'hair',
    description: 'Customized precision haircuts, layer cuts, feather trims, and styling consultations tailored to hair texture and face shape.',
    startingPrice: 399,
    duration: '40 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    benefits: ['Custom face-framing techniques', 'Split-end restorative trimming', 'Blow-dry styling included']
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup Artistry',
    category: 'bridal',
    description: 'Ultra-HD and airbrush royal bridal makeover with waterproof long-wear formulas, personalized jewelry setting, and dupatta draping.',
    startingPrice: 4999,
    duration: '3 hours',
    popular: true,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    benefits: ['High-definition 4K camera finish', 'Custom lashes & jewel placement', 'Complementary touch-up kit']
  },
  {
    id: 'party-makeup',
    name: 'Party & Occasion Makeup',
    category: 'makeup',
    description: 'Glamorous, radiant party makeovers customized for sangeet, cocktail nights, receptions, or festive celebrations.',
    startingPrice: 1499,
    duration: '60 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    benefits: ['Subtle glow or smokey glam', 'Featherlight comfortable feel', 'Smudge-proof formulas']
  },
  {
    id: 'facial-cleanup',
    name: 'Facial & Deep Cleanup',
    category: 'skincare',
    description: 'Rejuvenating multi-step deep pore cleansing, gentle exfoliation, steam, blackhead removal, fruit/gold pack, and soothing face massage.',
    startingPrice: 799,
    duration: '50 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    benefits: ['Deep impurities extraction', 'Instant luminous skin brightness', 'Lymphatic face contour massage']
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    category: 'spa',
    description: 'Deluxe hand & foot spa with dead skin exfoliation, cuticle therapy, aromatherapy soak, relaxing massage, and gel polish.',
    startingPrice: 699,
    duration: '60 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    benefits: ['Hydrating essential oil soak', 'Nail shaping & cuticle nourishment', 'Premium long-wear gel polish']
  },
  {
    id: 'waxing',
    name: 'Hygienic Body Waxing',
    category: 'spa',
    description: 'Smooth, painless waxing using dermatologically tested Rica Brazilian/chocolate wax for sensitive skin without redness.',
    startingPrice: 299,
    duration: '30 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
    benefits: ['Gentle Rica & Chocolate wax', 'Post-wax soothing aloe gel', 'Hygienic disposable cartridges']
  },
  {
    id: 'hair-spa',
    name: 'Keratin & Nourishing Hair Spa',
    category: 'hair',
    description: 'Intense moisture restoration treatment for frizzy and chemically treated hair, featuring ozone steam and deep scalp acupressure.',
    startingPrice: 1199,
    duration: '60 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    benefits: ['Silk protein deep mask', 'Stimulating scalp massage', 'Instant frizz reduction & shine']
  },
  {
    id: 'skin-care',
    name: 'Advanced Skin Care & Anti-Tan',
    category: 'skincare',
    description: 'Targeted dermatological skin brightening, hyperpigmentation removal, organic botanical peels, and vitamin C infusion.',
    startingPrice: 999,
    duration: '55 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    benefits: ['Active Vitamin-C infusion', 'Reduces UV sun damage & dark spots', 'Restores skin moisture barrier']
  },
  {
    id: 'eyebrow-threading',
    name: 'Eyebrow & Threading / Shaping',
    category: 'makeup',
    description: 'Perfect arch mapping, threading for eyebrows, upper lip, chin, and full-face peach fuzz grooming with antiseptic care.',
    startingPrice: 99,
    duration: '20 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1522337094346-290f26a0b58a?auto=format&fit=crop&w=800&q=80',
    benefits: ['Precise geometric arch shaping', 'Gentle cotton threading', 'Soothing rose water mist']
  }
];

export const BEAUTY_PLANS: BeautyPlan[] = [
  {
    id: 'basic-beauty',
    name: 'Basic Beauty',
    badge: 'Essential Glow',
    isPopular: false,
    price: 1499,
    originalPrice: 2099,
    duration: '90 mins',
    description: 'A complete essential refresh ideal for monthly maintenance and everyday radiance.',
    features: [
      'Herbal Glow Facial',
      'Eyebrow Shaping & Upper Lip Threading',
      'Deep Pore Skin Cleanup',
      'Blow Dry & Everyday Hair Styling',
      'Antiseptic Rose Water Toner treatment'
    ]
  },
  {
    id: 'premium-beauty',
    name: 'Premium Beauty',
    badge: 'Most Popular & Recommended',
    isPopular: true,
    price: 2999,
    originalPrice: 4499,
    duration: '2.5 hours',
    description: 'Our signature head-to-toe pampering package with luxury skincare, hair repair, and hand-foot therapy.',
    features: [
      'Gold Radiance Premium Facial',
      'Deep Conditioning Keratin Hair Spa',
      'Deluxe Aromatherapy Manicure',
      'Relaxing Spa Pedicure with Scrub',
      'Party Hair Styling or Tong Curls',
      'Complimentary Back & Shoulder Relaxer'
    ]
  },
  {
    id: 'bridal-beauty',
    name: 'Bridal Beauty',
    badge: 'Royal Wedding Luxury',
    isPopular: false,
    price: 6499,
    originalPrice: 8999,
    duration: 'Full Day Care',
    description: 'The ultimate royal makeover for brides-to-be, designed for picture-perfect memories.',
    features: [
      'Ultra-HD Royal Bridal Makeup',
      'Designer Hair Styling with Floral Setting',
      'Intensive Pre-Bridal Skin Treatment',
      'Luxury Bridal Manicure & Pedicure',
      'Pre-Bridal Full Body Polishing Care',
      'Jewelry, Dupatta & Saree Draping',
      'Lashes, Hair Extensions & Touch-up Kit'
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Indian Bridal Glam',
    category: 'bridal',
    categoryLabel: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional crimson and gold bridal makeover with flawless airbrush finish.'
  },
  {
    id: 'gal-2',
    title: 'Elegant Cascading Curls',
    category: 'hair',
    categoryLabel: 'Hairstyling',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    description: 'Textured romantic waves styled with delicate baby’s breath florals.'
  },
  {
    id: 'gal-3',
    title: 'Dewy Glass Skin Glow',
    category: 'skincare',
    categoryLabel: 'Skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Post-facial hydra-glow and fresh natural radiant complexion.'
  },
  {
    id: 'gal-4',
    title: 'Sangeet Festive Evening Glam',
    category: 'makeup',
    categoryLabel: 'Makeup Looks',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    description: 'Rose-gold shimmer eyelid accent with sculpted berry lips.'
  },
  {
    id: 'gal-5',
    title: 'Luxury Parlour Interior & Suites',
    category: 'interior',
    categoryLabel: 'Salon Interior',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    description: 'Hygienic, ultra-modern private suites with plush styling chairs and soothing ambiance.'
  },
  {
    id: 'gal-6',
    title: 'Premium Organic Beauty Range',
    category: 'products',
    categoryLabel: 'Beauty Products',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: '100% genuine luxury dermatological cosmetics and nourishing hair formulations.'
  },
  {
    id: 'gal-7',
    title: 'Contemporary Layered Cut & Blowout',
    category: 'hair',
    categoryLabel: 'Hairstyling',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    description: 'Voluminous curtain bangs with feather layers for effortless daily movement.'
  },
  {
    id: 'gal-8',
    title: 'Opulent Reception Makeup',
    category: 'bridal',
    categoryLabel: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Smokey bronze eyes with soft nude lip liner tailored for evening reception lights.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'healthy-glowing-skin',
    title: '5 Tips for Healthy & Glowing Skin All Year Round',
    category: 'Skincare Advice',
    date: 'August 18, 2026',
    readTime: '4 min read',
    author: 'Priyanka Sharma',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Unlock the secrets to a radiant, luminous complexion with simple daily rituals, hydration secrets, and professional facial schedules.',
    content: [
      'Achieving that luminous, lit-from-within complexion requires consistency, hydration, and understanding your unique skin barrier.',
      '1. Double Cleansing at Night: Start with an oil-based balm to dissolve sunscreen and makeup, followed by a gentle pH-balanced foaming cleanser.',
      '2. Consistent Exfoliation: Avoid harsh abrasive walnut scrubs. Instead, opt for enzymatic fruit peels or mild lactic acid treatments every 10-14 days.',
      '3. Lock in Hydration with Hyaluronic Acid: Always apply hydrating serums onto damp skin before sealing with a nourishing peptide moisturizer.',
      '4. Daily Broad-Spectrum Sun Protection: Rain or shine, a generous layer of SPF 50 protects against collagen breakdown and dark spots.',
      '5. Monthly Professional Cleanups: Deep extraction done by certified professionals removes deep-seated impurities without damaging pores.'
    ],
    tips: [
      'Drink at least 2.5 liters of water infused with mint and cucumber daily',
      'Never sleep with makeup on—even lightweight tinted BB cream',
      'Schedule a monthly facial tailored to your current skin cycle'
    ]
  },
  {
    id: 'perfect-bridal-makeup',
    title: 'How to Choose the Perfect Bridal Makeup for Your Big Day',
    category: 'Bridal Guide',
    date: 'August 12, 2026',
    readTime: '6 min read',
    author: 'Priyanka Sharma',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    excerpt: 'From Airbrush vs HD makeup to color matching your lehenga undertones, here is your essential bridal beauty roadmap.',
    content: [
      'Your wedding day is one of the most photographed moments of your life. Choosing the right bridal makeup style involves balancing tradition, personal comfort, and camera optics.',
      '1. Understand HD vs Airbrush Makeup: HD makeup uses micro-milled pigments that diffuse camera flashes, while airbrushing sprays a seamless waterproof mist ideal for high humidity and long ceremonies.',
      '2. Matching Your Lehenga & Jewel Undertones: Warm gold jewelry pairs effortlessly with peach and bronze hues, while antique silver and emeralds stand out with rose and wine palettes.',
      '3. Pre-Bridal Prep Starts 3 Months in Advance: Start skin-brightening sessions, hair-repair spas, and hydration treatments weeks prior so makeup glides seamlessly.',
      '4. The Importance of a Trial Session: A trial allows you to test longevity, allergy safety, and custom lash sizing with peace of mind.'
    ],
    tips: [
      'Bring fabric swatches of your bridal attire to your consultation',
      'Keep a mini touch-up pouch with blotting papers and matching lip color',
      'Book your bridal salon slot at least 2-3 months in advance'
    ]
  },
  {
    id: 'hair-care-tips',
    title: 'Best Hair Care Tips for Silky, Frizz-Free Beautiful Hair',
    category: 'Hair Care',
    date: 'August 05, 2026',
    readTime: '5 min read',
    author: 'Salon Stylist Team',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Prevent split ends, restore lost keratin moisture, and maintain salon-grade smoothness at home with expert stylist advice.',
    content: [
      'Daily pollution, hard water, and frequent heat styling can deplete your hair’s natural lipid layer, resulting in dullness and unmanageable frizz.',
      '1. Mind the Water Temperature: Always rinse hair with lukewarm or cool water. Hot water opens cuticles and strips away essential natural oils.',
      '2. Use Heat Protectant Religiously: Never touch an iron or blow dryer to your hair without a barrier spray or argan serum.',
      '3. Regular Trims Every 6 to 8 Weeks: Snip micro-split ends before they travel up the hair shaft and cause breakage.',
      '4. Invest in Monthly Keratin Hair Spas: Deep steam and amino acids fill hair porosities, restoring bounce and mirror-like shine.'
    ],
    tips: [
      'Switch to a silk or satin pillowcase to minimize friction while sleeping',
      'Use a wide-tooth wooden comb on wet hair instead of fine plastic brushes',
      'Apply hair masks from mid-lengths to ends, keeping scalp fresh'
    ]
  },
  {
    id: 'seasonal-skincare-routine',
    title: 'The Ultimate Skincare Routine for Every Season',
    category: 'Wellness & Glow',
    date: 'July 28, 2026',
    readTime: '4 min read',
    author: 'Priyanka Sharma',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How to transition your beauty regimen across summer heat, monsoon humidity, and winter dryness for uninterrupted glow.',
    content: [
      'Just as you update your wardrobe for the seasons, your skin requires targeted ingredient adjustments to maintain optimal barrier health.',
      'Summer: Focus on lightweight water-gel moisturizers, sebum-regulating niacinamide, and non-comedogenic matte sunscreens.',
      'Monsoon: High humidity causes microbial growth; incorporate antibacterial tea tree washes and gentle salicylic acid toners.',
      'Winter: Transition to ceramide-rich barrier creams, facial oils like rosehip, and nourishing gold facials to combat indoor heating and cold winds.',
      'Spring: A gentle detox with vitamin C and antioxidant serums sloughs off winter dullness and preps skin for sunny days.'
    ],
    tips: [
      'Listen to your skin’s daily feedback instead of sticking blindly to fixed products',
      'Keep a hydrating rose mist in your purse for midday rejuvenation',
      'Book seasonal peel consultations before climate shifts take a toll'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ananya Deshmukh',
    role: 'Bride (Mumbai)',
    rating: 5,
    comment: 'Priyanka and her team gave me the bridal makeover of my dreams! The makeup looked completely natural yet so regal in all 4K photos. It stayed intact for 14 hours straight without a single smudge.',
    service: 'Bridal Beauty Package',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'August 2026'
  },
  {
    id: 't-2',
    name: 'Ritu Kulkarni',
    role: 'Corporate Executive',
    rating: 5,
    comment: 'I have been visiting Priyanka Beauty Parlour for 3 years now. The hygiene standards, warmth, and attention to detail during facial and hair spa sessions are unparalleled. Best salon in the area!',
    service: 'Gold Radiance Facial & Hair Spa',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: 'July 2026'
  },
  {
    id: 't-3',
    name: 'Sneha Patel',
    role: 'Fashion Designer',
    rating: 5,
    comment: 'The party makeup for my sister’s engagement was simply stunning. Everyone kept complimenting the glowing finish and hair styling. Super professional and on-time service!',
    service: 'Party Makeup & Hair Styling',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    date: 'August 2026'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Sparkles',
    title: 'Professional Beauty Care',
    description: 'Certified makeup artists and skin estheticians bringing modern techniques and artistic precision to every treatment.'
  },
  {
    icon: 'Award',
    title: 'Experienced Beauty Professionals',
    description: 'Over 5+ years of trusted excellence styling hundreds of happy brides and salon clients.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Premium & Safe Products',
    description: 'We exclusively use dermatologically approved, international brand cosmetics, organic botanicals, and hypoallergenic formulas.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Personalized Services',
    description: 'Every skin type and face shape is unique; we tailor colors, treatments, and hairstyles specifically to you.'
  },
  {
    icon: 'CheckCircle2',
    title: 'Hygienic & Comfortable Ambiance',
    description: 'Sterilized tools, fresh disposable kits, relaxing spa music, and air-conditioned private beauty suites.'
  }
];
