import facade from "@/assets/facade.jpg.asset.json";
import arcade from "@/assets/arcade.jpg.asset.json";
import corridor from "@/assets/corridor.jpg.asset.json";
import office from "@/assets/office.jpg.asset.json";

export const photos = {
  facade: facade.url,
  arcade: arcade.url,
  corridor: corridor.url,
  office: office.url,
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
    image: photos.office,
    gallery: [photos.office, photos.corridor, photos.facade],
    blurb: "Professional spaces for startups, companies, consultants and growing teams.",
    area: "0000 sq. ft.",
    floor: "[Floor]",
    rent: "Contact for pricing",
    availability: "Available",
    suitableFor: "Startups, consultants, professional firms, growing teams",
    amenities: ["24/7 Access", "Elevators", "Parking", "Security"],
  },
  {
    id: "commercial-units",
    name: "Commercial Units",
    type: "Commercial",
    image: photos.arcade,
    gallery: [photos.arcade, photos.facade, photos.corridor],
    blurb: "Flexible commercial spaces suitable for various businesses.",
    area: "0000 sq. ft.",
    floor: "[Floor]",
    rent: "Contact for pricing",
    availability: "Enquire",
    suitableFor: "Retail, showrooms, service businesses, trade offices",
    amenities: ["Road Facing", "Parking", "24/7 Access", "Security"],
  },
  {
    id: "premium-workspaces",
    name: "Premium Workspaces",
    type: "Premium",
    image: photos.corridor,
    gallery: [photos.corridor, photos.office, photos.arcade],
    blurb: "Larger spaces designed for established businesses and professional offices.",
    area: "0000 sq. ft.",
    floor: "[Floor]",
    rent: "Contact for pricing",
    availability: "Available",
    suitableFor: "Established companies, corporate branches, large teams",
    amenities: ["Elevators", "Security", "Parking", "Business Environment"],
  },
  {
    id: "custom-spaces",
    name: "Custom Business Spaces",
    type: "Custom",
    image: photos.facade,
    gallery: [photos.facade, photos.arcade, photos.office],
    blurb: "Flexible options based on business requirements.",
    area: "0000 sq. ft.",
    floor: "[Floor]",
    rent: "Contact for pricing",
    availability: "Enquire",
    suitableFor: "Businesses with specific size or layout requirements",
    amenities: ["Flexible Layout", "24/7 Access", "Parking", "Connectivity"],
  },
];

export const galleryImages = [
  { src: photos.facade, alt: "M L Business Park exterior facade from the main road, Raipur" },
  {
    src: photos.arcade,
    alt: "Open ground-floor arcade and commercial shutters at M L Business Park",
  },
  { src: photos.corridor, alt: "Interior corridor with glass office fronts at M L Business Park" },
  { src: photos.office, alt: "Furnished office and meeting room inside M L Business Park" },
  { src: photos.arcade, alt: "Road-facing view of commercial units at M L Business Park" },
  { src: photos.facade, alt: "Building entrance and staircase approach at M L Business Park" },
];
