import { ServiceItem, DealItem, HairDealMatrix, GalleryItem, ReviewItem } from '../types';

import heroSalonImg from '../assets/images/delaqua_hero_salon_1787049286222.jpg';
import exteriorImg from '../assets/images/delaqua_exterior_1787049303808.jpg';
import bridalImg from '../assets/images/delaqua_bridal_1787049320042.jpg';
import hydraFacialImg from '../assets/images/delaqua_hydra_facial_1787049339284.jpg';
import hairStylingImg from '../assets/images/delaqua_hair_styling_1787049358586.jpg';
import whiteningFacialImg from '../assets/images/whitening_facial_spa_1787050279284.jpg';
import goldFacialImg from '../assets/images/gold_facial_treatment_1787050297182.jpg';
import blowDryImg from '../assets/images/blow_dry_styling_1787147131115.jpg';
import hairColorImg from '../assets/images/hair_color_balayage_1787147120963.jpg';
import keratinImg from '../assets/images/keratin_smooth_hair_1787147105514.jpg';
import fruitFacialImg from '../assets/images/fruit_facial_glow_1787147144804.jpg';
import thalgoFacialImg from '../assets/images/thalgo_marine_spa_1787147159087.jpg';
import nailPedicureImg from '../assets/images/luxury_nail_pedicure_1787147172878.jpg';
import frenchManiImg from '../assets/images/french_manicure_hands_1787147198654.jpg';
import partyMakeupImg from '../assets/images/party_glam_makeup_1787147185177.jpg';
import waxingSpaImg from '../assets/images/spa_waxing_wellness_1787147209958.jpg';

export const SALON_INFO = {
  name: 'DELAQUA Beauty Salon',
  brand: 'Delaqua by Asma',
  tagline: 'Signature By Asma',
  heroHeadline: '“Your Beauty. Your Confidence. Your Signature.”',
  heroSubheadline: 'Premium beauty, hair, skin, nails and spa services in the heart of Faisalabad.',
  category: "Women's Salon & Spa",
  address: "50-A Nizami Street, Block A, People's Colony No. 1, Faisalabad, 38000, Pakistan",
  shortAddress: "People's Colony No. 1, Faisalabad",
  phone: '0321 7664078',
  phoneRaw: '+923217664078',
  whatsapp: '0321 7664078',
  whatsappRaw: '923217664078',
  openingHours: '11:00 AM – 8:00 PM, Monday–Sunday',
  rating: 4.6,
  totalReviews: 133,
  googleMapsUrl: "https://maps.google.com/?q=Delaqua+Beauty+Salon+50-A+Nizami+Street+People's+Colony+1+Faisalabad",
  images: {
    hero: heroSalonImg,
    exterior: exteriorImg,
    bridal: bridalImg,
    hydraFacial: hydraFacialImg,
    hairStyling: hairStylingImg,
  }
};

