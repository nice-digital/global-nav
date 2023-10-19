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

	return {
		root,
		plugins: [banner(bannerContent), react()],
		css: {
			devSourcemap: true,
		},
		server: {
			port: 3000,
		},
		build: {
			lib: {
				entry: resolve(root, "index.js"),
				name: "GlobalNav",
				formats: ["es", "cjs", "iife"],
				fileName: (format) => {
					if (format === "iife") {
						return "cdn.js";
					} else {
						return `global-nav.${format}.js`;
					}
				},
			},
			outDir,
			emptyOutDir: true,
			sourcemap: true,
			rollupOptions: {
				input: {
					main: resolve(root, "index.html"),
				},
				external: ["react", "react-dom"],
				output: {
					// entryFileNames: "cdn.js", // Set the output file name
					assetFileNames: "[name].[ext]", //set the asset file names
					globals: {
						react: "React",
						"react-dom": "ReactDOM",
					},
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
	};
});
