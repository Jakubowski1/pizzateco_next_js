/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "./dist",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
