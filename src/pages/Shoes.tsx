
import { useState } from "react";
import { ShoppingCart, Filter, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Shoes = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    // Sneakers
    { id: 301, name: "Air Max Style", price: 4500, originalPrice: 5500, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Popular", size: ["38", "39", "40", "41", "42", "43", "44"] },
    { id: 302, name: "Running Sneakers", price: 3800, originalPrice: null, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sport", size: ["39", "40", "41", "42", "43"] },
    { id: 303, name: "High-Top Sneakers", price: 4200, originalPrice: 4800, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Trendy", size: ["38", "39", "40", "41", "42"] },
    { id: 304, name: "Basketball Shoes", price: 5200, originalPrice: null, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Performance", size: ["40", "41", "42", "43", "44"] },
    { id: 305, name: "Classic White Sneakers", price: 3500, originalPrice: 4000, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Essential", size: ["38", "39", "40", "41", "42", "43"] },
    { id: 306, name: "Retro Sneakers", price: 4800, originalPrice: null, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Vintage", size: ["39", "40", "41", "42", "43"] },
    { id: 307, name: "Slip-On Sneakers", price: 3200, originalPrice: 3800, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Easy", size: ["38", "39", "40", "41", "42"] },
    { id: 308, name: "Platform Sneakers", price: 4000, originalPrice: null, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Height", size: ["37", "38", "39", "40", "41"] },
    { id: 309, name: "Mesh Running Shoes", price: 3600, originalPrice: 4200, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Breathable", size: ["39", "40", "41", "42", "43", "44"] },
    { id: 310, name: "Canvas Sneakers", price: 2800, originalPrice: null, category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Casual", size: ["38", "39", "40", "41", "42"] },

    // Boots
    { id: 311, name: "Chelsea Boots", price: 5500, originalPrice: null, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["40", "41", "42", "43", "44"] },
    { id: 312, name: "Combat Boots", price: 4800, originalPrice: 5800, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Tough", size: ["39", "40", "41", "42", "43"] },
    { id: 313, name: "Ankle Boots", price: 4200, originalPrice: null, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Stylish", size: ["37", "38", "39", "40", "41"] },
    { id: 314, name: "Work Boots", price: 6200, originalPrice: 7000, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Durable", size: ["41", "42", "43", "44", "45"] },
    { id: 315, name: "Hiking Boots", price: 5800, originalPrice: null, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Adventure", size: ["40", "41", "42", "43", "44"] },
    { id: 316, name: "Desert Boots", price: 4500, originalPrice: 5200, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["39", "40", "41", "42", "43"] },
    { id: 317, name: "Martin Boots", price: 5000, originalPrice: null, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Iconic", size: ["38", "39", "40", "41", "42"] },
    { id: 318, name: "Cowboy Boots", price: 6500, originalPrice: 7500, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Western", size: ["40", "41", "42", "43", "44"] },
    { id: 319, name: "Lace-Up Boots", price: 4700, originalPrice: null, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Secure", size: ["39", "40", "41", "42", "43"] },
    { id: 320, name: "Platform Boots", price: 5300, originalPrice: 6000, category: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Height", size: ["37", "38", "39", "40", "41"] },

    // Formal
    { id: 321, name: "Oxford Shoes", price: 4800, originalPrice: null, category: "Formal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Business", size: ["40", "41", "42", "43", "44"] },
    { id: 322, name: "Derby Shoes", price: 4500, originalPrice: 5200, category: "Formal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["39", "40", "41", "42", "43"] },
    { id: 323, name: "Brogues", price: 5200, originalPrice: null, category: "Formal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Detailed", size: ["40", "41", "42", "43", "44"] },
    { id: 324, name: "Monk Strap Shoes", price: 5500, originalPrice: 6200, category: "Formal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Elegant", size: ["39", "40", "41", "42", "43"] },
    { id: 325, name: "Pointed Toe Heels", price: 4200, originalPrice: null, category: "Formal", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sharp", size: ["36", "37", "38", "39", "40"] },
    { id: 326, name: "Block Heel Pumps", price: 3800, originalPrice: 4500, category: "Formal", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Comfort", size: ["36", "37", "38", "39", "40", "41"] },
    { id: 327, name: "Patent Leather Shoes", price: 5800, originalPrice: null, category: "Formal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Shiny", size: ["40", "41", "42", "43", "44"] },
    { id: 328, name: "Wingtip Shoes", price: 5000, originalPrice: 5800, category: "Formal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Traditional", size: ["39", "40", "41", "42", "43"] },
    { id: 329, name: "Cap Toe Shoes", price: 4600, originalPrice: null, category: "Formal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Professional", size: ["40", "41", "42", "43", "44"] },
    { id: 330, name: "Stiletto Heels", price: 4400, originalPrice: 5000, category: "Formal", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Elegant", size: ["36", "37", "38", "39", "40"] },

    // Sandals
    { id: 331, name: "Leather Sandals", price: 2800, originalPrice: null, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Summer", size: ["36", "37", "38", "39", "40", "41"] },
    { id: 332, name: "Gladiator Sandals", price: 3200, originalPrice: 3800, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Strappy", size: ["36", "37", "38", "39", "40"] },
    { id: 333, name: "Flip Flops", price: 1500, originalPrice: null, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Beach", size: ["37", "38", "39", "40", "41", "42"] },
    { id: 334, name: "Slide Sandals", price: 2200, originalPrice: 2600, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Easy", size: ["36", "37", "38", "39", "40", "41"] },
    { id: 335, name: "Wedge Sandals", price: 3500, originalPrice: null, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Height", size: ["36", "37", "38", "39", "40"] },
    { id: 336, name: "Sport Sandals", price: 2600, originalPrice: 3000, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Active", size: ["37", "38", "39", "40", "41", "42"] },
    { id: 337, name: "Platform Sandals", price: 3800, originalPrice: null, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Trendy", size: ["36", "37", "38", "39", "40"] },
    { id: 338, name: "Ankle Strap Sandals", price: 3000, originalPrice: 3500, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Secure", size: ["36", "37", "38", "39", "40"] },
    { id: 339, name: "T-Strap Sandals", price: 2900, originalPrice: null, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["36", "37", "38", "39", "40", "41"] },
    { id: 340, name: "Espadrille Sandals", price: 3300, originalPrice: 3900, category: "Sandals", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Resort", size: ["36", "37", "38", "39", "40"] },

    // Heels
    { id: 341, name: "Stiletto Heels", price: 4200, originalPrice: null, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Glamour", size: ["36", "37", "38", "39", "40"] },
    { id: 342, name: "Block Heels", price: 3800, originalPrice: 4400, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Comfort", size: ["36", "37", "38", "39", "40", "41"] },
    { id: 343, name: "Kitten Heels", price: 3200, originalPrice: null, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Subtle", size: ["36", "37", "38", "39", "40"] },
    { id: 344, name: "Platform Heels", price: 4500, originalPrice: 5200, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Height", size: ["36", "37", "38", "39", "40"] },
    { id: 345, name: "Wedge Heels", price: 3600, originalPrice: null, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Stable", size: ["36", "37", "38", "39", "40", "41"] },
    { id: 346, name: "Ankle Strap Heels", price: 4000, originalPrice: 4600, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Secure", size: ["36", "37", "38", "39", "40"] },
    { id: 347, name: "Peep Toe Heels", price: 3900, originalPrice: null, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Open", size: ["36", "37", "38", "39", "40"] },
    { id: 348, name: "Mary Jane Heels", price: 3700, originalPrice: 4200, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Vintage", size: ["36", "37", "38", "39", "40"] },
    { id: 349, name: "Slingback Heels", price: 4100, originalPrice: null, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Chic", size: ["36", "37", "38", "39", "40"] },
    { id: 350, name: "T-Bar Heels", price: 3800, originalPrice: 4300, category: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["36", "37", "38", "39", "40"] },

    // Casual
    { id: 351, name: "Canvas Shoes", price: 2200, originalPrice: null, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Everyday", size: ["37", "38", "39", "40", "41", "42"] },
    { id: 352, name: "Slip-On Shoes", price: 2800, originalPrice: 3200, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Easy", size: ["38", "39", "40", "41", "42"] },
    { id: 353, name: "Boat Shoes", price: 3500, originalPrice: null, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Nautical", size: ["39", "40", "41", "42", "43"] },
    { id: 354, name: "Espadrilles", price: 2600, originalPrice: 3000, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Summer", size: ["36", "37", "38", "39", "40"] },
    { id: 355, name: "Moccasins", price: 3200, originalPrice: null, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Comfort", size: ["38", "39", "40", "41", "42", "43"] },
    { id: 356, name: "Ballet Flats", price: 2400, originalPrice: 2800, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Feminine", size: ["36", "37", "38", "39", "40", "41"] },
    { id: 357, name: "Walking Shoes", price: 3800, originalPrice: null, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Support", size: ["37", "38", "39", "40", "41", "42"] },
    { id: 358, name: "Deck Shoes", price: 3300, originalPrice: 3800, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Marine", size: ["39", "40", "41", "42", "43"] },
    { id: 359, name: "Driving Shoes", price: 4200, originalPrice: null, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Luxury", size: ["39", "40", "41", "42", "43"] },
    { id: 360, name: "Tennis Shoes", price: 3600, originalPrice: 4100, category: "Casual", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sport", size: ["38", "39", "40", "41", "42", "43"] },

    // Loafers
    { id: 361, name: "Penny Loafers", price: 4500, originalPrice: null, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["39", "40", "41", "42", "43", "44"] },
    { id: 362, name: "Tassel Loafers", price: 4800, originalPrice: 5500, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Elegant", size: ["39", "40", "41", "42", "43"] },
    { id: 363, name: "Horse Bit Loafers", price: 5200, originalPrice: null, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Luxury", size: ["40", "41", "42", "43", "44"] },
    { id: 364, name: "Driving Loafers", price: 4200, originalPrice: 4800, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Comfort", size: ["39", "40", "41", "42", "43"] },
    { id: 365, name: "Venetian Loafers", price: 4600, originalPrice: null, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sleek", size: ["39", "40", "41", "42", "43", "44"] },
    { id: 366, name: "Suede Loafers", price: 4400, originalPrice: 5000, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Soft", size: ["39", "40", "41", "42", "43"] },
    { id: 367, name: "Chain Loafers", price: 4900, originalPrice: null, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Detail", size: ["39", "40", "41", "42", "43"] },
    { id: 368, name: "Buckle Loafers", price: 4700, originalPrice: 5300, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Hardware", size: ["40", "41", "42", "43", "44"] },
    { id: 369, name: "Kilted Loafers", price: 5000, originalPrice: null, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Traditional", size: ["39", "40", "41", "42", "43"] },
    { id: 370, name: "Platform Loafers", price: 4300, originalPrice: 4900, category: "Loafers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Height", size: ["37", "38", "39", "40", "41"] },

    // Sports
    { id: 371, name: "Football Boots", price: 5500, originalPrice: null, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Performance", size: ["40", "41", "42", "43", "44"] },
    { id: 372, name: "Cross Training Shoes", price: 4200, originalPrice: 4800, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Versatile", size: ["39", "40", "41", "42", "43"] },
    { id: 373, name: "Tennis Shoes", price: 4800, originalPrice: null, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Court", size: ["38", "39", "40", "41", "42", "43"] },
    { id: 374, name: "Basketball Shoes", price: 6200, originalPrice: 7000, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "High Top", size: ["40", "41", "42", "43", "44", "45"] },
    { id: 375, name: "Track Spikes", price: 3800, originalPrice: null, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Speed", size: ["39", "40", "41", "42", "43"] },
    { id: 376, name: "Volleyball Shoes", price: 4500, originalPrice: 5200, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Jump", size: ["38", "39", "40", "41", "42"] },
    { id: 377, name: "Badminton Shoes", price: 3600, originalPrice: null, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Agility", size: ["38", "39", "40", "41", "42", "43"] },
    { id: 378, name: "Wrestling Shoes", price: 4000, originalPrice: 4600, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Grip", size: ["39", "40", "41", "42", "43"] },
    { id: 379, name: "Golf Shoes", price: 5800, originalPrice: null, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Precision", size: ["40", "41", "42", "43", "44"] },
    { id: 380, name: "Cycling Shoes", price: 4400, originalPrice: 5000, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Clip", size: ["39", "40", "41", "42", "43", "44"] },

    // Baby Shoes
    { id: 381, name: "First Walker Shoes", price: 1200, originalPrice: null, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Soft", size: ["16", "17", "18", "19", "20"] },
    { id: 382, name: "Baby Sneakers", price: 800, originalPrice: 1000, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Cute", size: ["15", "16", "17", "18", "19"] },
    { id: 383, name: "Baby Boots", price: 1000, originalPrice: null, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Warm", size: ["16", "17", "18", "19", "20"] },
    { id: 384, name: "Soft Sole Shoes", price: 600, originalPrice: 800, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Flexible", size: ["14", "15", "16", "17", "18"] },
    { id: 385, name: "Baby Sandals", price: 700, originalPrice: null, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Summer", size: ["15", "16", "17", "18", "19"] },
    { id: 386, name: "Crib Shoes", price: 500, originalPrice: 700, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Newborn", size: ["13", "14", "15", "16"] },
    { id: 387, name: "Pre-Walker Shoes", price: 900, originalPrice: null, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Support", size: ["15", "16", "17", "18", "19"] },
    { id: 388, name: "Baby Dress Shoes", price: 1100, originalPrice: 1400, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Formal", size: ["16", "17", "18", "19", "20"] },
    { id: 389, name: "Toddler Sneakers", price: 1300, originalPrice: null, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Active", size: ["18", "19", "20", "21", "22"] },
    { id: 390, name: "Baby Booties", price: 400, originalPrice: 600, category: "Baby", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Cozy", size: ["13", "14", "15", "16", "17"] }
  ];

  const categories = ["Sneakers", "Boots", "Formal", "Sandals", "Heels", "Casual", "Loafers", "Sports", "Baby"];

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = priceRange === "all" || 
      (priceRange === "under-3000" && product.price < 3000) ||
      (priceRange === "3000-5000" && product.price >= 3000 && product.price <= 5000) ||
      (priceRange === "over-5000" && product.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navbar cartItems={cartItems} onCartOpen={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Shoes Collection</h1>
          <p className="text-xl opacity-90 mb-8">Step up your style with our diverse shoe collection</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-all text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Button */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
          >
            <Filter size={20} />
            <span>Filters</span>
          </button>
          
          <div className="text-gray-600">
            {filteredProducts.length} products found
          </div>
        </div>

        {/* Filter Modal */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search shoes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-3000">Under KSh 3,000</option>
                    <option value="3000-5000">KSh 3,000 - 5,000</option>
                    <option value="over-5000">Over KSh 5,000</option>
                  </select>
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-orange-600 font-medium mb-3">
                  {product.category}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      KSh {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        KSh {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Available Sizes:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.size.map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
      
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Shoes;
