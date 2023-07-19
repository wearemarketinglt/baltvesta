<script>
    import "../app.css";
    import './style.scss'

    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'


    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let textareaValue = '';
    let previewValue = '';

    function applyLineBreaks() {
        const strRawValue = textareaValue;
        let formattedValue = '';
        const lines = strRawValue.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            formattedValue += line;
            if (i !== lines.length - 1) {
                if (line !== '') {
                    formattedValue += '<br />';
                }
            }
        }

        previewValue = formattedValue;
        dispatch('previewUpdated', formattedValue);
    }

    onMount(() => {
        applyLineBreaks();
    });
</script>

<Header
    />

<slot />

<Footer
    />