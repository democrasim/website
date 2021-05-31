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

  import { vote as voteCall } from '../services/lawService';

  import Vote from "./Vote.svelte";
  import type { Law, VoteType } from "../types";
  import Status from "./Status.svelte";
import { memberId } from "../util/stores";
  export let law: Law;
  let underVote = false;
  $: underVote = law.status === 'UNDER_VOTE';


  let user = $memberId;

  async function vote(voteType: VoteType) {
    law = await voteCall(user, law.id, voteType, '');
    console.log(law);
  }
</script>

<Card style="min-width: 500px; margin: 10px">
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
    <Button text outlined={law.userVote?.vote === 'FOR'} class={underVote && "success-text"} on:click={() => vote('FOR')} disabled={!underVote}>FOR</Button>
    <Button text outlined={law.userVote?.vote === 'ABSTAIN'} class={underVote && "primary-text"} on:click={() => vote('ABSTAIN')} disabled={!underVote}>ABSTAIN</Button>
    <Button text outlined={law.userVote?.vote === 'AGAINST'} class={underVote && "error-text"} on:click={() => vote('AGAINST')} disabled={!underVote}>AGAINST</Button>
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
