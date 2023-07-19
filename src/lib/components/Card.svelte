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


<div class="card flex items-center py-16">
    <div class="w-6/12 left-side">
        <span class="inline-block mb-7">{label}</span>
        <h3 class="mb-5">{title}</h3>
        <div class="text mb-5">
            <p>{description}</p>
        </div>
        <label class="">
            {labelForText}
            <div class="text mt-2.5 mb-5">
                <p>{text}</p>
            </div>
        </label>

        <Button href="{buttonUrl}">
            {buttonText}
        </Button>
    </div>
    <div class="w-6/12">
        <img class="rounded-md" src="{imageUrl}" alt="">
    </div>

</div>

<style lang="scss">
  .card {
    position: relative;
    margin-bottom: 100px;

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
    }

    &:nth-of-type(odd) {
      flex-direction: row-reverse;

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
  }
</style>
