import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body>\r\n\t\t<div id=\"svelte\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-42840b4f.js",
			css: ["/./_app/assets/start-a8cd1609.css","/./_app/assets/vendor-c0c47e58.css"],
			js: ["/./_app/start-42840b4f.js","/./_app/chunks/vendor-2294d25b.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":2435,"type":"image/png"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/$layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/LawsToVote\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/LawsToVote.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Login\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/Login.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/Users\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/Users.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/user\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/$layout.svelte", "src/routes/user/[id].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/$layout.svelte": () => import("..\\..\\src\\routes\\$layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/LawsToVote.svelte": () => import("..\\..\\src\\routes\\LawsToVote.svelte"),"src/routes/Login.svelte": () => import("..\\..\\src\\routes\\Login.svelte"),"src/routes/Users.svelte": () => import("..\\..\\src\\routes\\Users.svelte"),"src/routes/user/[id].svelte": () => import("..\\..\\src\\routes\\user\\[id].svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/./_app/pages/$layout.svelte-fcd2930d.js","css":["/./_app/assets/vendor-c0c47e58.css"],"js":["/./_app/pages/$layout.svelte-fcd2930d.js","/./_app/chunks/vendor-2294d25b.js","/./_app/chunks/stores-e76e5349.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-c48939e5.js","css":["/./_app/assets/vendor-c0c47e58.css"],"js":["/./_app/error.svelte-c48939e5.js","/./_app/chunks/vendor-2294d25b.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-6a94c7a6.js","css":["/./_app/assets/pages/index.svelte-b3d7c38d.css","/./_app/assets/vendor-c0c47e58.css"],"js":["/./_app/pages/index.svelte-6a94c7a6.js","/./_app/chunks/vendor-2294d25b.js"],"styles":null},"src/routes/LawsToVote.svelte":{"entry":"/./_app/pages/LawsToVote.svelte-1c978087.js","css":["/./_app/assets/pages/LawsToVote.svelte-0372fc73.css","/./_app/assets/vendor-c0c47e58.css"],"js":["/./_app/pages/LawsToVote.svelte-1c978087.js","/./_app/chunks/vendor-2294d25b.js","/./_app/chunks/stores-e76e5349.js"],"styles":null},"src/routes/Login.svelte":{"entry":"/./_app/pages/Login.svelte-7393a06d.js","css":["/./_app/assets/vendor-c0c47e58.css"],"js":["/./_app/pages/Login.svelte-7393a06d.js","/./_app/chunks/vendor-2294d25b.js"],"styles":null},"src/routes/Users.svelte":{"entry":"/./_app/pages/Users.svelte-35249f49.js","css":["/./_app/assets/vendor-c0c47e58.css"],"js":["/./_app/pages/Users.svelte-35249f49.js","/./_app/chunks/vendor-2294d25b.js","/./_app/chunks/stores-e76e5349.js"],"styles":null},"src/routes/user/[id].svelte":{"entry":"/./_app/pages/user/[id].svelte-31b02b98.js","css":["/./_app/assets/vendor-c0c47e58.css"],"js":["/./_app/pages/user/[id].svelte-31b02b98.js","/./_app/chunks/vendor-2294d25b.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}