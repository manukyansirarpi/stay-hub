/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_URI_LOCAl: "mongodb://localhost:27017/stay-hub",
    DB_URI: "mongodb://127.0.0.1:27017/stay-hub",

    CLOUDINARY_CLOUD_NAME: "dsbli9nhd",
    CLOUDINARY_API_KEY: "782399657795877",
    CLOUDINARY_API_SECRET: "1W-ZTgNXX7dyO6Q6kFvDel9iHyU",

    STRIPE_SECRET_KEY:
      "sk_test_51QCy8a04wfBYPN36bxWpPMqR3KUCM6mfaIvxf8wEDWS6cjF9v4snAgdsE7PhjVsFk8Bg2ijIDsrer2S8QwbuiWz6002jIbUubM",
    // STRIPE_WEBHOOK_SECRET:
    //   "whsec_cb2990f493dccca84865d35e44e76475ccd0a4aae5c5b02d22c8229c701f36f5",

    STRIPE_WEBHOOK_SECRET: "whsec_ati51bQuvpmoMModvHVvpZa3dcg0asZI",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
