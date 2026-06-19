import { Truck, Shield, Headphones, Wrench } from "lucide-react";

export const FeaturesBar = () => {
  const features = [
    { icon: Truck, title: "Free Delivery", desc: "Orders over ৳5,000" },
    { icon: Shield, title: "Genuine Warranty", desc: "Official distributor" },
    { icon: Headphones, title: "24/7 Support", desc: "Expert assistance" },
    { icon: Wrench, title: "PC Building", desc: "Custom assembly" },
  ];

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs text-dimmed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