export const SERVICES: ServiceItem[] = [
  // HAIR
  {
    id: 'hair-cut',
    name: 'Hair Cut & Styling',
    category: 'hair',
    description: 'Precision layered cuts, bob cuts, feather cuts, and trend styling tailored to your face silhouette.',
    price: 'Starting from Rs. 1,500',
    duration: '45 mins',
    popular: true,
    image: hairStylingImg,
    details: ['Personalized consultation', 'Shampoo & conditioner wash', 'Precision scissor & razor styling', 'Signature blow dry finish']
  },
  {
    id: 'blow-dry',
    name: 'Signature Blow Dry & Waves',
    category: 'hair',
    description: 'High-volume blowout, Hollywood waves, sleek straight, or beachy texture with heat protectant gloss.',
    price: 'Starting from Rs. 1,200',
    duration: '30-45 mins',
    image: blowDryImg,
    details: ['Deep wash', 'Thermal nourishment', 'Bouncy volume blast', 'Long-lasting shine spray']
  },
  {
    id: 'hair-coloring',
    name: 'Hair Coloring & Highlights',
    category: 'hair',
    description: 'Balayage, ombré, babylights, root touch-up, and fashion colors with zero damage ammonia-free formulas.',
    price: 'Starting from Rs. 5,500',
    duration: '2 - 3 hours',
    popular: true,
    image: hairColorImg,
    details: ['Color matching consultation', 'Premium European toners', 'Bond protector infusion', 'Gloss shine locking treatment']
  },
  {
    id: 'single-process-dye',
    name: 'Single Process Hair Dye',
    category: 'hair',
    description: 'All-over seamless color transformation with root-to-tip uniform coverage and lustrous mirror finish.',
    price: 'From Rs. 6,500 (See Deals)',
    duration: '90 mins',
    image: hairStylingImg,
    details: ['Custom color formulation', 'Grey coverage 100%', 'Hydrating wash', 'Gloss blowout']
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Smoothing Treatment',
    category: 'hair',
    description: 'Intense Brazilian protein restoration to eliminate frizz, restore strength, and create ultra-smooth silky hair.',
    price: 'From Rs. 10,000 (See Deals)',
    duration: '2.5 - 3.5 hours',
    popular: true,
    image: keratinImg,
    details: ['Deep clarifying detox', 'Nanokeratin infusion', 'Thermal sealed alignment', 'Up to 5 months longevity']
  },
  {
    id: 'hair-treatments',
    name: 'Hair Spa & Rejuvenation',
    category: 'hair',
    description: 'Intense scalp detox, hair Botox, Olaplex bond repair, and deep moisture spa therapies.',
    price: 'Starting from Rs. 2,800',
    duration: '60 mins',
    image: blowDryImg,
    details: ['Micro-mist steam infusion', 'Aromatherapy scalp massage', 'Follicle strengthening serum']
  },

  // SKIN & FACIAL
  {
    id: 'fruit-facial',
    name: 'Fresh Fruit Facial',
    category: 'skin',
    description: 'Enriched with botanical fruit enzymes, antioxidants and natural vitamins for a soft, radiant natural glow.',
    price: 'Included in Rs. 2,500 Deal',
    duration: '50 mins',
    image: fruitFacialImg,
    details: ['Fruit cleanser', 'Exfoliating fruit scrub', 'Cooling fruit gel', 'Nourishing botanical mask']
  },
  {
    id: 'whitening-facial',
    name: 'French Whitening Facial',
    category: 'skin',
    description: 'Deep brightening treatment targeting pigmentation, sun damage, and uneven skin tone for crystal radiance.',
    price: 'Included in Rs. 3,000 Deal',
    duration: '60 mins',
    popular: true,
    image: whiteningFacialImg,
    details: ['Whitening polisher', 'Double whitening cleanse', 'Head & shoulder massage', 'Mineral glow mask']
  },
  {
    id: '24k-gold-facial',
    name: '24K Gold Facial Treatment',
    category: 'skin',
    description: 'Opulent royal treatment infused with 24K colloidal gold, collagen booster, and brightening polisher.',
    price: 'Rs. 5,000 Package',
    duration: '75 mins',
    popular: true,
    image: goldFacialImg,
    details: ['24K Gold Polisher', 'Gold Scrub & Tone', '24K Face Serum', '14K Eye Facial & Shine Mask', 'Diamond Glow Mani/Pedi']
  },
  {
    id: 'hydra-facial',
    name: 'Signature Hydra Facial',
    category: 'skin',
    description: 'Multi-step clinical hydro-dermabrasion, deep vacuum vortex extraction, LED light therapy, and galvanic infuser.',
    price: 'Rs. 8,000 Package',
    duration: '90 mins',
    popular: true,
    image: hydraFacialImg,
    details: ['Vortex extraction & tool', 'LED light therapy', 'Galvanic & hydration serums', 'Whitening Mani & Pedi']
  },
  {
    id: 'thalgo-facial',
    name: 'Thalgo Marine Luxury Facial',
    category: 'skin',
    description: 'World-renowned French marine algae formulation delivering deep cellular renewal and youth restoration.',
    price: 'Rs. 12,000 Package',
    duration: '90 mins',
    image: thalgoFacialImg,
    details: ['Face polisher & double scrub', 'Scrapper tool extraction', 'Thalgo marine mask', 'Diamond Glow Mani/Pedi', 'Head & shoulder massage']
  },
  {
    id: 'face-massage-polisher',
    name: 'Cleansing, Scrubbing & Polisher',
    category: 'skin',
    description: 'Instant pick-me-up session for pore refinement, dead skin removal, and radiant velvet touch.',
    price: 'Starting from Rs. 1,800',
    duration: '40 mins',
    image: whiteningFacialImg,
    details: ['Deep steam cleansing', 'Fine-grit micro-polisher', 'Acupressure face & neck massage']
  },

  // NAILS
  {
    id: 'manicure-pedicure',
    name: 'Classic Spa Mani & Pedi',
    category: 'nails',
    description: 'Relaxing herbal soak, gentle cuticle care, scrub exfoliation, soothing hand/foot massage, and classic polish.',
    price: 'Starting from Rs. 1,800',
    duration: '60 mins',
    image: nailPedicureImg,
    details: ['Warm rosewater soak', 'Dead skin filing & scrub', 'Cuticle trimming & shaping', 'Relaxing pressure point massage']
  },
  {
    id: 'diamond-glow-mani-pedi',
    name: 'Diamond Glow Mani / Pedi',
    category: 'nails',
    description: 'Luxury brightening scrub, diamond luster mask, paraffin wax smoothing, and high-gloss buffing.',
    price: 'Starting from Rs. 2,800',
    duration: '75 mins',
    popular: true,
    image: nailPedicureImg,
    details: ['Diamond peel polish', 'Collagen hand/foot mask', 'Deep heat therapy wrap', 'Gel or French finish']
  },
  {
    id: 'french-manicure',
    name: 'French Manicure & Nail Art',
    category: 'nails',
    description: 'Chic Parisian white tips, custom trendy nail art, chrome powders, or long-lasting gel extensions.',
    price: 'Starting from Rs. 1,500',
    duration: '50 mins',
    image: frenchManiImg,
    details: ['Nail reinforcement', 'Precision French line drafting', 'UV gel coat seal']
  },

  // WAXING
  {
    id: 'wax-deal-1',
    name: 'Half Arms + Half Legs Wax',
    category: 'waxing',
    description: 'Smooth and painless hair removal with skin-nourishing soothing aftercare lotion.',
    price: 'Rs. 1,400',
    duration: '35 mins',
    image: waxingSpaImg,
    details: ['Skin prep & antiseptic sanitization', 'Gentle hot/strip wax formula', 'Cooling aloe vera soothing gel']
  },
  {
    id: 'wax-deal-2',
    name: 'Under Arms + Under Legs Wax',
    category: 'waxing',
    description: 'Hygienic and gentle hair removal for sensitive areas with calming post-wax hydration.',
    price: 'Rs. 1,800',
    duration: '30 mins',
    image: waxingSpaImg,
    details: ['Sensitive skin formula', 'Minimal redness technique', 'Post-wax soothing mist']
  },
  {
    id: 'wax-deal-3',
    name: 'Full Body / Combination Wax Package',
    category: 'waxing',
    description: 'Complete silky smooth waxing package covering full arms, full legs, underarms & back.',
    price: 'Rs. 2,500',
    duration: '60 mins',
    popular: true,
    image: waxingSpaImg,
    details: ['Full arms + underarms', 'Full legs waxing', 'Deep calming body oil massage']
  },

  // MAKEUP
  {
    id: 'bridal-makeup',
    name: 'Signature Bridal Makeover by Asma',
    category: 'makeup',
    description: 'High-definition long-wear bridal look with luxury cosmetics (Dior, MAC, Huda Beauty), custom lashes, and dupatta setting.',
    price: 'Custom Bridal Packages',
    duration: '3 - 4 hours',
    popular: true,
    image: bridalImg,
    details: ['HD Airbrush or Studio Foundation', '3D Mink Lashes & Eye Styling', 'Dupatta setting & jewelry styling', 'Hydra glow prep & fixing mist']
  },
  {
    id: 'party-makeup',
    name: 'Glam Party & Engagement Makeup',
    category: 'makeup',
    description: 'Stunning glowy glam, smokey eyes, cut-crease, or dewy no-makeup looks for weddings, valima, and celebrations.',
    price: 'Starting from Rs. 6,000',
    duration: '90 mins',
    popular: true,
    image: partyMakeupImg,
    details: ['Skin prep & color correction', 'Eye makeup with premium lashes', 'Contour, blush & highlighter', 'Hairstyling included']
  },
  {
    id: 'event-makeup',
    name: 'Model & Event Photoshoot Makeup',
    category: 'makeup',
    description: 'Studio-camera ready makeup with camera-optimized matte and velvet finishes.',
    price: 'Starting from Rs. 8,000',
    duration: '2 hours',
    image: partyMakeupImg,
    details: ['HD camera resistant foundation', 'Custom hair updos', 'Touch-up kit provided']
  }
];

