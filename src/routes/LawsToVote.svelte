

<h3>Laws To Vote on</h3>

<div>
{#each $lawsToVote as law}
	
	<LawComponent {law} />

{/each}
</div>

<script lang="ts">
    import LawComponent from '../components/Law.svelte';
    import type { Law } from '../types';
    import { writable } from 'svelte/store';
    import { getLawsUnvoted } from '../services/lawService';
    import { member } from '../util/stores';


    let lawsToVote = writable([]);

    $:if($member) {
        getLawsUnvoted($member.id).then((laws) => $lawsToVote = laws);
        
    } else {
        $lawsToVote = [];
    }

</script>