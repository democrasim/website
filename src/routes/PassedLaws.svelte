<script lang="ts">
  import LawComponent from "../components/Law.svelte";
  import { Select } from "svelte-materialify";
  import type { Law } from "../types";
  import { writable } from "svelte/store";
  import { getLawsByStatuses } from "../services/lawService";
  import { member, laws as lawStore } from "../util/stores";

  const items = [
    { name: "Passed", value: "PASSED" },
    { name: "Failed", value: "FAILED" },
    { name: "Under Vote", value: "UNDER_VOTE" },
    { name: "Vetoed", value: "VETOED" },
    { name: "Canceled", value: "CANCELED" },
  ];

  let value = ["PASSED"];

  $: if ($member && value) {
    getLawsByStatuses(value).then(lawStore.set);
  } else {
    $lawStore = [];
  }
</script>

<h3>{value.join(",").toLowerCase()} Laws</h3>
<div class="select">
  <Select {items} bind:value multiple={true} chips={true} />
</div>
{#each $lawStore as law}
  <LawComponent {law} />
{/each}

<style lang="scss">
  .select {
    width: 15rem;
  }
</style>
