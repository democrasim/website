import { writable } from 'svelte/store'
import type { Law, Member } from '../types';


const light : 'light'|'dark' = 'light'

export const theme = writable<'light' | 'dark'>(light);

export const laws = writable<Law[]>([]);

export const members = writable<Member[]>([]);

export const token = writable<string>(localStorage.getItem('jwt'));

token.subscribe(value => localStorage.setItem('jwt', value));

export const member = writable<Member>(null);