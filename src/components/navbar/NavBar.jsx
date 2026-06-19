import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Search, MapPin, ShoppingCart, User, Menu, X } from "lucide-react";
import { BsLightning } from "react-icons/bs";import { useCart } from "../../context/CartContext";
import { categories } from "../../data/products";

const NavBar = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/shop?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setMobileMenu(false);
    }
  };

  return (
    <header className="w-full font-sans bg-dark text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="flex items-center bg-brand text-white font-black text-xl px-2.5 py-1 rounded tracking-tighter">
            RS
          </div>
          <div className="hidden sm:block text-gray-400 text-xs border-l border-gray-700 pl-3 uppercase tracking-wider font-semibold">
            Computer Shop
          </div>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-2xl relative hidden md:block">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search laptops, GPUs, accessories..."
            className="w-full bg-white text-gray-800 pl-5 pr-12 py-2 rounded-full text-sm outline-none placeholder-gray-400 focus:ring-2 focus:ring-brand transition-all"
          />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 text-brand hover:scale-105 transition-transform" />
          </button>
        </form>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            to="/shop"
            className="hidden sm:flex items-center gap-1.5 text-brand hover:text-orange-400 font-medium text-sm px-2"
          >
            <BsLightning className="w-4 h-4 animate-lightning-blink" />
            Offers
          </Link>
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-dark-card hover:bg-brand p-2 rounded-md text-xs border border-gray-800 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>Store Locator</span>
          </Link>

          <Link
            to="/cart"
            className="p-2.5 bg-dark-card hover:bg-[#2b2c30] rounded-md text-gray-300 hover:text-white transition-colors relative"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          <button className="hidden sm:block p-2.5 bg-dark-card hover:bg-[#2b2c30] rounded-md text-gray-300 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2.5 bg-dark-card rounded-md"
          >
            {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="w-full bg-black border-t border-gray-900 hidden md:block">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <ul className="flex items-center gap-5 py-2.5 whitespace-nowrap text-xs text-white">
            <li>
              <Link to="/shop" className="hover:text-brand transition-colors font-medium">
                All Products
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="hover:text-brand transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-brand transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-black border-t border-gray-900 px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white text-gray-800 pl-4 pr-10 py-2 rounded-lg text-sm outline-none"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-4 h-4 text-brand" />
            </button>
          </form>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                onClick={() => setMobileMenu(false)}
                className="text-sm py-2 px-3 bg-dark-card rounded-lg hover:text-brand"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
