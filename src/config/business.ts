export interface BusinessConfig {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  motto: string;
  whatsappNumber: string;
  whatsappInternational: string;
  instagramHandle: string;
  instagramUrl: string;
  youtubeUrl: string; // Clearly editable placeholder as requested
  location: string;
  cityArea: string;
  googleMapsUrl: string; // Editable Google Maps URL
  qualities: Array<{
    title: string;
    subtitle: string;
    note?: string;
  }>;
  orderingSteps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

export const businessConfig: BusinessConfig = {
  brandName: "SS Home Bakes",
  tagline: "Fresh • Elegant • Homemade",
  heroHeadline: "Small bites. Big happiness.",
  heroSubheadline: "Cakes, brownies & little treats made with love.",
  motto: "Because every bite matters",
  whatsappNumber: "+91 00000 00000",
  whatsappInternational: "910000000000",
  instagramHandle: "@homebakes_demo",
  instagramUrl: "https://www.instagram.com/",
  youtubeUrl: "https://www.youtube.com/", // Prototype demo link
  location: "Local Delivery & Pickup",
  cityArea: "Home Bakery Kitchen",
  googleMapsUrl: "https://maps.google.com", // Prototype demo link
  qualities: [
    {
      title: "100% HOMEMADE",
      subtitle: "Freshly prepared in our home kitchen with wholesome care.",
    },
    {
      title: "FRESHLY PREPARED",
      subtitle: "Baked to order for you, never mass-produced or stored on shelves.",
    },
    {
      title: "MADE WITH LOVE",
      subtitle: "Every little treat is crafted with passion and personal warmth.",
    },
    {
      title: "WHEAT FLOUR OPTION",
      subtitle: "Available with wheat flour for a healthier choice upon request.",
      note: "As featured on our signature bakes menu",
    },
  ],
  orderingSteps: [
    {
      number: "01",
      title: "CHOOSE YOUR TREAT",
      description: "Browse our signature brownies, bomboloni, desserts, and celebration bakes.",
    },
    {
      number: "02",
      title: "SEND YOUR ENQUIRY",
      description: "Tap 'Order on WhatsApp' to send your request with pre-filled details.",
    },
    {
      number: "03",
      title: "CONFIRM THE DETAILS",
      description: "Discuss availability, customization, date, and pickup or delivery details.",
    },
    {
      number: "04",
      title: "ENJOY YOUR ORDER",
      description: "Receive your freshly handcrafted treats packed with love.",
    },
  ],
};
