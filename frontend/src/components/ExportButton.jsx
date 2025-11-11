import { useState } from 'react';
import { Download, FileDown, Image as ImageIcon, Loader2 } from 'lucide-react';
import { exportToPDF, exportToImage } from '../utils/pdfExport';

const ExportButton = ({ resumeRef, resumeName = 'resume' }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleExport = async (format = 'pdf') => {
    if (!resumeRef.current) {
      alert('Resume not found. Please wait for the resume to load.');
      return;
    }

    setIsExporting(true);
    setProgress(0);
    setShowDropdown(false);

    try {
      const filename = `${resumeName}.${format}`;
      
      if (format === 'pdf') {
        const result = await exportToPDF(resumeRef.current, filename, {
          onProgress: setProgress,
        });
        
        if (result.success) {
          alert('Resume exported successfully!');
        } else {
          throw new Error('Export failed');
        }
      } else if (format === 'png') {
        const result = await exportToImage(resumeRef.current, filename);
        
        if (result.success) {
          alert('Resume exported as image successfully!');
        } else {
          throw new Error('Export failed');
        }
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Failed to export resume. Please try again.');
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  };

  return (
    <div className="relative">
      {/* Main Export Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        disabled={isExporting}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isExporting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Exporting... {progress}%</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span>Export Resume</span>
          </>
        )}
      </button>

      {/* Dropdown Menu */}
      {showDropdown && !isExporting && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10 min-w-[200px]">
          <button
            onClick={() => handleExport('pdf')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
          >
            <FileDown className="w-5 h-5 text-red-500" />
            <div>
              <div className="font-medium text-gray-900">Export as PDF</div>
              <div className="text-xs text-gray-500">Best for printing</div>
            </div>
          </button>
          
          <button
            onClick={() => handleExport('png')}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left border-t border-gray-100"
          >
            <ImageIcon className="w-5 h-5 text-blue-500" />
            <div>
              <div className="font-medium text-gray-900">Export as Image</div>
              <div className="text-xs text-gray-500">PNG format</div>
            </div>
          </button>
        </div>
      )}

      {/* Click outside to close */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
};

export default ExportButton;
