
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock } from "lucide-react";

const TrackOrder = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrackOrder = () => {
    // Mock tracking data - in real app, this would be an API call
    if (orderNumber.trim()) {
      setTrackingResult({
        orderNumber: orderNumber,
        status: "In Transit",
        estimatedDelivery: "Tomorrow, 2:00 PM",
        items: [
          { name: "Men's Casual Shirt", size: "M", color: "Blue" },
          { name: "Women's Jeans", size: "32", color: "Dark Blue" }
        ],
        timeline: [
          { status: "Order Placed", date: "Jan 15, 2024 10:30 AM", completed: true },
          { status: "Payment Confirmed", date: "Jan 15, 2024 10:45 AM", completed: true },
          { status: "Order Processed", date: "Jan 15, 2024 2:00 PM", completed: true },
          { status: "Shipped", date: "Jan 16, 2024 9:00 AM", completed: true },
          { status: "In Transit", date: "Jan 16, 2024 12:00 PM", completed: true },
          { status: "Out for Delivery", date: "Pending", completed: false },
          { status: "Delivered", date: "Pending", completed: false }
        ]
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Track Your Order</h1>
          
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number or Tracking ID
                </label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Enter your order number (e.g., SG-2024-001234)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleTrackOrder}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Search className="mr-2" size={20} />
                Track Order
              </button>
            </div>
          </div>

          {trackingResult && (
            <div className="space-y-8">
              {/* Order Summary */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Order #{trackingResult.orderNumber}</h3>
                    <p className="text-gray-600">Status: <span className="font-semibold text-blue-600">{trackingResult.status}</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Estimated Delivery</p>
                    <p className="font-semibold text-green-600">{trackingResult.estimatedDelivery}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Items in this order:</h4>
                  <div className="space-y-2">
                    {trackingResult.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className="text-sm text-gray-600">Size: {item.size}, Color: {item.color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Progress</h3>
                <div className="space-y-4">
                  {trackingResult.timeline.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {step.completed ? (
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="text-white" size={16} />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <Clock className="text-gray-600" size={16} />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${step.completed ? 'text-green-700' : 'text-gray-500'}`}>
                            {step.status}
                          </h4>
                          <span className={`text-sm ${step.completed ? 'text-green-600' : 'text-gray-400'}`}>
                            {step.date}
                          </span>
                        </div>
                        {index < trackingResult.timeline.length - 1 && (
                          <div className={`w-0.5 h-8 ml-4 mt-2 ${step.completed ? 'bg-green-300' : 'bg-gray-200'}`} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Information */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-900 mb-3">Delivery Information</h4>
                <div className="space-y-2 text-blue-800">
                  <p>📱 We'll send you updates via WhatsApp and SMS</p>
                  <p>🚛 Our delivery partner will contact you before delivery</p>
                  <p>📦 Make sure someone is available to receive the package</p>
                  <p>🆔 ID verification may be required for security</p>
                </div>
              </div>
            </div>
          )}

          {!trackingResult && (
            <div className="text-center py-12">
              <Package className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Enter your order number to track</h3>
              <p className="text-gray-500">
                You can find your order number in your email confirmation or WhatsApp message
              </p>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-4">Need Help?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Can't find your order number?</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Check your email, SMS, or WhatsApp messages. Order numbers start with "SG-" followed by the year and order number.
                </p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Delivery issues?</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Contact our customer service team immediately if you experience any delivery problems.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="https://wa.me/254712345678" 
                className="bg-green-500 text-white px-6 py-2 rounded-lg text-center hover:bg-green-600 transition-colors"
              >
                WhatsApp Support
              </a>
              <a 
                href="mailto:support@styleguru.co.ke" 
                className="bg-blue-500 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-600 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrackOrder;
