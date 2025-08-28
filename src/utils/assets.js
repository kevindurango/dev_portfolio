/**
 * Utility function to get the correct asset path considering the base URL
 * This handles the different base paths between development and production
 * @param {string} asset - The asset filename (e.g., 'profile.jpg', 'resume.pdf')
 * @returns {string} - The complete path to the asset
 */
export function getAssetPath(asset) {
  // For public assets (like PDFs, images in public folder), use the base URL
  if (asset.endsWith('.pdf') || asset === 'resume.pdf') {
    return `/${asset}`;
  }
  
  // For Vite, import the asset directly to ensure proper bundling
  try {
    // First try to import from the assets directory
    return new URL(`../assets/${asset}`, import.meta.url).href;
  } catch {
    // If not in assets, assume it's in the public directory
    return `/${asset}`;
  }
}
