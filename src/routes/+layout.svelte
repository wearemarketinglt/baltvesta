<script>
    import "../app.css";
    import './style.scss';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import { initializeLeis } from '$lib/animations';

    import { onMount } from 'svelte';

    onMount(() => {
        initializeLeis();
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