import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Export a DOM element to PDF
 * @param {HTMLElement} element - The DOM element to export
 * @param {string} filename - The name of the PDF file
 * @param {Object} options - Additional options
 */
export const exportToPDF = async (element, filename = 'resume.pdf', options = {}) => {
  try {
    const {
      quality = 2,
      backgroundColor = '#ffffff',
      onProgress = () => {},
    } = options;

    onProgress(10);

    // Capture the element as canvas
    const canvas = await html2canvas(element, {
      scale: quality,
      useCORS: true,
      backgroundColor,
      logging: false,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    onProgress(50);

    // Get canvas dimensions
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: imgHeight > imgWidth ? 'portrait' : 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    onProgress(75);

    // Add image to PDF
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

    onProgress(100);

    // Save PDF
    pdf.save(filename);

    return { success: true };
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    return { success: false, error };
  }
};

/**
 * Download resume as image
 */
export const exportToImage = async (element, filename = 'resume.png') => {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });

    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();

    return { success: true };
  } catch (error) {
    console.error('Error exporting to image:', error);
    return { success: false, error };
  }
};
