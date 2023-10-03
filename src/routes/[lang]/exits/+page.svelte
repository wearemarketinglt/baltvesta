<script>
    import __ from '$lib/strings.json';
    import { i, languages, switchLanguage } from '@inlang/sdk-js'
</script>

<main class="page-exits">
    <section class="tabs-section">
        <div class="container mx-auto">
            <div class="md:pt-48 pt-24 pb-20 relative px-3">
                <div class="lines absolute w-full h-full flex justify-between">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="relative">
                    <span class="inline-block mb-6 uppercase">{i('exits.topBlockSubTitle')}</span>
                    <h1>{@html i('exits.topBlockTitle')}</h1>
                    <div class="flex md:pt-28 pt-16">
                        <div class="md:w-8/12 w-12/12 tab-contents">
                            <div class="content">
                                {#each __.exits.singles as single}
                                    <div class="single">
                                        <img src="{single.img}" alt="">
                                        <div class="title">
                                            <h3>{single.title}</h3>
                                        </div>
                                        <div class="text">
                                            {@html single.text}
                                            <a href="{single.link}" class="simple-link">{single.linkText}</a>
                                        </div>
                                        <div class="row flex md:gap-[74px] gap-10 flex-wrap">
                                            {#each single.cols as col}
                                                {#if col.title || col.text}
                                                <div class="col">
                                                    <h3>{col.title}</h3>
                                                    <p>{col.text}</p>
                                                </div>
                                                {/if}
                                            {/each}
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style lang="scss">
  .tabs-section {
    background: var(--blue-color);

    .tabs {
      ul {
        border-left: 3px solid rgba(140, 152, 164, 0.10);
        position: relative;

        .indicator {
          position: absolute;
          top: 0;
          left: -3px;
          width: 3px;
          background: var(--darkblue-color);
          padding: 0;
          transition: var(--tr-all);
        }

        li {
          padding: 8px 19px;
          color: var(--grey-color);
          cursor: pointer;
          transition: var(--tr-all);

          &:global(.active) {
            color: var(--darkblue-color);
          }
        }
      }
    }

    .tab-contents {
      .content {
        //display: none;

        &:global(.active) {
          display: block;
        }

        .single {
          &:not(:last-child) {
            margin-bottom: 120px;
          }

          img {
            max-width: 175px;
          }

          .title {
            h3 {
              margin-top: 35px;
              margin-bottom: 23px;
            }
          }

          .text {
            margin-bottom: 50px;
          }

          .row {
            .col {
              max-width: 185px;
              width: 100%;

              h3 {
                margin-bottom: 16px;
              }
            }
          }
        }
      }
    }
  }
</style>