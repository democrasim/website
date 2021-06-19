<script lang="ts">
  import User from "./User.svelte";
  import { Icon, ListItem } from "svelte-materialify";
  import { mdiThumbUp } from "@mdi/js";

  export let vote;
</script>

<ListItem style="width: 100%; padding: 0">
  <span slot="prepend">
    <Icon path={mdiThumbUp} />
  </span>
  <User user={vote.voter} />
  <span slot="subtitle">
    {vote.reason}
  </span>
</ListItem>
