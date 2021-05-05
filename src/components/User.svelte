<script lang="ts">
import { Button, Card, CardActions, CardSubtitle, CardTitle } from "svelte-materialify";
import { Link } from "svelte-routing";
import type { Member } from "../types";


    export let user : Member;
</script>

<Card>
    <CardTitle>
        {user.name}
    </CardTitle>
    <CardSubtitle>
        Joined {user.joined}
    </CardSubtitle>

    <CardActions>
        <Link to="/user/{user.id}">
        <Button rounded outlined>{user.name}'s Page</Button>
        </Link> 
    </CardActions>
</Card>