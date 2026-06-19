import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { MapPin } from "lucide-react";
import iphoneImg from "../../assets/iphone.jpg";
import airbudsImg from "../../assets/airbuds.jpg";
import laptopImg from "../../assets/laptop.jpg";
import caseImg from "../../assets/case.jpg";
import computerImg from "../../assets/computer.jpg";

const slides = [
  {
    type: "offer",
    productImage: iphoneImg,
    productName: "iPhone 17 Pro",
    giftImage: airbudsImg,
    giftLabel: "AirPods 4",
    link: "/shop",
    offers: {
      headline: "Get Complimentary",
      warranty: "SHIELD",
      warrantySub: "1 Year Extended Warranty",
      options: [
        "AirPods 4 + Up to ৳ 20,000 Discount",
        { main: "Up to 24 Months*", sub: "0% EMI" },
        "Up to ৳ 38,000 Discount",
      ],
      bonus: "+ ৳ 5,000 Trade-up Bonus (Up to)",
    },
  },
  {
    type: "brand",
    brand: "RS Computer",
    headline: "DESIGNED FOR PEAK PERFORMANCE",
    cta: "Shop Laptops",
    link: "/shop?category=laptops",
    badge: "AUTHORIZED DEALER",
    image: laptopImg,
    productName: "MacBook Pro",
  },
  {
    type: "store",
    brand: "RS Computer Shop",
    sub: "Your Trusted Tech Partner",
    headline: "Find Us on",
    cta: "Store Locator",
    link: "/contact",
    address: "Multiplan Center | Elephant Road | Dhaka",
    website: "rscomputer.com.bd",
    image: computerImg,
  },
];

const OfferSlide = ({ slide }) => (
  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 px-6 md:px-12 py-8 md:py-10 min-h-[300px] md:min-h-[360px]">
    {/* Left — offers */}
    <div className="flex-1 w-full max-w-lg">
      <p className="text-center lg:text-left text-sm md:text-base text-gray-800 mb-4 font-medium">
        {slide.offers.headline}
      </p>

      <div className="border border-gray-300 rounded-2xl px-5 py-3 text-center text-sm mb-3">
        <span className="font-black tracking-wide">{slide.offers.warranty}</span>
        <span className="text-gray-500 mx-2">|</span>
        <span className="text-gray-600">{slide.offers.warrantySub}</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 border border-gray-300 rounded-2xl overflow-hidden flex divide-x divide-gray-300">
          {slide.offers.options.map((opt, i) => (
            <div key={i} className="flex-1 px-3 py-4 text-center text-[11px] md:text-xs leading-snug flex items-center justify-center">
              {typeof opt === "string" ? (
                <span>{opt}</span>
              ) : (
                <span>
                  {opt.main}
                  <br />
                  <strong className="text-sm font-black">{opt.sub}</strong>
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="sm:w-28 border border-gray-300 rounded-2xl px-3 py-4 text-center text-[11px] md:text-xs leading-snug flex items-center justify-center shrink-0">
          {slide.offers.bonus}
        </div>
      </div>

      <p className="text-[10px] text-gray-400 mt-3">*T&amp;C APPLY</p>
    </div>

    {/* Center — product */}
    <div className="flex flex-col items-center shrink-0">
      <img
        src={slide.productImage}
        alt={slide.productName}
        className="h-44 md:h-56 w-auto object-contain"
      />
      <p className="mt-3 text-sm md:text-base font-semibold text-gray-900">
        {slide.productName}
      </p>
    </div>

    {/* Right — free gift */}
    <div className="flex flex-col items-center shrink-0">
      <span className="bg-black text-white text-xs font-bold px-4 py-1 rounded-full mb-3">
        FREE
      </span>
      <div className="border border-gray-300 rounded-2xl p-4 flex flex-col items-center w-36 md:w-44">
        <img
          src={slide.giftImage}
          alt={slide.giftLabel}
          className="h-24 md:h-28 w-auto object-contain"
        />
        <span className="mt-3 bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full">
          {slide.giftLabel}
        </span>
      </div>
    </div>
  </div>
);

const BrandSlide = ({ slide }) => (
  <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 px-6 md:px-12 py-8 md:py-10 min-h-[300px] md:min-h-[360px] overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, rgba(34,139,230,0.06) 0%, transparent 60%)",
      }}
    />

    <div className="relative flex-1 text-center lg:text-left">
      <p className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-4">
        {slide.brand}
      </p>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 max-w-md">
        {slide.headline}
      </h2>
      <Link
        to={slide.link}
        className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
      >
        {slide.cta}
      </Link>
      <div className="mt-6 inline-flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-xs font-bold tracking-wide">
        🇧🇩 {slide.badge}
      </div>
    </div>

    <div className="relative flex flex-col items-center shrink-0">
      <img
        src={slide.image}
        alt={slide.productName}
        className="h-48 md:h-64 w-auto object-contain drop-shadow-lg"
      />
      <p className="mt-3 text-sm font-semibold text-gray-900">{slide.productName}</p>
    </div>
  </div>
);

const StoreSlide = ({ slide }) => (
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 md:px-12 py-8 md:py-10 min-h-[300px] md:min-h-[360px]">
    <div className="flex-1 text-center lg:text-left">
      <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
        <div className="bg-brand text-white font-black text-lg px-2.5 py-1 rounded">RS</div>
        <div>
          <p className="font-bold text-gray-800">{slide.brand}</p>
          <p className="text-xs text-gray-500">{slide.sub}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-1">{slide.headline}</p>
      <Link
        to={slide.link}
        className="text-2xl md:text-3xl font-bold text-primary hover:text-primary-hover transition-colors"
      >
        {slide.cta}
      </Link>
      <p className="text-sm text-gray-500 mt-4">{slide.address}</p>
      <p className="text-sm text-gray-400 mt-1">{slide.website}</p>
    </div>

    <div className="shrink-0 w-full max-w-xs lg:max-w-sm">
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 aspect-[4/3]">
        <img
          src={slide.image}
          alt="Store"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary text-white p-3 rounded-full shadow-lg">
            <MapPin className="w-6 h-6" />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 text-[10px] text-gray-500 bg-white/80 px-2 py-0.5 rounded">
          Maps
        </div>
      </div>
    </div>
  </div>
);

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  const renderSlide = () => {
    switch (slide.type) {
      case "offer":
        return <OfferSlide slide={slide} />;
      case "brand":
        return <BrandSlide slide={slide} />;
      case "store":
        return <StoreSlide slide={slide} />;
      default:
        return null;
    }
  };

  return (
    <section
      className="bg-white border-b border-gray-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-white">
          <div className="transition-opacity duration-500">{renderSlide()}</div>

          {/* Dots — bottom center like reference */}
          <div className="flex items-center justify-center gap-2 pb-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-2.5 h-2.5 bg-gray-800"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
