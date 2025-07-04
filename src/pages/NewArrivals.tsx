
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Clock, Sparkles } from "lucide-react";

const NewArrivals = () => {
  const [cartItems, setCartItems] = useState([]);

  const newProducts = [
    {
      id: 1,
      name: "Premium Cotton Polo Shirt",
      price: 2200,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Men's Casual",
      isNew: true,
      arrivalDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Elegant Wrap Dress",
      price: 3500,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Women's Formal",
      isNew: true,
      arrivalDate: "2024-01-14"
    },
    {
      id: 3,
      name: "Designer Sneakers",
      price: 4500,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Shoes",
      isNew: true,
      arrivalDate: "2024-01-13"
    },
    {
      id: 4,
      name: "Kids Summer Outfit Set",
      price: 2800,
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a9c2f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Children's Wear",
      isNew: true,
      arrivalDate: "2024-01-12"
    },
    {
      id: 5,
      name: "Leather Crossbody Bag",
      price: 3200,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Accessories",
      isNew: true,
      arrivalDate: "2024-01-11"
    },
    {
      id: 6,
      name: "Casual Denim Jacket",
      price: 2900,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Outerwear",
      isNew: true,
      arrivalDate: "2024-01-10"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-orange-500 mr-3" size={32} />
            <h1 className="text-4xl font-bold text-gray-900">New Arrivals</h1>
            <Sparkles className="text-pink-500 ml-3" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fresh styles just landed! Be the first to explore our latest collection of trendy fashion pieces 
            carefully selected for the modern Kenyan wardrobe.
          </p>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white p-8 rounded-2xl mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">This Week's Highlights</h2>
            <p className="text-lg mb-6">New items added daily! Check back often to discover the latest trends.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 px-6 py-3 rounded-full">
                <Clock className="inline mr-2" size={20} />
                Updated Daily
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                Free Shipping on Orders 3,000+
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-full">
                Authentic Brands Only
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    NEW
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.category}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-600">KSh {product.price}</span>
                  <span className="text-sm text-gray-500">
                    Added {new Date(product.arrivalDate).toLocaleDateString()}
                  </span>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Spring Collection</h3>
              <p className="text-gray-600">Fresh spring styles arriving next week. Vibrant colors and light fabrics perfect for the season.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👟</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Athletic Wear</h3>
              <p className="text-gray-600">Premium sportswear and athletic shoes from top international brands.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👶</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Baby Collection</h3>
              <p className="text-gray-600">Adorable and comfortable clothing for babies and toddlers, made with care.</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Be the first to know about new arrivals, special discounts, and exclusive offers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewArrivals;
