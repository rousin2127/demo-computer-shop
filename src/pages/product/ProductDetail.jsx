import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Star, ShoppingCart, Heart, Truck, Shield, ChevronLeft, Minus, Plus, Check } from "lucide-react";
import { getProductBySlug, products } from "../../data/products";
import { formatPrice, calcDiscount } from "../../utils/formatPrice";
import { useCart } from "../../context/CartContext";
import { useRouteLoading } from "../../context/RouteLoadingContext";
import ProductCard from "../../components/product/ProductCard";
import ProductDetailSkeleton from "../../components/common/ProductDetailSkeleton";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const loading = useRouteLoading();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (loading) {
    return (
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductDetailSkeleton />
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-primary hover:underline">← Back to Shop</Link>
      </div>
    );
  }

  const discount = calcDiscount(product.price, product.originalPrice);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-sm text-dimmed hover:text-primary py-4"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pb-8 min-h-[70vh]">
          {/* Image — 70vh */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center h-[40vh] sm:h-[50vh] lg:h-[70vh] lg:sticky lg:top-20">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain p-6"
            />
          </div>

          {/* Details — no overflow clip so name is always visible */}
          <div className="flex flex-col w-full min-w-0">
            <p className="text-sm text-dimmed uppercase tracking-wide mb-1">{product.brand}</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 leading-snug">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">{product.rating}</span>
              <span className="text-sm text-dimmed">({product.reviews} reviews)</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3 mb-5">
              <span className="text-3xl font-bold text-brand">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-dimmed line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  {discount && (
                    <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">
                      Save {discount}%
                    </span>
                  )}
                </>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
              {product.description}
            </p>

            <div className="mb-5">
              <h3 className="font-semibold text-sm mb-2 text-gray-900">Specifications</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-500"}`}>
                {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
              </span>
            </div>

            {product.inStock && (
              <div className="flex items-center gap-4 mb-5">
                <span className="text-sm font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-sm font-medium min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-5">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:bg-gray-300 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm"
              >
                {added ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                {added ? "Added!" : "Add to Cart"}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 min-w-[140px] bg-brand hover:bg-brand-hover disabled:bg-gray-300 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm"
              >
                Buy Now
              </button>
              <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-dimmed" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                <Truck className="w-4 h-4 text-primary shrink-0" />
                <span>Free delivery over ৳5,000</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <span>Official warranty</span>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="py-12 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-gray-900">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
