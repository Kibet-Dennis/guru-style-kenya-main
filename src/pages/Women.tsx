import { useState } from "react";
import { ShoppingCart, Filter, Search, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Women = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    // Casual Wear - T-Shirts
    { id: 101, name: "Basic Cotton Tee", price: 800, originalPrice: 1200, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Popular", size: ["XS", "S", "M", "L", "XL"] },
    { id: 102, name: "Graphic Print Tee", price: 900, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "New", size: ["S", "M", "L", "XL"] },
    { id: 103, name: "Vintage Band Tee", price: 1200, originalPrice: 1800, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sale", size: ["S", "M", "L"] },
    { id: 104, name: "Crop Top Tee", price: 700, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Trendy", size: ["XS", "S", "M", "L"] },
    { id: 105, name: "Oversized Tee", price: 1000, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Comfort", size: ["S", "M", "L", "XL"] },
    { id: 106, name: "Striped Tee", price: 850, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["XS", "S", "M", "L"] },
    { id: 107, name: "V-Neck Tee", price: 750, originalPrice: 1000, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sale", size: ["S", "M", "L", "XL"] },
    { id: 108, name: "Long Sleeve Tee", price: 1100, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "New", size: ["S", "M", "L"] },
    { id: 109, name: "Tie-Dye Tee", price: 950, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Trendy", size: ["XS", "S", "M", "L"] },
    { id: 110, name: "Plain White Tee", price: 600, originalPrice: null, category: "Casual", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Essential", size: ["XS", "S", "M", "L", "XL"] },

    // Casual Wear - Jeans
    { id: 111, name: "Skinny Jeans", price: 1800, originalPrice: 2500, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Popular", size: ["26", "28", "30", "32"] },
    { id: 112, name: "High Waist Jeans", price: 2200, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Trendy", size: ["26", "28", "30", "32"] },
    { id: 113, name: "Bootcut Jeans", price: 1900, originalPrice: 2300, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sale", size: ["28", "30", "32", "34"] },
    { id: 114, name: "Straight Leg Jeans", price: 1700, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["26", "28", "30", "32"] },
    { id: 115, name: "Mom Jeans", price: 2000, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Vintage", size: ["28", "30", "32"] },
    { id: 116, name: "Ripped Jeans", price: 2100, originalPrice: 2600, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Edgy", size: ["26", "28", "30", "32"] },
    { id: 117, name: "Flare Jeans", price: 2300, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Retro", size: ["28", "30", "32"] },
    { id: 118, name: "Dark Wash Jeans", price: 1850, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Essential", size: ["26", "28", "30", "32"] },
    { id: 119, name: "Cropped Jeans", price: 1600, originalPrice: 2000, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sale", size: ["26", "28", "30"] },
    { id: 120, name: "Boyfriend Jeans", price: 1950, originalPrice: null, category: "Casual", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Relaxed", size: ["28", "30", "32"] },

    // Formal Wear - Dresses
    { id: 121, name: "Business Dress", price: 3200, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Professional", size: ["XS", "S", "M", "L"] },
    { id: 122, name: "A-Line Dress", price: 2800, originalPrice: 3500, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Elegant", size: ["S", "M", "L", "XL"] },
    { id: 123, name: "Midi Dress", price: 2500, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Versatile", size: ["XS", "S", "M", "L"] },
    { id: 124, name: "Wrap Dress", price: 2900, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Flattering", size: ["S", "M", "L", "XL"] },
    { id: 125, name: "Sheath Dress", price: 3100, originalPrice: 3800, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sale", size: ["XS", "S", "M", "L"] },
    { id: 126, name: "Shift Dress", price: 2600, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["S", "M", "L"] },
    { id: 127, name: "Cocktail Dress", price: 3500, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Evening", size: ["XS", "S", "M", "L"] },
    { id: 128, name: "Blazer Dress", price: 3300, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Power", size: ["S", "M", "L", "XL"] },
    { id: 129, name: "Maxi Dress", price: 2700, originalPrice: 3200, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Graceful", size: ["S", "M", "L", "XL"] },
    { id: 130, name: "Pencil Dress", price: 2400, originalPrice: null, category: "Formal", subcategory: "Dress", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sleek", size: ["XS", "S", "M", "L"] },

    // Formal Wear - Shirts
    { id: 131, name: "White Button Shirt", price: 1500, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Essential", size: ["XS", "S", "M", "L", "XL"] },
    { id: 132, name: "Silk Blouse", price: 2800, originalPrice: 3500, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Luxury", size: ["S", "M", "L", "XL"] },
    { id: 133, name: "Striped Shirt", price: 1700, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Classic", size: ["XS", "S", "M", "L"] },
    { id: 134, name: "Bow Tie Blouse", price: 2200, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Feminine", size: ["S", "M", "L", "XL"] },
    { id: 135, name: "Pussy Bow Blouse", price: 2000, originalPrice: 2400, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Elegant", size: ["XS", "S", "M", "L"] },
    { id: 136, name: "Chiffon Blouse", price: 2300, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Flowing", size: ["S", "M", "L", "XL"] },
    { id: 137, name: "Peter Pan Collar", price: 1800, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sweet", size: ["XS", "S", "M", "L"] },
    { id: 138, name: "Peplum Blouse", price: 2100, originalPrice: 2600, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Flattering", size: ["S", "M", "L", "XL"] },
    { id: 139, name: "Satin Shirt", price: 2500, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Luxe", size: ["XS", "S", "M", "L"] },
    { id: 140, name: "Cotton Poplin Shirt", price: 1600, originalPrice: null, category: "Formal", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Crisp", size: ["S", "M", "L", "XL"] }
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navbar cartItems={cartItems} onCartOpen={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Women's Collection</h1>
          <p className="text-xl opacity-90 mb-8">Embrace your femininity with our curated selection</p>
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
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
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
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-1000">Under KSh 1,000</option>
                    <option value="1000-3000">KSh 1,000 - 3,000</option>
                    <option value="over-3000">Over KSh 3,000</option>
                  </select>
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold"
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
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                <p className="text-sm text-pink-600 font-medium mb-3">
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
                        className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
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

export default Women;
