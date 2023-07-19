<script>
    export let href;
</script>

<a href="{href}" class="button">
    <slot />
</a>

<style>
    .button {
        display: inline-block;
        padding: 1rem 1.875rem;
        background: var(--darkblue-color);
        border-radius: 0.625rem;
        text-decoration: none;
        color: var(--white-color);
        margin: 10px 0;
    }
</style>