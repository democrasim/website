<script lang="typescript">
	
	import {
		Card,
		CardTitle,
		CardSubtitle,
		CardActions,
		Button,
    	Icon,
		MaterialApp,
		ListItem
	} from 'svelte-materialify';
import Law from './Law.svelte';

let laws;

import lawsData from './data/laws.json'; 

console.log(lawsData);

laws = lawsData;

</script>

<style>

</style>

<MaterialApp>
	{#each laws as law}
	<Law law={law} />
	{/each}
</MaterialApp>