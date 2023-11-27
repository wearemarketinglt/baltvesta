<script>
    import Button from '$lib/components/Button.svelte';
</script>

<div class="cta">
    <div class="container relative mx-auto">
        <div class="top md:py-24 py-12">
            <div class="w-full flex md:flex-row flex-col">
                <div class="md:w-6/12 w-12/12">
                    <h2 class="mb-5">Experience the Power of
                        Strategic Investing</h2>
                    <p>Contact us today to learn more about how we can help you maximize your investment potential.</p>
                </div>
                <div class="w-2/12"></div>
                <div class="md:w-3/12 w-12/12 md:mt-0 mt-12 flex md:justify-center md:items-center items-start">
                    <Button href="/en/contacts">
                        Get in touch
                    </Button>
                </div>
                <div class="w-1/12"></div>
            </div>
        </div>
    </div>
</div>
<footer class="footer">
    <div class="container mx-auto">
        <div class="top md:mb-24 mb-12">
            <div class="flex md:flex-row flex-col justify-between md:items-center items-start">
                <a href="/en">
                    <img class="logo" src="/images/logowhite.svg" alt="">
                </a>
                <ul class="flex md:flex-row flex-col">
                    <li>
                        <a class="link" href="/en/about">About us</a>
                    </li>
                    <li>
                        <a class="link" href="/en/about#forwardthinking">Investments</a>
                    </li>
                    <li>
                        <a class="link" href="/en/exits">Success stories</a>
                    </li>
                    <li>
                        <a class="link" href="/en/contacts">Contact us</a>
                    </li>
                    <li>
                        <a class="link" href="/en/privacy">Privacy policy</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="flex justify-between items-center">
                <div class="w-6/12">
                    <p>© 2021. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    .cta {
      background: var(--blue-color);
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0B3954;
        opacity: 3%;
      }
    }

    .footer {
      background: var(--darkblue-color);
      padding: 55px 0 36px 0;

      * {
        color: var(--white-color);
      }

    }

    .logo {
      max-width: 183px;
    }

    ul {
      gap: 34px;
      @media (max-width: 768px) {
        gap: 24px;
        margin-top: 50px;
      }
      li {
        a {
          color: var(--white-color);
        }
      }
    }
</style>