
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const ShippingInfo = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Information</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Truck className="text-orange-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Delivery Options</h3>
              </div>
              <ul className="space-y-2">
                <li>• Same-day delivery in Nairobi</li>
                <li>• 2-3 days countrywide delivery</li>
                <li>• Express delivery available</li>
                <li>• Cash on delivery option</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Clock className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Processing Time</h3>
              </div>
              <ul className="space-y-2">
                <li>• Orders processed within 24 hours</li>
                <li>• Same-day processing for early orders</li>
                <li>• Weekend orders processed Monday</li>
                <li>• Holiday delays may apply</li>
              </ul>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Shipping Rates</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Location</th>
                    <th className="text-left py-2">Standard Delivery</th>
                    <th className="text-left py-2">Express Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Nairobi CBD</td>
                    <td className="py-2">KSh 200 (Same day)</td>
                    <td className="py-2">KSh 400 (2-4 hours)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Nairobi Suburbs</td>
                    <td className="py-2">KSh 300 (Same day)</td>
                    <td className="py-2">KSh 500 (4-6 hours)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Kiambu, Machakos, Kajiado</td>
                    <td className="py-2">KSh 400 (1-2 days)</td>
                    <td className="py-2">KSh 600 (Same day)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Major Towns (Mombasa, Kisumu, Nakuru)</td>
                    <td className="py-2">KSh 500 (2-3 days)</td>
                    <td className="py-2">KSh 800 (1-2 days)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Other Locations</td>
                    <td className="py-2">KSh 600 (3-5 days)</td>
                    <td className="py-2">KSh 1000 (2-3 days)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Free Shipping</h3>
              <p className="text-green-700">
                Enjoy FREE standard delivery on orders above KSh 3,000 within Nairobi!
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Packaging</h2>
            <div className="flex items-start mb-4">
              <Package className="text-purple-500 mr-3 mt-1" size={20} />
              <div>
                <p className="mb-4">All items are carefully packaged to ensure they arrive in perfect condition:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Clothing items are folded and wrapped in protective plastic</li>
                  <li>Shoes are wrapped individually with protective padding</li>
                  <li>Fragile accessories are bubble-wrapped</li>
                  <li>Eco-friendly packaging materials used where possible</li>
                  <li>Discreet packaging for privacy</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Delivery Areas</h2>
            <div className="flex items-start mb-4">
              <MapPin className="text-red-500 mr-3 mt-1" size={20} />
              <div>
                <p className="mb-4">We deliver to all 47 counties in Kenya including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold">Nairobi Region</h4>
                    <ul className="text-sm space-y-1">
                      <li>Nairobi CBD</li>
                      <li>Westlands</li>
                      <li>Karen</li>
                      <li>Kileleshwa</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Coast Region</h4>
                    <ul className="text-sm space-y-1">
                      <li>Mombasa</li>
                      <li>Malindi</li>
                      <li>Watamu</li>
                      <li>Diani</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Central Kenya</h4>
                    <ul className="text-sm space-y-1">
                      <li>Nakuru</li>
                      <li>Nyeri</li>
                      <li>Thika</li>
                      <li>Murang'a</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Delivery times are estimates and may vary due to weather, traffic, or other factors</li>
              <li>Someone must be available to receive the package at the delivery address</li>
              <li>We'll contact you via phone/WhatsApp before delivery</li>
              <li>Additional charges may apply for deliveries to remote areas</li>
              <li>For security reasons, we may require ID verification upon delivery</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">For shipping inquiries:</p>
            <ul className="list-disc pl-6">
              <li>WhatsApp: +254 712 345 678</li>
              <li>Email: shipping@styleguru.co.ke</li>
              <li>Customer Service: Available 8AM-8PM daily</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShippingInfo;
