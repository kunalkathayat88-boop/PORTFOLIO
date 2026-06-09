import { Project, Exhibition, Service, Award, Testimonial } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "craviq-chicken-biryani",
    title: "Chicken Biryani Poster",
    category: "Digital Design",
    image: "https://i.ibb.co/zhwk7kVS/chicken-biryani.jpg",
    year: "2024",
    size: "medium",
    description: "A vibrant food promotional poster designed for Craviq, utilizing a high-contrast orange background, floating ingredients, and bold typography to capture attention.",
    tags: ["Social Media", "Poster Design", "Food Branding"]
  },
  {
    id: "craviq-chicken-noodles",
    title: "Chicken Noodles Poster",
    category: "Product Posters",
    image: "https://i.ibb.co/7ts5DqsJ/chicken-noodles.jpg",
    year: "2024",
    size: "small",
    description: "A sleek marketing creative for delicious Chinese flavors, balancing clean layouts, fresh colors, and modern typographic hierarchy.",
    tags: ["Social Media", "Creative Design", "Craviq"]
  },
  {
    id: "craviq-product-1",
    title: "Premium Product Poster",
    category: "Product Posters",
    image: "https://i.ibb.co/GfCPrXcq/product-1.jpg",
    year: "2024",
    size: "medium",
    description: "An elegant, highly-styled product promotional poster featuring premium composition, lighting, and modern branding elements.",
    tags: ["Product Design", "Poster", "Branding"]
  },
  {
    id: "craviq-tshirts-poster",
    title: "T-Shirts Promo Poster",
    category: "Product Posters",
    image: "https://i.ibb.co/Xnrt36B/so-many-t-shirts.jpg",
    year: "2024",
    size: "medium",
    description: "A trendy, clean product layout displaying dynamic T-shirt variations against an elegant corporate minimalist backdrop.",
    tags: ["Product Design", "Poster", "Branding"]
  },
  {
    id: "craviq-snacks",
    title: "Snacks & Starters Poster",
    category: "Brand Identity",
    image: "https://i.ibb.co/fdKLvHFj/snacks.jpg",
    year: "2024",
    size: "small",
    description: "An evocative typography-focused poster design combining custom letterforms with rich, close-up product imagery highlighting street food culture.",
    tags: ["Branding", "Poster", "Typography"]
  },
  {
    id: "craviq-soup-bowl",
    title: "Not Your Regular Soup Poster",
    category: "Digital Design",
    image: "https://i.ibb.co/qYtnMd9F/soup-bowl.jpg",
    year: "2024",
    size: "large",
    description: "A punchy, modern food poster highlighting Craviq's slow-crafted rich soup. Leverages clean asymmetrical layout grids and crisp typography.",
    tags: ["Social Media", "Poster", "Typography"]
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: "exh-1",
    index: "01",
    title: "Cinematic Visions Unveiled",
    venue: "Madrid Gallery, Spain",
    date: "21 Nov 2023",
    link: "#",
    details: "An immersive sensory exhibition presenting continuous-shutter high-contrast film reels, vintage analog projectors, and spatial light designs that play directly with shadows.",
    ticketPrice: "$25"
  },
  {
    id: "exh-2",
    index: "02",
    title: "Frames in Motion",
    venue: "Manchester Museum, UK",
    date: "20 Nov 2023",
    link: "#",
    details: "A curated digital walkthrough detailing 800,000+ hours of community-curated footage, exploring the evolution of movement in post-industrial spaces.",
    ticketPrice: "$30"
  },
  {
    id: "exh-3",
    index: "03",
    title: "Journey Through Time",
    venue: "Milan Gallery, Italy",
    date: "19 Nov 2023",
    link: "#",
    details: "A bold typographical installation and visual timeline mapping raw human portraits and tactile organic matter over a century of climate shifts.",
    ticketPrice: "Free Entry"
  },
  {
    id: "exh-4",
    index: "04",
    title: "Experimental Narratives",
    venue: "Paris Museum, France",
    date: "18 Nov 2023",
    link: "#",
    details: "A boundary-pushing exhibition merging 3D procedural physics, dynamic typography projections, and generative audio loops mapped to human heartbeat sensors.",
    ticketPrice: "$40"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-photography",
    title: "Instagram Posters",
    description: "High-contrast promotional and artistic posters formatted perfectly for Instagram channels and digital engagement.",
    list: ["Creative Layouts", "Color Grading", "Product Promos", "Visual Storytelling"]
  },
  {
    id: "srv-dir",
    title: "YouTube Thumbnails",
    description: "Click-worthy, high-impact YouTube thumbnails maximizing visual balance, CTR potential, and bold readable titles.",
    list: ["Bold Typography", "Subject Highlighting", "Composition Framing", "Aesthetic Backdrops"]
  },
  {
    id: "srv-motion",
    title: "Creative Banners",
    description: "Developing captivating narrative banners, cinematic digital layouts, and promotional graphics optimized for the web.",
    list: ["Brand Campaigns", "Display Assets", "Web Advertising", "Graphic Layouts"]
  },
  {
    id: "srv-uiux",
    title: "Instagram Post/Crousels",
    description: "Cohesive multi-slide Instagram carousel guides, seamless narrative transitions, and curated post feeds.",
    list: ["Carousel Swipes", "Seamless Canvas", "Interactive Graphics", "Feed Guidelines"]
  }
];

export const AWARDS: Award[] = [
  {
    id: "aw-1",
    year: "2025",
    title: "Artist of the Year",
    category: "Cinematography & Fine Art",
    organization: "International Creative Guild"
  },
  {
    id: "aw-2",
    year: "2024",
    title: "Best Motion Narrative",
    category: "Experimental Short Film",
    organization: "Berlin CineFest"
  },
  {
    id: "aw-3",
    year: "2024",
    title: "Gold Design Award",
    category: "Digital Editorial Showcase",
    organization: "Vanguard Design Council"
  },
  {
    id: "aw-4",
    year: "2023",
    title: "Excellence in Minimalism",
    category: "Architectural Catalog photo series",
    organization: "Tokyo Photo Biennale"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Genevieve Roche",
    company: "Lumière Creative Studio",
    role: "Global Creative Director",
    review: "Working together changed how our luxury brand tells stories. The portfolio does him justice—his eye for asymmetry, golden light accents, and deep shadow play created an unmatched cultural legacy.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "t-2",
    name: "Alaric Sterling",
    company: "Verschwommen Cinema",
    role: "Lead Producer",
    review: "He brings a meticulous commitment to analog visuals. His ability to frame the simplest elements—a swaying white drape, a solitary tree—evokes a massive emotional landscape. An absolute genius.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "t-3",
    name: "Yuki Tanaka",
    company: "Aura Design Agency",
    role: "Principal Architect & Founder",
    review: "The visual poetry displayed in every frame of our architectural campaign was mindblowing. Standard rules of layout were broken, yet the composition feels extremely secure and perfectly balanced.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
  }
];
