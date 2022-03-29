const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				nested: resolve(__dirname, "html/about/about.html"),
				nested: resolve(__dirname, "html/work/about.html"),
				nested: resolve(__dirname, "html/contact/about.html"),
			},
		},
	},
});
