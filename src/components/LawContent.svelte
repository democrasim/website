<script lang="ts">
  import {
    mdiAccountPlus,
    mdiBook,
    mdiBookmark,
    mdiCalendar,
    mdiCalendarCheck,
    mdiCancel,
  } from "@mdi/js";

  import {
    ListItem,
    Chip,
    Icon,
    Subheader,
    Container,
    Card,
    CardTitle,
  } from "svelte-materialify";
  import type { Content } from "../types";
  import InfoRow from "./InfoRow.svelte";
  import User from "./User.svelte";

  export let content: Content;
  export let section: number;

  let { type } = content;
</script>

<Card raised={false} outlined={true}>
  <CardTitle>
    §{section}
    <Chip outlined class="ma-2 primary-text">
      {#if type == "FACT"}
        <Icon path={mdiBook} /> <span>FACT</span>
      {:else if type == "REQUIREMENT"}
        <Icon path={mdiCalendarCheck} /> <span>REQUIREMENT</span>
      {:else if type == "EVENT"}
        <Icon path={mdiCalendar} /> <span>EVENT</span>
      {:else if type == "BAN"}
        <Icon path={mdiCancel} /> <span>BAN</span>
      {:else if type == "ADD_MEMBER"}
        <Icon path={mdiAccountPlus} /> <span>ADD MEMBER</span>
      {:else}
        <Icon path={mdiBookmark} /> <span>{content.type}</span>
      {/if}
    </Chip>
  </CardTitle>
  {#if content.description}
    {content.description}
  {/if}
  <Container>
    {#if content.member}
      <InfoRow title="Member to add">
        <User user={content.member} />
      </InfoRow>
    {/if}
    {#if content.reason}
      <InfoRow title="Reason">
        {content.reason}
      </InfoRow>
    {/if}
  </Container>
</Card>
