/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/sign-in",
				destination: "/api/auth/login",
				permanent: true,
			},
			{
				source: "/sign-up",
				destination: "/api/auth/register",
				permanent: true,
			},
		];
	},

	images: {
		domains: ["lh3.googleusercontent.com"],
	},

	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.resolve.alias.canvas = false;
		config.resolve.alias.encoding = false;

		return config;
	},
};

export default nextConfig;
