

<h3>LawsToVote</h3>

{#each laws as law}
	
	<LawComponent law={law} />

{/each}


<script lang="ts">
    import LawComponent from '../Law.svelte';
    import type { Law } from '../types';

    let laws : Law[];

    import lawsData from '../data/laws.json';
    
    //@ts-ignore
    laws = lawsData;
</script>