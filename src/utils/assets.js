/**
 * Utility function to get the correct asset path considering the base URL
 * This handles the different base paths between development and production (GitHub Pages)
 * @param {string} asset - The asset filename (e.g., 'profile.jpg')
 * @returns {string} - The complete path to the asset
 */
export function getAssetPath(asset) {
  return `${import.meta.env.BASE_URL}${asset}`;
}
