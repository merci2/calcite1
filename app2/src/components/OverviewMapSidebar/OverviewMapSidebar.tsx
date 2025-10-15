const OverviewMapSidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-slate-800 shadow-lg flex flex-col items-center py-8 space-y-6">
      {/* Map Icon */}
      <button
        className="w-12 h-12 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors duration-200 group"
        title="Map View"
      >
        <svg 
          className="w-6 h-6 text-slate-300 group-hover:text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
          />
        </svg>
      </button>

      {/* Layers Icon */}
      <button
        className="w-12 h-12 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors duration-200 group"
        title="Layers"
      >
        <svg 
          className="w-6 h-6 text-slate-300 group-hover:text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
          />
        </svg>
      </button>

      {/* Info Icon */}
      <button
        className="w-12 h-12 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors duration-200 group"
        title="Information"
      >
        <svg 
          className="w-6 h-6 text-slate-300 group-hover:text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </button>
    </div>
  );
};

export default OverviewMapSidebar;