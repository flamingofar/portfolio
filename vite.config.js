const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				nested: resolve(__dirname, "html/about.html"),
				nested: resolve(__dirname, "html/project1.html"),
				nested: resolve(__dirname, "html/project2.html"),
				nested: resolve(__dirname, "html/project3.html"),
				nested: resolve(__dirname, "html/project4.html"),
				nested: resolve(__dirname, "html/contact.html"),
			},
		},
	},
});
