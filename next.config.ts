import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Pages made by the content bot live at /name; let /name.html open them too.
  async redirects() {
    return [{ source: "/:slug([a-z0-9-]+).html", destination: "/:slug", permanent: false }];
  },
};

export default nextConfig;
