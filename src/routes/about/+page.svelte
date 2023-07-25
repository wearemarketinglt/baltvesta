<script>
    import Carousel from "$lib/components/Carousel.svelte";
    import Card from "$lib/components/Card.svelte";
    import {onMount} from 'svelte';

    onMount(() => {
        const items = document.querySelectorAll('.tabs ul li');
        const indicator = document.querySelector('.tabs ul .indicator');
        const tabsContent = document.querySelectorAll('.tab-contents .content');

        const firstItem = items[0]; // Select the first list item
        const firstContent = tabsContent[0]; // Select the first content
        // Add 'active' class to the first item
        firstItem.classList.add('active');
        // Add 'active' class to the first content
        firstContent.classList.add('active');

        const activeItem = document.querySelector('.tabs ul li.active');
        if (activeItem) {
            const activeItemHeight = activeItem.offsetHeight;
            const activeItemOffsetTop = activeItem.offsetTop;
            indicator.style.height = `${activeItemHeight}px`;
            indicator.style.transform = `translateY(${activeItemOffsetTop}px)`;
        }

        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                items.forEach((i) => i.classList.remove('active'));
                item.classList.add('active');

                const activeItemHeight = item.offsetHeight;
                const activeItemOffsetTop = item.offsetTop;
                indicator.style.height = `${activeItemHeight}px`;
                indicator.style.transform = `translateY(${activeItemOffsetTop}px)`;

                // Activate corresponding tabsContent
                tabsContent.forEach((content) => {
                    content.classList.remove('active');
                });
                tabsContent[index].classList.add('active');
            });
        });
    });

    let slides;

    let template1Slides = [
        {
            year: '2005',
            title: 'Baltvesta founded',
            description: 'The company was established with a vision of providing exceptional investment opportunities to clients',
        },
        {
            year: '2007',
            title: 'First metal processing investment',
            description: 'Baltvesta invested in a metal processing company, laying the foundation for its current investment focus',
        },
        {
            year: '2010',
            title: 'Expansion into new markets',
            description: 'With a growing reputation for success, Baltvesta expanded its investments beyond Lithuania and into other European countries',
        },
        {
            year: '2015',
            title: 'Launch of Umega',
            description: 'Baltvesta launched its own metal processing company, Umega, to further solidify its position in the industry',
        },
    ];

</script>

