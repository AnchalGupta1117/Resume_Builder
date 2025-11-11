import { useEffect, useRef } from 'react';
import { debounce } from 'lodash';

/**
 * Custom hook for auto-saving data
 * @param {Function} saveFunction - Function to call for saving
 * @param {any} data - Data to save
 * @param {number} delay - Delay in milliseconds (default: 2000)
 */
export const useAutoSave = (saveFunction, data, delay = 2000) => {
  const saveTimeoutRef = useRef(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    // Skip auto-save on initial mount
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    // Clear existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set new timeout for auto-save
    saveTimeoutRef.current = setTimeout(() => {
      if (data && saveFunction) {
        saveFunction(data);
      }
    }, delay);

    // Cleanup on unmount
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [data, delay, saveFunction]);
};

export default useAutoSave;
