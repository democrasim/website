<script lang="ts">
    import { Icon, ListItem } from "svelte-materialify";
    import { mdiThumbUp } from '@mdi/js';

    export let vote;
</script>

<ListItem style="width: 100%">
    <span slot="prepend">
        <Icon path={mdiThumbUp} />
      </span>
    {vote.voter.name}
    <span slot="subtitle">
        {vote.reason}
    </span>
</ListItem>
