<script lang="typescript">
  import { Col, Row } from "svelte-materialify";

  export let title: string = "";
</script>

<div class="row">
  <Col><span class="field">{title}</span></Col>
  <div class="value"><slot /></div>
</div>

<style>
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .field {
    display: inline-block;
    width: 5rem;
    color: gray;
    text-transform: uppercase;
    font-size: 14px;
  }
</style>
