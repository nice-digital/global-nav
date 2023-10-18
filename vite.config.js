import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import banner from "vite-plugin-banner";
import packageJson from "./package.json";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), "");

	// if command === serve - you can return a development mode specific config
	// if command === build - you can return a production mode specific config

	//TODO consider including banner in production mode only
	const bannerContent = [
		`NICE Global Nav ${env.VITE_APP_VERSION || packageJson.version} | ${
			new Date().toISOString().split("T")[0]
		}`,
		`© Copyright NICE 2015-${new Date().getFullYear()}`,
		"Licensed under MIT (https://github.com/nice-digital/global-nav/blob/master/LICENSE)",
	].join("\n");

	// const version = env.VITE_APP_VERSION || packageJson.version;

	//TODO test if the banner is working
	return {
		root,
		plugins: [banner(bannerContent), react()],
		css: {
			devSourcemap: true,
		},
		server: {
			port: 3000,
			proxy: {
				// key is the prefix to match, value is the target server
				"/niceorg/autocomplete": {
					target: "https://www.nice.org.uk",
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/niceorg/, ""),
				},
				// For mimicking bnf autocomplete endpoint
				"/bnf/typeahead": {
					target: "https://search-api.nice.org.uk",
					changeOrigin: true,
					rewrite: (path) =>
						path
							.replace(/^\/bnf\/typeahead/, "/api/typeahead")
							.replace(/ajax=/, "index=bnf&"),
				},
				// For mimicking bnfc autocomplete endpoint
				"/bnfc/typeahead": {
					target: "https://search-api.nice.org.uk",
					changeOrigin: true,
					rewrite: (path) =>
						path
							.replace(/^\/bnfc\/typeahead/, "/api/typeahead")
							.replace(/ajax=/, "index=bnfc&"),
				},
				// For mimicking cks autocomplete endpoint e.g. https://cks.nice.org.uk/api/autocomplete?q=diab
				"/api/autocomplete?q=test": {
					target: "https://cks.nice.org.uk", // You can specify a different URL if needed
					changeOrigin: true,
					rewrite: (path) =>
						path.replace(
							/^\/api\/autocomplete\?q=.*$/,
							"/examples/assets/cks-topics.json"
						),
				},
			},
		},
		build: {
			outDir,
			emptyOutDir: true,
			sourcemap: true,
			rollupOptions: {
				input: {
					main: resolve(root, "index.html"),
				},
				output: {
					entryFileNames: "cdn.js", // Set the output file name
					// chunkFileNames: "[name].[hash].js", // set the chunk file names
					// assetFileNames: "[name].[hash].[ext]", //set the asset file names
					assetFileNames: "[name].[ext]", //set the asset file names
					format: "iife", // Or other format like 'umd', 'cjs', etc.
				},
			},
		},
		// define: {
		// 	__APP_VERSION__:
		// 		process.env.NODE_ENV === "production"
		// 			? process.env.VITE_APP_VERSION
		// 			: JSON.stringify(process.env.VITE_APP_VERSION),
		// },
		// define: {
		// 	__APP_VERSION__: "1.0.0-debug",
		// },
		test: {
			globals: true,
			restoreMocks: true,
			mockReset: true,
			environment: "jsdom",
			setupFiles: [resolve(root, "./setupTests.js")],
		},
	};
});
