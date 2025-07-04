
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const CookiePolicy = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <div className="prose max-w-none">
            
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="mb-4">Cookies are small text files stored on your device when you visit our website. They help us provide you with a better shopping experience.</p>
            
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="mb-4">You can control and manage cookies through your browser settings. Please note that disabling cookies may affect website functionality.</p>

            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">We may use third-party services like Google Analytics that set their own cookies.</p>

            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="mb-4">We may update this Cookie Policy from time to time. Changes will be posted on this page.</p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>For questions about our Cookie Policy, contact us at cookies@gurufashion.co.ke</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