export const HAIR_DEALS_MATRIX: HairDealMatrix[] = [
  {
    id: 'single-process-matrix',
    title: 'Single Process Hair Dye with Blow Dry',
    description: 'Uniform glossy permanent hair color with deep conditioning and signature volume blowout.',
    badge: 'Best Seller',
    pricing: [
      { length: 'Shoulder Length – Thin', thinPrice: 'Rs. 6,500/-', thickPrice: 'Rs. 7,000/-' },
      { length: 'Medium Length – Thin', thinPrice: 'Rs. 8,500/-', thickPrice: 'Rs. 9,500/-' },
      { length: 'Waist Length – Thin', thinPrice: 'Rs. 14,000/-', thickPrice: 'Rs. 16,000/-' },
    ]
  },
  {
    id: 'keratin-matrix',
    title: 'Keratin Protein Smoothing Treatment',
    description: 'Frizz elimination, intensive protein alignment and silk mirror shine lasting up to 5 months.',
    badge: 'Popular Deal',
    pricing: [
      { length: 'Shoulder Length – Thin', thinPrice: 'Rs. 10,000/-', thickPrice: 'Rs. 12,500/-' },
      { length: 'Medium Length – Thin', thinPrice: 'Rs. 15,000/-', thickPrice: 'Rs. 16,500/-' },
      { length: 'Waist Length – Thin', thinPrice: 'Rs. 19,000/-', thickPrice: 'Rs. 21,000/-' },
    ]
  }
];

