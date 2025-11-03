const LOCATIONS_DATA = [
  {
    id: "1",
    name: "Blue Bottle Coffee",
    description: "Artisan coffee shop known for single-origin coffee and minimalist aesthetic",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94101",
      country: "USA"
    },
    hours: {
      monday: { open: "07:00", close: "19:00" },
      tuesday: { open: "07:00", close: "19:00" },
      wednesday: { open: "07:00", close: "19:00" },
      thursday: { open: "07:00", close: "19:00" },
      friday: { open: "07:00", close: "19:00" },
      saturday: { open: "08:00", close: "20:00" },
      sunday: { open: "08:00", close: "18:00" }
    },
    services: ["Coffee brewing", "WiFi", "Free seating", "Takeaway", "Indoor dining"],
    goods: ["Specialty coffee", "Pastries", "Coffee beans", "Merchandise", "Tea"]
  },
  {
    id: "2",
    name: "The Corner Bookstore",
    description: "Independent bookstore with curated selection of new and used books",
    coordinates: { lat: 40.7589, lng: -73.9851 },
    hours: {
      monday: { open: "10:00", close: "20:00" },
      tuesday: { open: "10:00", close: "20:00" },
      wednesday: { open: "10:00", close: "20:00" },
      thursday: { open: "10:00", close: "20:00" },
      friday: { open: "10:00", close: "20:00" },
      saturday: { open: "10:00", close: "20:00" },
      sunday: { open: "11:00", close: "18:00" }
    },
    services: ["Book recommendations", "Reading events", "Book clubs", "Gift wrapping", "Special orders"],
    goods: ["Fiction books", "Non-fiction books", "Children's books", "Stationery", "Bookmarks", "Gift cards"]
  },
  {
    id: "3",
    name: "Sweet Dreams Bakery",
    description: "Family-owned bakery specializing in fresh pastries and custom cakes",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    hours: {
      monday: { open: "06:00", close: "18:00" },
      tuesday: { open: "06:00", close: "18:00" },
      wednesday: { open: "06:00", close: "18:00" },
      thursday: { open: "06:00", close: "18:00" },
      friday: { open: "06:00", close: "18:00" },
      saturday: { open: "07:00", close: "16:00" },
      sunday: { open: "07:00", close: "15:00" }
    },
    services: ["Custom cake orders", "Catering", "Delivery", "Dine-in", "Event planning"],
    goods: ["Fresh bread", "Croissants", "Cakes", "Cookies", "Muffins", "Tarts", "Scones"]
  },
  {
    id: "4",
    name: "TechFix Repair Shop",
    description: "Expert repair services for phones, laptops, and electronics",
    coordinates: { lat: 37.7849, lng: -122.4094 },
    hours: {
      monday: { open: "09:00", close: "18:00" },
      tuesday: { open: "09:00", close: "18:00" },
      wednesday: { open: "09:00", close: "18:00" },
      thursday: { open: "09:00", close: "18:00" },
      friday: { open: "09:00", close: "18:00" },
      saturday: { open: "10:00", close: "16:00" },
      sunday: null
    },
    services: ["Phone repair", "Laptop repair", "Screen replacement", "Battery replacement", "Data recovery", "Warranty service"],
    goods: ["Screen protectors", "Phone cases", "Chargers", "Cables", "Batteries", "Replacement parts"]
  },
  {
    id: "5",
    name: "Green Market Grocery",
    description: "Organic grocery store with fresh produce and sustainable products",
    coordinates: { lat: 40.7505, lng: -73.9934 },
    hours: {
      monday: { open: "07:00", close: "22:00" },
      tuesday: { open: "07:00", close: "22:00" },
      wednesday: { open: "07:00", close: "22:00" },
      thursday: { open: "07:00", close: "22:00" },
      friday: { open: "07:00", close: "22:00" },
      saturday: { open: "07:00", close: "22:00" },
      sunday: { open: "08:00", close: "21:00" }
    },
    services: ["Delivery", "Online ordering", "Loyalty program", "Catering", "Meal prep"],
    goods: ["Organic fruits", "Organic vegetables", "Dairy products", "Meat", "Pantry items", "Beverages", "Snacks", "Supplements"]
  },
  {
    id: "6",
    name: "Central Bank - Main Branch",
    description: "Full-service bank with ATMs and personal banking services",
    coordinates: { lat: 51.5155, lng: -0.0922 },
    hours: {
      monday: { open: "09:00", close: "17:00" },
      tuesday: { open: "09:00", close: "17:00" },
      wednesday: { open: "09:00", close: "17:00" },
      thursday: { open: "09:00", close: "17:00" },
      friday: { open: "09:00", close: "17:00" },
      saturday: null,
      sunday: null
    },
    services: ["ATM", "Checking accounts", "Savings accounts", "Loans", "Investment advice", "Currency exchange", "Notary service"],
    goods: ["Checks", "Deposit slips", "Envelopes", "Financial products"]
  },
  {
    id: "7",
    name: "Urban Bike Shop",
    description: "Bicycle sales, repairs, and rentals for city cycling",
    coordinates: { lat: 37.7689, lng: -122.4294 },
    hours: {
      monday: { open: "10:00", close: "19:00" },
      tuesday: { open: "10:00", close: "19:00" },
      wednesday: { open: "10:00", close: "19:00" },
      thursday: { open: "10:00", close: "19:00" },
      friday: { open: "10:00", close: "19:00" },
      saturday: { open: "09:00", close: "18:00" },
      sunday: { open: "10:00", close: "17:00" }
    },
    services: ["Bike repair", "Bike rentals", "Tune-ups", "Fitting service", "Maintenance classes", "Delivery service"],
    goods: ["Bicycles", "Bike accessories", "Helmets", "Locks", "Lights", "Bike tools", "Clothing", "Parts"]
  },
  {
    id: "8",
    name: "Sunset Café",
    description: "Cozy neighborhood café with outdoor seating and live music on weekends",
    coordinates: { lat: 40.7282, lng: -73.9942 },
    hours: {
      monday: { open: "07:00", close: "21:00" },
      tuesday: { open: "07:00", close: "21:00" },
      wednesday: { open: "07:00", close: "21:00" },
      thursday: { open: "07:00", close: "21:00" },
      friday: { open: "07:00", close: "22:00" },
      saturday: { open: "08:00", close: "23:00" },
      sunday: { open: "08:00", close: "22:00" }
    },
    services: ["Brunch", "WiFi", "Outdoor seating", "Live music", "Takeaway", "Catering"],
    goods: ["Coffee", "Breakfast items", "Sandwiches", "Salads", "Desserts", "Juices", "Beer", "Wine"]
  },
  {
    id: "9",
    name: "Quick Stop Pharmacy",
    description: "24-hour pharmacy with prescription services and health products",
    coordinates: { lat: 51.5208, lng: -0.1388 },
    hours: {
      monday: { open: "00:00", close: "23:59" },
      tuesday: { open: "00:00", close: "23:59" },
      wednesday: { open: "00:00", close: "23:59" },
      thursday: { open: "00:00", close: "23:59" },
      friday: { open: "00:00", close: "23:59" },
      saturday: { open: "00:00", close: "23:59" },
      sunday: { open: "00:00", close: "23:59" }
    },
    services: ["Prescription filling", "Pharmacy consultation", "Immunizations", "Health screenings", "Photo printing", "Delivery"],
    goods: ["Prescription drugs", "Over-the-counter medicines", "Vitamins", "Personal care items", "Beauty products", "First aid supplies"]
  },
  {
    id: "10",
    name: "Artisan Hardware Store",
    description: "Well-stocked hardware store with tools and building supplies",
    coordinates: { lat: 37.7599, lng: -122.4148 },
    hours: {
      monday: { open: "07:00", close: "20:00" },
      tuesday: { open: "07:00", close: "20:00" },
      wednesday: { open: "07:00", close: "20:00" },
      thursday: { open: "07:00", close: "20:00" },
      friday: { open: "07:00", close: "20:00" },
      saturday: { open: "08:00", close: "18:00" },
      sunday: { open: "09:00", close: "17:00" }
    },
    services: ["Tool rental", "Cutting services", "Delivery", "Expert advice", "Key cutting", "Paint mixing"],
    goods: ["Tools", "Hardware", "Paint", "Lumber", "Electrical supplies", "Plumbing supplies", "Garden supplies", "Safety equipment"]
  },
  {
    id: "11",
    name: "Zen Spa & Wellness",
    description: "Full-service spa offering massages, facials, and wellness treatments",
    coordinates: { lat: 40.7614, lng: -73.9776 },
    hours: {
      monday: { open: "10:00", close: "20:00" },
      tuesday: { open: "10:00", close: "20:00" },
      wednesday: { open: "10:00", close: "20:00" },
      thursday: { open: "10:00", close: "20:00" },
      friday: { open: "10:00", close: "20:00" },
      saturday: { open: "09:00", close: "20:00" },
      sunday: { open: "10:00", close: "18:00" }
    },
    services: ["Massage therapy", "Facial treatments", "Manicures", "Pedicures", "Body wraps", "Aromatherapy", "Couples packages"],
    goods: ["Skincare products", "Essential oils", "Candles", "Bath products", "Gift certificates"]
  },
  {
    id: "12",
    name: "Post Office - Downtown",
    description: "USPS postal services with package shipping and PO boxes",
    coordinates: { lat: 37.7879, lng: -122.4095 },
    hours: {
      monday: { open: "09:00", close: "17:00" },
      tuesday: { open: "09:00", close: "17:00" },
      wednesday: { open: "09:00", close: "17:00" },
      thursday: { open: "09:00", close: "17:00" },
      friday: { open: "09:00", close: "17:00" },
      saturday: { open: "09:00", close: "13:00" },
      sunday: null
    },
    services: ["Package shipping", "Post office boxes", "Mail forwarding", "Passport photos", "Money orders", "Stamps", "Priority mail"],
    goods: ["Stamps", "Shipping boxes", "Envelopes", "Packaging supplies", "Postcards"]
  },
  {
    id: "13",
    name: "Vinyl Records & More",
    description: "Record store specializing in vinyl with new releases and vintage finds",
    coordinates: { lat: 40.7420, lng: -73.9897 },
    hours: {
      monday: { open: "11:00", close: "20:00" },
      tuesday: { open: "11:00", close: "20:00" },
      wednesday: { open: "11:00", close: "20:00" },
      thursday: { open: "11:00", close: "20:00" },
      friday: { open: "11:00", close: "20:00" },
      saturday: { open: "10:00", close: "21:00" },
      sunday: { open: "12:00", close: "19:00" }
    },
    services: ["Record cleaning", "Listening stations", "Special orders", "Trade-in program", "Live performances"],
    goods: ["Vinyl records", "CDs", "Cassettes", "Record players", "Headphones", "Accessories", "Posters", "T-shirts"]
  },
  {
    id: "14",
    name: "Fresh & Fast Laundromat",
    description: "Self-service laundry with coin-operated machines and drop-off service",
    coordinates: { lat: 51.5320, lng: -0.1054 },
    hours: {
      monday: { open: "06:00", close: "23:00" },
      tuesday: { open: "06:00", close: "23:00" },
      wednesday: { open: "06:00", close: "23:00" },
      thursday: { open: "06:00", close: "23:00" },
      friday: { open: "06:00", close: "23:00" },
      saturday: { open: "07:00", close: "23:00" },
      sunday: { open: "08:00", close: "22:00" }
    },
    services: ["Wash & fold", "Dry cleaning", "Alterations", "Pickup and delivery", "Self-service", "Commercial laundry"],
    goods: ["Detergent", "Fabric softener", "Dryer sheets", "Change machine", "Hangers"]
  },
  {
    id: "15",
    name: "Mountain Gear Outfitters",
    description: "Outdoor equipment and clothing for hiking, camping, and adventure sports",
    coordinates: { lat: 37.7715, lng: -122.4687 },
    hours: {
      monday: { open: "09:00", close: "19:00" },
      tuesday: { open: "09:00", close: "19:00" },
      wednesday: { open: "09:00", close: "19:00" },
      thursday: { open: "09:00", close: "19:00" },
      friday: { open: "09:00", close: "19:00" },
      saturday: { open: "08:00", close: "18:00" },
      sunday: { open: "10:00", close: "17:00" }
    },
    services: ["Equipment rental", "Expert advice", "Gear repair", "Workshop classes", "Guided trip planning"],
    goods: ["Camping gear", "Hiking boots", "Backpacks", "Outdoor clothing", "Sleeping bags", "Tents", "Cooking equipment", "Maps"]
  }
];

export default LOCATIONS_DATA;
