/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI_LOCAl: "mongodb://localhost:27017/stay-easy",
    DB_URI_PROD: "",
  },
};

export default nextConfig;
