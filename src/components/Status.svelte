<script lang="ts">
  import { Icon, ListItem } from "svelte-materialify";
  import {
    mdiCheckCircle,
    mdiTimerSand,
    mdiAlertDecagram,
    mdiAlert,
  } from "@mdi/js";
  import Vote from "./Vote.svelte";
  export let status;
</script>

{#if status == "PASSED"}
  <ListItem>
    <span slot="prepend">
      <Icon path={mdiCheckCircle} class="success-span" />
    </span>
    <span>Passed</span>
  </ListItem>
{:else if status == "UNDER_VOTE"}
  <ListItem>
    <span slot="prepend">
      <Icon path={mdiTimerSand} spin class="primary-span" />
    </span>
    <span>Under Vote</span>
  </ListItem>
{:else if status == "FAILED"}
  <ListItem>
    <span slot="prepend">
      <Icon path={mdiAlertDecagram} class="error-span" />
    </span>
    <span>Failed</span>
  </ListItem>
{:else if status == "VETOED"}
  <ListItem>
    <span slot="prepend">
      <Icon path={mdiAlertDecagram} class="error-span" />
    </span>
    <span>Vetoed</span>
  </ListItem>
{:else if status == "CANCELED"}
  <ListItem>
    <span slot="prepend">
      <Icon path={mdiAlert} class="warning-span" />
    </span>
    <span>Canceled</span>
  </ListItem>
{/if}
