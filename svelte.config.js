import preprocess from 'svelte-preprocess';
import { resolve } from "path";
import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			resolve: {
				alias: {
					"@components": resolve("src/lib/components"),
					"@stores": resolve("src/lib/stores"),
					"@services": resolve("src/lib/services"),
					"@lib": resolve("src/lib"),
					"@type": resolve("src/lib/types"),
					"@util": resolve("src/lib/util"),
					"@routes": resolve("src/routes"),
					"@": resolve("src/lib"),
					"$lib": resolve("src/lib")
				}
			}
		}		
	},
	
};

export default config;
