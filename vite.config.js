import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
	root,
	plugins: [react()],
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
			// For mimicking cks autocomplete endpoint
			"/api/autocomplete?q=test": {
				target: "https://cks.nice.org.uk", // You can specify a different URL if needed
				changeOrigin: true,
				rewrite: (path) =>
					path.replace(
						/^\/api\/autocomplete\?q=.*$/,
						"/examples/assets/cks-topics.json"
					),
			},
			// "/cks/autocomplete": {
			// 	target: "https://cks.nice.org.uk",
			// 	changeOrigin: true,
			// 	rewrite: (path) => path.replace(/^\/cks/, ""),
			// },
			// For mimicking niceorg autocomplete endpoint
			// "/niceorg": {
			//   target: "https://www.nice.org.uk",
			//   secure: false,
			//   changeOrigin: true,
			//   pathRewrite: { "^/niceorg": "" },
			// },
		},
	},
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(root, "index.html"),
			},
			output: {
				entryFileNames: "cdn.js", // Set the output file name
				format: "iife", // Or other format like 'umd', 'cjs', etc.
			},
		},
	},
	test: {
		globals: true,
		restoreMocks: true,
		mockReset: true,
		environment: "jsdom",
		setupFiles: [resolve(root, "./setupTests.js")],
	},
});
