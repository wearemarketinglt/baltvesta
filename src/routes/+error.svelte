<script>
    import {i} from "@inlang/sdk-js";
    import "../app.css";
    import './style.scss';
    import Button from "$lib/components/Button.svelte";
</script>

<main class="page-error">
    <section class="error404 min-h-screen flex items-center">
        <div class="container mx-auto">
            <div class="flex md:flex-row flex-col 2xl:pt-48 md:pt-32 md:pb-48 pt-24 pb-24 relative">
                <div class="md:w-5/12 w-12/12 md:mb-0 mb-12 px-3 relative">
                    <div class="logo max-w-[188px] mb-[100px]">
                        <a href="/en"><img class="logo" src="/images/logo.svg" alt=""></a>
                    </div>
                    <div class="title">
                        <h1 class="mb-[23px]">404</h1>
                    </div>
                    <div class="text mb-[23px]">
                        <p>Oops! The page you're looking for couldn't be found.</p>
                    </div>
                    <Button href="/">
                        Go to home page
                    </Button>
                </div>
                <div class="w-1/12 px-3"></div>
                <div class="md:w-6/12 w-12/12 px-3 relative">
                    <div class="image-container-wrap  relative">
                        <div class="image-wrap h-[450px] overflow-hidden rounded-[10px]">
                            <img class="h-full relative z-[2] object-fit-cover object-top" src="/images/error.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style lang="scss">

  .page-error {
    background: var(--blue-color);
  }

  .image-container-wrap:before {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    width: 100%;
    height: 100%;
    background: var(--darkblue-color);
    border-radius: 10px;
    z-index: 1;
  }

</style>