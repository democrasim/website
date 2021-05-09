<script lang="typescript">
  import NavBar from '@components/NavBar.svelte';

	
	import {
Button,
Divider,
Footer,
MaterialApp,
	} from 'svelte-materialify';



	import { theme as themeStore } from '../lib/util/stores';
	let theme = themeStore;
	import Users from './Users.svelte';
	import LawsToVote from './LawsToVote.svelte';
	import Login from './Login.svelte';
	import Home from './index.svelte';
	const links = ['Home', 'Login'];
	import { Router, Link, Route } from 'svelte-routing';
	export let url = "";
</script>


<MaterialApp theme={$theme}>
	<Router url="{url}">
		<div style="display: flex;">
		<NavBar></NavBar>
		<div style="width: 100%; min-height: 100; display: flex; flex-direction: column; justify-content: space-between; ">
		  <slot />
	
		  <Footer style="width: 100%" padless class="indigo theme--dark justify-center flex-column">
			<div class="mt-2 mb-2">
			  {#each links as link}
			  <a href={link}>
				<Button text rounded>{link}</Button>
			  </a>
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