/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_URI_LOCAl: "mongodb://localhost:27017/stay-easy",
    DB_URI_PROD: "",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
