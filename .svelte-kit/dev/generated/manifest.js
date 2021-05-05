const c = [
	() => import("..\\..\\..\\src\\routes\\$layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\LawsToVote.svelte"),
	() => import("..\\..\\..\\src\\routes\\Login.svelte"),
	() => import("..\\..\\..\\src\\routes\\Users.svelte"),
	() => import("..\\..\\..\\src\\routes\\user\\[id].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/LawsToVote.svelte
	[/^\/LawsToVote\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/Login.svelte
	[/^\/Login\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/Users.svelte
	[/^\/Users\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/user/[id].svelte
	[/^\/user\/([^/]+?)\/?$/, [c[0], c[6]], [c[1]], (m) => ({ id: d(m[1])})]
];

export const fallback = [c[0](), c[1]()];