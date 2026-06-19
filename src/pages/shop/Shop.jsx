import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../../components/product/ProductCard";
import ProductGridSkeleton from "../../components/common/ProductGridSkeleton";
import { useRouteLoading } from "../../context/RouteLoadingContext";
import { products, categories, searchProducts } from "../../data/products";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const Shop = () => {
  const loading = useRouteLoading();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const searchParam = searchParams.get("q") || "";

  const [search, setSearch] = useState(searchParam);
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = searchParam ? searchProducts(searchParam) : [...products];
    if (categoryParam) result = result.filter((p) => p.category === categoryParam);

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [categoryParam, searchParam, sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (search.trim()) params.set("q", search.trim());
    else params.delete("q");
    setSearchParams(params);
  };

  const setCategory = (catId) => {
    const params = new URLSearchParams(searchParams);
    if (catId) params.set("category", catId);
    else params.delete("category");
    setSearchParams(params);
  };

  const activeCategory = categories.find((c) => c.id === categoryParam);

  return (
    <main className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            {activeCategory ? activeCategory.name : searchParam ? `Search: "${searchParam}"` : "All Products"}
          </h1>
          <p className="text-dimmed text-sm mt-1">{filtered.length} products found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-56 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-4">
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setCategory("")}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      !categoryParam ? "bg-primary/10 text-primary font-medium" : "hover:bg-gray-100"
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                        categoryParam === cat.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>{cat.icon}</span> {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <form onSubmit={handleSearch} className="flex-1 relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-4 h-4 text-dimmed" />
                </button>
              </form>
              <div className="flex gap-2">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
                >
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
              </div>
            </div>

            {loading ? (
              <ProductGridSkeleton count={6} showHeader={false} />
            ) : filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
                <p className="text-lg font-medium mb-2">No products found</p>
                <p className="text-dimmed text-sm">Try a different search or category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
