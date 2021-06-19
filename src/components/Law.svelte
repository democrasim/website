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

  import {
    mdiBook,
    mdiCalendarCheck,
    mdiCalendar,
    mdiCancel,
    mdiAccountPlus,
    mdiBookmark,
  } from "@mdi/js";

  import { getLawById, vote as voteCall } from "../services/lawService";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import duration from "dayjs/plugin/duration";
  import Vote from "./Vote.svelte";
  import type { Law, VoteType } from "../types";
  import Status from "./Status.svelte";
  import { memberId } from "../util/stores";
  import LawContent from "./LawContent.svelte";
  import User from "./User.svelte";
  import InfoRow from "./InfoRow.svelte";
  import { onMount } from "svelte";

  dayjs.extend(relativeTime);
  dayjs.extend(duration);

  export let law: Law;
  let underVote = false;
  $: underVote = law.status === "UNDER_VOTE";

  let user = $memberId;

  let timeLeft = "";

  async function fetchLaw() {
    law = await getLawById(law.id);
  }

  onMount(() => {
    const interval = setInterval(() => {
      const now = dayjs();

      if (now.isAfter(law.resolveTime) && law.status === "UNDER_VOTE") {
        clearInterval(interval);
        fetchLaw();
      } else {
        timeLeft = dayjs
          .duration(dayjs().diff(dayjs(law.resolveTime)))
          .humanize();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  async function vote(voteType: VoteType) {
    law = await voteCall(user, law.id, voteType, "");
    console.log(law);
  }
</script>

<Card style="min-width: 500px; margin: 10px; padding: 2rem">
  <CardTitle style="justify-content: space-between;">
    {law.title}
  </CardTitle>
  <CardSubtitle>
    LAW #{law.number}
  </CardSubtitle>

  {#each law.content as content, section}
    <LawContent {content} section={section + 1} />
  {/each}
  <CardActions>
    <Button
      text
      outlined={law.userVote?.vote === "FOR"}
      class={underVote && "success-text"}
      on:click={() => vote("FOR")}
      disabled={!underVote}>FOR</Button
    >
    <Button
      text
      outlined={law.userVote?.vote === "ABSTAIN"}
      class={underVote && "primary-text"}
      on:click={() => vote("ABSTAIN")}
      disabled={!underVote}>ABSTAIN</Button
    >
    <Button
      text
      outlined={law.userVote?.vote === "AGAINST"}
      class={underVote && "error-text"}
      on:click={() => vote("AGAINST")}
      disabled={!underVote}>AGAINST</Button
    >
  </CardActions>
  <ExpansionPanels multiple>
    <ExpansionPanel>
      <span slot="header"> Information </span>

      <div class="info-container">
        <InfoRow title="Votes">
          <div>
            {#each law.votes as vote, i}
              <Vote {vote} />
            {/each}
          </div>
        </InfoRow>
        <InfoRow title="Legislator">
          <User user={law.legislator} />
        </InfoRow>
        <InfoRow title="Status">
          <Status status={law.status} />
        </InfoRow>

        {#if law.status === "UNDER_VOTE"}
          <InfoRow title="Time Left">
            {timeLeft}
          </InfoRow>
        {/if}
      </div>
    </ExpansionPanel>
  </ExpansionPanels>
</Card>

<style>
  .info-container {
    width: 80%;
  }
</style>
