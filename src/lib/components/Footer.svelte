<script>
    import Button from '$lib/components/Button.svelte';
</script>

<div class="cta">
    <div class="container mx-auto">
        <div class="top py-24">
            <div class="w-full flex">
                <div class="w-6/12">
                    <h2 class="mb-5">Experience the Power of
                        Strategic Investing</h2>
                    <p>Contact us today to learn more about how we can help you maximize your investment potential.</p>
                </div>
                <div class="w-2/12"></div>
                <div class="w-3/12 flex justify-center items-center">
                    <Button href="https://example.com">
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
        <div class="top mb-24">
            <div class="flex justify-between items-center">
                <img class="logo" src="/images/logowhite.svg" alt="">
                <ul class="flex">
                    <li>
                        <a href="">About us</a>
                    </li>
                    <li>
                        <a href="">Investments</a>
                    </li>
                    <li>
                        <a href="">Exits</a>
                    </li>
                    <li>
                        <a href="">Contact us</a>
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
      li {
        a {
          color: var(--white-color);
        }
      }
    }
</style>