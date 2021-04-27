<script lang="typescript">
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
	const links = ['Home', 'Login'];

	export let url = "";
</script>

<style>

</style>

<MaterialApp>
	<Router url="{url}">
		<div style="display: flex;">
		<NavigationDrawer style="height: 100vh">
			<ListItem>
				<span slot="prepend" class="ml-n2">

				Mudit Somani
				</span>
			  </ListItem>
			  <Divider />


			  <List dense nav>
				  <Link to="/">
					<ListItem>
					<span slot="prepend">
						<Icon path={mdiHomeCity} />
					</span>
					Home
					</ListItem>
				</Link>
				<Link to="/laws_to_vote">
				<ListItem>
				  <span slot="prepend">
					<Icon path={mdiVote } />
				  </span>
				  Laws to vote on
				</ListItem>
				</Link>
				<ListItem>
				  <span slot="prepend">
					<Icon path={mdiAccountGroup} />
				  </span>
				  Users
				</ListItem>
			  </List>
			  
		</NavigationDrawer>
		<div style="width: 100%; min-height: 100; display: flex; flex-direction: column; justify-content: space-between; ">
		  <Route path="/" component="{Home}" />
		  <Route path="/laws_to_vote" component="{LawsToVote}" />
		  <Route path="/login" component="{Login}" />
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