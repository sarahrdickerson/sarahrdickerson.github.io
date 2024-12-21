/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath:
    process.env.NODE_ENV === "production" ? "/sarahrdickerson.github.io" : "",
  images: {
    unoptimized: true, // Disables Image Optimization for static export
  },
};

export default nextConfig;
