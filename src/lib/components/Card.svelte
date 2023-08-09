<script>
    import Button from "./Button.svelte"

    export let label = "";
    export let title = "";
    export let description = "";
    export let labelForText = "";
    export let text = "";
    export let imageUrl = "";
    export let buttonUrl = "";
    export let buttonText = "";
</script>


<div class="card flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 items-center lg:py-16 lg:p-0 md:p-14 p-8">
    <div class="lg:w-6/12 w-12/12 left-side">
        <span class="inline-block mb-7 uppercase">{label}</span>
        <h3 class="mb-5">{title}</h3>
        <div class="text mb-5">
            <p>{description}</p>
        </div>
        {#if labelForText && text}
        <label class="">
            {labelForText}
            <div class="text mt-2.5 mb-5">
                <p>{text}</p>
            </div>
        </label>
        {/if}
        {#if buttonUrl && buttonText}
        <Button href="{buttonUrl}">
            {buttonText}
        </Button>
        {/if}
    </div>
    <div class="lg:w-6/12 w-12/12">
        <img class="rounded-md" src="{imageUrl}" alt="">
    </div>

</div>

<style lang="scss">
  .card {
    position: relative;
    margin-bottom: 100px;
    @media screen and (max-width: 767px) {
      margin-bottom: 50px;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: calc(100% / 12 * 9);
      background: var(--blue-color);
      z-index: -1;
      border-radius: 0.375rem;
      @media (max-width: 1023px) {
        width: 100%;
      }
    }

    &:nth-of-type(odd) {
      flex-direction: row-reverse;
      @media (max-width: 1023px) {
        flex-direction: column-reverse;
      }
      &:before {
        left: unset;
        right: 0;
      }
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .left-side {
    padding: 0 75px;
    @media (max-width: 1023px) {
      padding: 0;
    }
  }
</style>
