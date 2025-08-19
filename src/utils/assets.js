/**
 * Utility function to get the correct asset path considering the base URL
 * This handles the different base paths between development and production (GitHub Pages)
 * @param {string} asset - The asset filename (e.g., 'profile.jpg')
 * @returns {string} - The complete path to the asset
 */
export function getAssetPath(asset) {
  // For Vite, we use the configured base URL from vite.config.js
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${asset}`;
}
