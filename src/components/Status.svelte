<script lang="ts">
    import { Icon, ListItem } from "svelte-materialify";
    import { mdiCheckCircle, mdiTimerSand, mdiAlertDecagram, mdiAlert   } from '@mdi/js';
    import Vote from "@/Vote.svelte";
    export let status;
    </script>
    
    
        
        {#if status == "PASSED"}
        
    <ListItem>
        <span slot="prepend">
            <Icon path={mdiCheckCircle} class="success-text" />    
        </span>
            Passed
            
    </ListItem>
        {:else if status == "UNDER_VOTE"}
        <ListItem>
        <span slot="prepend">
            <Icon path={mdiTimerSand} spin class="primary-text" />    
        </span>
            Under Vote 
    </ListItem>
        {:else if status == "FAILED"}
        <ListItem>
            <span slot="prepend">
                <Icon path={mdiAlertDecagram} class="error-text" />    
            </span>
                Failed
        </ListItem>
        {:else if status == "VETOED"}
        <ListItem>
            <span slot="prepend">
                <Icon path={mdiAlertDecagram} class="error-text" />    
            </span>
                Vetoed 
        </ListItem>
        {:else if status == "CANCELED"}
        <ListItem>
            <span slot="prepend">
                <Icon path={mdiAlert}  class="warning-text" />    
            </span>
                Canceled 
        </ListItem>
        
        {/if}
        