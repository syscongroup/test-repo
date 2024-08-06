/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['react-daisyui'],
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.pixabay.com',
				port: '',
			},
		],
	},

};

export default nextConfig;
