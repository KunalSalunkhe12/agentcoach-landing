/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, { isServer }) {
    // Add support for importing video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogv|ogg|avi|mov)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
