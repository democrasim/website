<script lang="ts">
  import { Button, Card, CardActions, CardSubtitle, CardTitle, Col, Container, ExpansionPanel, ExpansionPanels, Icon, Row } from "svelte-materialify";
  import Chip, { Set, Text, LeadingIcon } from '@smui/chips';
  import Vote from "./Vote.svelte";
  import type { Law } from './types';
import Status from "./Status.svelte";
  export let law : Law;
  
  

  </script>
  

  
  <Card style="max-width: 500px; margin: 10px">
    <CardTitle style="justify-content: space-between;">
      {law.contentString}
      <Set chips={[ law.content.type.toString() ]} let:chip >
        
        <Chip nonInteractive
         {chip}>
         {#if law.content.type == "FACT"}
         <LeadingIcon class="material-icons">book</LeadingIcon>
          <Text>Fact</Text>
          
        {:else if law.content.type == "REQUIREMENT"}
        <LeadingIcon class="material-icons">warning</LeadingIcon>
        <Text>Requirement</Text>
        
        {/if}
        </Chip>
  
  
  
  
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
      <div>
        {#each law.votes as vote, i}
          <Vote vote={vote}/>
        {/each}
      </div>
      <Container>
        <Row>
          <Col><span class="field">Legislator</span></Col>
          <Col>{law.legislator.name}</Col>
        </Row>
        <Row>
          <Col><span class="field">STATUS</span></Col>
          <Col><Status status={law.status} /></Col>
        </Row>
      </Container>
    </div>
      </ExpansionPanel>
      </ExpansionPanels>
  </Card>

  <style>
    .field {
      color: gray;
      text-transform: uppercase;
      font-size: 14px;
    }
  </style>