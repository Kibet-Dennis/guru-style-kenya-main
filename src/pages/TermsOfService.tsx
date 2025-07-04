
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const TermsOfService = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: January 2024</p>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using Style Guru's services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            
            <h2 className="text-2xl font-semibold mb-4">Products and Services</h2>
            <p className="mb-4">Style Guru offers premium fashion items including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Authentic mitumba (second-hand) clothing carefully curated for quality</li>
              <li>Brand new clothing, shoes, and accessories</li>
              <li>Men's, women's, and children's fashion items</li>
              <li>Shoes collection including formal, casual, sports, and boots</li>
              <li>Fashion accessories and jewelry</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Orders and Payment</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>All orders are subject to acceptance and product availability</li>
              <li>Payment must be completed before order processing begins</li>
              <li>We accept M-Pesa, PayPal, Bank Transfer, and Cash on Delivery</li>
              <li>Prices are subject to change without notice</li>
              <li>Additional delivery charges may apply based on location</li>
              <li>All payments are processed securely through trusted payment partners</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Delivery and Shipping</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Same-day delivery available in Nairobi (additional charges apply)</li>
              <li>2-3 days delivery for other locations within Kenya</li>
              <li>Free delivery for orders above KSh 3,000 within Nairobi</li>
              <li>Delivery charges range from KSh 200-500 depending on location</li>
              <li>We are not responsible for delays due to weather or other circumstances beyond our control</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Returns and Exchanges</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Returns accepted within 7 days of delivery for unworn items</li>
              <li>Items must have original tags and be in original condition</li>
              <li>Mitumba items are carefully inspected but returns are limited due to their unique nature</li>
              <li>Return shipping costs are borne by the customer unless item is defective</li>
              <li>Refunds processed within 5-7 business days after return approval</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Product Descriptions</h2>
            <p className="mb-4">We strive to provide accurate product descriptions and images. However:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Colors may vary slightly due to monitor settings</li>
              <li>Mitumba items may show minor signs of previous wear as disclosed</li>
              <li>Sizes may vary between brands and should be checked against our size guide</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">Style Guru's liability is limited to the purchase price of the products. We are not liable for indirect or consequential damages.</p>

            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-4">All content on our website, including images, text, and designs, is protected by copyright and trademark laws.</p>

            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">For questions about these Terms:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Email: legal@styleguru.co.ke</li>
              <li>WhatsApp: +254 712 345 678</li>
              <li>Address: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
