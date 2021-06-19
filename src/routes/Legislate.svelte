<script lang="ts">
  import { List, TextField } from "svelte-materialify";

  let name = "";
</script>

<h3>Legislating today, are we? let's begin!</h3>

<TextField bind:value={name}>Law name (optional)</TextField>

<List class="elevation-2" />
