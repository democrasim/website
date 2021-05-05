<script lang="ts">
    import { Button } from 'svelte-materialify';
</script>

<main class="main">

    <div class="main__title">
        <div class="main__content">
            <h1 class="main__content--title">Democrasim</h1>
            <p class="main__content--paragraph">Vote. Propose. Legislate.</p>
            <Button rounded>Sign Up</Button>
        </div>
        <div class="main__photo">
        </div>
    </div>
</main>

<style lang="scss">

    .main {
        &__title {
        }

        &__content {
            padding: 15rem;
            display: flex;
            align-items: center;
            flex-direction: column;

            &--title {
                font-weight: 800;
            }

            &--paragraph {
                margin-bottom: 3rem;
            }
        }
    }
</style>