import { writable } from 'svelte/store'

const light : 'light'|'dark' = 'light'

export const theme = writable<'light' | 'dark'>(light);