export const SKIN_CARE_DEALS: DealItem[] = [
  {
    id: 'skin-deal-1',
    title: 'Fruit Radiance Package',
    subtitle: 'Deal 1 – Essential Fresh Glow',
    price: 'Rs. 2,500/-',
    category: 'skin',
    features: [
      'Fruit Facial',
      'Whitening Polisher',
      'Fruit Cleansing',
      'Fruit Scrub',
      'Fruit Gel',
      'Face & Neck Massage',
      'Fruit Mask',
      'Manicure + Pedicure'
    ],
    tag: 'Amazing Value'
  },
  {
    id: 'skin-deal-2',
    title: 'French Whitening Glow',
    subtitle: 'Deal 2 – Premium Brightening',
    price: 'Rs. 3,000/-',
    category: 'skin',
    popular: true,
    features: [
      'French Whitening Facial',
      'Whitening Polisher',
      'Whitening Cleansing',
      'Whitening Scrub',
      'Head & Shoulder Massage',
      'Mineral Mask',
      'Whitening Manicure',
      'Whitening Pedicure'
    ],
    tag: 'Most Loved'
  }
];

export const FACIAL_PACKAGES: DealItem[] = [
  {
    id: 'facial-24k',
    title: '24K Gold Luxury Facial Deal',
    subtitle: 'Royal Golden Radiance',
    price: 'Rs. 5,000/-',
    category: 'facial',
    features: [
      '24K Gold Whitening Polisher',
      '24K Gold Scrubbing & Toning',
      '24K Gold Face Serum Infusion',
      '14K Gold Eye Facial',
      '14K Gold Shine Mask',
      'Face, Head & Shoulder Massage',
      'Diamond Glow Mani/Pedi'
    ],
    tag: 'Luxury Favorite'
  },
  {
    id: 'facial-hydra',
    title: 'Clinical Hydra Facial',
    subtitle: 'Deep Hydration & Pore Refining',
    price: 'Rs. 8,000/-',
    category: 'facial',
    popular: true,
    features: [
      'Deep Cleansing & Polisher',
      'Exfoliation + Vacuum Vortex Tool',
      'LED Light Therapy',
      'Whitening Mani & Pedi',
      'Head, Face & Shoulder Massage',
      'Hydration Serum Infusion',
      'Galvanic Treatment',
      'Blackhead / Whitehead Extraction'
    ],
    tag: 'Signature Choice'
  },
  {
    id: 'facial-thalgo',
    title: 'Thalgo French Marine Facial',
    subtitle: 'Ultimate Anti-Aging Marine Elixir',
    price: 'Rs. 12,000/-',
    category: 'facial',
    features: [
      'Face Polisher & Double Scrub',
      'Professional Scrapper Tool Extraction',
      'Thalgo Marine Hydrating Mask',
      'Cellular Protection Cream',
      'Diamond Glow Mani/Pedi',
      'Head, Face & Shoulder Massage'
    ],
    tag: 'Premium Luxury'
  }
];

