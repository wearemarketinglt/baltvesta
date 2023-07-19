<script>
    import {onMount} from 'svelte';

    onMount(() => {
        const header = document.getElementById('header');
        window.addEventListener('scroll', function () {
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            if (scroll >= 1) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        if (window.pageYOffset >= 1) {
            header.classList.add('scrolled');
        }
    });
</script>

<header id="header" class="header">
    <div class="container mx-auto">
        <div class="flex justify-between items-center">
            <a href="/"><img class="logo" src="/images/logo.svg" alt=""></a>
            <ul class="flex">
                <li>
                    <a href="/about">About us</a>
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
</header>

<style lang="scss">


  .header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    padding-top: 25px;
    transition: var(--tr-all);

    &
    .logo {
      max-width: 183px;
    }

    ul {
      gap: 34px;
    }
    &:global(.scrolled) {
      padding-top: 13.5px;
      padding-bottom: 13.5px;
      background: var(--blue-color);
    }
  }




</style>