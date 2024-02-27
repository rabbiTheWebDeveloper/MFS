/* eslint-disable no-undef */
export const getBaseUrl = () => {
  return process.env.VITE_API_BASE_URL || "https://mfs-backend.vercel.app/api/v1"
}