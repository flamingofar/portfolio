const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				nested: resolve(__dirname, "about.html"),
				nested1: resolve(__dirname, "project1.html"),
				nested2: resolve(__dirname, "project2.html"),
				nested3: resolve(__dirname, "project3.html"),
				nested4: resolve(__dirname, "project4.html"),
				nested5: resolve(__dirname, "contact.html"),
			},
		},
	},
});
