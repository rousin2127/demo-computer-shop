import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Do you offer genuine product warranty?",
    a: "Yes. All products come with official manufacturer warranty. We are authorized distributors for major brands like ASUS, Dell, HP, Samsung, and more.",
  },
  {
    q: "What is your delivery policy?",
    a: "We offer free delivery on orders over ৳5,000 within Dhaka. Outside Dhaka, delivery charges apply based on location. Standard delivery takes 1–3 business days.",
  },
  {
    q: "Can you build a custom PC for me?",
    a: "Absolutely! Choose your components from our shop and we offer free assembly and cable management on custom builds over ৳1,00,000.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash on Delivery (COD), bKash, Nagad, and credit/debit cards. Online payment is available at checkout.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "Unopened products can be returned within 7 days. Defective items are covered under warranty — bring your invoice to our store or contact support.",
  },
  {
    q: "Where is your physical store located?",
    a: "Our main store is at Multiplan Center, Elephant Road, Dhaka-1205. Open Sat–Thu 10 AM–9 PM, Friday 3 PM–9 PM.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="text-dimmed text-sm mt-2">
            Quick answers to common questions about shopping with us
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-dimmed shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-4 text-sm text-dimmed leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
