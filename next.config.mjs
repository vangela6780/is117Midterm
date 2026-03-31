const repoName = "is117Midterm";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repoName}` : "",
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : undefined
};

export default nextConfig;