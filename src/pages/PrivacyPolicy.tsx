
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const PrivacyPolicy = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: January 2024</p>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">At Style Guru, we collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address</li>
              <li><strong>Payment Information:</strong> M-Pesa details, bank account information (securely processed)</li>
              <li><strong>Order Information:</strong> Purchase history, product preferences, delivery details</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
              <li><strong>Communication Data:</strong> WhatsApp messages, customer service interactions</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Process and fulfill your orders efficiently</li>
              <li>Provide customer service and technical support</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Improve our products and services based on feedback</li>
              <li>Comply with legal obligations and tax requirements</li>
              <li>Prevent fraud and ensure platform security</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="mb-4">We respect your privacy and do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Service Providers:</strong> Delivery partners, payment processors, customer service tools</li>
              <li><strong>Legal Compliance:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>SSL encryption for all data transmission</li>
              <li>Secure payment processing through trusted providers</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information by authorized personnel only</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">Under Kenyan data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">For privacy-related questions or requests, contact us:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Email: privacy@styleguru.co.ke</li>
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

export default PrivacyPolicy;
