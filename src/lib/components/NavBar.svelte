<script lang="typescript">
import { mdiHomeCity, mdiAccountGroup, mdiVote, mdiLightbulbOnOutline, mdiWeatherNight  } from '@mdi/js';

	
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

	const links = ['Home', 'Login'];

    import { theme as themeStore } from '@util/stores';

	let theme = themeStore;

    function toggle() {
        theme.set($theme === 'light' ? 'dark' : 'light');
    }
</script>



<NavigationDrawer style="height: 100vh; margin-top: 0">
			<ListItem>
				<span slot="prepend" class="ml-n2">

				Mudit Somani
				</span>
			  </ListItem>
			  <Divider />


			  <List dense nav>
				  <a href="/">
					<ListItem>
					<span slot="prepend">
						<Icon path={mdiHomeCity} />
					</span>
					Home
					</ListItem>
				</a>
				<a href="/LawsToVote">
				<ListItem>
				  <span slot="prepend">
					<Icon path={mdiVote } />
				  </span>
				  Laws to vote on
				</ListItem>
			</a>
				<a href="/Login">
				<ListItem>
				  <span slot="prepend">
					<Icon path={mdiAccountGroup} />
				  </span>
				  Users
				</ListItem>
			</a>
			  <Divider></Divider>
              <ListItem on:click={toggle}>
                <span slot="prepend">
                  <Icon path={$theme === 'light' ? mdiLightbulbOnOutline : mdiWeatherNight} />
                </span>
                  Theme
            </ListItem>
			  </List>
		</NavigationDrawer>

