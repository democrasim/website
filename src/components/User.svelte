<script lang="ts">
  import {
    Button,
    Card,
    CardActions,
    CardSubtitle,
    CardTitle,
  } from "svelte-materialify";
  import { Link } from "svelte-routing";
  import type { Member } from "../types";

  export let user: Member;
</script>

<Link to="/user/{user.id}">
  <Button outlined>{user.name}</Button>
</Link>
