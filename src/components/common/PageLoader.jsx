const PageLoader = () => (
  <div className="fixed inset-0 z-40 flex items-center justify-center bg-surface/85 backdrop-blur-[2px]">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
        <div className="absolute inset-0 border-4 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-800">Loading</p>
        <p className="text-xs text-dimmed mt-0.5">Please wait...</p>
      </div>
    </div>
  </div>
);

export default PageLoader;
