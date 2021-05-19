<script lang="typescript">
  import NavBar from './components/NavBar.svelte';

import { mdiHomeCity, mdiAccountGroup, mdiVote  } from '@mdi/js';

	
	import {
Button,
Divider,
Footer,
Icon,
List,
ListItem,
		MaterialApp,
		NavigationDrawer
	} from 'svelte-materialify';

	import { Router, Link, Route } from "svelte-routing";

	import Home from './routes/Home.svelte';
	import LawsToVote from './routes/LawsToVote.svelte';
	import Login from './routes/Login.svelte';
import { theme } from './util/stores';
import Users from './routes/Users.svelte';
	const links = ['Home', 'Login'];

	export let url = "";
</script>


<MaterialApp theme={$theme}>
	<Router url="{url}">
		<div style="display: flex;">
		<NavBar></NavBar>
		<div style="width: 100%; min-height: 100; display: flex; flex-direction: column; justify-content: space-between; align-items: center; ">
		  <Route path="/" component="{Home}" />
		  <Route path="/laws_to_vote" component="{LawsToVote}" />
		  <Route path="/login" component="{Login}" />
		  <Route path="/users" component="{Users}" />
		  <Route path="/"><Home /></Route>

		  <Footer style="width: 100%" padless class="indigo theme--dark justify-center flex-column">
			<div class="mt-2 mb-2">
			  {#each links as link}
			  <Link to={link}>
				<Button text rounded>{link}</Button>
			  </Link>
				{/each}
			</div>
			<div class="indigo lighten-1 pa-2 text-center" style="width:100%">
			  2021 -
			  <b>Democrasim</b>
			</div>
		  </Footer>
		</div>
	</div>
	  </Router>
</MaterialApp>