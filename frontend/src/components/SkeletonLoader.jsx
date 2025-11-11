import React from 'react';

export const ResumeCardSkeleton = () => {
  return (
    <div className="bg-white border border-violet-100 rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="h-48 bg-gray-200 loading-shimmer"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded loading-shimmer"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3 loading-shimmer"></div>
        <div className="flex gap-2 mt-4">
          <div className="h-8 bg-gray-200 rounded w-20 loading-shimmer"></div>
          <div className="h-8 bg-gray-200 rounded w-20 loading-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export const FormSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-10 bg-gray-200 rounded loading-shimmer"></div>
      <div className="h-10 bg-gray-200 rounded loading-shimmer"></div>
      <div className="h-32 bg-gray-200 rounded loading-shimmer"></div>
      <div className="h-10 bg-gray-200 rounded w-1/3 loading-shimmer"></div>
    </div>
  );
};

export const DashboardSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6 animate-pulse">
        <div className="space-y-2">
          <div className="h-8 bg-gray-200 rounded w-48 loading-shimmer"></div>
          <div className="h-4 bg-gray-200 rounded w-32 loading-shimmer"></div>
        </div>
        <div className="h-12 bg-gray-200 rounded w-40 loading-shimmer"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <ResumeCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
