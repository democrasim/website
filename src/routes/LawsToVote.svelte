

<h3>LawsToVote</h3>

{#each $lawsToVote as law}
	
	<LawComponent {law} />

{/each}


<script lang="ts">
    import LawComponent from '@components/Law.svelte';
    import { writable } from 'svelte/store';
    import { laws } from '@util/stores'

    let lawsToVote = $laws;

</script>