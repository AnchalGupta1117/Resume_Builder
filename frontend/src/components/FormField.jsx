import { Check, AlertCircle, Info } from 'lucide-react';

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  success,
  hint,
  required = false,
  placeholder,
  className = '',
  ...props
}) => {
  const hasError = Boolean(error);
  const hasSuccess = Boolean(success);

  const getBorderColor = () => {
    if (hasError) return 'border-red-500 focus:border-red-500 focus:ring-red-200';
    if (hasSuccess) return 'border-green-500 focus:border-green-500 focus:ring-green-200';
    return 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-600 dark:focus:border-blue-400';
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label */}
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${getBorderColor()}`}
            rows={4}
            {...props}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${getBorderColor()}`}
            {...props}
          />
        )}

        {/* Success Icon */}
        {hasSuccess && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Check className="w-5 h-5 text-green-500" />
          </div>
        )}

        {/* Error Icon */}
        {hasError && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
        )}
      </div>

      {/* Error Message */}
      {hasError && (
        <div className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400 animate-slide-in-left">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Success Message */}
      {hasSuccess && !hasError && (
        <div className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400 animate-slide-in-left">
          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Hint */}
      {hint && !hasError && !hasSuccess && (
        <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{hint}</span>
        </div>
      )}
    </div>
  );
};

export default FormField;
