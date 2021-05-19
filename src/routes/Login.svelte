<script lang="ts">
    import { mdiAlert } from "@mdi/js";
    import {
        TextField,
        Button,
        ProgressCircular,
        Snackbar,
        Icon,
    } from "svelte-materialify";
    import { sendCode } from "../services/loginService";

    function sendClick() {
        loading = true;
        sendCode(phone)
            .then(() => {
                loading = false;
                showCode = true;
            })
            .catch((e) => {
                loading = false;
                error = true;
            });
    }

    let message = "Send Code";
    let showCode = true;
    let code = "";
    let phone = "";
    let loading = false;
    let error = false;

    $: message = showCode ? "Resend Code" : "Send Code";

    const codeRules = [(v) => v.length === 6 || 'Code input must be exactly 6 digits!', (v) => v.test(/^\d+$/) || 'Code must be numerical!']
</script>

<h3>Login</h3>

<div class="d-flex flex-column align-center ma-auto" style='max-width: 50rem'>
    <TextField bind:phone placeholder="Ex. 972544805278" outlined
        >Phone</TextField
    >
    {#if showCode}
        <TextField bind:code rules={codeRules} outlined counter={6}>6 Digit Code</TextField>
    {/if}
    <div class="d-flex flex-column justify-center align-center">
        {#if showCode}
            <Button class="primary-color" on:click>Login</Button>
        {/if}

        {#if loading}
            <ProgressCircular indeterminate color="primary" />
        {/if}

        <Button
            text={showCode}
            class={showCode ? "primary-text" : "primary-color"}
            on:click={sendClick}>{message}</Button>
    </div>
    <Snackbar
        class="flex-column error-color"
        bind:active={error}
        bottom
        center
        timeout={10000}
    >
        <Icon path={mdiAlert} />
        Sending code failed, check that the phone number is in the right format and
        that the whatsapp bot is active
    </Snackbar>
</div>