export const WAX_DEALS: DealItem[] = [
  {
    id: 'wax-1',
    title: 'Wax Deal 1',
    price: 'Rs. 1,400/-',
    category: 'wax',
    features: [
      'Half Arms Wax',
      'Half Legs Wax',
      'Soothing Aftercare Lotion'
    ]
  },
  {
    id: 'wax-2',
    title: 'Wax Deal 2',
    price: 'Rs. 1,800/-',
    category: 'wax',
    popular: true,
    features: [
      'Under Arms Wax',
      'Under Legs Wax',
      'Calming Antiseptic Mist'
    ],
    tag: 'Popular'
  },
  {
    id: 'wax-3',
    title: 'Wax Deal 3',
    price: 'Rs. 2,500/-',
    category: 'wax',
    features: [
      'Full Arms Wax',
      'Full Legs Wax',
      'Underarms Wax',
      'Soothing Hydrating Oil Massage'
    ],
    tag: 'Complete Care'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Luxury Salon Interior',
    category: 'interior',
    imageUrl: heroSalonImg,
    caption: 'Chic modern interior with LED illuminated styling stations and black marble finishes.'
  },
  {
    id: 'gal-2',
    title: 'DELAQUA Salon Exterior',
    category: 'interior',
    imageUrl: exteriorImg,
    caption: "Upscale storefront at 50-A Nizami Street, People's Colony No. 1, Faisalabad."
  },
  {
    id: 'gal-3',
    title: 'Signature Bridal Makeover',
    category: 'makeup',
    imageUrl: bridalImg,
    caption: 'Exquisite bridal look by Asma with flawless HD skin, glam eye styling, and traditional jewelry.'
  },
  {
    id: 'gal-4',
    title: 'Hydra Facial & Clinical Aesthetic Care',
    category: 'skin',
    imageUrl: hydraFacialImg,
    caption: 'Advanced Hydra Facial treatment with serum vortex infusion and LED light therapy.'
  },
  {
    id: 'gal-5',
    title: 'Precision Hair Dye & Blow Dry',
    category: 'hair',
    imageUrl: hairStylingImg,
    caption: 'Single process hair dye, glossy toner and signature blowout volume.'
  },
  {
    id: 'gal-6',
    title: 'Diamond Glow Nail Bar & Pedicure',
    category: 'nails',
    imageUrl: nailPedicureImg,
    caption: 'Ultra-luxurious pedicure lounge with massage chairs and pampering foot soaks.'
  },
  {
    id: 'gal-7',
    title: 'Keratin Smoothing & Silk Shine',
    category: 'hair',
    imageUrl: keratinImg,
    caption: 'Glass-hair finish with Brazilian protein smoothing treatment.'
  },
  {
    id: 'gal-8',
    title: '24K Gold Facial Therapy',
    category: 'skin',
    imageUrl: goldFacialImg,
    caption: 'Pure gold leaves, whitening polisher and antioxidant face serum.'
  },
  {
    id: 'gal-9',
    title: 'Glam Party Makeup & Lashes',
    category: 'makeup',
    imageUrl: partyMakeupImg,
    caption: 'Smokey party glam with 3D lashes and sculptured contouring.'
  },
  {
    id: 'gal-10',
    title: 'Balayage & Hair Highlights Artistry',
    category: 'hair',
    imageUrl: hairColorImg,
    caption: 'Sun-kissed multidimensional balayage highlights with luminous shine finish.'
  },
  {
    id: 'gal-11',
    title: 'French Manicure & Nail Styling',
    category: 'nails',
    imageUrl: frenchManiImg,
    caption: 'Precision French tips with delicate rose gold embellishments.'
  },
  {
    id: 'gal-12',
    title: 'French Marine Spa Therapy',
    category: 'skin',
    imageUrl: thalgoFacialImg,
    caption: 'Cellular rejuvenating Thalgo marine algae facial in a tranquil suite.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Ayesha Tariq',
    rating: 5,
    date: '2 weeks ago',
    text: '100% recommended…..very good services and humble staff. The Hydra Facial gave my skin an instant glassy glow, and Asma is so attentive!',
    verified: true,
    service: 'Hydra Facial & Mani/Pedi'
  },
  {
    id: 'rev-2',
    author: 'Mahnoor Khan',
    rating: 5,
    date: '1 month ago',
    text: 'Best Salon in town... Totally satisfied 👍👍 The single process hair dye and blow dry turned out exact to my reference photo. Loved the luxury ambiance!',
    verified: true,
    service: 'Hair Color & Styling'
  },
  {
    id: 'rev-3',
    author: 'Sana Malik',
    rating: 5,
    date: '3 weeks ago',
    text: 'I had a great experience at Delaqua... Everything was done very professionally. Clean environment, hygienic tools and very respectful staff.',
    verified: true,
    service: '24K Gold Facial Deal'
  },
  {
    id: 'rev-4',
    author: 'Zainab Fatima',
    rating: 5,
    date: '2 months ago',
    text: 'Got my bridal makeover done by Asma. Received endless compliments on my big day! Makeup stayed fresh all night without creasing. Thank you Delaqua team!',
    verified: true,
    service: 'Bridal Makeover'
  },
  {
    id: 'rev-5',
    author: 'Hira Naveed',
    rating: 5,
    date: '1 month ago',
    text: 'Keratin smoothing results are unbelievable! My frizzy hair is now completely silky and manageable. Best salon in Faisalabad People’s Colony.',
    verified: true,
    service: 'Keratin Treatment'
  },
  {
    id: 'rev-6',
    author: 'Rabia Bilal',
    rating: 4,
    date: 'Recent',
    text: 'Very comfortable salon for women. The waxing is almost painless and the pedicure was so relaxing. Will definitely be returning regularly.',
    verified: true,
    service: 'Wax Deal & Spa Pedicure'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'why-1',
    title: 'Expert Beauty Professionals',
    description: 'Certified senior hair stylists, aesthetic facialists, and bridal artists trained in modern signature techniques.',
    icon: 'Sparkles'
  },
  {
    id: 'why-2',
    title: 'Premium Products',
    description: 'We exclusively use trusted international formulas from Thalgo France, L’Oréal Professional, MAC, and organic skin extracts.',
    icon: 'Crown'
  },
  {
    id: 'why-3',
    title: 'Hygienic Environment',
    description: '100% sterilized instruments, single-use disposables, and immaculate sanitized private treatment booths.',
    icon: 'ShieldCheck'
  },
  {
    id: 'why-4',
    title: 'Luxury Salon Experience',
    description: 'Calm ambient lighting, plush seating, complimentary refreshments, and a serene women-only sanctuary.',
    icon: 'HeartHandshake'
  },
  {
    id: 'why-5',
    title: 'Personalized Services',
    description: 'Comprehensive hair & skin consultations to curate treatments tailored specifically to your unique beauty goals.',
    icon: 'UserCheck'
  },
  {
    id: 'why-6',
    title: 'Easy Appointment Booking',
    description: 'Instant WhatsApp booking, phone reservations, and customized packages designed for your schedule.',
    icon: 'CalendarCheck2'
  }
];
