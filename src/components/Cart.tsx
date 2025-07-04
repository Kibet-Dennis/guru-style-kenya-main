
import { useState } from "react";
import { X, ChevronUp, ChevronDown, CreditCard, Smartphone, Banknote, Building2, Ruler, HelpCircle } from "lucide-react";
import MpesaModal from "./MpesaModal";
import SizeGuide from "./SizeGuide";

const Cart = ({ isOpen, onClose, items, removeFromCart, updateQuantity, totalPrice }) => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [isMpesaModalOpen, setIsMpesaModalOpen] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [sizeGuideCategory, setSizeGuideCategory] = useState('men');

  const handleCheckout = () => {
    setShowPaymentOptions(true);
  };

  const handleMpesaPayment = () => {
    setIsMpesaModalOpen(true);
  };

  const handlePayPalPayment = () => {
    alert("Redirecting to PayPal... This feature will be available soon!");
  };

  const handleBankTransferPayment = () => {
    alert("Bank Transfer Details:\nBank: Equity Bank\nAccount: 1234567890\nAccount Name: Guru Fashion Store\n\nPlease send us the transfer receipt via WhatsApp.");
  };

  const handleCashOnDelivery = () => {
    alert("Order placed! You will pay cash on delivery. We'll contact you soon to confirm your order and delivery details.");
    onClose();
  };

  const openSizeGuide = (category) => {
    setSizeGuideCategory(category);
    setShowSizeGuide(true);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, PayPal, Bank Transfer, and Cash on Delivery for your convenience."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery within Nairobi takes 1-2 days, while other parts of Kenya take 3-5 days."
    },
    {
      question: "Can I return items?",
      answer: "Yes, you can return unworn items with original tags within 14 days of delivery."
    },
    {
      question: "Do you offer size exchanges?",
      answer: "Yes, we offer free size exchanges within 7 days of delivery."
    },
    {
      question: "Is there a delivery fee?",
      answer: "Free delivery for orders above KSh 2,000. Below that, delivery fee is KSh 200."
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
            <h2 className="text-xl font-bold">Shopping Cart ({items.length})</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-4 bg-gray-50 border-b">
            <div className="flex space-x-2">
              <button
                onClick={() => openSizeGuide('men')}
                className="flex items-center space-x-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors"
              >
                <Ruler size={16} />
                <span>Size Guide</span>
              </button>
              <button
                onClick={() => setShowFAQ(true)}
                className="flex items-center space-x-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors"
              >
                <HelpCircle size={16} />
                <span>FAQs</span>
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">Your cart is empty</p>
                <p className="text-gray-500 text-sm mt-2">Add some stylish items to get started!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">{item.category}</p>
                      {item.subcategory && (
                        <p className="text-xs text-blue-600">{item.subcategory}</p>
                      )}
                      <p className="text-sm font-bold text-orange-600">
                        KSh {item.price.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Total: KSh {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <div className="flex flex-col items-center bg-white rounded-lg p-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded text-gray-600"
                        >
                          <ChevronUp size={16} />
                        </button>
                        <span className="text-sm font-semibold px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded text-gray-600"
                        >
                          <ChevronDown size={16} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Subtotal:</span>
                  <span className="text-lg font-semibold text-gray-900">
                    KSh {totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Delivery:</span>
                  <span className="text-sm text-green-600">
                    {totalPrice >= 2000 ? 'FREE' : 'KSh 200'}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t pt-2">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-orange-600">
                    KSh {(totalPrice + (totalPrice >= 2000 ? 0 : 200)).toLocaleString()}
                  </span>
                </div>
              </div>
              
              {!showPaymentOptions ? (
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Payment Method</h3>
                  
                  <button
                    onClick={handleMpesaPayment}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Smartphone size={18} />
                    <span>M-Pesa</span>
                  </button>
                  
                  <button
                    onClick={handlePayPalPayment}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <CreditCard size={18} />
                    <span>PayPal</span>
                  </button>
                  
                  <button
                    onClick={handleBankTransferPayment}
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Building2 size={18} />
                    <span>Bank Transfer</span>
                  </button>
                  
                  <button
                    onClick={handleCashOnDelivery}
                    className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Banknote size={18} />
                    <span>Cash on Delivery</span>
                  </button>
                  
                  <button
                    onClick={() => setShowPaymentOptions(false)}
                    className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm"
                  >
                    Back to Cart
                  </button>
                </div>
              )}
              
              <p className="text-xs text-gray-500 text-center mt-3">
                🔒 Secure checkout with multiple payment options
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Modal */}
      {showFAQ && (
        <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
              <button onClick={() => setShowFAQ(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-700 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <SizeGuide 
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
        category={sizeGuideCategory}
      />

      <MpesaModal 
        isOpen={isMpesaModalOpen}
        onClose={() => setIsMpesaModalOpen(false)}
        totalAmount={totalPrice + (totalPrice >= 2000 ? 0 : 200)}
      />
    </div>
  );
};

export default Cart;
