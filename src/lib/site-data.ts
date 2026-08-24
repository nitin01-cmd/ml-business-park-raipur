export const photos = {
  poster: "/navbar-logo.png",
  facade: "/navbar-logo.png",
  rent1: "/rent_1.webp",
  commercialUnits: "/commercial_units.png",
  premiumWorkspaces: "/premium_workspaces.png",
  customBusinessSpaces: "/custom_business_spaces.png",
  arcade: "/commercial_units.png",
  corridor: "/premium_workspaces.png",
  office: "/rent_1.webp",
};

export const contact = {
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsapp: "https://wa.me/910000000000",
  email: "enquiry@mlbusinesspark.in",
  address:
    "Punjab Oil Mill Gali, Bhaisthan, Bhawani Patna, Ramsagar Para, Jawahar Nagar, Raipur, Chhattisgarh 492009, India",
  plusCode: "6JXH+GF, Raipur",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=6JXH%2BGF+Raipur",
  directions: "https://www.google.com/maps/dir/?api=1&destination=6JXH%2BGF+Raipur",
  mapEmbed: "https://www.google.com/maps?q=6JXH%2BGF%20Raipur%20Chhattisgarh&output=embed",
};

export type Space = {
  id: string;
  name: string;
  type: string;
  image: string;
  gallery: string[];
  blurb: string;
  area: string;
  floor: string;
  rent: string;
  availability: string;
  suitableFor: string;
  amenities: string[];
};

export const spaces: Space[] = [
  {
    id: "office-spaces",
    name: "Office Spaces",
    type: "Office",
    image: photos.rent1,
    gallery: [photos.rent1, photos.premiumWorkspaces, photos.customBusinessSpaces],
    blurb:
      "Modern workspace layouts ideal for corporate offices, consultants, agencies, and growing enterprises.",
    area: "500 - 3,500 sq. ft.",
    floor: "1st & 2nd Floor",
    rent: "Contact for pricing",
    availability: "Available",
    suitableFor: "Startups, consultants, professional firms, corporate branches",
    amenities: ["24/7 Access", "Elevators", "Ample Parking", "Security"],
  },
  {
    id: "commercial-units",
    name: "Commercial Units",
    type: "Commercial",
    image: photos.commercialUnits,
    gallery: [photos.commercialUnits, photos.rent1, photos.customBusinessSpaces],
    blurb:
      "High-visibility ground and first floor commercial units suited for retail, showrooms, and service centers.",
    area: "800 - 4,000 sq. ft.",
    floor: "Ground & 1st Floor",
    rent: "Contact for pricing",
    availability: "Available for Lease",
    suitableFor: "Retail, showrooms, financial services, trade offices",
    amenities: ["Road Facing", "Customer Parking", "24/7 Access", "High Footfall"],
  },
  {
    id: "premium-workspaces",
    name: "Premium Workspaces",
    type: "Premium",
    image: photos.premiumWorkspaces,
    gallery: [photos.premiumWorkspaces, photos.rent1, photos.commercialUnits],
    blurb:
      "Spacious, well-ventilated executive workspace suites with glass fronts and modern corridors.",
    area: "1,200 - 5,000 sq. ft.",
    floor: "2nd & 3rd Floor",
    rent: "Contact for pricing",
    availability: "Available",
    suitableFor: "Established companies, IT firms, corporate headquarters",
    amenities: ["Elevators", "24/7 Security", "Dedicated Parking", "Business Lounge"],
  },
  {
    id: "custom-spaces",
    name: "Custom Business Spaces",
    type: "Custom Layout",
    image: photos.customBusinessSpaces,
    gallery: [photos.customBusinessSpaces, photos.rent1, photos.premiumWorkspaces],
    blurb:
      "Tailored commercial floor plates designed around your specific operational and space requirements.",
    area: "Customizable Area",
    floor: "Flexible Floor Options",
    rent: "Contact for pricing",
    availability: "Enquire",
    suitableFor: "Businesses requiring tailored office layouts or large footprints",
    amenities: [
      "Flexible Layout",
      "24/7 Power Backup",
      "Dedicated Parking",
      "High-speed Connectivity",
    ],
  },
];

export const galleryImages = [
  { src: photos.facade, alt: "M L Business Park exterior facade from the main road, Raipur" },
  { src: photos.rent1, alt: "Furnished modern office workspace inside M L Business Park" },
  {
    src: photos.commercialUnits,
    alt: "Road-facing view of commercial units and arcade at M L Business Park",
  },
  {
    src: photos.premiumWorkspaces,
    alt: "Interior corridor and glass-fronted executive suites at M L Business Park",
  },
  {
    src: photos.customBusinessSpaces,
    alt: "Spacious open-plan commercial floor layout at M L Business Park",
  },
];
