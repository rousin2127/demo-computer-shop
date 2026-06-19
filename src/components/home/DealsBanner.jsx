import { Link } from "react-router";
import { Timer } from "lucide-react";

const DealsBanner = () => {
  return (
    <section id="offers" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative bg-gradient-to-br from-brand to-orange-700 rounded-2xl p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Timer className="w-5 h-5" />
                <span className="text-sm font-medium opacity-90">Limited Time Offer</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Gaming Week Sale</h3>
              <p className="text-white/80 text-sm mb-5">
                Up to 30% off on gaming laptops, GPUs & peripherals. Ends soon!
              </p>
              <Link
                to="/shop?category=gaming"
                className="inline-block bg-white text-brand font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Shop Gaming Deals
              </Link>
            </div>
            <div className="absolute -right-8 -bottom-8 text-[120px] opacity-10">🎮</div>
          </div>

          <div className="relative bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-8 text-white overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm font-medium opacity-90">Custom PC Build</span>
              <h3 className="text-2xl font-bold mb-2 mt-1">Build Your Dream PC</h3>
              <p className="text-white/80 text-sm mb-5">
                Free assembly & cable management with any custom build over ৳1,00,000.
              </p>
              <Link
                to="/shop?category=components"
                className="inline-block bg-white text-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Start Building
              </Link>
            </div>
            <div className="absolute -right-8 -bottom-8 text-[120px] opacity-10">🖥️</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsBanner;
