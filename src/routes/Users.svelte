<script>
    import User from '@components/User.svelte';

    import { allMembers } from '@services/userService'

    import { members } from '@util/stores';

    allMembers().then(list => members.set(list)); 

    let users = $members;
    

</script>

{#each users as user}
    <User {user} />
{/each}