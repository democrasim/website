<script lang="ts">
    import { error } from "../util/stores";
    import { Snackbar, Button, Icon } from 'svelte-materialify';
import { mdiAlert } from "@mdi/js";

    let display = false;

    error.subscribe(message => {
        display = message !== '' && true;

    })

</script>

<Snackbar
        class="flex-column error-color"
        bind:active={display}
        bottom
        center
        timeout={8000}
    >
        <Icon path={mdiAlert} />
        {$error}
    </Snackbar>