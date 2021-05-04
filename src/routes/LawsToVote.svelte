

<h3>LawsToVote</h3>

{#each $lawsToVote as law}
	
	<LawComponent {law} />

{/each}


<script lang="ts">
    import LawComponent from '../Law.svelte';
    import type { Law } from '../types';
    import { writable } from 'svelte/store';


    import lawsData from '../data/laws.json';

    export const lawsToVote : SvelteStore<Law[]> = writable(lawsData);

</script>