import { derived, writable } from 'svelte/store'
import type { Law, Member } from '../types';
import { get } from '../services/userService';

function localWritable<T extends string>(name: string) {
    const current = localStorage.getItem(name) as T;
    console.log(name, current);
    const store = writable<T>(current);
    store.subscribe(value => localStorage.setItem(name, value));
    return store;
}


const light : 'light'|'dark' = 'light'

export const theme = writable<'light' | 'dark'>(light);

export const laws = writable<Law[]>([]);

export const members = writable<Member[]>([]);

export const token = localWritable<string>("jwt");

export const memberId = localWritable<string>("loggedId");

export const member = derived(
    memberId, ($memberId, set) => {
        $memberId && token && get($memberId).then(set);
    }, undefined
);