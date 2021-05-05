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

    import { theme } from '@util/stores';

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
                
			  <Divider></Divider>
              <ListItem on:click={toggle}>
                <span slot="prepend">
                  <Icon path={$theme === 'light' ? mdiLightbulbOnOutline : mdiWeatherNight} />
                </span>
                  Theme
            </ListItem>
			  </List>
		</NavigationDrawer>

