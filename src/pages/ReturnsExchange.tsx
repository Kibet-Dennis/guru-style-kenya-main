
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { RefreshCw, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const ReturnsExchange = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Returns & Exchange Policy</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <CheckCircle className="text-green-500 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-green-800">7-Day Return</h3>
              <p className="text-green-700 text-sm">Easy returns within 7 days</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <RefreshCw className="text-blue-500 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-blue-800">Free Exchange</h3>
              <p className="text-blue-700 text-sm">Size/color exchange available</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <AlertCircle className="text-purple-500 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-purple-800">Quality Guarantee</h3>
              <p className="text-purple-700 text-sm">100% satisfaction guaranteed</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">What Can Be Returned?</h3>
              <ul className="list-disc pl-6 text-green-700">
                <li>Unworn clothing items with original tags</li>
                <li>Shoes in original condition and packaging</li>
                <li>Accessories in original condition</li>
                <li>Items that don't match the description</li>
                <li>Defective or damaged items</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">What Cannot Be Returned?</h3>
              <ul className="list-disc pl-6 text-red-700">
                <li>Items worn or washed</li>
                <li>Items without original tags</li>
                <li>Underwear and swimwear (hygiene reasons)</li>
                <li>Custom or personalized items</li>
                <li>Items returned after 7 days</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold">Contact Us</h4>
                  <p className="text-gray-600">WhatsApp us at +254 712 345 678 or email returns@styleguru.co.ke</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold">Get Return Authorization</h4>
                  <p className="text-gray-600">We'll provide you with a return authorization number and instructions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold">Package & Ship</h4>
                  <p className="text-gray-600">Pack items securely and ship to our return address</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold">Refund Processing</h4>
                  <p className="text-gray-600">Refund processed within 5-7 business days after we receive the item</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Exchange Policy</h2>
            <p className="mb-4">We offer free exchanges for:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Size Issues:</strong> If the item doesn't fit properly</li>
              <li><strong>Color Preference:</strong> If you want a different color (subject to availability)</li>
              <li><strong>Style Change:</strong> Exchange for a similar item of equal or lesser value</li>
              <li><strong>Defective Items:</strong> Immediate exchange for the same item</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Mitumba Returns</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Special Considerations</h3>
              <p className="text-yellow-700 mb-3">
                Our mitumba items are carefully curated and inspected, but due to their unique nature:
              </p>
              <ul className="list-disc pl-6 text-yellow-700">
                <li>Returns accepted only if item condition was misrepresented</li>
                <li>Minor vintage wear is expected and disclosed in descriptions</li>
                <li>All mitumba items are sold as-is with detailed condition notes</li>
                <li>Exchanges available for size issues within 3 days</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Refund Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold mb-2">M-Pesa Refunds</h4>
                <p className="text-sm text-gray-600">
                  Fastest option - refunds processed within 24-48 hours to your M-Pesa account
                </p>
              </div>
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Bank Transfer</h4>
                <p className="text-sm text-gray-600">
                  Bank refunds take 3-5 business days to reflect in your account
                </p>
              </div>
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Store Credit</h4>
                <p className="text-sm text-gray-600">
                  Instant store credit with 5% bonus value for future purchases
                </p>
              </div>
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Cash Refunds</h4>
                <p className="text-sm text-gray-600">
                  Available for cash on delivery orders - collected during return pickup
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Return Shipping</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Customer pays return shipping costs unless item is defective</li>
              <li>We provide discounted return shipping labels</li>
              <li>Free return shipping for orders above KSh 5,000</li>
              <li>Return pickup available in Nairobi for KSh 300</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4"><strong>Returns Department:</strong></p>
              <ul className="space-y-2">
                <li>📱 WhatsApp: +254 712 345 678</li>
                <li>📧 Email: returns@styleguru.co.ke</li>
                <li>🕒 Hours: Monday-Saturday, 8AM-6PM</li>
                <li>📍 Return Address: Style Guru Returns, P.O. Box 12345, Nairobi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReturnsExchange;