<main class="page-about">
    <section class="top-block md:pb-0 pb-12">
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
                    <h1 class="text-center relative w-full">Our Passion for Growth
                        <br>and Development</h1>
                    <p class="text-center">At Baltvesta, we are driven by a passion to achieve long-term growth and <br>development
                        through strategic investments and partnerships.</p>
                    <div class="image relative md:mt-28 mt-20">
                        <img class="rounded-md" src="/images/about.jpg" alt="">
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section class="text-block md:pt-20 md:pb-14 pt-12 pb-12">
        <div class="container mx-auto">
            <span class="inline-block">Our story</span>
            <div class="text mt-5 lg:w-10/12 w-12/12 md:pr-16 pr-0">
                <h3>Our story began with a passion for investing and a commitment to creating value for our clients.
                    Founded
                    in Lithuania, we have since expanded our reach to other European countries, bringing our expertise
                    and
                    experience to diverse markets. Our success is rooted in our disciplined investment approach, which
                    emphasizes long-term value creation and careful risk management.</h3>
            </div>
        </div>
    </section>
    <section class="carousel-section md:pt-14 pt-12 md:pb-32 pb-12 overflow-hidden">
        <div class="container mx-auto">
            <h5 class="mb-16">From Our Roots to the Present:
                <br>Our Journey in Investing</h5>
            <Carousel slides={template1Slides}/>
        </div>
    </section>
    <section class="approach-section md:pt-28 md:pb-11 pt-12 pb-12">
        <div class="container mx-auto">
            <div class="flex lg:flex-row flex-col gap72">
                <div class="lg:w-4/12 w-12/12 px-3 lg:mb-0 mb-12">
                    <span class="inline-block mb-6">OUR APPROACH</span>
                    <h5>Disciplined investment approach that is rooted in our core principles of integrity,
                        transparency, and long-term value creation.</h5>
                </div>
                <div class="boxes lg:w-8/12 w-12/12 grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
                    <div class="box px-3">
                        <img class="mb-3.5" src="/images/kringel.svg" alt="">
                        <h6 class="mb-3.5">Disciplined Approach</h6>
                        <p>Our disciplined approach focuses on long-term value creation by investing in fundamentally
                            sound businesses and partnering with portfolio companies to drive growth and
                            profitability.</p>
                    </div>
                    <div class="box px-3">
                        <img class="mb-3.5" src="/images/kringel.svg" alt="">
                        <h6 class="mb-3.5">Disciplined Approach</h6>
                        <p>Our disciplined approach focuses on long-term value creation by investing in fundamentally
                            sound businesses and partnering with portfolio companies to drive growth and
                            profitability.</p>
                    </div>
                    <div class="box px-3">
                        <img class="mb-3.5" src="/images/kringel.svg" alt="">
                        <h6 class="mb-3.5">Disciplined Approach</h6>
                        <p>Our disciplined approach focuses on long-term value creation by investing in fundamentally
                            sound businesses and partnering with portfolio companies to drive growth and
                            profitability.</p>
                    </div>
                    <div class="box px-3">
                        <img class="mb-3.5" src="/images/kringel.svg" alt="">
                        <h6 class="mb-3.5">Disciplined Approach</h6>
                        <p>Our disciplined approach focuses on long-term value creation by investing in fundamentally
                            sound businesses and partnering with portfolio companies to drive growth and
                            profitability.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cards-block">
        <div class="container mx-auto">
            <div class="w-12/12 md:py-32 py-12">
                <span class="inline-block">Investment FOCUS</span>
                <div class="md:mb-24 mb-12">
                    <h2 class="my-5">Building the Future Through <br>Strategic Investments: Our <br>Areas of Expertise
                    </h2>
                </div>
                <Card
                        label="Metal processing"
                        title="Investing in the Future of Metal Processing"
                        description="We believe in the importance of technological innovation and sustainable practices in the metal processing industry. Our investments aim to support companies that share these values and strive to achieve excellence in their field."
                        operatingBusiness="Custom Operating Business"
                        labelForText="Operating business:"
                        text="Umega Group, a company dedicated to technological innovation and sustainable practices in the industry."
                        imageUrl="/images/card.jpg"
                        buttonUrl="example.com"
                        buttonText="Learn more"
                />
                <Card
                        label="Real estate manaManagement & devedevelopment"
                        title="Building a Sustainable Future for Real Estate"
                        description="Our investments in commercial real estate aim to promote sustainable and innovative approaches to construction and urban development. We are committed to creating long-term value for our investors, while contributing to the well-being of local communities."
                        operatingBusiness="Custom Operating Business"
                        labelForText="Operating business:"
                        text="We are currently running two commercial real estate projects to expand our portfolio and maximize returns for our investors."
                        imageUrl="/images/card2.jpg"
                        buttonUrl="example.com"
                        buttonText="Learn more"
                />
            </div>
        </div>
    </section>
    <section class="tabs-section">
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
                    <span class="inline-block mb-6">our operating businesses</span>
                    <h2>Forward Thinking
                        <br>Businesses</h2>
                    <div class="flex md:flex-row flex-col md:pt-28 pt-12">
                        <div class="md:w-3/12 w-12/12 tabs md:mb-0 mb-12">
                            <ul class="md:block flex md:overflow-x-visible overflow-x-scroll">
                                <span class="indicator"></span>
                                <li>Metal processing</li>
                                <li>Real estate</li>
                                <li>Pharmacy</li>
                                <li>Financial services</li>
                            </ul>
                        </div>
                        <div class="w-1/12"></div>
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
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
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
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
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
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
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
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
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
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
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
                                            industrial and agricultural customers.UMEGA GROUP are full scope specialists in
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
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-33px);
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
            margin-bottom: 60px;
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