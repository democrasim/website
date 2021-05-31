

<h3>{value.toLowerCase()} Laws</h3>

<Select {items} bind:value />

{#each $passedLaws as law}
	
	<LawComponent {law} />

{/each}


<script lang="ts">
    import LawComponent from '../components/Law.svelte';
    import { Select } from 'svelte-materialify';
    import type { Law } from '../types';
    import { writable } from 'svelte/store';
    import { getLawsByStatus } from '../services/lawService';
    import { member } from '../util/stores';

    const items = [
        { name: 'Passed', value: 'PASSED' },
        { name: 'Failed', value: 'FAILED' },
        { name: 'Under Vote', value: 'UNDER_VOTE' },
        { name: 'Vetoed', value: 'VETOED' },
        { name: 'Canceled', value: 'CANCELED' },
    ]

    let value = 'PASSED';

    let passedLaws = writable([]);

    $:if($member) {
        getLawsByStatus(value).then((laws) => $passedLaws = laws);
        
    } else {
        $passedLaws = [];
    }

</script>