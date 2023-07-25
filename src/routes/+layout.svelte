<script>
    import "../app.css";
    import './style.scss'

    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'

    import Lenis from '@studio-freight/lenis'


    import { onMount } from 'svelte';

    onMount(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {

        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    });
</script>

<Header
    />

<slot />

<Footer
    />

<style>
    html.lenis {
        height: auto;
    }

    .lenis.lenis-smooth {
        scroll-behavior: auto;
    }

    .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
    }

    .lenis.lenis-stopped {
        overflow: hidden;
    }

    .lenis.lenis-scrolling iframe {
        pointer-events: none;
    }
</style>