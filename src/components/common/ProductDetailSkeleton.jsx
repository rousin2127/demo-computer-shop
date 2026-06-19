const ProductDetailSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-24 mb-6" />

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[70vh]">
      <div className="bg-white rounded-2xl border border-gray-200 h-[40vh] sm:h-[50vh] lg:h-[70vh] bg-gray-100" />

      <div className="space-y-5">
        <div className="h-4 bg-gray-200 rounded w-20" />
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-32" />
        <div className="h-10 bg-gray-200 rounded w-40" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded" />
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <div className="h-12 bg-gray-200 rounded-lg flex-1" />
          <div className="h-12 bg-gray-200 rounded-lg flex-1" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetailSkeleton;
