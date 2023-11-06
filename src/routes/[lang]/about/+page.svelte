<script>
    import Carousel from "$lib/components/Carousel.svelte";
    import Card from "$lib/components/Card.svelte";

    import __ from '$lib/strings.json';

    import {initializePreloaderAbout} from '$lib/animations';
    import {initializeGsapTextScrollAnimation} from '$lib/animations'

    import {i, languages, switchLanguage} from '@inlang/sdk-js'

    import {onMount, tick} from 'svelte';


    let activeTab = 0; // Set the default active tab

    // Get the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const activeTabParam = urlParams.get('activeTab');
    activeTab = parseInt(activeTabParam, 10) || 0;


    onMount(async () => {
        await tick(); // Wait for the component to render

        initializePreloaderAbout();
        initializeGsapTextScrollAnimation();

        const items = document.querySelectorAll('.tabs ul li');
        const indicator = document.querySelector('.tabs ul .indicator');
        const tabsContent = document.querySelectorAll('.tab-contents .content');

        function activateTab(index) {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');

            const activeItemHeight = items[index].offsetHeight;
            const activeItemOffsetTop = items[index].offsetTop;
            indicator.style.height = `${activeItemHeight}px`;
            indicator.style.transform = `translateY(${activeItemOffsetTop}px)`;

            tabsContent.forEach(content => content.classList.remove('active'));
            tabsContent[index].classList.add('active');
        }

// Get the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const activeTabParam = urlParams.get('activeTab');
        const activeTabIndex = parseInt(activeTabParam, 10) || 0;

// Activate the tab based on the URL parameter
        if (activeTabIndex >= 0 && activeTabIndex < items.length) {
            activateTab(activeTabIndex);

            // Check if the activeTabParam is present in the URL
            const forwardThinkingSection = document.getElementById('forwardthinking');
            if (forwardThinkingSection && activeTabParam !== null) {
                forwardThinkingSection.style.scrollMarginTop = '0px'; // Adjust the value as needed
                forwardThinkingSection.focus();
            }
        }

        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                activateTab(index);
            });
        });

        const parents = document.querySelectorAll('.rowofcols');

        parents.forEach(parent => {
            const childCount = parent.querySelectorAll('.col').length;

            if (childCount === 2) {
                parent.classList.add('two-children-style');
            } else if (childCount === 3) {
                parent.classList.add('three-children-style');
            }
        });


        const menuItems = document.querySelectorAll('.sub-menu li a');
        menuItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                items[i].click();
            });
        });
    });

    let slides;

    let template1Slides = [
        {
            year: i('about.thirdBlockCols.0.year'),
            title: i('about.thirdBlockCols.0.title'),
            description: i('about.thirdBlockCols.0.text'),
        },
        {
            year: i('about.thirdBlockCols.1.year'),
            title: i('about.thirdBlockCols.1.title'),
            description: i('about.thirdBlockCols.1.text'),
        },
        {
            year: i('about.thirdBlockCols.2.year'),
            title: i('about.thirdBlockCols.2.title'),
            description: i('about.thirdBlockCols.2.text'),
        },
        {
            year: i('about.thirdBlockCols.3.year'),
            title: i('about.thirdBlockCols.3.title'),
            description: i('about.thirdBlockCols.3.text'),
        },
        {
            year: i('about.thirdBlockCols.4.year'),
            title: i('about.thirdBlockCols.4.title'),
            description: i('about.thirdBlockCols.4.text'),
        },
        {
            year: i('about.thirdBlockCols.5.year'),
            title: i('about.thirdBlockCols.5.title'),
            description: i('about.thirdBlockCols.5.text'),
        },
        {
            year: i('about.thirdBlockCols.6.year'),
            title: i('about.thirdBlockCols.6.title'),
            description: i('about.thirdBlockCols.6.text'),
        },
        {
            year: i('about.thirdBlockCols.7.year'),
            title: i('about.thirdBlockCols.7.title'),
            description: i('about.thirdBlockCols.7.text'),
        },
        {
            year: i('about.thirdBlockCols.8.year'),
            title: i('about.thirdBlockCols.8.title'),
            description: i('about.thirdBlockCols.8.text'),
        },
    ]

