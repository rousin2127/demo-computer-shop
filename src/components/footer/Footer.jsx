import { Link } from "react-router";
import { Phone, Mail, MapPin, Share2, Globe, Video } from "lucide-react";

import logo from  '../../assets/cs.png'

const Footer = () => {
  const shopLinks = [
    { label: "Laptops", to: "/shop?category=laptops" },
    { label: "Desktops", to: "/shop?category=desktops" },
    { label: "Monitors", to: "/shop?category=monitors" },
    { label: "PC Components", to: "/shop?category=components" },
    { label: "Gaming", to: "/shop?category=gaming" },
  ];

  const supportLinks = [
    { label: "Contact Us", to: "/contact" },
    { label: "Store Location", to: "/contact" },
    { label: "Warranty Policy", to: "/contact" },
    { label: "Return Policy", to: "/contact" },
    { label: "PC Build Service", to: "/shop?category=components" },
  ];

  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div ><img src={logo} alt="" className=" rounded w-12 h-12" /> </div>
              <span className="font-bold text-2xl">Creative Source</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Bangladesh's trusted computer store since 2020. Genuine products, expert advice,
              and the best prices on laptops, desktops & components.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, Video].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-dark-card rounded-lg hover:bg-brand transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 text-sm hover:text-brand transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 text-sm hover:text-brand transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                Elephant Road, Dhaka-1205
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-brand shrink-0" />
                +880 17XXXXXXXX
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-brand shrink-0" />
                info@rscomputer.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2026 RS Computer Shop. All rights reserved.</p>
          <p>Demo site by Paisoftit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
