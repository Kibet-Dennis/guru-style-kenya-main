import { useState } from "react";
import { ShoppingCart, Filter, Search, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Children = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    // Casual Wear - T-Shirts
    { id: 201, name: "Cartoon T-Shirt", price: 600, originalPrice: 800, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Fun", size: ["2Y", "3Y", "4Y", "5Y"] },
    { id: 202, name: "Superhero Tee", price: 700, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Hero", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 203, name: "Rainbow Tee", price: 550, originalPrice: 750, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Colorful", size: ["2Y", "3Y", "4Y"] },
    { id: 204, name: "Animal Print Tee", price: 650, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Wild", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 205, name: "Sports Team Tee", price: 800, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sports", size: ["4Y", "5Y", "6Y", "7Y"] },
    { id: 206, name: "Unicorn Tee", price: 680, originalPrice: 850, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Magical", size: ["2Y", "3Y", "4Y", "5Y"] },
    { id: 207, name: "Dinosaur Tee", price: 620, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Dino", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 208, name: "Space Theme Tee", price: 720, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Galaxy", size: ["4Y", "5Y", "6Y"] },
    { id: 209, name: "Princess Tee", price: 750, originalPrice: 900, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Royal", size: ["2Y", "3Y", "4Y", "5Y"] },
    { id: 210, name: "Basic Cotton Tee", price: 500, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Basic", size: ["2Y", "3Y", "4Y", "5Y", "6Y"] },

    // Casual Wear - Jeans
    { id: 211, name: "Kids Skinny Jeans", price: 1200, originalPrice: 1500, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Trendy", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 212, name: "Relaxed Fit Jeans", price: 1100, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Comfort", size: ["2Y", "3Y", "4Y", "5Y"] },
    { id: 213, name: "Distressed Jeans", price: 1300, originalPrice: 1600, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Cool", size: ["4Y", "5Y", "6Y", "7Y"] },
    { id: 214, name: "Straight Leg Jeans", price: 1000, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 215, name: "Embroidered Jeans", price: 1400, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Fancy", size: ["3Y", "4Y", "5Y"] },
    { id: 216, name: "Dark Wash Jeans", price: 1150, originalPrice: 1400, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Smart", size: ["4Y", "5Y", "6Y", "7Y"] },
    { id: 217, name: "Fleece Lined Jeans", price: 1350, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Warm", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 218, name: "Bootcut Jeans", price: 1250, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Style", size: ["4Y", "5Y", "6Y"] },
    { id: 219, name: "Elastic Waist Jeans", price: 950, originalPrice: 1200, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Easy", size: ["2Y", "3Y", "4Y", "5Y"] },
    { id: 220, name: "Patched Jeans", price: 1180, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Fun", size: ["3Y", "4Y", "5Y", "6Y"] },

    // Formal Wear - Dresses
    { id: 221, name: "Party Dress", price: 1800, originalPrice: 2200, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Party", size: ["2Y", "3Y", "4Y", "5Y"] },
    { id: 222, name: "Flower Girl Dress", price: 2500, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Wedding", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 223, name: "School Event Dress", price: 1500, originalPrice: 1800, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "School", size: ["4Y", "5Y", "6Y", "7Y"] },
    { id: 224, name: "Birthday Dress", price: 1600, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Special", size: ["2Y", "3Y", "4Y", "5Y"] },
    { id: 225, name: "Holiday Dress", price: 2000, originalPrice: 2400, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Holiday", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 226, name: "Tutu Dress", price: 1400, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Dance", size: ["2Y", "3Y", "4Y"] },
    { id: 227, name: "Velvet Dress", price: 2200, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Luxe", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 228, name: "Sequin Dress", price: 1900, originalPrice: 2300, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sparkle", size: ["4Y", "5Y", "6Y"] },
    { id: 229, name: "Lace Dress", price: 1700, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Elegant", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 230, name: "Princess Dress", price: 2100, originalPrice: 2600, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Royal", size: ["2Y", "3Y", "4Y", "5Y"] },

    // Formal Wear - Shirts
    { id: 231, name: "School Uniform Shirt", price: 800, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "School", size: ["4Y", "5Y", "6Y", "7Y", "8Y"] },
    { id: 232, name: "Button-Up Shirt", price: 900, originalPrice: 1100, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Smart", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 233, name: "Polo Shirt", price: 750, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["3Y", "4Y", "5Y", "6Y", "7Y"] },
    { id: 234, name: "Checkered Shirt", price: 850, originalPrice: 1000, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Pattern", size: ["4Y", "5Y", "6Y", "7Y"] },
    { id: 235, name: "Bow Tie Shirt", price: 1100, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Fancy", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 236, name: "Oxford Shirt", price: 950, originalPrice: 1200, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Quality", size: ["4Y", "5Y", "6Y", "7Y"] },
    { id: 237, name: "Formal Blouse", price: 800, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Girls", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 238, name: "Striped Formal Shirt", price: 870, originalPrice: 1050, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Style", size: ["4Y", "5Y", "6Y", "7Y"] },
    { id: 239, name: "Long Sleeve Shirt", price: 920, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Warm", size: ["3Y", "4Y", "5Y", "6Y"] },
    { id: 240, name: "Vest Shirt Combo", price: 1300, originalPrice: 1600, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Set", size: ["4Y", "5Y", "6Y", "7Y"] }
  ];

  const categories = ["Casual", "Formal"];
  const subcategories = {
    "Casual": ["T-Shirt", "Jeans"],
    "Formal": ["Dress", "Shirt"]
  };

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
    const matchesSubcategory = selectedSubcategory === "all" || product.subcategory === selectedSubcategory;
    const matchesPrice = priceRange === "all" || 
      (priceRange === "under-1000" && product.price < 1000) ||
      (priceRange === "1000-3000" && product.price >= 1000 && product.price <= 3000) ||
      (priceRange === "over-3000" && product.price > 3000);
    
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar cartItems={cartItems} onCartOpen={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Children's Collection</h1>
          <p className="text-xl opacity-90 mb-8">Comfortable and stylish clothing for your little ones</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setSelectedCategory("Casual")}
              className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              Casual Wear
            </button>
            <button 
              onClick={() => setSelectedCategory("Formal")}
              className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              Formal Wear
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Button */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
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
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {selectedCategory !== "all" && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Subcategory</label>
                    <select
                      value={selectedSubcategory}
                      onChange={(e) => setSelectedSubcategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Subcategories</option>
                      {subcategories[selectedCategory]?.map(subcat => (
                        <option key={subcat} value={subcat}>{subcat}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-1000">Under KSh 1,000</option>
                    <option value="1000-3000">KSh 1,000 - 3,000</option>
                    <option value="over-3000">Over KSh 3,000</option>
                  </select>
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-semibold"
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
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {product.subcategory}
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
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
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

export default Children;