</script>

<main class="page-about">
    <section class="top-block md:pb-0 pb-12 animatetopblockabout">
        <div class="container mx-auto">
            <div class="md:pt-48 pt-24 relative">
                <div class="lines absolute w-full h-full flex justify-between">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="relative px-3">
                    <h1 class="text-center relative w-full mb-[28px]">{@html i('about.topBlockTitle')}</h1>
                    <p class="text-center">{@html i('about.topBlockDescription')}</p>
                    <div class="image relative md:mt-28 mt-20">
                        <img class="rounded-md" src="/images/about.jpg" alt="">
                        <div class="before"></div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section class="text-block md:pt-20 md:pb-14 pt-12 pb-12">
        <div class="container mx-auto">
            <div class="text min-h-[300vh] sticky-container mt-5 lg:w-10/12 w-12/12 md:pr-16 pr-0">
                <div class="sticky">
                    <span class="inline-block uppercase mb-[20px] subtitle">{@html i('about.secondBlockSubTItle')}</span>
                    <h3 class="content__title" data-splitting data-effect16>{@html i('about.secondBlockText')}</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="carousel-section md:pt-14 pt-12 md:pb-32 pb-12 overflow-hidden">
        <div class="container mx-auto">
            <h5 class="mb-16">{@html i('about.thirdBlockTitle')}</h5>
            <Carousel slides={template1Slides}/>
        </div>
    </section>
    <section class="approach-section md:pt-28 md:pb-11 pt-12 pb-12">
        <div class="container mx-auto">
            <div class="flex lg:flex-row flex-col gap72">
                <div class="lg:w-4/12 w-12/12 px-3 lg:mb-0 mb-12">
                    <span class="inline-block mb-6 uppercase">{@html i('about.fourthBlockSubTitle')}</span>
                    <h5>{@html i('about.fourthBlockTitle')}</h5>
                </div>
                <div class="boxes lg:w-8/12 w-12/12 grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
                    {#each __.about.fourthBlockCols as col}
                        <div class="box px-3">
                            <img class="mb-3.5" src="/images/kringel.svg" alt="">
                            <h6 class="mb-3.5">{@html col.title}</h6>
                            <p>{@html col.text}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
    <section class="cards-block">
        <div class="container mx-auto">
            <div class="w-12/12 md:py-32 py-12">
                <span class="inline-block uppercase">{@html i('about.fifthBlockSubTitle')}</span>
                <div class="md:mb-24 mb-12">
                    <h2 class="my-5">{@html i('about.fifthBlockTitle')}</h2>
                </div>
                {#each __.about.fifthBlocCards as col}
                    <Card
                            label="{col.cardSubTitle}"
                            title="{col.cardTitle}"
                            description="{col.cardText}"
                            operatingBusiness="Custom Operating Business"
                            labelForText=""
                            text=""
                            imageUrl="{col.img}"
                            buttonUrl=""
                            buttonText=""
                    />
                {/each}
            </div>
        </div>
    </section>
    <section id="forwardthinking" class="tabs-section">
        <div class="container mx-auto">
            <div class="md:pt-28 pt-12 md:pb-20 pb-12 relative px-3">
                <div class="lines absolute w-full h-full flex justify-between">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="relative">
                    <span class="inline-block mb-6 uppercase">{i('about.sixthBlockSubTitle')}</span>
                    <h2>{@html i('about.sixthBlockTitle')}</h2>
                    <div class="flex md:flex-row flex-col md:pt-28 pt-12">
                        <div class="md:w-3/12 w-12/12 tabs md:mb-0 mb-12">
                            <ul class="md:block flex md:overflow-x-visible overflow-x-scroll">
                                <span class="indicator"></span>
                                {#each __.about.sixthBlockTabs as tab, i}
                                    <li id="tab{i}">{tab.tab}</li>
                                {/each}
                            </ul>
                        </div>
                        <div class="w-1/12"></div>
                        <div class="md:w-8/12 w-12/12 tab-contents">
                            {#each __.about.sixthBlockTabsContent as content}
                                <div class="content">
                                    {#each content.singles as single}
                                        <div class="single">
                                            <img src="{single.img}" alt="">
                                            {#if single.sub}
                                            <div class="subhead mt-[10px]">
                                                <p>{single.sub}</p>
                                            </div>
                                            {/if}
                                            <div class="title">
                                                <h3 clas="mt-[10px]">{single.title}</h3>
                                            </div>
                                            <div class="text">
                                                {@html single.text}
                                                <a href="{single.link}" class="simple-link">{single.linkText}</a>
                                            </div>
                                            {#if single.cols}
                                                <div class="row rowofcols flex md:gap-[74px] gap-10 flex-wrap">
                                                    {#each single.cols as col}
                                                        <div class="col">
                                                            <h3>{col.title}</h3>
                                                            <p>{col.text}</p>
                                                        </div>
                                                    {/each}
                                                </div>
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style lang="scss">
  .top-block {
    background: var(--blue-color);
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 240px;
      background: var(--white-color);
      z-index: 1;
      @media screen and (max-width: 767px) {
        height: 20%;
      }
    }

    .image {
      .before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 91%;
        height: 100%;
        background: var(--darkblue-color);
        border-radius: 0.375rem;
        z-index: 1;
      }

      img {
        position: relative;
        z-index: 2;
      }
    }
  }

  .approach-section {
    .gap72 {
      column-gap: 72px;
    }

    .boxes {
      .box {
        img {
          max-width: 48px;
        }
      }
    }
  }

  .tabs-section {
    background: var(--blue-color);

    .tabs {
      ul {
        border-left: 3px solid rgba(140, 152, 164, 0.10);
        position: relative;
        @media screen and (max-width: 767px) {
          border-left: unset;
        }

        .indicator {
          position: absolute;
          top: 0;
          left: -3px;
          width: 3px;
          background: var(--darkblue-color);
          padding: 0;
          transition: var(--tr-all);
          @media screen and (max-width: 767px) {
            display: none;
          }
        }

        li {
          padding: 8px 19px;
          color: var(--grey-color);
          cursor: pointer;
          transition: var(--tr-all);
          @media screen and (max-width: 767px) {
            flex: 1;
            width: 100%;
            white-space: nowrap;
          }

          &:global(.active) {
            color: var(--darkblue-color);
          }
        }
      }
    }

    .tab-contents {
      .content {
        display: none;

        &:global(.active) {
          display: block;
        }

        .single {
          &:not(:last-child) {
            margin-bottom: 100px;
          }

          img {
            max-width: 175px;
            margin-bottom: 40px;
          }

          .title {
            h3 {
              margin-top: 5px;
              margin-bottom: 23px;
            }
          }

          .text {
            margin-bottom: 50px;

            ul:global {
              list-style: initial;
            }
          }

          .row {
            //&:global(.two-children-style .col) {
            //  max-width: 300px;
            //}
            .col {
              width: 100%;
              flex: 1;
              @media screen and (max-width: 500px) {
                flex: unset;

              }

              h3 {
                margin-bottom: 16px;
              }
            }
          }
        }
      }
    }
  }

  .animatetopblockabout {
    background: transparent;

    .lines {
      span {
        transform: scaleY(0);
        transform-origin: top;
      }
    }

    h1, p {
      opacity: 0;
      transform: translateY(-20px);
    }

    img {
      opacity: 0;
      transform: translateY(-20px);
    }

    .before {
      opacity: 0;
      transform: translateX(-50%) translateY(0);
      transform-origin: bottom;
    }
  }

</style>