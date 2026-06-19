import { Link } from "react-router";
import { Cpu, ArrowRight } from "lucide-react";
import ProductCard from "../product/ProductCard";
import ProductGridSkeleton from "../common/ProductGridSkeleton";
import { useRouteLoading } from "../../context/RouteLoadingContext";

const ComponentsSection = ({ products }) => {
  const loading = useRouteLoading();

  if (loading) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGridSkeleton count={5} />
        </div>
      </section>
    );
  }

  if (!products?.length) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand/10 rounded-lg">
              <Cpu className="w-6 h-6 text-brand" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Computer Components</h2>
              <p className="text-dimmed text-sm mt-0.5">
                CPU, GPU, RAM, SSD & more for your build
              </p>
            </div>
          </div>
          <Link
            to="/shop?category=components"
            className="hidden sm:inline-flex items-center gap-1.5 text-primary hover:underline text-sm font-medium"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            to="/shop?category=components"
            className="inline-flex items-center gap-1.5 text-primary text-sm font-medium"
          >
            View All Components <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
