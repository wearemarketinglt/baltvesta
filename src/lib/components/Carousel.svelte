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
                <p class="title bigger mb-2">{slide.title}</p>
                <p class="desc">{slide.description}</p>
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
    display: flex;
    flex-direction: column;
    .wrap {
      display: flex;
      flex-direction: row-reverse;
        align-items: center;
      justify-content: space-between;
      gap: 15px;
      &:before {
        content: '';
        position: relative;
        width: 100%;
        height: 1px;
        background: var(--blue-color);
      }
      span {
        background: var(--blue-color);
        border-radius: 23px;
        padding: 10px 18px;
        font-weight: 500;
        flex-shrink: 0;
      }
    }
    //.title {
    //  flex-grow: 1;
    //  display: flex;
    //  align-items: flex-start;
    //}
  }
</style>
