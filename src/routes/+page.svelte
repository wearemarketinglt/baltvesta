<script>
    import Button from '$lib/components/Button.svelte';
    import Card from '$lib/components/Card.svelte';

    import __ from '$lib/strings.json';

    import {initializePreloader} from '$lib/animations';
    import {initializeGsapTextScrollAnimation} from '$lib/animations';

    import {onMount} from 'svelte';

    onMount(() => {
        initializePreloader();
        initializeGsapTextScrollAnimation();
    });

</script>

<main class="home-page">
    <section class="top-block animatetopblock">
        <div class="container mx-auto">
            <div class="flex md:flex-row min-h-screen flex-col items-center 2xl:pt-48 md:pt-32 md:pb-48 pt-24 pb-24 relative">
                <div class="lines absolute w-full h-full flex justify-between">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="md:w-5/12 w-12/12 md:mb-0 mb-12 px-3 relative">
                    <div class="title">
                        <h1 class="mb-[23px]">{@html __.home.topBlockTitle}</h1>
                    </div>
                    <div class="text">
                        <p>{@html __.home.topBlockText}</p>
                    </div>
                </div>
                <div class="w-1/12 px-3"></div>
                <div class="md:w-6/12 w-12/12 px-3 relative">
                    <div class="image-container-wrap">
                        <div class="image-container">
                            <video class="rounded-md withbg relative" autoplay muted loop>
                                <source src="/baltvesta.mp4"
                                        type="video/mp4">
                                <!-- Add additional <source> elements for other video formats if required -->
                                Your browser does not support the video tag.
                            </video>
                            <div class="before"></div>
                            <!--                        <img class="rounded-md withbg relative" src="/images/heroimg.jpg" alt="">-->
                        </div>
                        <img class="rounded-md absolute z-[2] smaller" src="/images/heroimgsmall.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="since-block">
        <div class="container mx-auto">
            <div class="w-12/12 lg:py-32 md:py-20 py-12">
                <div class="sticky-container text min-h-screen my-5 textw90">
                    <div class="sticky">
                        <span class="inline-block mb-[20px] uppercase subtitle">{@html __.home.secondBlockSubTitle}</span>
                        <h3 class="content__title" data-splitting data-effect16>{@html __.home.secondBlockText}</h3>
                    </div>
                </div>
                <Button href="{__.home.seccondBlockButtonLink}">
                    {@html __.home.seccondBlockButtonText}
                </Button>
                <div class="grid md:grid-cols-3 grid-cols-1 lg:gap-20 gap-10 mt-20">
                    {#each __.home.seccondBlockCols as col}
                    <div class="w-full">
                        <!--{pro.Icon.data.attributes.url}-->
                        <img class="sign mb-5" src="{col.img}" alt="">
                        <h4 class="mb-5">{@html col.title}</h4>
                        <p>{@html col.text}</p>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
    <section class="cards-block">
        <div class="container mx-auto">
            <div class="w-12/12 lg:py-32 md:py-20 py-12">
                <span class="inline-block uppercase">{@html __.home.thirdBlockSubTitle}</span>
                <div class="md:mb-24 mb-12">
                    <h2 class="my-5">{@html __.home.thirdBlockTitle}
                    </h2>
                </div>
                {#each __.home.thirdBlockCards as card}
                <Card
                        label="{card.cardSubTitle}"
                        title="{card.cardTitle}"
                        description="{card.cardText}"
                        operatingBusiness="Custom Operating Business"
                        labelForText="Operating business:"
                        text="{card.buttonText}"
                        imageUrl="{card.img}"
                        buttonUrl="{card.buttonLink}"
                        buttonText="{card.buttonText}"
                />
                {/each}
            </div>
        </div>
    </section>
    <section class="investments-block md:mb-40 mb-12 lg:pt-0 pt-12">
        <div class="container mx-auto">
            <span class="block md:text-center uppercase">
                {@html __.home.fourthBlockSubTitle}
            </span>
            <h2 class="md:text-center my-5">{@html __.home.fourthBlockTitle}</h2>
            <div class="grid md:grid-cols-3 grid-cols-1 ld:gap-20 gap-10 md:mt-20 mt-12">
                {#each __.home.fourthBlockCols as col}
                <div class="w-full">
                    <h4 class="mb-5">{@html col.title}</h4>
                    <div class="mb-4">
                        <p>{@html col.text}</p>
                    </div>
                    <a href="" class="simple-link">{@html col.linkText}</a>
                </div>
                {/each}
            </div>
        </div>
    </section>
</main>

<style lang="scss">
  .top-block {
    //background: var(--blue-color);
    background: transparent;
    //.container {
    //  @media screen and (min-width: 1536px) {
    //    max-width: 1920px;
    //    h1 {
    //        font-size: 4.5rem;
    //    }
    //    p {
    //        font-size: 1.5rem;
    //    }
    //    .image-container {
    //      height: 45rem;
    //    }
    //  }
    //}
    .lines {
      span {
        transform: scaleY(0);
        transform-origin: top;
      }
    }
    .smaller {
      max-width: 268px;
      left: 0;
      bottom: 0;
      @media screen and (max-width: 767px) {
        max-width: 40%;
      }
    }

    .image-container {
      //max-width: 532px;
      height: 514px;
      position: relative;

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        z-index: 1;
      }

      .before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--darkblue-color);
        transform: translateX(9.21%) translateY(9.5%);
        border-radius: 0.375rem;
        @media screen and (max-width: 767px) {
          transform: translateX(5%) translateY(5%);;
        }
      }
    }
  }

  .since-block {
    .sign {
      max-width: 48px;
    }

    .textw90 {
      width: calc(100% / 10 * 9);
    }
  }

  .animatetopblock {
    background: transparent;

    .title {
      opacity: 0;
      transform: translateY(-20px);
    }

    .text {
      opacity: 0;
      transform: translateY(-20px);
    }

    .image-container-wrap {
      video {
        opacity: 0;
        transform: translateY(-20px);
      }
      .smaller {
        opacity: 0;
        transform: translateX(-18.3%) translateY(50%);
      }
      .before {
        opacity: 0;
        transform: translateY(0) translateX(0);
      }
    }
  }
</style>