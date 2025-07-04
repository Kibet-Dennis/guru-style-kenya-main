
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [cartItems, setCartItems] = useState([]);
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      category: "Ordering & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept M-Pesa, PayPal, Bank Transfer, and Cash on Delivery. M-Pesa is the most popular and fastest option for Kenyan customers."
        },
        {
          q: "How do I place an order?",
          a: "Browse our categories, add items to cart, and proceed to checkout. You can also WhatsApp us directly at +254 712 345 678 with the items you want."
        },
        {
          q: "Can I modify my order after placing it?",
          a: "Yes, you can modify your order within 2 hours of placing it by contacting us on WhatsApp. After that, the order enters processing."
        },
        {
          q: "Do you offer discounts for bulk orders?",
          a: "Yes! Orders above KSh 10,000 get 10% discount, and above KSh 20,000 get 15% discount. Contact us for special bulk pricing."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Same-day delivery in Nairobi, 2-3 days for other locations in Kenya. Express delivery options are available for urgent orders."
        },
        {
          q: "What are the delivery charges?",
          a: "Delivery charges range from KSh 200-600 depending on location. Free delivery for orders above KSh 3,000 within Nairobi."
        },
        {
          q: "Do you deliver countrywide?",
          a: "Yes, we deliver to all 47 counties in Kenya. Remote areas may have additional charges and longer delivery times."
        },
        {
          q: "Can I track my order?",
          a: "Yes, you'll receive tracking information via WhatsApp and SMS once your order is dispatched. You can also check our Track Order page."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          q: "Are your mitumba clothes authentic?",
          a: "Yes, all our mitumba items are authentic, carefully selected, and thoroughly inspected. We only stock high-quality pieces in excellent condition."
        },
        {
          q: "How do I know my size?",
          a: "Use our detailed size guide available on each product page. We also offer free size consultation via WhatsApp before you order."
        },
        {
          q: "What's the difference between mitumba and new items?",
          a: "Mitumba items are high-quality second-hand clothes, while new items are brand new with tags. Both are clearly labeled in our listings."
        },
        {
          q: "Do you have plus-size clothing?",
          a: "Yes, we stock clothing in all sizes from XS to 5XL. Use our size filters to find your perfect fit."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "Can I return items if they don't fit?",
          a: "Yes, we accept returns within 7 days for unworn items with original tags. Free exchanges available for size issues."
        },
        {
          q: "How do returns work for mitumba items?",
          a: "Mitumba returns are accepted if the item condition was misrepresented. Due to their unique nature, exchanges are preferred over returns."
        },
        {
          q: "Who pays for return shipping?",
          a: "Customer pays return shipping unless the item is defective or we made an error. We offer discounted return labels."
        },
        {
          q: "How long do refunds take?",
          a: "M-Pesa refunds: 24-48 hours, Bank transfers: 3-5 business days, Store credit: Instant with 5% bonus value."
        }
      ]
    },
    {
      category: "Customer Service",
      questions: [
        {
          q: "How can I contact customer service?",
          a: "WhatsApp: +254 712 345 678 (fastest), Email: info@styleguru.co.ke, or use our website contact form. We respond within 2 hours during business hours."
        },
        {
          q: "What are your business hours?",
          a: "Monday-Saturday: 8AM-8PM, Sunday: 10AM-6PM. WhatsApp support is available during these hours for immediate assistance."
        },
        {
          q: "Do you offer personal shopping services?",
          a: "Yes! Our style consultants can help you create complete outfits. This service is free for orders above KSh 5,000."
        },
        {
          q: "Can I visit your physical store?",
          a: "We're primarily online, but we do have a showroom in Nairobi available by appointment. Contact us to schedule a visit."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItems={cartItems} onCartOpen={() => {}} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about shopping with Style Guru. Can't find what you're looking for? 
            <a href="https://wa.me/254712345678" className="text-orange-500 hover:underline ml-1">
              WhatsApp us directly!
            </a>
          </p>
          
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-200 pb-2">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemIndex = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems.has(itemIndex);
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="text-orange-500 flex-shrink-0 ml-2" size={20} />
                          ) : (
                            <ChevronDown className="text-orange-500 flex-shrink-0 ml-2" size={20} />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-600">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team is here to help! Get in touch with us through any of these channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href="https://wa.me/254712345678" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition-colors"
              >
                WhatsApp Chat
              </a>
              <a 
                href="mailto:info@styleguru.co.ke" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition-colors"
              >
                Email Us
              </a>
              <a 
                href="/contact" 
                className="bg-purple-500 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-600 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
