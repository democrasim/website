<script lang="ts">
  import {
    Button,
    Card,
    CardActions,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    ExpansionPanel,
    ExpansionPanels,
    Icon,
    Row,
  } from "svelte-materialify";
  //@ts-ignore
  import { Chip } from "svelte-materialify";

  import { mdiBook, mdiCalendarCheck } from '@mdi/js';

  import Vote from "./Vote.svelte";
  import type { Law } from "../types";
  import Status from "./Status.svelte";
  export let law: Law;
</script>

<Card style="max-width: 500px; margin: 10px">
  <CardTitle style="justify-content: space-between;">
    {law.contentString}

    <Chip outlined class="ma-2 primary-text">
      {#if law.content.type == "FACT"}
       <Icon path={mdiBook} /> <span>FACT</span>
      {:else if law.content.type == "REQUIREMENT"}
      <Icon path={mdiCalendarCheck} /> <span>REQUIREMENT</span>
      {/if}
    </Chip>
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
      <span slot="header"> Information </span>

      <div>
        <div>
          {#each law.votes as vote, i}
            <Vote {vote} />
          {/each}
        </div>
        <Container>
          <Row>
            <Col><span class="field">Legislator</span></Col>
            <Col>{law.legislator.name}</Col>
          </Row>
          <Row>
            <Col><span class="field">Status</span></Col>
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
