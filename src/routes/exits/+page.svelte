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
                    <span class="inline-block mb-6 uppercase">Exits</span>
                    <h1>Beyond Numbers: The Story of <br>Our Successful Investments</h1>
                    <div class="flex md:pt-28 pt-16">
                        <div class="md:w-8/12 w-12/12 tab-contents">
                            <div class="content">
                                <div class="single">
                                    <img src="/images/tabimg.svg" alt="">
                                    <div class="title">
                                        <h3>United by passion
                                            <br>for crafting things that last</h3>
                                    </div>
                                    <div class="text">
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists
                                            in
                                            industrial metal: we carry out R&D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a>
                                    </div>
                                    <div class="row flex md:gap-[74px] gap-10 flex-wrap">
                                        <div class="col">
                                            <h3>3</h3>
                                            <p>Unique metal processing companies</p>
                                        </div>
                                        <div class="col">
                                            <h3>1,390</h3>
                                            <p>Employers</p>
                                        </div>
                                        <div class="col">
                                            <h3>12 ml. eur</h3>
                                            <p>Annual income</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="single">
                                    <img src="/images/tabimg.svg" alt="">
                                    <div class="title">
                                        <h3>United by passion
                                            <br>for crafting things that last</h3>
                                    </div>
                                    <div class="text">
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists
                                            in
                                            industrial metal: we carry out R&D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a>
                                    </div>
                                    <div class="row flex md:gap-[74px] gap-10 flex-wrap">
                                        <div class="col">
                                            <h3>3</h3>
                                            <p>Unique metal processing companies</p>
                                        </div>
                                        <div class="col">
                                            <h3>1,390</h3>
                                            <p>Employers</p>
                                        </div>
                                        <div class="col">
                                            <h3>12 ml. eur</h3>
                                            <p>Annual income</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="single">
                                    <img src="/images/tabimg.svg" alt="">
                                    <div class="title">
                                        <h3>United by passion
                                            <br>for crafting things that last</h3>
                                    </div>
                                    <div class="text">
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists
                                            in
                                            industrial metal: we carry out R&D, provide processing services and build a
                                            range of proprietary products for industrial and agricultural customers.</p>
                                        <p>UMEGA GROUP are full scope specialists in industrial metal: we carry out R&D,
                                            provide processing services and build a range of proprietary products for
                                            industrial and agricultural customers.</p>
                                        <a href="">Discover more</a>
                                    </div>
                                    <div class="row flex md:gap-[74px] gap-10 flex-wrap">
                                        <div class="col">
                                            <h3>3</h3>
                                            <p>Unique metal processing companies</p>
                                        </div>
                                        <div class="col">
                                            <h3>1,390</h3>
                                            <p>Employers</p>
                                        </div>
                                        <div class="col">
                                            <h3>12 ml. eur</h3>
                                            <p>Annual income</p>
                                        </div>
                                    </div>
                                </div>
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