import { Link } from "react-router";
import { Sparkles } from "lucide-react";
import ProductCard from "../product/ProductCard";
import ProductGridSkeleton from "../common/ProductGridSkeleton";
import { useRouteLoading } from "../../context/RouteLoadingContext";

const NewArrivalSection = ({ products }) => {
  const loading = useRouteLoading();

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGridSkeleton count={5} />
        </div>
      </section>
    );
  }

  if (!products?.length) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary/10 rounded-lg">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">New Arrivals</h2>
              <p className="text-dimmed text-sm mt-0.5">Fresh stock just landed in store</p>
            </div>
          </div>
          <Link to="/shop" className="text-primary hover:underline text-sm font-medium">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
