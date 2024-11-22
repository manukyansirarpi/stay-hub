/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_URL: "http://localhost:3000/",
    // NEXTAUTH_URL: "http://localhost:3000",
    // STRIPE_WEBHOOK_SECRET:
    //   "whsec_cb2990f493dccca84865d35e44e76475ccd0a4aae5c5b02d22c8229c701f36f5",
    // STRIPE_SECRET_KEY:
    //   "sk_test_51QCy8a04wfBYPN36bxWpPMqR3KUCM6mfaIvxf8wEDWS6cjF9v4snAgdsE7PhjVsFk8Bg2ijIDsrer2S8QwbuiWz6002jIbUubM",

    API_URL: "https://stay-hub-v.vercel.app",
    NEXTAUTH_URL: "https://stay-hub-v.vercel.app",
    STRIPE_SECRET_KEY:
      "sk_test_51QCy8a04wfBYPN36bxWpPMqR3KUCM6mfaIvxf8wEDWS6cjF9v4snAgdsE7PhjVsFk8Bg2ijIDsrer2S8QwbuiWz6002jIbUubM",

    STRIPE_SECRET_KEY:
      "whsec_cb2990f493dccca84865d35e44e76475ccd0a4aae5c5b02d22c8229c701f36f5",

    DB_URI_LOCAl: "mongodb://localhost:27017/stay-hub",
    DB_URI:
      "mongodb+srv://manukyansirarpi1:Iw4VXgkJvlRmAcNP@cluster0.mx4zzsp.mongodb.net/stay-hub?retryWrites=true&w=majority&appName=Cluster0",

    CLOUDINARY_CLOUD_NAME: "dsbli9nhd",
    CLOUDINARY_API_KEY: "782399657795877",
    CLOUDINARY_API_SECRET: "1W-ZTgNXX7dyO6Q6kFvDel9iHyU",

    STRIPE_WEBHOOK_SECRET: "whsec_ati51bQuvpmoMModvHVvpZa3dcg0asZI",
    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
