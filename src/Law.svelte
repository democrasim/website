<script lang="ts">
import { Button, Card, CardActions, CardSubtitle, CardTitle, ExpansionPanel, ExpansionPanels, Icon } from "svelte-materialify";
import Chip, { Set, Text, LeadingIcon } from '@smui/chips';
import Vote from "./Vote.svelte";
export let law;


</script>

<style></style>

<Card style="max-width: 500px; margin: 10px">
  <CardTitle>
    {law.contentString}
    <Set chips={[ law.content.type.toString() ]} let:chip bind:selected>
      {#if law.content.type == "FACT"}
      <Chip nonInteractive
       {chip}>
       <LeadingIcon class="material-icons">book</LeadingIcon>
        <Text>Fact</Text>
      </Chip>
      {/if}
    </Set>
  </CardTitle>
    <CardSubtitle>
      LAW #{law.id} 
    </CardSubtitle>
    
    <CardActions>
      <Button text class="success-text">FOR</Button>
      <Button text class="primary-text">ABSTAIN</Button>
      <Button text class="error-text">AGAINST</Button>
    </CardActions>
    <ExpansionPanels multiple>
    <ExpansionPanel>
      <span slot="header">
        Information 
        
      </span>

      
    <div>
      {#each law.votes as vote, i}
        <Vote vote={vote}/>
      {/each}
    </div>
    </ExpansionPanel>
    </ExpansionPanels>
</Card>