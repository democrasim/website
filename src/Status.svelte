<script lang="ts">
    import { Icon, ListItem } from "svelte-materialify";
    import { mdiCheckCircle, mdiTimerSand, mdiAlertDecagram, mdiAlert   } from '@mdi/js';
    import Chip, { Text } from '@smui/chips';
    import Vote from "./Vote.svelte";
    export let status;
    </script>
    
    
        
        {#if status == "PASSED"}
        
    <ListItem>
        <span slot="prepend">
            <Icon path={mdiCheckCircle} class="success-text" />    
        </span>
            <Text>Passed</Text> 
            
    </ListItem>
        {:else if status == "UNDER_VOTE"}
        <ListItem>
        <span slot="prepend">
            <Icon path={mdiTimerSand} spin class="primary-text" />    
        </span>
            <Text>Under Vote</Text> 
    </ListItem>
        {:else if status == "FAILED"}
        <ListItem>
            <span slot="prepend">
                <Icon path={mdiAlertDecagram} class="error-text" />    
            </span>
                <Text>Failed</Text> 
        </ListItem>
        {:else if status == "VETOED"}
        <ListItem>
            <span slot="prepend">
                <Icon path={mdiAlertDecagram} class="error-text" />    
            </span>
                <Text>Vetoed</Text> 
        </ListItem>
        {:else if status == "CANCELED"}
        <ListItem>
            <span slot="prepend">
                <Icon path={mdiAlert}  class="warning-text" />    
            </span>
                <Text>Canceled</Text> 
        </ListItem>
        
        {/if}
        