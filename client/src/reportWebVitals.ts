import {onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';



const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Use the correct function names with the 'on' prefix
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);  // This is now onTTFB instead of getTTFB
  }
};

export default reportWebVitals;
