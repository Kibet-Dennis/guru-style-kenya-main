import { useState } from "react";
import { ShoppingCart, Filter, Search, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Men = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    // Casual Wear - T-Shirts
    { id: 1, name: "Cotton Basic Tee", price: 800, originalPrice: 1200, category: "Casual Wear", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Popular", size: ["S", "M", "L", "XL"] },
    { id: 2, name: "Graphic Print Tee", price: 900, originalPrice: null, category: "Casual Wear", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "New", size: ["S", "M", "L", "XL"] },
    { id: 3, name: "Vintage Band Tee", price: 1200, originalPrice: 1800, category: "Casual Wear", subcategory: "T-Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sale", size: ["M", "L", "XL"] },
    
    // Casual Wear - Jeans
    { id: 4, name: "Classic Denim Jeans", price: 1500, originalPrice: 2500, category: "Casual Wear", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Popular", size: ["30", "32", "34", "36"] },
    { id: 5, name: "Ripped Skinny Jeans", price: 1800, originalPrice: null, category: "Casual Wear", subcategory: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "New", size: ["30", "32", "34", "36"] },
    
    // Formal Wear - Shirts
    { id: 6, name: "White Dress Shirt", price: 1200, originalPrice: null, category: "Formal Wear", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Essential", size: ["S", "M", "L", "XL"] },
    { id: 7, name: "Blue Striped Shirt", price: 1400, originalPrice: 1800, category: "Formal Wear", subcategory: "Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sale", size: ["S", "M", "L", "XL"] },
    
    // Shoes - Office
    { id: 8, name: "Leather Oxford Shoes", price: 3500, originalPrice: null, category: "Shoes", subcategory: "Office Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Premium", size: ["40", "41", "42", "43", "44"] },
    { id: 9, name: "Black Formal Loafers", price: 2800, originalPrice: 3500, category: "Shoes", subcategory: "Office Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Sale", size: ["40", "41", "42", "43"] },
    
    // Shoes - Sports
    { id: 10, name: "Running Sneakers", price: 2200, originalPrice: 2800, category: "Shoes", subcategory: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Popular", size: ["40", "41", "42", "43", "44"] },
    { id: 11, name: "Basketball Shoes", price: 3200, originalPrice: null, category: "Shoes", subcategory: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "New", size: ["41", "42", "43", "44"] },
    
    // Shoes - Boots
    { id: 12, name: "Chelsea Boots", price: 4200, originalPrice: null, category: "Shoes", subcategory: "Boots", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Premium", size: ["41", "42", "43", "44"] },
    
    // Shoes - Weather
    { id: 13, name: "Waterproof Boots", price: 3800, originalPrice: 4500, category: "Shoes", subcategory: "Weather Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", badge: "Weather", size: ["41", "42", "43", "44"] }
  ];

  const categories = ["Casual Wear", "Formal Wear", "Shoes"];
  const subcategories = {
    "Casual Wear": ["T-Shirt", "Jeans"],
    "Formal Wear": ["Shirt"],
    "Shoes": ["Office Shoes", "Sports", "Boots", "Weather Shoes"]
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar cartItems={cartItems} onCartOpen={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Men's Collection</h1>
          <p className="text-xl opacity-90 mb-8">Discover stylish clothing for the modern Kenyan man</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setSelectedCategory("Casual Wear")}
              className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              Casual Wear
            </button>
            <button 
              onClick={() => setSelectedCategory("Formal Wear")}
              className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              Formal Wear
            </button>
            <button 
              onClick={() => setSelectedCategory("Shoes")}
              className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              Shoes
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Button */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
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
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-lg font-semibold"
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
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
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

export default Men;
