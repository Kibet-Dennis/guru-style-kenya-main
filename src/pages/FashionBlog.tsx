
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Calendar, User, Eye, Heart, Share2 } from "lucide-react";

const FashionBlog = () => {
  const [cartItems, setCartItems] = useState([]);

  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Styling Mitumba in Kenya",
      excerpt: "Discover how to create stunning outfits with authentic second-hand fashion pieces that reflect your unique style.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Style Guru Team",
      date: "2024-01-15",
      category: "Styling Tips",
      readTime: "5 min read",
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: "Sustainable Fashion: Why Mitumba is the Future",
      excerpt: "Learn about the environmental impact of fast fashion and how choosing mitumba helps create a more sustainable wardrobe.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Eco Fashion Kenya",
      date: "2024-01-12",
      category: "Sustainability",
      readTime: "7 min read",
      views: 980,
      likes: 156
    },
    {
      id: 3,
      title: "Building a Capsule Wardrobe on a Budget",
      excerpt: "Create a versatile wardrobe with essential pieces that mix and match perfectly, without breaking the bank.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Fashion Budgeting Pro",
      date: "2024-01-10",
      category: "Budget Fashion",
      readTime: "6 min read",
      views: 2100,
      likes: 234
    },
    {
      id: 4,
      title: "Kenyan Fashion Trends 2024: What's Hot",
      excerpt: "Stay ahead of the curve with the latest fashion trends taking over Kenya's style scene this year.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Trend Spotter KE",
      date: "2024-01-08",
      category: "Trends",
      readTime: "4 min read",
      views: 1800,
      likes: 167
    },
    {
      id: 5,
      title: "How to Authenticate Designer Mitumba Items",
      excerpt: "Expert tips on spotting authentic designer pieces and avoiding counterfeits when shopping for luxury mitumba.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Authentication Expert",
      date: "2024-01-05",
      category: "Shopping Guide",
      readTime: "8 min read",
      views: 1560,
      likes: 203
    },
    {
      id: 6,
      title: "Office Wear Ideas for the Modern Kenyan Woman",
      excerpt: "Professional styling tips that blend comfort, elegance, and affordability for the working woman in Kenya.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Professional Style",
      date: "2024-01-03",
      category: "Professional",
      readTime: "5 min read",
      views: 1340,
      likes: 178
    }
  ];

  const categories = ["All", "Styling Tips", "Sustainability", "Budget Fashion", "Trends", "Shopping Guide", "Professional"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fashion Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your go-to source for fashion inspiration, styling tips, and the latest trends in Kenyan fashion. 
            Discover how to look amazing while staying budget-friendly and sustainable.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">Featured Post</span>
                <h2 className="text-3xl font-bold mt-4 mb-4">{blogPosts[0].title}</h2>
                <p className="text-lg mb-6 opacity-90">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span>By {blogPosts[0].author}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                  <span>•</span>
                  <span>{blogPosts[0].views} views</span>
                </div>
              </div>
              <div>
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye size={16} className="mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <Heart size={16} className="mr-1" />
                      {post.likes}
                    </div>
                    <button className="hover:text-orange-500 transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay in Style</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our fashion newsletter for weekly style tips, trend updates, and exclusive fashion content.
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

        {/* Social Media Follow */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us for Daily Style Inspiration</h3>
            <p className="text-gray-600 mb-6">
              Get daily fashion tips, outfit ideas, and behind-the-scenes content on our social media channels.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors">
                <span className="sr-only">Instagram</span>
                📸
              </a>
              <a href="#" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FashionBlog;
