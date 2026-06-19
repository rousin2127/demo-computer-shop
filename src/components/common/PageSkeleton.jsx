const PageSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-48 mb-8" />
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-32 bg-gray-200 rounded-xl w-full mt-6" />
      <div className="h-32 bg-gray-200 rounded-xl w-full" />
    </div>
  </div>
);

export default PageSkeleton;
