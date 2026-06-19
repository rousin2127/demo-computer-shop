import { Link } from "react-router";
import { categories } from "../../data/products";

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <p className="text-dimmed text-sm mt-1">Find exactly what you need</p>
          </div>
          <Link to="/shop" className="text-primary hover:underline text-sm font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group flex flex-col items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all text-center"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <span className="text-xs font-semibold leading-tight">{cat.name}</span>
              <span className="text-[10px] text-dimmed mt-1">{cat.count} items</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
