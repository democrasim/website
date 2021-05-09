

<h3>LawsToVote</h3>
<div>
{#each lawsToVote as law}
	<LawComponent {law} />

{/each}
</div>

<script lang="ts">
    	import { onMount } from 'svelte';

    import LawComponent from '@components/Law.svelte'
    import { writable } from 'svelte/store';
    import { getLawsPassed } from '@services/lawService';
    import { laws as lawStore } from '@util/stores'
    let lawsToVote = $lawStore;


    onMount(async () => {
        let laws = await getLawsPassed();
        
        console.log(laws);
        lawStore.set(laws);
        

    })
</script>