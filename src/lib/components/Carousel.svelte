<script>

    import emblaCarouselSvelte from 'embla-carousel-svelte';

    export let slides = [];

    const emblaConfig = {
        options: {
            loop: false,
            dragFree: true,
            align: 'start',
        },
    }


</script>

<div class="embla" use:emblaCarouselSvelte={emblaConfig}>
    <div class="embla__container">
        {#each slides as slide}
            <div class="embla__slide">
                <div class="wrap mb-4 relative">
                    <span class="inline-block">{slide.year}</span>
                </div>
                <p class="bigger mb-2">{slide.title}</p>
                <p>{slide.description}</p>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
  .embla {
    overflow: unset;
  }

  .embla__container {
    display: flex;
    column-gap: 18px;
  }

  .embla__slide {
    min-width: 386px;
    padding: 0 12px;
    .wrap {
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 74%;
        height: 1px;
        background: var(--blue-color);
      }
      span {
        background: var(--blue-color);
        border-radius: 23px;
        padding: 10px 18px;
        font-weight: 500;
      }
    }
  }
</style>
