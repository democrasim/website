<script lang="ts">
import { Button, Card, CardActions, CardSubtitle, CardTitle, Icon } from "svelte-materialify";

export let law;
</script>

<style></style>

<Card style="max-width: 500px; margin: 10px">
<CardTitle>{law.contentstring}</CardTitle>
    <CardSubtitle>LAW #{law.id}</CardSubtitle>
    <CardActions>
        
      <Button text>FOR</Button>
      <Button text>ABSTAIN</Button>
      <Button text>AGAINST</Button>
    </CardActions>
</Card>