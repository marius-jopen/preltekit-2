<script>
    import '../app.css';
    import { page } from '$app/stores'
    import Bounded from '$lib/components/Bounded.svelte';
    import { PrismicImage } from '@prismicio/svelte';
    import PrismicRichText from '$lib/components/PrismicRichText.svelte';
</script>

<Bounded as="section" class="bg-white leading-relaxed text-center">
    <div class="flex justify-center">
        <PrismicImage field={$page.data.settings.data.error_image} sizes="10vw" class="w-1/4" />
    </div>

    <div class="pt-4">
        {$page.status} Error
    </div>

    <div>
        <PrismicRichText field={$page.data.settings.data.error_message} />
    </div>

</Bounded>