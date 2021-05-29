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

  import { mdiBook, mdiCalendarCheck, mdiCalendar, mdiCancel, mdiAccountPlus, mdiBookmark } from '@mdi/js';

  import Vote from "./Vote.svelte";
  import type { Law } from "../types";
  import Status from "./Status.svelte";
  export let law: Law;
  let underVote = false;
  $: underVote = law.content.type === 'UNDER_VOTE';
</script>

<Card style="max-width: 500px; margin: 10px">
  <CardTitle style="justify-content: space-between;">
    {law.contentString}

    <Chip outlined class="ma-2 primary-text">
      {#if law.content.type == "FACT"}
       <Icon path={mdiBook} /> <span>FACT</span>
      {:else if law.content.type == "REQUIREMENT"}
      <Icon path={mdiCalendarCheck} /> <span>REQUIREMENT</span>
      {:else if law.content.type == "EVENT"}
      <Icon path={mdiCalendar} /> <span>EVENT</span>
      {:else if law.content.type == "BAN"}
      <Icon path={mdiCancel} /> <span>BAN</span>
      {:else if law.content.type == "AddMember"}
      <Icon path={mdiAccountPlus} /> <span>ADD MEMBER</span>
      {:else}
      <Icon path={mdiBookmark} /> <span>{law.content.type}</span>
      {/if}
    </Chip>
  </CardTitle>
  <CardSubtitle>
    LAW #{law.number}
  </CardSubtitle>

  <CardActions>
    <Button text class={underVote && "success-text"} disabled={!underVote}>FOR</Button>
    <Button text class={underVote && "primary-text"} disabled={!underVote}>ABSTAIN</Button>
    <Button text class={underVote && "error-text"} disabled={!underVote}>AGAINST</Button>
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
