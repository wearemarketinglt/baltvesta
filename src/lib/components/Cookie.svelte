<script>
    import {onMount} from 'svelte';
    import Button from "$lib/components/Button.svelte";

    let accepted = false;

    onMount(() => {
        // Check if the user has already accepted cookies
        const hasAccepted = localStorage.getItem('cookieAccepted');
        if (hasAccepted) {
            accepted = true;
        }
    });

    function acceptCookies() {
        accepted = true;
        // Store the user's acceptance in local storage
        localStorage.setItem('cookieAccepted', 'true');
    }
</script>

{#if !accepted}
    <div class="cookie-bar">
        <p>
            This website uses <a href="/en/privacy"><u>cookies</u></a> to ensure the best experience on our website.
        </p>
        <div class="button--hyperion" on:click={acceptCookies}>
            <span><span>Accept</span></span>
        </div>
    </div>
{/if}

<style lang="scss">
  .cookie-bar {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100%;
    max-width: 490px;
    background-color: var(--blue-color);
    padding: 10px;
    text-align: left;
    display: flex;
    align-items: center;
    padding: 23px 32px;
    column-gap: 32px;
    border-radius: 10px;
    z-index: 9999;
    @media screen and (max-width: 530px) {
      right: 0;
      bottom: 0;
      max-width: unset;
      flex-wrap: wrap;
      row-gap: 20px;
    }

    p {
      margin: 0;
    }
  }

  .button--hyperion {
    flex-shrink: 0;
  }
</style>