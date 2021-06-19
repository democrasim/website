<script lang="ts">
  import { mdiAlert } from "@mdi/js";
  import { navigate } from "svelte-routing";
  import {
    TextField,
    Button,
    ProgressCircular,
    Snackbar,
    Icon,
  } from "svelte-materialify";
  import { sendCode, login } from "../services/loginService";
  import { memberId } from "../util/stores";

  function sendClick() {
    loading = true;
    sendCode(phone)
      .then(() => {
        loading = false;
        showCode = true;
      })
      .catch((e) => {
        console.error(e);
        loading = false;
      });
  }

  function sendLogin() {
    loading = true;
    login(phone, code)
      .then(() => {
        loading = false;

        navigate("/");
      })
      .catch((e) => {
        loading = false;
        console.error(e);
      });
  }

  let message = "Send Code";
  let showCode = false;
  let code = "";
  let phone = "";
  let loading = false;
  let codeError = false;
  let loginError = false;

  $: message = showCode ? "Resend Code" : "Send Code";

  const codeRules = [
    (v) => v.length === 6 || "Code input must be exactly 6 digits!",
  ];
</script>

<h3>Login</h3>

<div class="d-flex flex-column align-center ma-auto" style="max-width: 50rem">
  <TextField
    disabled={showCode}
    bind:value={phone}
    placeholder="Ex. 972544805278"
    outlined>Phone</TextField
  >
  {#if showCode}
    <TextField bind:value={code} rules={codeRules} outlined counter={6}
      >6 Digit Code</TextField
    >
  {/if}
  <div class="d-flex flex-column justify-center align-center">
    {#if showCode}
      <Button class="primary-color" on:click={sendLogin}>Login</Button>
    {/if}

    <Button
      text={showCode}
      class={showCode ? "primary-text" : "primary-color"}
      on:click={sendClick}>{message}</Button
    >

    {#if loading}
      <ProgressCircular indeterminate color="success" />
    {/if}
  </div>
  <Snackbar
    class="flex-column error-color"
    bind:active={codeError}
    bottom
    center
    timeout={10000}
  >
    <Icon path={mdiAlert} />
    Sending code failed, check that the phone number is in the right format and that
    the whatsapp bot is active
  </Snackbar>

  <Snackbar
    class="flex-column error-color"
    bind:active={loginError}
    bottom
    center
    timeout={10000}
  >
    <Icon path={mdiAlert} />
    code is not valid or expired
  </Snackbar>
</div>
