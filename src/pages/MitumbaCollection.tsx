
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Star, Filter, Grid, List } from "lucide-react";

const MitumbaCollection = () => {
  const [cartItems, setCartItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const mitumbaProducts = [
    {
      id: 1,
      name: "Vintage Levi's Denim Jacket",
      price: 2500,
      originalPrice: 8000,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Excellent",
      size: "M",
      brand: "Levi's",
      category: "jackets",
      description: "Classic vintage Levi's denim jacket in excellent condition. Minor fading adds character.",
      rating: 4.8
    },
    {
      id: 2,
      name: "Designer Silk Blouse",
      price: 1800,
      originalPrice: 5500,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Very Good",
      size: "S",
      brand: "Zara",
      category: "tops",
      description: "Elegant silk blouse perfect for office or evening wear. Luxurious feel and perfect fit.",
      rating: 4.9
    },
    {
      id: 3,
      name: "Vintage Band T-Shirt",
      price: 1200,
      originalPrice: 3000,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Good",
      size: "L",
      brand: "Vintage",
      category: "tshirts",
      description: "Authentic vintage band t-shirt with original print. Soft cotton with vintage wash.",
      rating: 4.6
    },
    {
      id: 4,
      name: "Wool Blazer",
      price: 3200,
      originalPrice: 12000,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Excellent",
      size: "M",
      brand: "Hugo Boss",
      category: "formal",
      description: "Premium wool blazer from Hugo Boss. Perfect for business meetings and formal events.",
      rating: 4.7
    },
    {
      id: 5,
      name: "Vintage Leather Boots",
      price: 2800,
      originalPrice: 9500,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Very Good",
      size: "42",
      brand: "Timberland",
      category: "shoes",
      description: "Genuine leather boots with excellent craftsmanship. Minimal signs of wear.",
      rating: 4.8
    },
    {
      id: 6,
      name: "Summer Maxi Dress",
      price: 2200,
      originalPrice: 6500,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Excellent",
      size: "M",
      brand: "H&M",
      category: "dresses",
      description: "Flowing maxi dress perfect for summer occasions. Vibrant colors and comfortable fit.",
      rating: 4.5
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'jackets', name: 'Jackets' },
    { id: 'tops', name: 'Tops & Blouses' },
    { id: 'tshirts', name: 'T-Shirts' },
    { id: 'formal', name: 'Formal Wear' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'shoes', name: 'Shoes' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? mitumbaProducts 
    : mitumbaProducts.filter(product => product.category === selectedCategory);

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mitumba Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover unique, high-quality second-hand fashion pieces. Each item is carefully selected, 
            authenticated, and thoroughly inspected to ensure you get the best value for authentic style.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">{filteredProducts.length} items</span>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.condition}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    Size {product.size}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-600">KSh {product.price}</span>
                    <span className="text-sm text-gray-500 line-through">KSh {product.originalPrice}</span>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
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

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Mitumba?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Every item is carefully inspected and graded for condition before listing.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">★</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Authentic Brands</h3>
              <p className="text-gray-600">Genuine designer and branded items at a fraction of the original price.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">♻</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sustainable Fashion</h3>
              <p className="text-gray-600">Eco-friendly choice that gives quality clothing a second life.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MitumbaCollection;
