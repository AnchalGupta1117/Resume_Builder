import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const ProgressIndicator = ({ currentStep, steps, completionPercentage }) => {
  return (
    <div className="w-full bg-white border border-violet-100 rounded-2xl p-6 mb-6 shadow-sm">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">Resume Completion</span>
          <span className="text-sm font-bold text-violet-600">{completionPercentage}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${completionPercentage}%` }}
          >
            <div className="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="flex justify-between items-center relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
          <div 
            className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center relative">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                ${isCompleted ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white scale-110' : ''}
                ${isCurrent ? 'bg-white border-4 border-violet-600 text-violet-600 scale-125 shadow-lg' : ''}
                ${!isCompleted && !isCurrent ? 'bg-gray-100 text-gray-400 border-2 border-gray-200' : ''}
              `}>
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  stepNumber
                )}
              </div>
              <span className={`
                mt-2 text-xs font-medium text-center max-w-[80px]
                ${isCurrent ? 'text-violet-600 font-bold' : 'text-gray-500'}
              `}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
