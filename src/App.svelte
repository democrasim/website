<script lang="ts">
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

</script>

<MaterialApp>
	<Law id={4} content="תוכן חוק" />
	<Law id={5} content="בזיון" />
</MaterialApp>