const ProductCardSkeleton = () => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
    <div className="aspect-[4/3] bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-3 bg-gray-200 rounded w-1/3" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="flex justify-between items-end pt-2">
        <div className="h-6 bg-gray-200 rounded w-20" />
        <div className="h-9 w-9 bg-gray-200 rounded-lg" />
      </div>
    </div>
  </div>
);

const ProductGridSkeleton = ({ count = 5, showHeader = true }) => (
  <div>
    {showHeader && (
      <div className="flex items-center justify-between mb-8 animate-pulse">
        <div className="space-y-2">
          <div className="h-7 bg-gray-200 rounded w-40" />
          <div className="h-4 bg-gray-200 rounded w-56" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-20 hidden sm:block" />
      </div>
    )}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export { ProductCardSkeleton };
export default ProductGridSkeleton;
